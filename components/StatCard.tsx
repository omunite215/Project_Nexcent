import React from 'react'
import Image from 'next/image'

const StatCard = ({title, value, icon}: any) => {
  return (
    <main className='container'>
      <section className='d-flex justify-content-center align-items-center gap-1'>
        <Image src={icon} width={48} height={48} alt="Icon"/>
        <section className='grid gap-2'>
          <h3 className='fw-bold text-secondary fs-4'>{value}</h3>
          <p className='fw-normal text-dark w-100'>{title}</p>
        </section>
      </section>
    </main>
  )
}

export default StatCard