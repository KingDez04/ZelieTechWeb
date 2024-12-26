import banner from "../../assets/images/contactImage.png";
import { useNavigate } from "react-router-dom";
import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-20 text-white flex flex-col justify-center items-start">
          <h1 className="text-[37px] leading-[44.78px] font-bold mb-3">
            CONTACT US
          </h1>
          <p className="text-lg md:text-[22px] leading-[26.63px] mb-3 max-w-[483px]">
            Have we gotten your attention? You can get in touch with us:
          </p>
          <div className="flex flex-col gap-5">
            <span className="flex items-center gap-3 text-[22px] leading-[26.63px]">
              <FiMail />
              <a
                href="mailto:zelietech25@gmail.com"
                className="underline font-semibold hover:text-[#CACACA]"
              >
                zelietech25@gmail.com
              </a>
            </span>
            <span className="flex items-center gap-3 text-[22px] leading-[26.63px] font-[700px]">
              <FiPhone />
              <span className="font-semibold">
                <a href="tel:07045705628" className="hover:text-[#CACACA]">
                  +2347045705628
                </a>
                ,{" "}
                <a href="tel:08033031077" className="hover:text-[#CACACA]">
                  +2348033031077
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;