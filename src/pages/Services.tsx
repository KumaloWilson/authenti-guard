
import bgImg from '../assets/nursesbg1.jpeg';
import dpImage from '../assets/dp.jpeg'
import { FaAmbulance, FaHospital, FaStethoscope, FaUserMd, FaMedkit, FaMicroscope, FaHeartbeat, FaBed, FaTooth, FaRadiationAlt, FaLungs, FaBaby, FaUserPlus, FaVenusMars } from "react-icons/fa";
import ServicesCard from "../components/ServicesCard";

const serviceData = [
  {
    id: 1,
    icon: <FaAmbulance size={100} />,
    title: "Emergency Care",
    description: "24/7 emergency medical services for critical conditions and injuries.",
  },
  {
    id: 2,
    icon: <FaHospital size={100} />,
    title: "Inpatient Services",
    description: "Comprehensive care for patients requiring hospitalization and medical treatment.",
  },
  {
    id: 3,
    icon: <FaStethoscope size={100} />,
    title: "Outpatient Care",
    description: "Medical services provided without the need for overnight hospitalization.",
  },
  {
    id: 4,
    icon: <FaUserMd size={100} />,
    title: "Specialty Clinics",
    description: "Dedicated clinics for specialized medical care in various fields like cardiology, neurology, etc.",
  },
  {
    id: 5,
    icon: <FaMedkit size={100} />,
    title: "Pharmacy Services",
    description: "Dispensing medications and providing pharmaceutical consultation and advice.",
  },
  {
    id: 6,
    icon: <FaMicroscope size={100} />,
    title: "Diagnostic Imaging",
    description: "State-of-the-art imaging services including X-rays, MRI, CT scans, and ultrasounds.",
  },
  {
    id: 7,
    icon: <FaHeartbeat size={100} />,
    title: "Cardiac Care",
    description: "Specialized care for patients with heart conditions, including diagnosis and treatment.",
  },
  {
    id: 8,
    icon: <FaBed size={100} />,
    title: "Rehabilitation Services",
    description: "Therapeutic services to help patients recover from injuries or surgeries and improve mobility.",
  },
  {
    id: 9,
    icon: <FaTooth size={100} />,
    title: "Dental Services",
    description: "Comprehensive dental care including checkups, cleanings, and treatments.",
  },
  {
    id: 10,
    icon: <FaRadiationAlt size={100} />,
    title: "X-ray Imaging",
    description: "Diagnostic imaging using X-rays to visualize internal structures and diagnose medical conditions.",
  },
  {
    id: 11,
    icon: <FaLungs size={100} />,
    title: "TB Clinic",
    description: "Specialized clinic for diagnosis, treatment, and management of tuberculosis (TB).",
  },
  {
    id: 12,
    icon: <FaBaby size={100} />,
    title: "Maternity Care",
    description: "Comprehensive care for expectant mothers, including prenatal, delivery, and postnatal services.",
  },
  {
    id: 13,
    icon: <FaVenusMars size={100} />,
    title: "VIAC (Visual Inspection with Acetic Acid)",
    description: "Screening method for detecting abnormalities in the female genitals, particularly for cervical cancer prevention.",
  },
  {
    id: 14,
    icon: <FaUserPlus size={100} />,
    title: "Voluntary Male Circumcision",
    description: "A surgical procedure for the removal of the foreskin of the penis, with proven health benefits.",
  },
];
const Services = () => {
  const renderServiceCard = serviceData.map((service) => {
    const eventListener = () => {
      alert(`Clicked on ${service.title}`);
    };

    return (
      <ServicesCard
        key={service.id}
        icon={service.icon}
        title={service.title}
        description={service.description}
        onClick={eventListener}
      />
    );
  });

  return (
    <div>
      <div className="flex flex-col items-center bg-gray-200 px-72">
        <div className="text-center mt-20">
          <h2 className="text-4xl font-extrabold text-black">OUR <span className="text-blue-700">SERVICES</span></h2>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderServiceCard}
        </div>
      </div>

      <div className="hero-banner py-72 relative"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'fit',
          backgroundPosition: 'center',
        }}>
        <div className='absolute inset-0 bg-blue-900 bg-opacity-80 py-24 px-72'>
          <div className="container mx-auto flex flex-col">
            <h1 className="text-white text-5xl my-8 font-extrabold text-center">Customer Reviews</h1>
            <div className='w-full flex justify-center'>
              <img src={dpImage} alt="Your Name" className="rounded-full w-40 h-40 mb-4" />
            </div>
            <p className="text-white text-lg mb-8 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>


            <h1 className="text-white text-2xl font-extrabold text-center">Munyaradzi Magodo</h1>

          </div>



        </div>
      </div>

    </div>
  );
};

export default Services;
