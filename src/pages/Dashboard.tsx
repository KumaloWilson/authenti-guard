import { useInView } from "react-intersection-observer";
import TypeWriter from "../components/TypeWriter";
import { animated, useSpring } from "react-spring";
import { FaBrain, FaClock, FaExchangeAlt, FaMoneyBillAlt, FaRobot, FaShieldVirus, FaUsers } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";




const Dashboard = () => {

  const [totalTransactions, setTotalTransactions] = useState();
  const [customersCount, setCustomersCount] = useState();
  const [fraudulentTransactionsCount, setFraudulentTransactionsCount] = useState();
  const [legitTransactionsCount, setLegitTransactionsCount] = useState();

  useEffect(() => {
    axios.get('https://st-josephs-employee-database.onrender.com/transactions/total')
      .then(res => {
        setTotalTransactions(res.data.admin);
      })
      .catch(err => console.log(err));

    axios.get('https://st-josephs-employee-database.onrender.com/employees/total', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      setCustomersCount(res.data.totalEmployees);
    }).catch(err => console.log(err));

    axios.get('http://localhost:3001/salary')
      .then(res => {
        setFraudulentTransactionsCount(res.data[0].sumOfSalary);
      })
      .catch(err => console.log(err));
  }, []);


  return (
    <div className=" flex flex-col items-center bg-white">
      <div className="text-center mt-20">
        <h2 className="text-4xl font-extrabold text-black">DASH<span className="text-blue-700">BOARD</span></h2>
      </div>

      <div className="mt-4">
        <TypeWriter />
      </div>


      <div className="bg-white  px-72 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="features-box bg-blue-900 text-white py-12 px-8">
            <div className='flex justify-between'>

              <FaUsers size={50} className='mb-4 text-white items-start' />


              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-end">TOTAL</h3>
                <h3 className="text-2xl font-extrabold text-end">CUSTOMERS</h3>
              </div>

            </div>
            <p className="text-base text-center mb-4">Hey there, Superstar! 🌟 We're absolutely thrilled to announce that we've hit a milestone of {customersCount} incredible customers are now part of our family🚀!</p>
            <h3 className="text-5xl text-center font-extrabold mb-4">{customersCount ?? 0}</h3>
          </div>
          {/* Feature 2 */}
          <div className="features-box bg-blue-800 text-white py-12 px-8">

            <div className='flex justify-between'>

              <FaExchangeAlt size={50} className='mb-4 text-white items-start' />


              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-end">TOTAL</h3>
                <h3 className="text-2xl font-extrabold text-end">TRANSACTIONS</h3>
              </div>

            </div>
            <p className="text-base text-center mb-4">Brace yourself for some epic news: we've processed a whopping {totalTransactions ?? 0} transactions! 💸✨ That's right, each transaction represents a moment of trust, a step forward, and a celebration of our incredible journey together.</p>
            <h3 className="text-5xl text-center font-extrabold mb-4">{totalTransactions ?? 0}</h3>

          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Feature 1 */}
          <div className="features-box bg-blue-900 text-white py-12 px-8">
            <div className='flex justify-between'>

              <FaUsers size={50} className='mb-4 text-white items-start' />


              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-end">CLEAN</h3>
                <h3 className="text-2xl font-extrabold text-end">TRANSACTIONS</h3>
              </div>

            </div>
            <p className="text-base text-center mb-4">High-five, everyone! 🙌 Our clean transactions tally just hit {legitTransactionsCount ?? 0}!. Each clean transaction represents a smooth journey, a satisfied customer, and a job well done.  🎉 Here's to the transparency, reliability, and excellence that define us.</p>
            <h3 className="text-5xl text-center font-extrabold mb-4">{customersCount ?? 0}</h3>
          </div>

          <div className="features-box bg-blue-700 text-white py-12 px-8">

            <div className='flex justify-between'>

              <FaShieldVirus size={50} className='mb-4 text-white items-start' />


              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-end">FRAUDS</h3>
                <h3 className="text-2xl font-extrabold text-end">DETECTED</h3>
              </div>

            </div>
            <p className="text-base text-center mb-4">Hold onto your hats! 🎩 We've detected and thwarted {fraudulentTransactionsCount ?? 0} fraudulent transactions! With each fraudulent attempt, we stand tall and push back, safeguarding the integrity of our platform and the trust of our valued users.</p>
            <h3 className="text-5xl text-center font-extrabold mb-4">{fraudulentTransactionsCount ?? 0}</h3>
          </div>

        </div>

      </div>



    </div>
  );
};

export default Dashboard;
