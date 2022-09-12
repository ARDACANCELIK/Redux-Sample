import Navbar from "./components/Navbar";
//9
import CartContainer from "./components/CartContainer";

//24
import { useDispatch, useSelector } from "react-redux";
//44 - add getCartItems
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
//end of 24

//27
import Modal from "./components/Modal";
//end of //27 -
function App() {
  //25 ardından modal'a git- //45 check for isloading add it here
  const { cartItems,isLoading } = useSelector((store) => store.cart); // çünkü store.js de yarattığımız anahtar ismi
  //cart: cartReducer, //key bu   cart items ise property in initial state
  //32
  const { isOpen } = useSelector((store) => store.modal);
  //end of 32

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  //46 set up different useefect
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  if (isLoading){
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  
  //end of 46 


  return (
    <main>
      {/* //28  end then go and create another slice this time for Modal  - //33 ise conditional render getiriyor sadece open olduğu zaman if it is true only then display modal ardından neden clear cart tuşuna bastığımızda modal çıkmıyor ki diye sormalıyız . cart containera git  */}
      {isOpen && <Modal />}

      <Navbar />
      {/* //10 */}
      <CartContainer />
    </main>
  );
}
//end of 25 -ardından modal yaratıyoruz başka bir slice yani bölüm cartslice gibi başka bir component  başta modal js  dosyası ve fonks. ardından import it to app js
export default App;
