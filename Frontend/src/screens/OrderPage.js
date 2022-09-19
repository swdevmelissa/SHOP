import { PayPalButton } from "react-paypal-button-v2";

const OrderPage = () => {
  return (
    <div className="col-12">
      <PayPalButton amount={560} />
    </div>
  );
};

export default OrderPage;
