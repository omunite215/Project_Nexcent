import Image from "next/image"

const ReadmoreCard = ({title, imgsrc}:any) => {
  return (
    <main className='container rounded shadow'>
      <section className='d-flex flex-column justify-content-between align-items-center gap-3'>
        <section>
        <Image src={imgsrc} height={200} width={200} alt="Feature-Image" className="object-contain" />
        
        </section>
        <p className="text-dark text-center fw-normal">{title}</p>
        <section className="d-flex align-items-center justify-content-center text-center">
              <p className="text-primary fw-semibold fs-5">
                Readmore{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </p>
            </section>
      </section>

    </main>
  )
}

export default ReadmoreCard