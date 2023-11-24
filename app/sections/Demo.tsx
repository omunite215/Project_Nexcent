import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Demo = () => {
  return (
    <Container className="text-secondary text-center font-inter bg-silver mt-5 py-5" data-aos="zoom-in">
      <h1 className="fw-bold fs-1 w-100">
        Pellentesque suscipit<br />fringilla libero eu.
      </h1>
      <Button variant="primary text-white mt-4" size="lg">Get Demo <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg></Button>
    </Container>
  );
};

export default Demo;
