import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="container-fluid w-100">
      <section className="d-flex flex-lg-row flex-column justify-content-center align-items-center row-gap-5">
      <section className="d-flex flex-column align-items-sm-start align-items-center justify-content-sm-start justify-content-center">
        <section className="d-flex flex-column align-items-sm-start align-items-center justify-content-sm-start justify-content-center text-sm-start text-center">
          <h1 className="text-secondary fw-semibold w-75">
            Lessons and insights&nbsp;
            <span className="text-primary">from 8 years</span>
          </h1>
          <p className="text-dark fw-normal">
            Where to grow your business as a photographer: site or social media?
          </p>
        </section>
        <Link href="/" className="mt-4"><button type="button" className="btn btn-primary btn-lg text-light fw-normal fs-6 px-5 py-3 ">Register</button></Link>
      </section>
      <section className="">
        <Image src="/HeroImg.svg" alt="Hero" height={407} width={391} className="d-sm-block d-none" priority={true}/>
        <Image src="/HeroImg.svg" alt="Hero" height={307} width={291} className="d-sm-none d-block" priority={true} />
      </section>
      </section>
    </main>
  );
};

export default Hero;
