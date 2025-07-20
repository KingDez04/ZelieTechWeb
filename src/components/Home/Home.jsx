import { useNavigate } from "react-router-dom";
import banner from "../../assets/images/homeImage.png";
import group1 from "../../assets/images/group1.png";
import africa from "../../assets/images/africa.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="relative text-center md:text-left h-screen bg-cover bg-[70%] md:bg-center"
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
            onClick={() => navigate("/contact")}
            className="text-white self-center md:self-auto rounded-[24.04px] md:rounded-[30px] text-[19.23px] md:text-[24px] leading-[23.28px] md:leading-[29.05px] h-[48.89px] md:h-[61px] w-[222px] md:w-[277px] bg-[#470258] hover:bg-[#150258] font-bold"
          >
            Make A Wish
          </button>
        </div>
      </div>
      <div className="py-10 flex flex-col gap-5 max-w-[341px] md:max-w-[944px] mx-auto">
        <h2 className="font-bold text-[36px] text-center md:text-left text-[#686868] leading-[37.52px] md:leading-[43.57px]">
          About Zelie
        </h2>
        <p className="text-[20px] md:text-[35px] text-center md:text-left font-bold leading-[20.57px] md:leading-[32.68px]">
          We’re not waiting for the future — we’re building it.
        </p>
        <div className="font-light flex gap-5 text-[14px] md:text-[27px] leading-[100%]">
          <div className="min-w-[155px] min-h-[139px] max-w-[155px] max-h-[139px] md:min-w-[489px] md:min-h-[390px] md:max-w-[489px] md:max-h-[390px] bg-[#D9D9D9]">
            <img
              src={group1}
              alt="group photo of all members"
              className="w-[155px] h-[139px] md:w-[489px] md:h-[390px]"
            />
          </div>
          <p>
            Zelie Tech is a Nigerian-born tech company led by a bold team of
            young innovators who believe in creating world-class digital
            experiences from Africa, for the world. From custom software to
            disruptive solutions, we design, develop, and deliver with purpose.
          </p>
        </div>
        <div className="font-light flex gap-5 text-[14px] md:text-[27px] leading-[100%]">
          <div className="min-w-[155px] min-h-[139px] max-w-[155px] max-h-[139px] md:min-w-[489px] md:min-h-[390px] md:max-w-[489px] md:max-h-[390px] bg-[#D9D9D9]">
            <img
              src={africa}
              alt="map of africa"
              className="w-[155px] h-[139px] md:w-[489px] md:h-[390px]"
            />
          </div>
          <p>
            We’re passionate about one thing: independent tech power in Africa —
            where ideas aren’t just launched, they’re celebrated.
          </p>
        </div>
        <div className="font-light flex flex-col gap-5 text-[14px] md:text-[27px] leading-[100%]">
          <p>
            Whether it’s a groundbreaking app, a digital transformation project,
            or an experience that brings people together, Zelie Tech shows up
            differently.
          </p>
          <p>
            We don’t just follow trends — we create the moments everyone talks
            about.
          </p>
        </div>
        <div className="flex items-center justify-center mb-10">
          <button
            onClick={() => navigate("/services")}
            className="text-white rounded-[24.04px] md:rounded-[30px] text-[19.23px] md:text-[24px] leading-[23.28px] md:leading-[29.05px] h-[48.89px] md:h-[61px] w-[222px] md:w-[277px] bg-[#470258] hover:bg-[#150258] font-bold"
          >
            Our Services
          </button>
        </div>
        <div className="text-center font-medium text-[13px] md:text-[27px]">
          📍 Based in Nigeria | 🌍 Driven by Vision | 🔥 Focused on Impact
        </div>
      </div>
    </div>
  );
};

export default Home;
