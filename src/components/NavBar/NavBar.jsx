import { useState, useEffect, useRef } from "react";
import { CgClose } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const dropdownRef = useRef(null);

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  const handleCloseNav = () => {
    setNav(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target.closest(".dropdown-toggle") === null
      ) {
        setNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative z-50 block bg-black px-5">
      <div className="flex items-center justify-between w-full">
        <span className="flex items-center gap-1 font-bold text-xl text-blue-200 mx-auto md:mx-0">
          <img src={Logo} alt="Zelie Logo" className="w-[40%] p-2" /> ZELIE
        </span>
        {!nav && (
          <div
            onClick={handleNav}
            className="cursor-pointer z-50 text-white dropdown-toggle"
          >
            <AiOutlineMenu size={35} />
          </div>
        )}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[50%] md:w-[25%] h-full bg-black ease-in-out duration-500 z-40"
            : "fixed top-0 left-[-100%] h-full ease-in-out duration-500"
        }
      >
        <div className="flex justify-end px-4 pt-9">
          <CgClose
            size={35}
            className="cursor-pointer text-white z-50"
            onClick={handleNav}
          />
        </div>

        <div className="flex justify-center mt-14">
          <span className="flex items-center gap-1 font-bold text-xl text-blue-200">
            <img src={Logo} alt="Zelie Logo" className="w-[40%] p-2" />
            ZELIE
          </span>
        </div>
        <ul
          ref={dropdownRef}
          className="px-2 pt-[2rem] text-center text-white text-[20px]"
        >
          <Link to="/" onClick={handleCloseNav}>
            <li className="py-5 px-4 hover:bg-[#909090] hover:text-black rounded-sm">
              Home
            </li>
          </Link>
          <Link to="/services" onClick={handleCloseNav}>
            <li className="py-5 px-4 hover:bg-[#909090] hover:text-black rounded-sm">
              Services
            </li>
          </Link>
          <Link to="/projects" onClick={handleCloseNav}>
            <li className="py-5 px-4 hover:bg-[#909090] hover:text-black rounded-sm">
              Projects
            </li>
          </Link>
          <Link to="/insights" onClick={handleCloseNav}>
            <li className="py-5 px-4 hover:bg-[#909090] hover:text-black rounded-sm">
              Blog/Insights
            </li>
          </Link>
          <Link to="/launch" onClick={handleCloseNav}>
            <li className="py-5 px-4 hover:bg-[#909090] hover:text-black rounded-sm">
              Launch 2025
            </li>
          </Link>
          <Link to="/join-us" onClick={handleCloseNav}>
            <li className="py-5 px-4 hover:bg-[#909090] hover:text-black rounded-sm">
              Join Us
            </li>
          </Link>
          <Link to="/contact" onClick={handleCloseNav}>
            <li className="py-5 px-4 hover:bg-[#909090] hover:text-black rounded-sm">
              Contact Us
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
