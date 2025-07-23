import banner from "../../assets/images/launchDesign.png";
import launch6 from "../../assets/images/launch6.jpeg";
import launch2 from "../../assets/images/launch2.png";
import launch3 from "../../assets/images/launch3.png";
import launch4 from "../../assets/images/launch4.png";
import launch5 from "../../assets/images/launch5.png";
import { useNavigate, Link } from "react-router-dom";

const Launch = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="relative text-center md:text-left h-[654px] md:h-screen bg-cover bg-[30%] md:bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-4 flex flex-col justify-start items-start">
          <h1 className="retro-outline self-auto text-[32px] md:text-[64px] max-w-[80px] md:max-w-[431px] leading-[100%]">
            LAUNCH 2025
          </h1>
          <p className="text-white self-auto text-[12px] md:text-[14px] max-w-[376px]">
            Our Launch Was Just the Beginning.
          </p>
        </div>
      </div>
      <div className="text-left p-10 flex flex-col gap-5 bg-black text-white">
        <div className="flex flex-col gap-5 text-[14px] md:text-[24px] leading-[100%]">
          <p>
            Thanks to everyone who made Zelie Tech’s 2025 launch an
            unforgettable success! The energy, the innovation, and the community
            spirit blew us away — and we’re just getting started.
          </p>
          <p>
            Now, we’re focused on turning those sparks into lasting impact with
            new projects, partnerships, and experiences designed to change the
            game.
          </p>
          <p>Event Recap</p>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <img
                src={launch6}
                alt="first image in grid"
                className="w-full object-cover h-[208px] md:h-[430px]"
              />
              <img
                src={launch2}
                alt="second image in grid"
                className="w-full object-cover h-[208px] md:h-[430px]"
              />
            </div>
            <div className="grid grid-cols-3 gap-5">
              <img
                src={launch3}
                alt="third image in grid"
                className="w-full object-cover h-[142px] md:h-[295px]"
              />
              <img
                src={launch4}
                alt="fourth image in grid"
                className="w-full object-cover h-[142px] md:h-[295px]"
              />
              <img
                src={launch5}
                alt="fifth image in grid"
                className="w-full h-[142px] md:h-[295px]"
              />
            </div>
          </div>
        </div>
        <div className="text-[14px] md:text-[24px]">
          <h2 className="text-[20px] md:text-[37px] font-bold text-center">
            What’s Next?
          </h2>
          <p>
            Building more innovative solutions for Nigerian tech independence
          </p>
          <p>Growing our community of creators, partners, and supporters</p>
          <p>
            Hosting events, workshops, and exclusive reveals throughout the year
          </p>
        </div>
        <p className="text-[14px] md:text-[24px] leading-[100%]">
          Stay connected and be part of the journey.
          <br /> Follow Us → | Get Involved →
        </p>
      </div>
    </div>
  );
};

export default Launch;
