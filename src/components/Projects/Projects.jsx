import { Link } from "react-router-dom";
import banner from "../../assets/images/projectImage.png";
import jaiye from "../../assets/images/jaiyeProj.png";
import cake from "../../assets/images/cake.png";
import zion from "../../assets/images/zionProj.png";
import vector from "../../assets/images/vector.png";

const Projects = () => {
  return (
    <div>
      <div
        className="relative text-white text-left h-[402px] md:h-screen bg-cover bg-[70%] md:bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-4 md:inset-20 flex flex-col justify-end">
          <h1
            style={{ textShadow: "5px 5px 10px #16B4F4" }}
            className="relative text top-[-20%] md:top-[-30%] text-[40px] md:text-[96px] leading-[41.15px] md:leading-[100%] font-bold mb-2 md:mb-10 max-w-[999px] items-start"
          >
            Our Projects
          </h1>
          <div className="flex flex-col text-center gap-5 md:gap-8">
            <p className="text-[17px] md:text-[11px] leading-[100%]">
              We don’t just build tech — we build unforgettable experiences.
            </p>
            <p className="text-[17px] md:text-[11px] leading-[100%]">
              At Zelie Tech, every project is a chance to spark something
              bigger: excitement, growth, connection, and change. We create
              platforms that look good, feel right, and work fast — powered by
              innovation and rooted in purpose.
            </p>
            <p className="text-[17px] md:text-[11px] leading-[100%]">
              Whether it’s a party, a pastry, or a place of worship, we design
              for real people and real impact.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <p className="font-light text-[20px] md:text-[25px] leading-[100%] ml-5">
          Featured Projects
        </p>
        <div className="flex flex-col max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="font-bold text-[40px] md:text-[90px]">Jaiye</h2>
              <p className="font-light text-[14px]">Where Every Vibe Begins</p>
              <hr className="w-[190px] border-[5px] border-white my-10" />
              <p className="font-light text-[20px]">
                A next-gen social experience app created to turn every party
                into a movement. With seamless event discovery, digital
                ticketing, and exclusive behind-the-scenes content, Jaiye is
                setting the new standard for how events are found, shared, and
                lived.
              </p>
              <p className="font-semibold text-[14px]">
                Status:Launching December 25 2025
              </p>
              {/* <Link
                to=""
                className="flex items-center gap-1 font-bold text-[14px] hover:text-[#9c7a7a] text-[#686868]"
              >
                Explore <img src={vector} alt="vector" />
              </Link> */}
            </div>
            <div className="flex justify-center md:justify-end">
              <img src={jaiye} alt="jaiye project" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="font-bold text-[40px] md:text-[90px]">
                BX Bakes & More{" "}
              </h2>
              <p className="font-light text-[14px]">Digital Meets Delicious</p>
              <hr className="w-[190px] border-[5px] border-white my-10" />
              <p className="font-light text-[20px]">
                A vibrant, mouthwatering website for a fast-rising pastry brand.
                Designed for mobile-first users, it’s built to reflect the
                brand’s personality — elegant, sweet, and effortlessly smooth.
                Status: Launched July 2025 Features: Product Gallery, WhatsApp
                Ordering.
              </p>
              <p className="font-semibold text-[14px]">
                Status:Launching December 25 2025
              </p>
              {/* <Link
                to=""
                className="flex items-center gap-1 font-bold text-[14px] hover:text-[#9c7a7a] text-[#686868]"
              >
                Explore <img src={vector} alt="vector" />
              </Link> */}
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={cake}
                alt="cake project"
                className="w-[229px] md:w-[402px] h-[195px] md:h-[307px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="font-bold text-[40px] md:text-[90px]">Zion</h2>
              <p className="font-light text-[14px]">
                The City of the Lord Ministry – Grace Meets Function
              </p>
              <hr className="w-[190px] border-[5px] border-white my-10" />
              <p className="font-light text-[20px]">
                A peaceful, spirit-filled church website designed to welcome
                both first-time visitors and lifelong members. Includes daily
                scripture updates, event highlights, and donation support.
              </p>
              <p className="font-semibold text-[14px]">
                Status:Launching August 25 2025
              </p>
              {/* <Link
                to=""
                className="flex items-center gap-1 font-bold text-[14px] hover:text-[#9c7a7a] text-[#686868]"
              >
                Explore <img src={vector} alt="vector" />
              </Link> */}
            </div>
            <div className="flex justify-center md:justify-end">
              <img src={zion} alt="zion project" />
            </div>
          </div>
          <div className="flex flex-col gap-5 my-5">
            <p className="font-light text-[20px] md:text-[25px]">
              🚀 Let’s Build Something Together
            </p>
            <p className="font-light text-[20px] md:text-[25px">
              From bold startups to passionate communities, we help brands come
              alive online. Need something custom?
              <Link to="/contact" className="text-blue-500 hover:text-blue-400">
                Let's talk
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
