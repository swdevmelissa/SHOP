const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img alt="mastercard" src="images/footerLogo/MasterCard_Logo.png" />
        </div>
        <div className="card-name">
          <img alt="visa" src="images/footerLogo/Visa_Logo.png" />
        </div>
        <div className="card-name">
          <img alt="paypal" src="images/footerLogo/Paypal_Logo.png" />
        </div>
        <div className="card-name">
          <img alt="express" src="images/footerLogo/AmericanExpress_Logo.png" />
        </div>
      </div>
      <div className="justify-content-center d-flex">
        <p className="name">Copyright &copy; YourShop</p>
      </div>
    </div>
  );
};

export default Footer;
