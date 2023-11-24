"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";

const NavbarContent = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Service",
    link: "#service",
  },
  {
    title: "Feature",
    link: "#feature",
  },
  {
    title: "Product",
    link: "#product",
  },
  {
    title: "Testimonial",
    link: "#testimonial",
  },
  {
    title: "FAQ",
    link: "#faq",
  },
];

const NavbarComponent = () => {
  return (
    <Navbar className="bg-silver py-2" collapseOnSelect expand="lg" data-aos="fade-down">
      <Container>
        <Link
          href="/"
          className="navbar-brand d-flex flex-row align-items-center gap-2"
        >
          <Image src="/logo.svg" width={35} height={24} alt="logo" />
          <span className="my-auto font-inter text-secondary fs-2 fw-bold">
            Nexcent
          </span>
        </Link>
        <NavbarToggle aria-controls="navbarScroll" />
        <NavbarCollapse id="navbarScroll">
          <Nav className="mx-auto font-inter fw-medium">
            {NavbarContent.map((item) => (
              <Link
                href={item.link}
                key={item.title}
                className={`nav-link text-navtext ${
                  item.title === "Home" ? "active" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </Nav>
          <div className="d-flex gap-1 justify-content-end align-items-center">
            <Button variant="outline-primary" type="button">
              login
            </Button>
            <Button variant="primary text-white">Signup</Button>
          </div>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
