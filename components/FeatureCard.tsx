import Image from "next/image"

const FeatureCard = ({title, imgsrc}:any) => {
  return (
    <main className='container'>
      <section className='d-flex flex-column justify-content-between align-items-center gap-3'>
        <Image src={imgsrc} height={56} width={65} alt="Feature-Image" />
        <h1 className="text-secondary w-75 text-center fw-bold fs-1">{title}</h1>
        <p className="text-dark text-center fw-normal">Our membership management software provides full automation of membership renewals and payments</p>
      </section>

    </main>
  )
}

export default FeatureCard