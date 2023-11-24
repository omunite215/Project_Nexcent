import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "next/image";

const Design = () => {
  return (
    <Container className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center px-5 my-5 bg-white column-gap-3">
      <Image
        src="/useImg.svg"
        width={0}
        height={0}
        alt="use-Img"
        className="w-auto h-auto"
        data-aos="fade-right"
      />
      <div className="sub-section font-inter" data-aos="fade-left">
        <h1 className="text-gray-900 fw-semibold lh-base">
          How to design your site footer like&nbsp;
          <span className="text-primary">we did ?</span>
        </h1>
        <p className="text-gray-200 fw-light fs-6">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button variant="primary text-white mt-4" size="lg">
          Learn More
        </Button>
      </div>
    </Container>
  );
};

export default Design;
