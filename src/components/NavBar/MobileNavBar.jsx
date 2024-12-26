import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

const MobileNavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  const handleCloseNav = () => {
    setNav(false);
  };

  return (
    <nav className="relative z-50 block bg-black lg:hidden px-5">
      <div className="flex items-center justify-between w-full">
        <span className="flex items-center gap-1 font-bold text-xl text-blue-200 mx-auto">
          <img src={Logo} alt="Zelie Logo" className="w-[40%] p-2" /> ZELIE
        </span>
        {!nav && (
          <div onClick={handleNav} className="cursor-pointer z-50 text-white">
            <AiOutlineMenu size={35} />
          </div>
        )}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[50%] h-full bg-black ease-in-out duration-500 z-40"
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
        <ul className="px-2 pt-[2rem] text-center text-white text-[20px]">
          <li className="py-5 px-4 hover:bg-[#909090] hover:text-black rounded-sm">
            <Link to="/" onClick={handleCloseNav}>
              Home
            </Link>
          </li>
          <li className="py-5 px-4 hover:bg-[#909090] hover:text-black rounded-sm">
            <Link to="/services" onClick={handleCloseNav}>
              Services
            </Link>
          </li>
          <li className="py-5 px-4 hover:bg-[#909090] hover:text-black rounded-sm">
            <Link to="/contact" onClick={handleCloseNav}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavBar;
