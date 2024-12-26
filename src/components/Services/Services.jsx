import banner from "../../assets/images/servicesImage.png";
import web from "../../assets/images/wDesign.svg";
import database from "../../assets/images/dbDesign.svg";
import software from "../../assets/images/sDesign.svg";

const Services = () => {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-20 flex flex-col justify-center items-start">
          <h1 className="text-white text-[37px] leading-[44.78px] md:text-6xl font-bold mb-4">
            ZELIE GENIE
          </h1>
          <p className="text-white text-lg md:text-[22px] leading-[26.63px] mb-8 max-w-[483px]">
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
          <h2 className="font-bold text-[36px] leading-[43.57px]">
            Make A Wish
          </h2>
          <p className="text-[29px] leading-[35.1px]">Select one or more...</p>
        </div>
        <div className="grid sm:grid-cols-3 mx-24 md:mx-36 gap-10 text-[24px] leading-[29.05px]">
          <div>
            <div className="bg-[#F4F4F4] border-8 border-[#470258] w-60 h-60 rounded-full flex items-center justify-center">
              <img
                src={web}
                alt="Web design and Management"
              />
            </div>
            <p>Web design and Management</p>
          </div>
          <div>
            <div className="bg-[#F4F4F4] border-8 border-[#470258] w-60 h-60 rounded-full flex items-center justify-center">
              <img
                src={database}
                alt="Database design and Management"
              />
            </div>
            <p>Database design and Management</p>
          </div>
          <div>
            <div className="bg-[#F4F4F4] border-8 border-[#F4F4F4] w-60 h-60 rounded-full flex items-center justify-center">
              <img
                src={software}
                alt="Software Development"
              />
            </div>
            <p>Software Development</p>
          </div>
        </div>
        <div>
          <button
            onClick={() => {}}
            className="text-black rounded-[30px] text-[24px] leading-[29.05px] h-[61px] w-[277px] bg-white hover:bg-black hover:text-white hover:border-white hover:border-2 font-bold"
          >
            Wish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
