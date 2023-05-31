import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
const Footer = () => {
  return (
    <footer className="container-fluid bg-warning py-5 d-flex flex-column align-items-center justify-content-between">
      <main className="d-flex flex-sm-nowrap flex-wrap justify-content-between align-items-center gap-5 p-3">
        <section className="d-flex flex-column gap-0 row-gap-4">
          <Link
            href="/"
            className="d-flex justify-content-start align-items-center gap-1 text-decoration-none"
          >
            <Image src="/logo_icon.svg" height={29} width={43} alt="logo" />
            <h1 className="text-light font-bolder">Nexcent</h1>
          </Link>
          <section className="d-flex flex-column gap-2 text-success">
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </section>
          <section className="d-flex justify-content-between align-items-center">
            <Link href="/" className="bg-secondary social-icon">
              <Image
                src="/SocialMedia/instagram.svg"
                height={17}
                width={17}
                alt="instagram"
              />
            </Link>
            <Link href="/" className="bg-secondary social-icon">
              <Image
                src="/SocialMedia/dribble.svg"
                height={17}
                width={17}
                alt="dribble"
              />
            </Link>
            <Link href="/" className="bg-secondary social-icon">
              <Image
                src="/SocialMedia/twitter.svg"
                height={17}
                width={17}
                alt="twitter"
              />
            </Link>
            <Link href="/" className="bg-secondary social-icon">
              <Image
                src="/SocialMedia/youtube.svg"
                height={17}
                width={17}
                alt="youtube"
              />
            </Link>
          </section>
        </section>
        <section>
          <section className="d-flex flex-lg-nowrap flex-wrap justify-content-between gap-5">
            <section className="d-flex row-gap-3 text-light">
              {footerLinks.map((items) => (
                <section className="d-flex flex-column gap-3" key={items.title}>
                  <h5>{items.title}</h5>
                  <ul className="d-flex flex-column">
                    <li className="d-flex flex-column gap-2" role="button">
                      {items.links.map((links) => (
                        <span id="linkstyle" key={links}>{links}</span>
                      ))}
                    </li>
                  </ul>
                </section>
              ))}
            </section>
            <section className="d-flex flex-column gap-2">
              <h5 className="text-light">Stay up to date</h5>
              <div className="input-group">
              <input
                    type="email"
                    className="form-control bg-dark text-light shadow-none border border-0"
                    id="exampleFormControlInput1"
                    data-bs-theme="dark"
                    placeholder="Your email address"
                  />
                  <button className="btn btn-dark">
                    <Image src="/send.svg" height={20} width={20} alt="send" />
                  </button>
              </div>
            </section>
          </section>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
