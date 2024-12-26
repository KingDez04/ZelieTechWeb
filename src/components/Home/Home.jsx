import banner from "../../assets/images/homeImage.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="relative text-center md:text-left h-screen bg-cover bg-right md:bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-4 md:inset-20 flex flex-col justify-end md:justify-center items-start">
          <h1 className="text-white self-center md:self-auto text-[34px] md:text-[37px] leading-[41.15px] md:leading-[44.78px] font-bold mb-2">
            ZELIE TECH
          </h1>
          <p className="text-white self-center md:self-auto text-[17px] md:text-[22px] leading-[20.57px] md:leading-[26.63px] mb-8 max-w-[483px]">
            We all have dreams we want to see become a reality. Here at ZELIE
            TECH. We will do our best to make that idea or dream become a
            reality no matter how absurd it sounds.
          </p>
          <button
            onClick={() => {}}
            className="text-white self-center md:self-auto rounded-[24.04px] md:rounded-[30px] text-[19.23px] md:text-[24px] leading-[23.28px] md:leading-[29.05px] h-[48.89px] md:h-[61px] w-[222px] md:w-[277px] bg-[#470258] hover:bg-[#150258] font-bold"
          >
            Make A Wish
          </button>
        </div>
      </div>
      <div className="text-center py-10 flex flex-col gap-5">
        <h2 className="font-bold text-[31px] md:text-[36px] leading-[37.52px] md:leading-[43.57px]">
          About Us
        </h2>
        <p className="text-[17px] md:text-[27px] leading-[20.57px] md:leading-[32.68px] font-[500px]">
          Here at Zelie Tech, our goal is to deliver innovation tech and
          software solutions that break barriers and redefine the words
          “IMPOSSIBLE”.
        </p>
        <div>
          <button
            onClick={() => navigate("/services")}
            className="text-white rounded-[24.04px] md:rounded-[30px] text-[19.23px] md:text-[24px] leading-[23.28px] md:leading-[29.05px] h-[48.89px] md:h-[61px] w-[222px] md:w-[277px] bg-[#470258] hover:bg-[#150258] font-bold"
          >
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
