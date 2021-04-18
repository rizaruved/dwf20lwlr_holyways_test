import { Link } from "react-router-dom";
import Styles from "./styles/navbar.module.css";
import from "react"

function Navbar() {
  return (
    <ul>
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
    </ul>
  );
}

export default Navbar;
