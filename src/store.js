//1 - ardından index js e git
import { configureStore } from "@reduxjs/toolkit";

//4
// import "./features/cart/cartSlice";
import cartReducer from "./features/cart/cartSlice";
//end of 4
//30
import modalReducer from "./features/modal/modalSlice";
//end of //30
export const store = configureStore({
  reducer: {
    //5- after this we should access data
    cart: cartReducer, //key bu - navbar js e git
    //31
    modal: modalReducer,
    //end of 31- then go to App.js to access modal
  },
});
//end of 1

//Onemli Notlar: İlk önce  storeu oluşturuyorsun  ve reducer ile  cart:cartReducer yarattın
// sonra slice denilen şey yanı componant ile Cart Slice yani cart component oluşturuyorsun orada başlangıç değerleri var initial state ile cartSlice = createSlice ise asıl eylemin ve komutların döndüğü yer oradaki reducerlar tüm eylemlerin planlandığı datanın geçtiği yer örnek state.cartItems ile tüm değerleri değiştirip yeni değer veriyorsun  sonra yarattığın fonksiyonu (örnek arttırma yahut remove item eylemini) kullanmak için ilgili yere gidiyorsun  başa  const dispatch = useDispatch() yazıyorsun
// sonra buton içine onClick={() => dispatch(removeItem(id))}> gibi eylemi harekete geçiriyorsun yayrıca  const { cartItems, total, amount } = useSelector((store) => store.cart); olduğu gibi use selector ile tüm başlangıç data kartına laşup  destructure yapıp değer alabililiyorsun

// Modal slice da aynısı ilke önce  store içine  reducer kısmında modalı tanımladın ardından modalslice.js kısmında modal componentı oluşturuyor ve export ediyorsun(export const { openModal, closeModal } = modalSlice.actions;

// export default modalSlice.reducer;) öenmli olan şey  ilk önce modalslice içinde  başlangıç değerlerini initial state'i tanımlayıp create slice component oluşturmak ile yapmak isteğin eylemleri yazıyorsun sonra da oluşturduğun eylemleri gerekli yerde kullanmak için
// const dispatch = useDispatch(); tanımlayıp  dispatch(closeModal()); ile eylemi kullanıyorsun
