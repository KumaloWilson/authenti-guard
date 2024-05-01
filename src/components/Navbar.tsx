import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const isCurrentTab = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-blue-900 p-5 text-white ">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold hover:text-cyan-400 transition duration-300 hover:font-bold"
          >

            <div className='flex items-center'>
              <div className='bg-white mr-4 p-2 rounded-lg'>
                <img src={logoImg} alt="logo" className="w-20 h-20" />
              </div>
              <h1 className="text-2xl font-bold mb-2 text-white">St Joseph's Mission Hospital</h1>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-cyan-400 focus:outline-none font-bold">
              {/* Menu Icon (you can use an icon library or create your own) */}
              {isMenuOpen ? <FaTimes size='25' /> : <FaBars size='25' />}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-6">
            <Link
              to="/"
              className={
                isCurrentTab('/') ? 'font-bold text-white text-lg' : 'transition duration-300 hover:font-bold hover:text-gray-500 hover:text-lg text-lg'
              }
            >
              Home
            </Link>


            <Link
              to="/dashboard"
              className={
                isCurrentTab('/dashboard') ? 'font-bold text-white text-lg' : 'transition duration-300 hover:font-bold hover:text-gray-500 hover:text-lg text-lg'
              }
            >
              Dashboard
            </Link>
            <Link
              to="/customerrecords"
              className={
                isCurrentTab('/customerrecords') ? 'font-bold text-white text-lg' : 'transition duration-300 hover:font-bold hover:text-gray-500 hover:text-lg text-lg'
              }
            >
              Customer Records
            </Link>
            <Link
              to="/transactions"
              className={
                isCurrentTab('/transactions') ? 'font-bold text-white text-lg' : 'transition duration-300 hover:font-bold hover:text-gray-500 hover:text-lg text-lg'
              }
            >
              Transactions
            </Link>



            <Link
              to="/info"
              className={
                isCurrentTab('/info') ? 'font-bold text-white text-lg' : 'transition duration-300 hover:font-bold hover:text-gray-500 hover:text-lg text-lg'
              }
            >
              Info
            </Link>
          </div>
        </div>

        {/* Conditionally render the menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2">
            <Link onClick={toggleMenu} to="/" className="block py-2">Home</Link>
            <Link onClick={toggleMenu} to="/dashboard" className="block py-2">Dashboard</Link>
            <Link onClick={toggleMenu} to="/customerrecords" className="block py-2">Customer Records</Link>
            <Link onClick={toggleMenu} to="/transactions" className="block py-2">Transactions</Link>
            <Link onClick={toggleMenu} to="/info" className="block py-2">Info</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
