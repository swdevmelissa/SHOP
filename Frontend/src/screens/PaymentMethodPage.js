import { Link } from "react-router-dom";

const PaymentMethodPage = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center login-center">
      <form
        className="login2 col-md-8 col-lg-4 col-11"
        onSubmit={submitHandler}
      >
        <h6>SELECT PAYMENT METHOD</h6>
        <div className="payment-container">
          <div className="radio-container">
            <input className="form-check-input" type="radio" value="PayPal" />
            <label className="form-check-label">PayPal</label>
            <hr />
            <input className="form-check-input" type="radio" value="Credit" />
            <label className="form-check-label">Credit Card</label>
          </div>
        </div>

        <button type="submit">
          <Link to="/placeorder" className="text-white">
            Continue
          </Link>
        </button>
      </form>
    </div>
  );
};

export default PaymentMethodPage;
