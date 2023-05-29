import { ReadmoreCard } from "@/components";
import { ReadMoreContent } from "@/constants";

const Readmore = () => {
  return (
    <main className="container-fluid py-5">
      <section className="d-flex flex-column justify-content-center align-items-center row-gap-2">
        <h1 className="text-secondary fs-2 fw-semibold text-center w-50">
          Caring is the new marketing
        </h1>
        <p className="fw-normal text-dark text-center">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
        <section className="d-flex justify-content-between align-items-center flex-sm-row flex-column row-gap-5 mt-2">
          {ReadMoreContent.map((item) => (
            <ReadmoreCard title={item.title} imgsrc={item.imgsrc} key={item.title} />
          ))}
        </section>
      </section>
    </main>
  );
};

export default Readmore;
