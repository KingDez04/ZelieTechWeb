import article2 from "../../../assets/images/article2.png";
import article22 from "../../../assets/images/article22.png";

const SecondArticle = () => {
  return (
    <article className="bg-[#F4F1EC] py-10">
      <div className="max-w-[1155px] mx-auto">
        <div className="my-5">
          <h1 className="font-bold text-[15px] md:text-[36px] text-center leading-[100%]">
            The Rise of Tech Independence in Nigeria
          </h1>
          <p className="font-light text-[13px] text-end">Posted May 2025</p>
        </div>
        <div className="my-5">
          <p className="text-[12px] md:text-[22px] text-left">
            BX Bakes came to us with one goal — bring their pastry brand online
            From the soft colors to the cozy layout, we designed a website that
            feels just like walking into their shop. We built an easy-to-use
            ordering system, added space for seasonal specials, and made sure
            the whole experience worked beautifully on any device.
          </p>
          <p className="text-[12px] md:text-[22px] text-left">
            The result? A warm, simple, and deliciously smooth digital
            experience that still feels like BX Bakes — just online now.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="text-[12px] md:text-[22px]">
            <h2 className="font-medium leading-[100%]">
              Can a cake business go digital and still keep its flavor?
            </h2>
            <p className="leading-[100%]">
              That was the question we asked ourselves when BX Bakes reached
              out.
            </p>
            <p className="leading-[100%]">
              BX Bakes started as a local pastry business — the kind of place
              where everything’s handmade, and people don’t just come for the
              cakes, they come for the story behind them. But as the business
              started to grow, so did the need for a real digital presence —
              something that could carry the heart of the brand into a whole new
              space, without losing what made it special.
            </p>
          </div>
          <div>
            <img src={article2} alt="a spoon in a cake" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 my-5 text-[22px]">
          <div className="flex flex-col gap-5">
            <img src={article22} alt="cup cakes" />
          </div>
          <div className="text-[12px] md:text-[22px]">
            <h2 className="font-medium leading-[100%]">
              Step One: Tasting the Brand (Metaphorically... and Literally)
            </h2>
            <p className="leading-[100%]">
              Before we touched a single design file, we sat down with the BX
              team to understand what made their business tick. The vibe? Warm,
              slightly playful, but still polished. It wasn’t just about
              pastries — it was about memories, celebrations, and that “just one
              more bite” feeling.
            </p>
            <p className="leading-[100%]">
              Yes, there were samples. And yes, that helped.
            </p>
            <h2 className="font-medium leading-[100%]">
              Step Two: Logo, Mood, and Visual Language
            </h2>
            <p className="leading-[100%]">
              We started sketching concepts that captured the essence of BX:
              homemade warmth with a modern edge. The final logo was a clean
              serif wordmark with a subtle swirl — a nod to frosting, yes, but
              also motion, creativity, and growth.
            </p>
          </div>
        </div>
        <p className="text-[12px] md:text-[22px] text-left">
          The color palette leaned into creamy tones, soft pastels, and rich
          chocolatey browns. Nothing too flashy — just the right amount of
          flavor.
        </p>
        <div>
          <h2 className="text-[12px] md:text-[22px] font-medium leading-[100%]">
            Step Three: From Kitchen to Clicks — Building the UX
          </h2>
          <p className="text-[12px] md:text-[22px] text-left">
            BX Bakes didn’t just want a “pretty site.” They wanted something
            functional: a place where customers could browse, order, and even
            customize cakes without stress.
          </p>
          <p className="text-[12px] md:text-[22px] text-left"> We designed:</p>
          <ul className="text-[12px] md:text-[22px]">
            <li>• A smooth product showcase with swipeable galleries</li>
            <li>• A custom order form that didn’t feel like a tax return</li>
            <li>
              • Microinteractions that made clicking feel delicious (yes, we
              said it)
            </li>
          </ul>
          <p className="text-[12px] md:text-[22px] text-left">
            And mobile? We made sure the site felt just as good on a phone as it
            did on a laptop — because let’s be honest, most people are ordering
            cake while scrolling in bed.
          </p>
          <h2 className="text-[12px] md:text-[22px] font-medium leading-[100%]">
            Step Four: Keeping It Human
          </h2>
          <p className="text-[12px] md:text-[22px] text-left">
            Every word on the site was written like BX was talking to their
            customers directly. No stiff corporate jargon — just warm, playful
            copy that felt like a conversation.
          </p>
          <p className="text-[12px] md:text-[22px] text-left">
            We even added a “flavor of the month” section, so returning visitors
            had something new to look forward to (and so the BX team could
            highlight seasonal bakes without needing a full site update).
          </p>
          <h2 className="text-[12px] md:text-[22px] font-medium leading-[100%]">
            What We Learned
          </h2>
          <p className="text-[12px] md:text-[22px] text-left">
            Designing for food is like designing for feeling. It’s not just
            about showing off pretty images — it’s about creating an experience
            that makes someone feel something before they’ve even placed an
            order. BX Bakes reminded us that even the most traditional
            businesses can thrive online — as long as you stay rooted in what
            makes you you.
          </p>
        </div>
        <div className="my-5">
          <p className="text-[12px] md:text-[22px] text-left">
            Want to see more of our brand design work?{" "}
          </p>
          <p className="text-[12px] md:text-[22px] text-left">
            Stay tuned — or hit us up if you’ve got a passion project that needs
            the digital treatment.
          </p>
        </div>
      </div>
    </article>
  );
};
export default SecondArticle;
