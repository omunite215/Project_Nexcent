import { StatCard } from "@/components"
import { StatContent } from "@/constants"

const Stats = () => {
  return (
    <main className='container-fluid w-75'>
      <section className='d-flex flex-lg-row flex-column  align-items-center justify-content-md-between justify-content-center text-lg-start text-center'>
        <section className='d-flex flex-column gap-2'>
        <h1 className='text-secondary fw-semibold'>Helping a local <span className='text-primary'>business reinvent itself</span></h1>
        <p className=''>We reached here with our hard work and dedication</p>
        </section>
        <section id="grid-container">
          {StatContent.map((item) => (
            <section id="grid-item" key={item.title}>
            <StatCard title={item.title} value={item.value} icon={item.iconSrc} />
            </section>
          ))}

        </section>
      </section>
    </main>
  )
}

export default Stats