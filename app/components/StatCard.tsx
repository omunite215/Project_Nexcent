import Image from "next/image";
import Container from "react-bootstrap/Container";

type StatsCardProps = {
    imgUrl: string;
    value: number;
    title: string;
}

const StatCard = ({ imgUrl, value, title } : StatsCardProps) => {
  return (
    <Container className="d-flex align-items-center gap-3" data-aos="zoom-in">
        <Image src={imgUrl} width={48} height={48} alt={title} />
        <div className="d-flex justify-content-start flex-column gap-0">
            <h2 className="fs-2 fw-bold text-gray-900">{value.toLocaleString()}</h2>
            <p className="fs-6 fw-light text-gray-200">{title}</p>
        </div>
    </Container>
  )
}

export default StatCard