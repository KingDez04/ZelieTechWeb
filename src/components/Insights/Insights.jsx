import { useNavigate, Link } from "react-router-dom";
import banner from "../../assets/images/blogImage.png";
import featuredPost from "../../assets/images/featuredPost.png";
import cake from "../../assets/images/cake.png";
import nigeria from "../../assets/images/nigeria.png";
import cross1 from "../../assets/images/cross1.png";
import cross2 from "../../assets/images/cross2.png";
import vector from "../../assets/images/vector.png";

const Insights = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="relative text-center md:text-left h-[416px] bg-cover bg-[70%] md:bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-4 md:inset-20 flex flex-col justify-end md:justify-center items-start">
          <h1 className="self-center md:self-auto text-[32px] md:text-[48px] leading-[41.15px] md:leading-[44.78px] font-extrabold mb-2">
            Insights That Drive Innovation
          </h1>
          <p className="font-extrabold self-center md:self-auto text-[13px] md:text-[14px] leading-[20.57px] md:leading-[26.63px] mb-8 max-w-[483px]">
            Explore stories, strategies, and lessons from inside Zelie Tech.
            From design breakthroughs to startup tips, we share what we’re
            learning, building, and imagining — so you can grow with us.
          </p>
        </div>
      </div>
      <div className="py-10 flex flex-col gap-5 max-w-[80%] mx-auto">
        <div className="font-light flex gap-5 text-[14px] md:text-[27px] leading-[100%]">
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-[13px] md:text-[25px]">
              🔥 Featured Post
            </h2>
            <h3 className="font-bold text-[14px] md:text-[20px]">
              🚀 How We Launched Zelie Tech — And What We Learned
            </h3>
            <p className="text-[10px] md:text-[14px]">
              The behind-the-scenes story of how we turned a bold idea into one
              of the most exciting tech launches of 2025.
            </p>
            <p className="text-[10px] md:text-[14px]">Posted July 2025</p>
            <Link className="flex items-center gap-1 font-bold text-[14px] hover:text-[#9c7a7a] text-[#686868]">
              Read More <img src={vector} alt="vector" />
            </Link>
          </div>
          <div className="min-w-[174px] min-h-[154px] max-w-[174px] max-h-[154px] md:min-w-[518px] md:min-h-[275px] md:max-w-[518px] md:max-h-[275px] bg-[#D9D9D9]">
            <img
              src={featuredPost}
              alt="featured post"
              className="w-[174px] h-[154px] md:w-[518px] md:h-[275px]"
            />
          </div>
        </div>
        <h2 className="font-bold text-[13px] md:text-[25px]">
          Latest Articles
        </h2>
        <div className="font-light flex gap-5 text-[14px] md:text-[27px] leading-[100%]">
          <div className="min-w-[75px] min-h-[94px] max-w-[75px] max-h-[94px] md:min-w-[402px] md:min-h-[307px] md:max-w-[402px] md:max-h-[307px] bg-[#D9D9D9] rounded-md">
            <img
              src={cake}
              alt="a cake"
              className="w-[75px] h-[94px] md:w-[402px] md:h-[307px]"
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-10">
            <h2 className="font-bold text-[8px] md:text-[25px]">
              Building BX Bakes: How We Designed a Pastry Brand Online
            </h2>
            <p className="text-[8px] md:text-[15px]">
              We took a cake business and baked it into a digital experience —
              here's how.
            </p>
            <p className="text-[8px] md:text-[15px]">Posted June 2025</p>
            <Link className="flex items-center gap-1 font-bold text-[8px] md:text-[14px] hover:text-[#9c7a7a] text-[#686868]">
              Read More <img src={vector} alt="vector" />
            </Link>
          </div>
        </div>
        <div className="font-light flex gap-5 text-[14px] md:text-[27px] leading-[100%]">
          <div className="min-w-[75px] min-h-[94px] max-w-[75px] max-h-[94px] md:min-w-[402px] md:min-h-[307px] md:max-w-[402px] md:max-h-[307px] bg-[#D9D9D9] rounded-md">
            <img
              src={nigeria}
              alt="a map of nigeria"
              className="w-[75px] h-[94px] md:w-[402px] md:h-[307px]"
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-10">
            <h2 className="font-bold text-[8px] md:text-[25px]">
              The Rise of Tech Independence in Nigeria
            </h2>
            <p className="text-[8px] md:text-[15px]">
              Why it's time for African startups to lead with confidence and
              creativity.
            </p>
            <p className="text-[8px] md:text-[15px]">Posted May 2025</p>
            <Link className="flex items-center gap-1 font-bold text-[8px] md:text-[14px] hover:text-[#9c7a7a] text-[#686868]">
              Read More <img src={vector} alt="vector" />
            </Link>
          </div>
        </div>
        <div className="font-light flex gap-5 text-[14px] md:text-[27px] leading-[100%]">
          <div className="min-w-[75px] min-h-[94px] max-w-[75px] max-h-[94px] md:min-w-[402px] md:min-h-[307px] md:max-w-[402px] md:max-h-[307px] bg-[#D9D9D9] rounded-md">
            <img
              src={cross1}
              alt="a cross"
              className="w-[75px] h-[94px] md:w-[402px] md:h-[307px]"
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-10">
            <h2 className="font-bold text-[8px] md:text-[25px]">
              Designing for Faith: The Zion Ministry Website
            </h2>
            <p className="text-[8px] md:text-[15px]">
              Creating a serene, functional platform for a spiritual community.
            </p>
            <p className="text-[8px] md:text-[15px]">Posted June 2025</p>
            <Link className="flex items-center gap-1 font-bold text-[8px] md:text-[14px] hover:text-[#9c7a7a] text-[#686868]">
              Read More <img src={vector} alt="vector" />
            </Link>
          </div>
        </div>
        <div className="font-light flex gap-5 text-[14px] md:text-[27px] leading-[100%]">
          <div className="min-w-[75px] min-h-[94px] max-w-[75px] max-h-[94px] md:min-w-[402px] md:min-h-[307px] md:max-w-[402px] md:max-h-[307px] bg-[#D9D9D9] rounded-md">
            <img
              src={cross2}
              alt="a cross"
              className="w-[75px] h-[94px] md:w-[402px] md:h-[307px]"
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-10">
            <h2 className="font-bold text-[8px] md:text-[25px]">
              Choosing Between a Mobile App and a Web App
            </h2>
            <p className="text-[8px] md:text-[15px]">
              Not sure where to start your product? Here’s how to decide based
              on your goals.
            </p>
            <p className="text-[8px] md:text-[15px]">Posted April 2025</p>
            <Link className="flex items-center gap-1 font-bold text-[8px] md:text-[14px] hover:text-[#9c7a7a] text-[#686868]">
              Read More <img src={vector} alt="vector" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center justify-center mb-10">
          <p className="font-bold text-[24px] md:text-[48px] leading-[100%]">
            Stay in the Loop
          </p>
          <p className="text-[12px] md:text-[20px] leading-[100%]">
            Want to get fresh insights straight to your inbox?
          </p>
          <button className="w-[246px] md:w-[393px] h-[51px] md:h-[72px] bg-[#470258] hover:bg-[#4702587d] rounded-[15px] text-white text-center text-[14px] md:text-[24px] cursor-pointer">
            {`Subscribe to Our Newsletter ${">"}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insights;
