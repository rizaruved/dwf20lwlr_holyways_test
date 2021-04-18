ulimport React from 'React';
im<li><Link to="/">Home</Link></li>port { Link } from 'react-router-dom';

function Navbar() {
    return (
        <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/profile">Profile</Link></li>
           <li><Link to="/raise-fund">Campaign</Link></li>
           <li><Link to="/form-fund">Form</Link></li>
           <li><Link to="/donation-detail">Donation</Link></li>
           <li><Link to="/view-fund">View</Link></li>
           <li><Link to="">Error</Link></li>
        </ul>
    )
}

export default Navbar
