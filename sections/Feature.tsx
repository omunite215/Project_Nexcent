import { FeatureCard } from "@/components"
import { FeatureContent } from "@/constants"

const Feature = () => {
  return (
    <main className='container-fluid py-5'>
      <section className='d-flex flex-column justify-content-center align-items-center row-gap-2'>
        <h1 className='text-secondary fs-2 fw-semibold text-center w-50'>Manage your entire community in a single system</h1>
        <p className='fw-normal text-dark'>Who is Nextcent suitable for?</p>
        <section className='d-flex justify-content-between align-items-center flex-lg-row flex-column row-gap-5 mt-2'>
          {FeatureContent.map((item) => (
            <FeatureCard title={item.title} imgsrc={item.imgsrc} key={item.title} />
          ))}
        </section>
      </section>
    </main>
  )
}

export default Feature