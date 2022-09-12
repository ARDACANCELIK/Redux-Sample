//7
import { ChevronDown, ChevronUp } from "../icons";
//16 - import removeitem  --   //21 (import increase ve decrease)
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
//end of 16

const CartItem = ({ id, img, title, price, amount }) => {
  //17
  const dispatch = useDispatch();
  //end of 17
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* //18 everytime we click on a button we remove specific button  onclick geldi */}
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        {/* //22 increase ve decrease   onclick ekle ayrıca decreasee ekstra görev sıfır altı .   */}
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));

              return; //because we dont want to continue reading the code related to this function  continues with below emir  together o yüzden görevi sınırlı tutuup burada kes diyor
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
