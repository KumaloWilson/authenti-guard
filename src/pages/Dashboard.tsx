import { useInView } from "react-intersection-observer";
import TypeWriter from "../components/TypeWriter";
import { animated, useSpring } from "react-spring";
import { FaBrain, FaClock, FaRobot } from "react-icons/fa";




const Dashboard = () => {

  return (
    <div className=" flex flex-col items-center bg-white">
      <div className="text-center mt-20">
        <h2 className="text-4xl font-extrabold text-black">DASH<span className="text-blue-700">BOARD</span></h2>
      </div>

      <div className="mt-4">
        <TypeWriter />
      </div>


      <div className="bg-white  px-72 py-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="features-box bg-blue-900 text-white py-12 px-8">
            <div className='flex justify-between'>

              <FaRobot size={50} className='mb-4 text-white items-start' />


              <h3 className="text-7xl font-extrabold mb-4">200</h3>

            </div>
            <p className="text-base">Detect fraudulent transactions with precision using Random Forest algorithms, providing accurate results and enhanced security measures.</p>
          </div>
          {/* Feature 2 */}
          <div className="features-box bg-blue-800 text-white py-12 px-8">
            <div className='flex justify-between'>

              <FaRobot size={50} className='mb-4 text-white items-start' />


              <h3 className="text-7xl font-extrabold mb-4">200</h3>

            </div>
            <p className="text-base">Leverage the power of Artificial Neural Networks to uncover hidden patterns and anomalies in transaction data, enabling advanced fraud detection and prevention capabilities.</p>
          </div>
          {/* Feature 3 */}
          <div className="features-box bg-blue-700 text-white py-12 px-8">
            <div className='flex justify-between'>

              <FaRobot size={50} className='mb-4 text-white items-start' />


              <h3 className="text-7xl font-extrabold mb-4">200</h3>

            </div>
            <p className="text-base">Stay ahead of fraudulent activity with our lightning-fast detection system, analyzing transactions in real-time to identify and prevent financial losses before they occur.</p>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Feature 1 */}
          <div className="features-box bg-blue-900 text-white py-12 px-8">
            <div className='flex justify-between'>

              <FaRobot size={50} className='mb-4 text-white items-start' />


              <h3 className="text-7xl font-extrabold mb-4">200</h3>

            </div>
            <p className="text-base">Detect fraudulent transactions with precision using Random Forest algorithms, providing accurate results and enhanced security measures.</p>
          </div>
          {/* Feature 2 */}
          <div className="features-box bg-blue-800 text-white py-12 px-8">
            <div className='flex justify-between'>

              <FaRobot size={50} className='mb-4 text-white items-start' />


              <h3 className="text-7xl font-extrabold mb-4">200</h3>

            </div>
            <p className="text-base">Leverage the power of Artificial Neural Networks to uncover hidden patterns and anomalies in transaction data, enabling advanced fraud detection and prevention capabilities.</p>
          </div>
          {/* Feature 3 */}
          <div className="features-box bg-blue-700 text-white py-12 px-8">
            <div className='flex justify-between'>

              <FaRobot size={50} className='mb-4 text-white items-start' />


              <h3 className="text-7xl font-extrabold mb-4">200</h3>

            </div>
            <p className="text-base">Stay ahead of fraudulent activity with our lightning-fast detection system, analyzing transactions in real-time to identify and prevent financial losses before they occur.</p>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Dashboard;
