import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <Container className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center px-5 my-5 bg-silver">
      <div className="font-inter" data-aos="fade-right">
        <h1 className="text-gray-900 fw-semibold">
          Lessons and insights&nbsp; <br />
          <span className="text-primary">from 8 years</span>
        </h1>
        <p className="text-gray-200 fw-light fs-6">
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button variant="primary text-white mt-4" size="lg">
          Register
        </Button>
      </div>
      <Image
        src="/HeroImg.svg"
        alt="Hero"
        height={0}
        width={0}
        className=" h-auto w-auto mb-2 px-2"
        priority={true}
        data-aos="fade-left"
      />
    </Container>
  );
};

export default Hero;
