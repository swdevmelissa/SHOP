import Header from "../components/Header";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Header />
      <div>
        <form>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password"/>
    
          <button type="submit"> Register</button>
          <p>
            <Link to={"/login"} >
             I Have an account <strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};




export default Register;
