import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

const NavBar = () => {
  return (
    <nav
      className="mx-auto hidden lg:flex justify-start bg-black text-white"
      aria-label="Main Navigation"
    >
      <span className="flex items-center gap-1 font-bold ml-16 text-xl text-blue-200">
        <img src={Logo} alt="Zelie Logo" className="w-[40%] p-2" />
        ZELIE
      </span>
      <ul className="flex self-center space-x-3">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
