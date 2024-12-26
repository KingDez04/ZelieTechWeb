import banner from "../../assets/images/homeImage.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-20 flex flex-col justify-center items-start">
          <h1 className="text-white text-[37px] leading-[44.78px] font-bold mb-2">
            ZELIE TECH
          </h1>
          <p className="text-white text-lg md:text-[22px] leading-[26.63px] mb-8 max-w-[483px]">
            We all have dreams we want to see become a reality. Here at ZELIE
            TECH. We will do our best to make that idea or dream become a
            reality no matter how absurd it sounds.
          </p>
          <button
            onClick={() => {}}
            className="text-white rounded-[30px] text-[24px] leading-[29.05px] h-[61px] w-[277px] bg-[#470258] hover:bg-[#150258] font-bold"
          >
            Make A Wish
          </button>
        </div>
      </div>
      <div className="text-center py-10 flex flex-col gap-5">
        <h2 className="font-bold text-[36px] leading-[43.57px]">About Us</h2>
        <p className="text-[27px] leading-[32.68px] font-[500px]">
          Here at Zelie Tech, our goal is to deliver innovation tech and
          software solutions that break barriers and redefine the words
          “IMPOSSIBLE”.
        </p>
        <div>
          <button
            onClick={() => navigate("/services")}
            className="text-white rounded-[30px] text-[24px] leading-[29.05px] h-[61px] w-[277px] bg-[#470258] hover:bg-[#150258] font-bold"
          >
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
