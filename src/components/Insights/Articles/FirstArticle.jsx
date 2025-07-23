import mainArticle from "../../../assets/images/mainArticle.png";
import article1 from "../../../assets/images/article1.png";
import article12 from "../../../assets/images/article12.png";

const FirstArticle = () => {
  return (
    <article className="bg-[#F4F1EC] pb-10">
      <div
        className="h-[100px] md:h-[305px] bg-black bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${mainArticle})` }}
      ></div>
      <div className="max-w-[1155px] mx-auto px-5 md:px-0">
        <div className="my-5">
          <h1 className="font-bold text-[15px] md:text-[36px] text-center leading-[100%]">
            How We Launched Zelie Tech — And What We Learned
          </h1>
          <p className="font-light text-[13px] text-end">Posted May 2025</p>
        </div>
        <div className="my-5">
          <p className="text-[12px] md:text-[22px] text-center">
            In June 2025, we launched Zelie Tech — a Nigerian-born tech company
            with a global mindset. This wasn’t just the birth of a startup; it
            was the beginning of a bold statement: that African talent can lead
            in innovation, creativity, and execution.
          </p>
          <p className="text-[12px] md:text-[22px] text-center">
            Here’s how we did it — and what we picked up along the way.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-5 text-[12px] md:text-[22px]">
              <h2 className="font-medium leading-[100%]">
                1. We Started With Vision — Then Backed It With Execution
              </h2>
              <p className="leading-[100%]">
                Our foundation wasn’t just technical. It was philosophical. We
                believed that Nigerians don’t have to wait to be included in
                global tech — we can define it.
              </p>
              <p className="leading-[100%]">
                So we built Zelie Tech as a company rooted in excellence,
                culture, and fearless ambition.
              </p>
              <p className="leading-[100%]">
                From design to backend infrastructure, every detail was
                intentional. We didn’t copy. We created.
              </p>
            </div>
            <div>
              <img src={article1} alt="a spoon in a cake" />
            </div>
          </div>
          <div className="flex flex-col gap-5 text-[12px] md:text-[22px]">
            <h2 className="font-medium leading-[100%]">
              2. The Launch Was a Statement
            </h2>
            <p className="leading-[100%]">
              We didn’t want a quiet launch or a basic “we’re live” post.
            </p>
            <p className="leading-[100%]">
              We wanted people to feel something. Our branding, tone, and timing
              were all designed to say: “We’re here — and we’re not like the
              rest.”
            </p>
            <p className="leading-[100%]">We rolled out:</p>
            <p className="leading-[100%]">
              Clean, bold visuals rooted in Afrocentric minimalism
            </p>
            <p className="leading-[100%]">A strong launch website</p>
            <p className="leading-[100%]">
              Social media buildup with teaser content
            </p>
            <p className="leading-[100%]">
              A clear founder voice backed by a solid team structure
            </p>
          </div>
          <div className="flex flex-col gap-5 text-[12px] md:text-[22px]">
            <h2 className="font-medium leading-[100%]">
              3. Our Team Was the Engine
            </h2>
            <p className="leading-[100%]">
              Zelie Tech was built by a lean, committed team:
            </p>
            <p className="leading-[100%]">
              Frontend & Design brought beauty and usability together
            </p>
            <p className="leading-[100%]">
              Backend & Machine Learning built smart, scalable systems
            </p>
            <p className="leading-[100%]">
              Management ensured flow, accountability, and direction
            </p>
            <p className="leading-[100%]">
              And Leadership made sure everything aligned with the core vision
            </p>
            <p className="leading-[100%]">
              Every member wasn’t just doing a task — they were building a
              legacy.
            </p>
            <p className="leading-[100%]">
              Lesson: It’s not about how many people. It’s about who they are.
            </p>
          </div>
          <div className="text-[12px] md:text-[22px]">
            <h2 className="font-medium leading-[100%]">
              4. What Worked — and What We’d Change
            </h2>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h3 className="font-medium">What worked:</h3>
                <p className="leading-[100%]">
                  Clear storytelling: People connected with our why
                </p>
                <p className="leading-[100%]">
                  Strong identity: We didn’t try to sound like Silicon Valley —
                  we sounded like us
                </p>
                <p className="leading-[100%]">
                  Good PR strategy: Helped shape early perception and reach
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="font-medium">What we’d improve:</h3>
                <p className="leading-[100%]">
                  Earlier user onboarding and feature sneak peeks
                </p>
                <p className="leading-[100%]">
                  Keeping the content flow stronger after launch
                </p>
                <p className="leading-[100%]">
                  Clarifying our product direction sooner for curious observers
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 text-[12px] md:text-[22px]">
            <h2 className="font-medium leading-[100%]">
              5. What’s Next for Zelie Tech
            </h2>
            <p className="leading-[100%]">
              We’ve launched — now we’re expanding. Our focus is on:
            </p>
            <p className="leading-[100%]">
              Building software products that solve real problems
            </p>
            <p className="leading-[100%]">
              Supporting digital innovation across industries
            </p>
            <p className="leading-[100%]">
              Growing our user base through partnerships, storytelling, and real
              value
            </p>
          </div>
          <p className="text-[12px] md:text-[22px] leading-[100%]">
            This isn’t a side project. This is the beginning of something
            serious.
          </p>
          <div>
            <img
              src={article12}
              alt="a group photograph of majority of the team"
            />
          </div>
          <div className="text-[12px] md:text-[22px] text-center font-bold">
            <p>Final Words</p>
            <p>Launching Zelie Tech taught us that:</p>
            <p>You don’t need to wait for perfect conditions</p>
            <p>
              You can lead with identity and vision — and people will follow
            </p>
            <p>What matters most is momentum</p>
            <br />
            <p>The best part? We’re just getting started.</p>
            <p>Zelie Tech is live — and we’re here to build.</p>
          </div>
        </div>
      </div>
    </article>
  );
};
export default FirstArticle;
