import Header from "../components/Header";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="alert alert-info text-center mt-3">
          Total Products (2)
        </div>
        {/*cart items */}
        <div className="cart-item row">
          <div className="remove-button d-flex justify-content-center align-items-center">
            <i className="fas fa-times"></i>
          </div>
          <div className="cart-image col-md-3">
            <img src="/images/productsImg/appleWatch.jpg" alt="appleWatch" />
          </div>
          <div className="cart-text col-md-5 d-flex align-items-center">
            <Link to="#">
              <h4>Apple Watch Seria 8</h4>
            </Link>
          </div>
          <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex justify-content-center flex-column">
            <h6>QUANTITY</h6>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div className="cart-price mt-3 mt-md-0 align-items-sm-end align-items-start col-md-2 flex-column justify-content-center col-sm-7 d-flex">
            <h6>SUBTOTAL</h6>
            <h4>$545</h4>
          </div>
        </div>
        {/*cart items end */}

        <div className="total">
          <span className="sub">Total:</span>
          <span className="total-price">$670</span>
        </div>
        <hr />
        <div className="cart-buttons align-items-center d-flex row">
          <Link to="/" className="col-md-6">
            <button>Continue Shopping</button>
          </Link>
          <div className="col-md-6 justify-content-md-end mt-3 d-flex mt-md-0">
            <button>
              <Link to="/shipping" className="text-white">
                Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
