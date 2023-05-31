import Link from "next/link";

const Demo = () => {
  return (
    <main className="container-fluid py-5 w-100">
      <section className="d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="fw-semibold text-warning fs-1 w-50">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <Link href="/" className="mt-4 text-decoration-none">
          <button
            type="button"
            className="btn btn-primary text-light fw-normal fs-6 px-5 py-3 d-flex gap-1 align-items-center"
          >
            Get a Demo
            <svg
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
            </svg>
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Demo;
