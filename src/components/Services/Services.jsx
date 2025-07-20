import banner from "../../assets/images/servicesImage.png";
import web from "../../assets/images/wDesign.svg";
import database from "../../assets/images/dbDesign.svg";
import software from "../../assets/images/sDesign.svg";

const Services = () => {
  return (
    <div>
      <div
        className="relative text-center md:text-left h-screen bg-cover bg-[75%] md:bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-4 md:inset-20 flex flex-col justify-end md:justify-center items-start">
          <h1 className="text-white self-center md:self-auto text-[34px] md:text-[37px] leading-[41.15px] md:leading-[44.78px] font-bold mb-2">
            ZELIE GENIE
          </h1>
          <p className="text-white self-center md:self-auto text-[17px] md:text-[22px] leading-[20.57px] md:leading-[26.63px] mb-8 max-w-[483px]">
            The ZELIE GENIE is here and you have three wishes, what will they
            be? Just kidding, you have no limited amount of wishes. We all have
            dreams we want to become a reality. Here at ZELIE TECH we will do
            our best to make that idea or dream become a reality no matter how
            absurd it sounds. Make a wish to to the ZELIE GENIE and let’s get
            started!
          </p>
        </div>
      </div>
      <div className="bg-black text-white text-center py-10 flex flex-col gap-10">
        <div>
          <h2 className="font-bold text-[26.44px] md:text-[36px] leading-[32px] md:leading-[43.57px]">
            Make A Wish
          </h2>
          <p className="text-[19.72px] md:text-[29px] leading-[23.87px] md:leading-[35.1px]">
            Select one or more...
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 text-[24px] leading-[29.05px]">
          <div className="flex flex-col gap-3 items-center">
            <div className="bg-[#F4F4F4] border-8 border-[#470258] w-[135px] md:w-60 h-[135px] md:h-60 rounded-full flex items-center justify-center">
              <img src={web} alt="Web design and Management" />
            </div>
            <p className="text-[14.86px] max-w-[137.48px] md:max-w-[218px] md:text-[24px] leading-[17.99px] md:leading-[29.05px]">
              Web design and Management
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div className="bg-[#F4F4F4] border-8 border-[#470258] w-[135px] md:w-60 h-[135px] md:h-60 rounded-full flex items-center justify-center">
              <img src={database} alt="Database design and Management" />
            </div>
            <p className="text-[14.86px] max-w-[137.48px] md:max-w-[218px] md:text-[24px] leading-[17.99px] md:leading-[29.05px]">
              Database design and Management
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center col-span-2 sm:col-span-1">
            <div className="bg-[#F4F4F4] border-8 border-[#F4F4F4] w-[135px] md:w-60 h-[135px] md:h-60 rounded-full flex items-center justify-center">
              <img src={software} alt="Software Development" />
            </div>
            <p className="text-[14.86px] max-w-[137.48px] md:max-w-[218px] md:text-[24px] leading-[17.99px] md:leading-[29.05px]">
              Software Development
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={() => {}}
            className="text-black rounded-[24.04px] md:rounded-[30px] text-[19.23px] md:text-[24px] leading-[23.28px] md:leading-[29.05px] h-[48.89px] md:h-[61px] w-[222px] md:w-[277px] bg-white hover:bg-black hover:text-white hover:border-white hover:border-2 font-bold mb-28 md:mb-0"
          >
            Wish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
