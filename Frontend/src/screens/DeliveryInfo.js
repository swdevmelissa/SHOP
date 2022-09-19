import { Link } from "react-router-dom";

const DeliveryInfo = () => {
  const submitHandler = (event) => {
    event.preventDeafault();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center login-center">
      <form className="login col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
        <h6> DELIVERY INFORMATION</h6>
        <input type="text" placeholder="Enter address" />
        <input type="text" placeholder="Enter city" />
        <input type="text" placeholder="Enter postal code" />
        <input type="text" placeholder="Enter country" />
        <button type="submit">
          <Link to="/payment" className="text-white">
            Continue
          </Link>
        </button>
      </form>
    </div>
  );
};

export default DeliveryInfo;
