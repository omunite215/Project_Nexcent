import Image from "next/image";
import Link from "next/link";

const Legacy = () => {
  return (
    <main className="container-fluid py-5">
      <section className="d-flex flex-lg-row flex-column align-items-lg-start align-items-center justify-content-md-between justify-content-center text-lg-start text-center">
        <Image src="/legacyImg.svg" height={433} width={442} alt="Legacy" />
        <section className="text-left d-flex flex-column justify-content-between box">
          <h1 className="text-secondary fw-semibold">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-dark fw-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Link href="/" className="mt-4">
            <button
              type="button"
              className="btn btn-primary text-light fw-normal fs-6 px-4 py-3 "
            >
              Learn more
            </button>
          </Link>
        </section>
      </section>
    </main>
  );
};

export default Legacy;
