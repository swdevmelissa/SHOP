import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center login-center">
      <form className="login col-md-8 col-lg-4 col-11">
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button type="submit"> Register</button>
        <p>
          <Link to={"/login"}>
            I Have an account <strong>LOGIN</strong>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
