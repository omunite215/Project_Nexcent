import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  imgUrl: string;
  title: string;
  link: string;
};

const BlogCard = ({ imgUrl, title, link }: BlogCardProps) => {
  return (
    <div className="position-relative bg-silver rounded-4 card" data-aos="fade-up-left">
      <Image src={imgUrl} width={368} height={286} alt={title} className="h-auto w-auto"/>
      <div className="px-3 py-3 w-75 shadow text-center d-flex flex-column justify-content-center align-items-center bg-white position-absolute top-100 start-50 translate-middle rounded-3">
        <h4>{title}</h4>
        <Link
          href={link}
          className="link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover mt-3 px-3 py-3"
        >
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
