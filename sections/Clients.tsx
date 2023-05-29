import Image from "next/image"

const Clients = () => {
  return (
    <main className='container-fluid py-5'>
      <section className='d-flex flex-column justify-content-center row-gap-2'>
        <h1 className='text-secondary fs-2 fw-semibold text-center'>Our Clients</h1>
        <p className='fw-normal text-dark text-center'>We have been working with some Fortune 500+ clients</p>
        <section className='d-flex justify-content-between flex-row row-gap-5'>
          <Image src="/Clients/client1.svg" height={48} width={48} alt="client1" />
          <Image src="/Clients/client2.svg" height={48} width={48} alt="client2" />
          <Image src="/Clients/client3.svg" height={48} width={48} alt="client3" />
          <Image src="/Clients/client4.svg" height={48} width={48} alt="client4" />
          <Image src="/Clients/client5.svg" height={48} width={48} alt="client5" />
          <Image src="/Clients/client6.svg" height={48} width={48} alt="client6" />
          <Image src="/Clients/client7.svg" height={48} width={48} alt="client7" />
        </section>
      </section>
    </main>
  )
}

export default Clients