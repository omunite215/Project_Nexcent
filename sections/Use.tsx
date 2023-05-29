import Link from "next/link";
import Image from "next/image";

const Use = () => {
  return (
    <main className="container-fluid py-5">
      <section className="d-flex flex-lg-row flex-column align-items-center justify-content-md-between justify-content-center gap-sm-0 gap-3 text-lg-start text-center">
        <Image src="/useImg.svg" height={433} width={442} alt="Legacy" />
        <section className="text-left d-flex flex-column justify-content-between box">
          <h1 className="text-secondary fw-semibold">
            How to design your site footer like we did
          </h1>
          <p className="text-dark fw-normal">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
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

export default Use;
