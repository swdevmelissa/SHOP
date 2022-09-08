const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className=" fas fa-phone-alt"></i>
            </div>
            <h5> Contact Us antytime 24/7</h5>
            <p> phone: 355 69 447 3303</p>
            <p> email: info@electronic-shop.com</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Headquarter</h5>
            <p>Kullat Binjake, Tirane, Albania</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>Desk-Phone</h5>
            <p>736 23063</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
