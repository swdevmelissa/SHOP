const GetInTouchForm = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2> Do you need more tips?</h2>
              <p> Get in touch with us and get the latest tips.</p>
              <form className="form-section">
                <input type="email" name="email" placeholder="Your Email.." />
                <input type="submit" name="subscribe" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchForm;
