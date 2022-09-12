//8

import CartItem from "./CartItem";
//12 - add use dispatch and import clearcart
import { useDispatch, useSelector } from "react-redux";
//35 -uncomment yaptık //  import { clearCart } from "../features/cart/cartSlice";
//34 
import { openModal } from "../features/modal/modalSlice";
//böylece clear cartta da ihtiyacımız yok burada
//end of 34 
const CartContainer = () => {
  //13 -
  const dispatch = useDispatch();
  //end of 13
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total<span>${total.toFixed(2)}</span>
          </h4>
        </div>
        {/* //14  */}
        {/* <button className="btn clear-btn" onClick={() => dispatch(clearCart())}> */}
        {/* //36 clear cart değişip yerine openmodal geliyor- then go to modal js  */}
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
// end of 8
