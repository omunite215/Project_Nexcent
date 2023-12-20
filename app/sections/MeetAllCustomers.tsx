import Container from "react-bootstrap/Container";
import Link from "next/link";
import Image from "next/image";

const MeetAllCustomers = () => {
  return (
    <Container className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center px-5 py-5 gap-3 bg-silver column-gap-3">
      <Image
        src="/feedback.svg"
        width={0}
        height={0}
        alt="feedback"
        className="h-auto w-auto"
        data-aos="fade-right"
      />
      <div className="font-inter" data-aos="fade-left">
        <p className="fw-medium text-gray-200">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h1 className="fw-semibold fs-5 text-primary mt-3">Tim Smith</h1>
        <p className="fw-normal text-gray-100 mt-2">
          British Dragon Boat Racing Association
        </p>
        <div className="d-flex flex-sm-row flex-column justify-content-between align-items-lg-center align-items-start">
        {[1, 2, 3, 4, 5, 6, 7].map((value) => (
          <Image
            src={`/Clients/client${value}.svg`}
            width={48}
            height={48}
            alt={`client-${value}`}
            key={value}
          />
        ))}
          <section className="d-flex align-items-center justify-content-center text-center">
            <p className="text-primary fw-semibold fs-5 font-inter">
              Meet All Customers{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right my-auto"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default MeetAllCustomers;
