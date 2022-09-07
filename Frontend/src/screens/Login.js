import Header from "../components/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Header />
      <div>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>

          <div> New costumer? 
            <p>
            <Link to={"/register"}> Create Account</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
