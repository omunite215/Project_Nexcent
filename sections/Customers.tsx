import Image from "next/image";

const Customers = () => {
  return (
    <main className="container-fluid py-5">
      <section className="d-flex flex-lg-row flex-column align-items-lg-start align-items-center justify-content-md-between justify-content-center text-lg-start text-center">
        <Image src="/promotion.svg" height={326} width={326} alt="customer"/>
        <section className="d-flex flex-column g-col-6 box">
          <p className="fw-medium text-dark">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h3 className="text-primary fw-semibold fs-5">Om Patel</h3>
          <p className="fw-normal fs-6 text-info">
            British Dragon Boat Racing Association
          </p>
          <section className="d-flex flex-sm-row flex-column justify-content-between align-items-center">
            <Image
              src="/Clients/client1.svg"
              height={48}
              width={48}
              alt="client1"
            />
            <Image
              src="/Clients/client2.svg"
              height={48}
              width={48}
              alt="client2"
            />
            <Image
              src="/Clients/client3.svg"
              height={48}
              width={48}
              alt="client3"
            />
            <Image
              src="/Clients/client4.svg"
              height={48}
              width={48}
              alt="client4"
            />
            <Image
              src="/Clients/client5.svg"
              height={48}
              width={48}
              alt="client5"
            />
            <Image
              src="/Clients/client6.svg"
              height={48}
              width={48}
              alt="client6"
            />
            <Image
              src="/Clients/client7.svg"
              height={48}
              width={48}
              alt="client7"
            />
            <section className="d-flex align-items-center justify-content-center text-center">
              <p className="text-primary fw-semibold fs-5">
                Meet All Customers{" "}
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
              </p>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Customers;
