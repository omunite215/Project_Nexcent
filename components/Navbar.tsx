import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-lg">
    <Link className="navbar-brand" href="/">
      <Image src="logo.svg" height={24} width={154} alt="logo" className="d-inline-block align-text-top"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 g-row-6 fw-medium">
        <li className="nav-item me-4">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item me-4">
          <Link className="nav-link active" aria-current="page" href="/">Service</Link>
        </li>
        <li className="nav-item me-4">
          <Link className="nav-link active" aria-current="page" href="/">Feature</Link>
        </li>
        <li className="nav-item me-4">
          <Link className="nav-link active" aria-current="page" href="/">Product</Link>
        </li>
        <li className="nav-item me-4">
          <Link className="nav-link active" aria-current="page" href="/">Testimonial</Link>
        </li>
        <li className="nav-item me-4">
          <Link className="nav-link active" aria-current="page" href="/">FAQ</Link>
        </li>
      </ul>
    </div>
    <div className="d-none gap-2 d-lg-flex justify-content-lg-end">
      <Link href="/"><button className="btn text-primary fw-medium px-3 py-2" type="button">Login</button></Link>
      <Link href="/"><button className="btn btn-primary text-light fw-medium px-3 py-2" type="button">Sign&nbsp;up</button></Link>
</div>
  </div>
</nav>
  )
}

export default Navbar;