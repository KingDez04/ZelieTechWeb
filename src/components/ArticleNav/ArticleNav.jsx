import { FiCornerDownLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

const ArticleNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="relative z-50 block bg-black px-5">
      <div className="flex items-center justify-between w-full">
        <span className="flex items-center gap-1 font-bold text-xl text-blue-200 mx-auto md:mx-0">
          <img src={Logo} alt="Zelie Logo" className="w-[40%] p-2" /> ZELIE
        </span>
        <div
          onClick={() => navigate(-1)}
          className="cursor-pointer z-50 text-white"
        >
          <FiCornerDownLeft
            className="text-blue-600 hover:text-blue-400"
            size={35}
          />
        </div>
      </div>
    </nav>
  );
};

export default ArticleNav;
