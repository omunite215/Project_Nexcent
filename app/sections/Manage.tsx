import Container from "react-bootstrap/Container";
import ManageCard from "../components/ManageCard";


const ManageContent = [
    {
        title: 'Membership Organisations',
        imgUrl: '/Features/icon1.svg'
    },
    {
        title: 'National Associations',
        imgUrl: '/Features/icon2.svg'
    },
    {
        title: 'Clubs And Similar Groups',
        imgUrl: '/Features/icon3.svg'
    }
];

const Manage = () => {
  return (
    <Container className="text-center font-inter bg-white py-5">
        <div data-aos="fade-down">
            <h1 className="fs-1 lh-base text-gray-900 fw-bold">Manage your entire community <br /> in a single system</h1>
            <p className="text-gray-200 fw-light fs-6">Who is Nextcent suitable for?</p>
        </div>
        <div className="mt-4 d-flex flex-lg-row flex-column justify-content-between align-items-center" data-aos="zoom-in-down">
            {ManageContent.map((card) => (
                <ManageCard key={card.title} {...card} />
            ))}
        </div>
    </Container>
  )
}

export default Manage