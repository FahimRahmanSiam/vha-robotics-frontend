import { NavLink } from "react-router";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink className="logo" to="/">
        <img src={logo} alt="School Robotics Logo" />
        <span>VHA CS & Robotics</span>
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/journey">Our Journey</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;