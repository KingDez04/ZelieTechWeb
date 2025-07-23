import article5 from "../../../assets/images/article5.png";
import article52 from "../../../assets/images/article52.png";

const FifthArticle = () => {
  return (
    <article className="bg-[#F4F1EC] py-10">
      <div className="max-w-[1155px] mx-auto">
        <div className="my-5">
          <h1 className="font-bold text-[15px] md:text-[36px] text-center leading-[100%]">
            Choosing Between a Mobile App and a Web App
          </h1>
          <p className="font-light text-[13px] text-end">Posted April 2025</p>
        </div>
        <p className="text-[12px] md:text-[22px] leading-[100%]">
          Building your first product? This guide breaks down the real-world
          pros and cons of going mobile vs. web — so you can make the right move
          for your audience.
        </p>
        <div className="grid grid-cols-2 gap-10 my-5">
          <div className="text-[12px] md:text-[22px] leading-[100%]">
            <p>
              Picking the Right Platform for Your Product Still unsure whether
              to go mobile-first or web-based? Explore these key topics to help
              you decide:
            </p>
            <ul>
              <li>
                * Audience Behavior – Learn how user habits influence platform
                choice.
              </li>
              <li>
                * Development Costs & Timelines – Understand budget and time
                trade-offs.
              </li>
              <li>
                * Offline Access & Native Features – See when mobile has a clear
                advantage.
              </li>
              <li>
                * Updates & Maintenance – Discover which platform offers easier
                long-term management.
              </li>
              <li>
                * Reach & Accessibility – Find out which option scales better
                from day one.
              </li>
            </ul>
            <p>
              💡 Pro Tip: The best choice isn’t always either/or. Many startups
              start with a web app MVP, then scale to mobile once product-market
              fit is proven.
            </p>
            <p>✉ Stay in the Loop Fresh insights, no fluff.</p>
          </div>
          <div className="flex flex-col gap-5">
            <img src={article5} alt="mobile app vs. web app" />
            <img src={article52} alt="a macbook and an iphone" />
          </div>
        </div>
        <p className="text-[12px] md:text-[22px] text-center">
          Subscribe to our newsletter to get new stories, lessons, and product
          drops from the Zelie Tech team.
        </p>
      </div>
    </article>
  );
};
export default FifthArticle;
