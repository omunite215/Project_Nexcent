import Container from "react-bootstrap/Container";
import BlogCard from "../components/BlogCard";


export const MarkettingContent =[
    {
        title: 'Creating Streamlined Safeguarding Processes with OneRen',
        imgUrl: '/Readmore/how.svg',
        link: '/blog'
    },
    {
        title: 'What are your responsibilities and how can you manage them?',
        imgUrl: '/Readmore/manage.svg',
        link: '/blog'
    },
    {
        title: 'Revamping the Membership Model with Triathlon Australia',
        imgUrl: '/Readmore/revamp.svg',
        link: '/blog'
    }
];

const Marketing = () => {
  return (
    <Container className="text-center font-inter bg-white py-5">
      <div className="font-inter" data-aos="fade-right">
        <h1 className="fs-1 lh-base text-gray-900 fw-bold">
          Caring is the new marketing
        </h1>
        <p className="text-gray-200 fw-light fs-6">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. <br /> See who&lsquo;s joining the community, read about
          how our community are <br /> increasing their membership income and lot&lsquo;s
          more.
        </p>
      </div>
      <div className="mt-4 d-flex flex-lg-row flex-column justify-content-between align-items-center gap-3 column-gap-5">
        {MarkettingContent.map((item) => (
            <BlogCard key={item.title} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default Marketing;
