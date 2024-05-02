import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEye, FaTrash, FaFileExcel, FaSearch } from 'react-icons/fa';
import * as XLSX from 'xlsx';

interface Customer {
  CustomerID: string;
  CustomerName: string;
  CustomerEmail: string;
  CustomerLocation: string;
  Phone: string;
}

const CustomerRecords = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('https://st-josephs-employee-database.onrender.com/employees', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchCustomers();
  }, []);

  const handleViewEmployee = (id: string) => {
    // Logic to view employee details
  };

  const handleDeleteCustomer = (id: string) => {
    // Logic to delete employee
  };

  const handleExportToExcel = () => {
    const flattenedData = customers.map(customer => {
      return {
        Name: customer.CustomerName,
        ID: customer.CustomerID,
        Email: customer.CustomerEmail,
        Address: customer.CustomerLocation,
        Phone: customer.Phone,
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(flattenedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Customers');
    XLSX.writeFile(workbook, 'customers.xlsx');
  };


  const filteredEmployees = customers.filter(employee =>
    employee.CustomerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-72 py-8 bg-white">
      <h2 className="text-4xl text-center mb-8 font-extrabold text-black">CUSTOMERS <span className="text-blue-700">LIST</span></h2>
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="border border-blue-300 rounded py-2 px-4 pr-10 w-full"
          />
          <FaSearch className="absolute right-3 top-3 text-blue-500" />
        </div>
        <button
          onClick={handleExportToExcel}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
        >
          <FaFileExcel className="mr-2" />
          Export to Excel
        </button>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((customer, index) => (
            <tr key={customer.CustomerID} className={index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}>
              <td className="px-4 py-2">{customer.CustomerID}</td>
              <td className="px-4 py-2">{customer.CustomerName}</td>
              <td className="px-4 py-2">{customer.CustomerEmail}</td>
              <td className="px-4 py-2">{customer.CustomerLocation}</td>
              <td className="px-4 py-2">{customer.Phone}</td>
              <td className="px-4 py-2 flex justify-between items-center">
                <FaEye
                  className="text-blue-500 cursor-pointer hover:text-blue-700 mr-2"
                  onClick={() => handleViewEmployee(customer.CustomerID)}
                />
                <FaTrash
                  className="text-red-500 cursor-pointer hover:text-red-700 mr-2"
                  onClick={() => handleDeleteCustomer(customer.CustomerID)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerRecords;
