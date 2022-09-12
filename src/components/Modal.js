//26

//37
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

//end of 37
const Modal = () => {
  //38
  const dispatch = useDispatch();
  //end of 38
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart ?</h4>
        <div className="btn-container">
          {/* //39 onclick ardından asyncthunk için cartslice js e git  */}
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;

//end of //26 -then go to App js
