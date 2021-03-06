//import { Link } from "react-router-dom";
import Styles from "./styles/navbar.module.css";
import Logo from "../assets/holyways-icon.svg";

function Navbar() {
  return (
    <div className={Styles.header}>
      <div>
        <img src={Logo} alt="Logo Holyways" />
      </div>
      <button>Login</button>
      <button>Register</button>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/raise-fund">Campaign</Link>
        </li>
        <li>
          <Link to="/form-fund">Form</Link>
        </li>
        <li>
          <Link to="/donation-detail">Donation</Link>
        </li>
        <li>
          <Link to="/view-fund">View</Link>
        </li>
        <li>
          <Link to="/error">Error</Link>
        </li>
      </ul> */}
    </div>
  );
}

export default Navbar;
