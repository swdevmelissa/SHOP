import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container flex-column d-flex justify-content-center align-items-center login-center">
      <form className="login col-md-8 col-lg-4 col-11">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>

        <p>
          <Link to={"/register"}> Create Account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
