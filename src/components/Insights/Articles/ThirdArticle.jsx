import article3 from "../../../assets/images/article3.png";
import article32 from "../../../assets/images/article32.png";

const ThirdArticle = () => {
  return (
    <article className="max-w-[1155px] mx-auto">
      <div className="my-5">
        <h1 className="font-bold text-[15px] md:text-[36px] text-center leading-[100%]">
          The Rise of Tech Independence in Nigeria
        </h1>
        <p className="font-light text-[13px] text-end">Posted May 2025</p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <p className="text-[12px] md:text-[22px] leading-[100%]">
          We’re at a turning point. More Nigerian startups are stepping out of
          survival mode and building with confidence — not just following global
          trends, but setting their own. We’re seeing founders solve real
          problems in ways that make sense for our people, our markets, and our
          realities. At Zelie Tech, we’ve been lucky to work with some of these
          bold builders. And honestly, it’s refreshing. There’s a growing pride
          in doing things our way — designing with local context, using what we
          have, and not waiting for permission. This isn’t just a trend. It’s a
          mindset shift — one that could reshape the tech space in Africa for
          good.
        </p>
        <div>
          <img src={article3} alt="rise of tech in nigeria" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 my-5 text-[22px]">
        <div className="flex flex-col gap-5">
          <img src={article32} alt="thinking about innovations" />
        </div>
        <p className="text-[12px] md:text-[22px] leading-[100%]">
          Owning Our Innovation Journey This new wave of Nigerian tech isn’t
          about copying what's been done elsewhere — it's about building with
          full awareness of our unique context. Founders are designing tools
          that work with inconsistent infrastructure, irregular incomes, and
          informal systems, not against them. And in doing so, they’re creating
          models that feel native, not adapted. It’s innovation shaped by lived
          experience, not just aspiration. We’re also seeing a shift in how
          success is defined. It’s less about buzz or chasing Silicon Valley
          validation, and more about building products that people actually use
          — and return to. Growth isn’t just measured by downloads or investor
          attention anymore, but by real-world impact: the
        </p>
      </div>
      <p className="text-[12px] md:text-[22px] text-left">
        market woman who saves time, the teacher who reaches more students, the
        mechanic who gets paid faster. This grounded, user-first approach is
        proving to be both resilient and scalable. There’s still a long road
        ahead — infrastructure, funding, and policy remain real hurdles. But the
        mindset has changed. More builders are leading with clarity and
        confidence, trusting their understanding of local problems and refusing
        to wait for permission. It’s not just a trend. It’s a quiet kind of
        revolution — and it’s already underway.
      </p>
    </article>
  );
};
export default ThirdArticle;
