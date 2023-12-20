import Container from "react-bootstrap/Container";
import Link from "next/link";
import Image from "next/image";

const SocialIcon = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div className="bg-gray-900 border border-white px-2 py-2 rounded-circle">
      <Image src={imgUrl} width={24} height={24} alt="social-media" />
    </div>
  );
};

const socialMediaContent = [
  "/SocialMedia/instagram.svg",
  "/SocialMedia/dribble.svg",
  "/SocialMedia/twitter.svg",
  "/SocialMedia/youtube.svg",
];

export const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Blog", "Contact us", "Pricing", "Testimonials"],
  },
  {
    title: "Support",
    links: [
      "Help center",
      "Terms of service",
      "Legal",
      "Privacy policy",
      "Status",
    ],
  },
];

const FooterComponent = () => {
  return (
    <Container
      className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-md-center align-items-start px-5 py-5 bg-secondary font-inter gap-lg-3 gap-5"
      data-aos="fade-up"
    >
      <div>
        <Link
          href="/"
          className="navbar-brand d-flex flex-row align-items-center gap-2"
        >
          <Image src="/logo_icon.svg" width={35} height={24} alt="logo" />
          <span className="my-auto font-inter text-white fs-2 fw-bold">
            Nexcent
          </span>
        </Link>
        <div className="mt-4 text-silver fs-6">
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p className="mt-3">All rights reserved</p>
        </div>
        <div className="mt-5 d-flex justify-content-start align-items-start gap-3">
          {socialMediaContent.map((item) => (
            <SocialIcon key={item} imgUrl={item} />
          ))}
        </div>
      </div>
      <div className="d-flex flex-lg-nowrap flex-wrap justify-content-between gap-5">
        <div className="d-flex row-gap-3 text-white">
          {footerLinks.map((items) => (
            <div className="d-flex flex-column gap-3" key={items.title}>
              <h5>{items.title}</h5>
              <ul className="d-flex flex-column">
                <li className="d-flex flex-column gap-2" role="button">
                  {items.links.map((links) => (
                    <span id="linkstyle" key={links}>
                      {links}
                    </span>
                  ))}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="d-flex flex-column gap-2">
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
        </div>
      </div>
    </Container>
  );
};

export default FooterComponent;
