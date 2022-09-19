const ProfileInfo = () => {
  return (
    <div>
      <form className="row form-container">
        <div className="col-md-6">
          <div className="form">
            <label for="account-fn">Username</label>
            <input
              id="account-fn"
              className="form-control"
              type="text"
              required
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label for="account-email">Email Address</label>
            <input
              id="account-email"
              className="form-control"
              type="email"
              required
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label for="account-pass">Password</label>
            <input
              id="account-pass"
              className="form-control"
              type="password"
              required
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label for="account-confirm-pass">Confirm Password</label>
            <input
              id="account-confirm-pass"
              className="form-control"
              type="password"
              required
            />
          </div>
        </div>

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileInfo;
