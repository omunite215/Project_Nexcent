import Image from "next/image";
import Container from "react-bootstrap/Container";

type ManageCardProps = {
  imgUrl: string;
  title: string;
};

const ManageCard = ({ imgUrl, title }: ManageCardProps) => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center gap-3 py-2 px-6">
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
