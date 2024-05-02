import { FaBrain, FaClock, FaRobot, } from 'react-icons/fa';
import bgImg from '../assets/nursesbg1.jpg';
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
              <h1 className="text-white text-5xl my-8 font-extrabold">Detect Transaction Fraud With Ease</h1>
              <p className="text-white text-lg mb-8">Protect your finances with cutting-edge solutions for detecting transaction fraud and preventing financial losses.</p>


              <div className='flex'>
                <Button
                  color='bg-white'
                  hoverColor='bg-blue-700'
                  text='Learn More'
                  textColor='text-blue-700'
                  textHoverColor='text-white'
                  isRounded={false}
                  link='/information'

                >

                </Button>

                <div className='mx-4'></div>

                <Button
                  color='bg-white'
                  hoverColor='bg-blue-700'
                  text='Dashboard'
                  textColor='text-blue-700'
                  textHoverColor='text-white'
                  isRounded={false}
                  link='/dashboard'

                >

                </Button>

              </div>

            </div>
          </div>
        </div>
      </div>




      {/* Features Section */}
      <div className="px-72 -top-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Feature 1 */}
          <div className="features-box bg-blue-900 text-white py-12 px-8">
            <FaRobot size={50} className='mb-4 text-white items-start' />
            <h3 className="text-xl font-bold mb-4">Random Forest</h3>
            <p className="text-base">Detect fraudulent transactions with precision using Random Forest algorithms, providing accurate results and enhanced security measures.</p>
          </div>
          {/* Feature 2 */}
          <div className="features-box bg-blue-800 text-white py-12 px-8">
            <FaBrain size={50} className='mb-4 text-white items-start' />
            <h3 className="text-xl font-bold mb-4">Artficial Neural Networks</h3>
            <p className="text-base">Leverage the power of Artificial Neural Networks to uncover hidden patterns and anomalies in transaction data, enabling advanced fraud detection and prevention capabilities.</p>
          </div>
          {/* Feature 3 */}
          <div className="features-box bg-blue-700 text-white py-12 px-8">
            <FaClock size={50} className='mb-4 text-white items-start' />
            <h3 className="text-xl font-bold mb-4">Real Time Detection</h3>
            <p className="text-base">Stay ahead of fraudulent activity with our lightning-fast detection system, analyzing transactions in real-time to identify and prevent financial losses before they occur.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


