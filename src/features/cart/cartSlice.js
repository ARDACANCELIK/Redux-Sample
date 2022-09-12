//3 - sonra geri store a git - //40 create async thunk
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
//41
const url = "https://course-api.com/react-useReducer-cart-project";
//end of 41

const initialState = {
  //cartItems: cartItems, // 47 bunu boş array yapıp asyncronus data alımı ile load sonrası data alıyorsun o yüzden boş array yapsanda olur
  cartItems: [], // 47 boş array oldu ve  tüm çalışma bitti  THE END- 
  amount: 2,
  total: 0,
  isLoading: true,
};

//42 -action ve callback function
export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});
//end of 42
const cartSlice = createSlice({
  name: "cart",
  initialState,
  //11
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      //burası tamamen değerleri değiştirdiğin yer  usestate teki set state gibi düşün  diyelimki burada   !!!dikkat      return {}  !!! //dedin bu tamamen curly içine ne yazdığınla alakalı initial state içindekiler kayboluyor curly içine ne yazdıysan o kalıyor.yazmadığın siliniyor örnek return {cartItems:[]}
    },
    //15 - tüm bu değerlere cart item içinde ulaşmak istiyorum
    //cart itema gidip buna access olmaya çalış
    removeItem: (state, action) => {
      // console.log(action);
      //19
      const itemId = action.payload;
      //now setting up new value for state.cartItems uymayan id kalıyor uyan id remove oluyor
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      //end of 19
    },
    //20- increase ve decrease, hemen payload kısmını destructure yaptı geleneksel action.payload yazımı yerine , find ile eşleşeni bulup artırıyor sonra
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
      //amountu yukarıdaki amount ile karıştırma initial stateteki yekun amount, bu ise bireysel ürün amount
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    //end of 20  ardından cartitema git
    //23
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount; // x += y // x = x + y
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    //end of 23 - then navigate to app js
  },
  //43 reducersdan sonra buraya extra reducers
  extraReducers: {
    //every function that we create we will get lifecyle action
    // pending,rejected.fulfilledolacak bizim için şu anda getcart items var sadece
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      //console.log(action);
      state.isLoading = false; //when we have the data the loading will be false
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
  //end of 43 - then go to app js  zaten export yaptık bu functionu  and when we go to app js we want to grap this function and invoke it useeffect once application loads
});
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions; //from this object we export this and we use it in cart container component orda invoke edeceğiz-end of  11 go to cart container

//console.log(cartSlice);
export default cartSlice.reducer;
