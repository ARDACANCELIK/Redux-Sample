//6
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  // console.log(useSelector((store)=>{console.log(store);})); //genelde tüm cartı return yapmak mantıklı ardından destructure it aşağıda amounta access yapıyoruz
  // const amount= useSelector((store)=>store.cart.amount)  or 
  const { amount } = useSelector((store) => store.cart); // accessing all out store here
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Example - Arda Celik</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// end of 6
