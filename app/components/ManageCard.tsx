import Image from "next/image";
import Container from "react-bootstrap/Container";

type ManageCardProps = {
  id: number;
  imgUrl: string;
  title: string;
};

const ManageCard = ({ id, imgUrl, title }: ManageCardProps) => {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center gap-3 py-2 px-6"
      data-aos={id === 1 ? "fade-right" : id === 2 ? "fade-down" : "fade-left"}
    >
      <Image src={imgUrl} width={65} height={65} alt={title} />
      <div className="d-flex flex-column text-center gap-1">
        <h1 className="fs-1 fw-bold text-gray-900">{title}</h1>
        <p className="fs-6 fw-light text-gray-200">
          Our membership management software provides full automation of
          membership renewals and payments.
        </p>
      </div>
    </Container>
  );
};

export default ManageCard;
