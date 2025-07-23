import article4 from "../../../assets/images/article4.png";

const FourthArticle = () => {
  return (
    <article className="bg-[#F4F1EC] py-10 px-5 md:px-0 min-h-screen">
      <div className="max-w-[1155px] mx-auto">
        <div className="my-5">
          <h1 className="font-bold text-[15px] md:text-[36px] text-center leading-[100%]">
            Designing for Faith: The Zion Ministry Website
          </h1>
          <p className="font-light text-[13px] text-end">Posted June 2025</p>
        </div>
        <p className="text-[12px] md:text-[22px] leading-[100%]">
          Some platforms aren’t just about functionality — they’re about
          feeling, presence, and purpose. When creating a site for a spiritual
          community, it wasn’t enough to simply make it work; it had to
          resonate. It needed to feel calm, clear, and quietly powerful — a
          digital space that invites reflection, connection, and grace. Here’s
          how we approached building a platform that speaks to the soul as much
          as it serves the user.
        </p>
        <div className="grid grid-cols-2 gap-10 my-5 text-[12px] md:text-[22px]">
          <div>
            <p>
              Building with Reverence and Intention Designing for a faith-based
              community means thinking beyond clean layouts and fast load times.
              It’s about creating a space that feels calm, trustworthy, and
              spiritually aligned — a digital reflection of the values it
              represents.
            </p>
            <p>
              For The Zion Ministry, we focused on simplicity, warmth, and
              accessibility. Every color, font, and interaction was chosen to
              make visitors feel at ease, whether they’re looking for a sermon,
              joining a prayer session, or just needing a quiet moment of
              connection.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <img src={article4} alt="a cross" />
          </div>
        </div>
        <p className="text-[12px] md:text-[22px] text-center">
          This wasn’t just another website — it was a digital sanctuary. And
          building it reminded us that sometimes, the most powerful design
          speaks softly.
        </p>
      </div>
    </article>
  );
};
export default FourthArticle;
