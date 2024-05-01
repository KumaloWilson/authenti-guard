import { FaAmbulance, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import bgImg from '../assets/nursesbg1.jpeg';
import Button from '../components/Button';

const Home = () => {

  return (
    <div className='relative bg-white'>
      {/* Hero Banner */}
      <div className="hero-banner py-72 relative"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'fit',
          backgroundPosition: 'center',
        }}>
        <div className='absolute inset-0 bg-blue-900 bg-opacity-80 py-32 px-72'>
          <div className="container mx-auto">
            <div className="text-start w-4/12">
              <h1 className="text-white text-5xl my-8 font-extrabold">We Provide Best Medical Services</h1>
              <p className="text-white text-lg mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>

              <Button
                color='bg-white'
                hoverColor='bg-blue-700'
                text='Learn More'
                textColor='text-blue-700'
                textHoverColor='text-white'
                isRounded={false}
                link='/about'

              >

              </Button>
            </div>
          </div>
        </div>
      </div>




      {/* Features Section */}
      <div className="px-72 -top-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Feature 1 */}
          <div className="features-box bg-blue-900 text-white py-12 px-8">
            <FaCalendarAlt size={50} className='mb-4 text-white items-start' />
            <h3 className="text-xl font-bold mb-4">24 Hours Services</h3>
            <p className="text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
          </div>
          {/* Feature 2 */}
          <div className="features-box bg-blue-800 text-white py-12 px-8">
            <FaUsers size={50} className='mb-4 text-white items-start' />
            <h3 className="text-xl font-bold mb-4">Professional Staff</h3>
            <p className="text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
          </div>
          {/* Feature 3 */}
          <div className="features-box bg-blue-700 text-white py-12 px-8">
            <FaAmbulance size={50} className='mb-4 text-white items-start' />
            <h3 className="text-xl font-bold mb-4">Emergency Care</h3>
            <p className="text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


