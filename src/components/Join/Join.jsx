import { Link } from "react-router-dom";
import banner from "../../assets/images/JoinDesign.png";

const Join = () => {
  return (
    <div>
      <div
        className="relative text-left h-[654px] md:h-screen bg-cover bg-center md:bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-4 md:inset-20 flex flex-col justify-start md:justify-center items-start">
          <h1 className="text-[#EDD8FF] self-auto text-[48px] md:text-[128px] font-extrabold mb-2 max-w-[102px] md:max-w-[271px]">
            Join Us
          </h1>
          <p className="text-[#EDD8FF] self-auto text-[20px] md:text-[27px] leading-[20.57px] md:leading-[26.63px] font-semibold mb-8 max-w-[279px] md:max-w-[376px]">
            Be Part of Something Bigger
          </p>
          <p className="text-white self-auto text-[20px] md:text-[27px] leading-[23.28px] md:leading-[29.05px] h-[48.89px] md:h-[61px] w-[358px] md:w-[682px] font-light">
            Zelie Tech is growing, and we want you with us. If you’re passionate
            about tech, innovation, and making an impact — whether you’re a
            developer, designer, marketer, or dreamer — we’d love to hear from
            you.
          </p>
        </div>
      </div>
      <div className="text-center py-10 flex flex-col gap-5 bg-black text-white">
        <h2 className="font-bold mt-5 text-[20px] md:text-[37px]">
          Why Work With Us?
        </h2>
        <p className="text-[14px] md:text-[27px] font-light">
          Collaborative, creative environment
        </p>
        <p className="text-[14px] md:text-[27px] font-light">
          Opportunities to work on exciting projects
        </p>
        <p className="text-[14px] md:text-[27px] font-light">
          Commitment to growth and learning
        </p>
        <p className="text-[14px] md:text-[27px] font-light">
          A team driven by purpose and passion
        </p>
        <div className="mt-5">
          <h2 className="font-bold text-[20px] md:text-[37px]">
            Ready to take the leap?
          </h2>
          <p className="text-[14px] md:text-[27px] font-light">
            Send your CV and portfolio to{" "}
            <a
              href="mailto:careers@zelietech.com"
              className="hover:text-[#CACACA]"
            >
              careers@zelietech.com
            </a>{" "}
            or{" "}
            <Link to="/contact" className="text-[#0000EE]">
              contact us →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Join;
