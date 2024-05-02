import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFileExcel, FaSearch } from 'react-icons/fa';
import * as XLSX from 'xlsx';

interface Transactions {
  Transaction_ID: string,
  Customer_ID: string,
  Shipping_Address: string,
  Billing_Address: string,
  IP_Address: string,
  Transaction_Amount: any,
  Transaction_Date: string,
  Payment_Method: string,
  Product_Category: string,
  Quantity: any,
  Customer_Age: any,
  Customer_Location: string,
  Device_Used: string,
  Account_Age_Days: any,
  Status: string,
  Reason: string
}

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('https://st-josephs-employee-database.onrender.com/transactions', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchTransactions();
  }, []);

  const handleViewEmployee = (id: string) => {
    // Logic to view employee details
  };

  const handleDeleteEmployee = (id: string) => {
    // Logic to delete employee
  };

  const handleExportToExcel = () => {
    const flattenedData = transactions.map(transaction => {
      return {
        Transaction_ID: transaction.Transaction_ID,
        Customer_ID: transaction.Customer_ID,
        Shipping_Address: transaction.Shipping_Address,
        Billing_Address: transaction.Billing_Address,
        IP_Address: transaction.IP_Address,
        Transaction_Amount: transaction.Transaction_Amount,
        Transaction_Date: transaction.Transaction_Date,
        Payment_Method: transaction.Payment_Method,
        Product_Category: transaction.Product_Category,
        Quantity: transaction.Quantity,
        Customer_Age: transaction.Customer_Age,
        Customer_Location: transaction.Customer_Location,
        Device_Used: transaction.Device_Used,
        Account_Age_Days: transaction.Account_Age_Days,
        Status: transaction.Status,
        Reason: transaction.Reason
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(flattenedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');
    XLSX.writeFile(workbook, 'transactions.xlsx');
  };


  const filteredEmployees = transactions.filter(transaction =>
    transaction.Customer_ID.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-72 py-8 bg-white">
      <h2 className="text-4xl text-center mb-8 font-extrabold text-black">TRANSACTIONS <span className="text-blue-700">LIST</span></h2>
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Customer ID..."
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
            <th className="px-4 py-2">Customer ID</th>
            <th className="px-4 py-2">Payment Method</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Billing Address</th>
            <th className="px-4 py-2">Shipping Address</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Reason</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((transaction, index) => (
            <tr key={transaction.Customer_ID} className={index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}>
              <td className="px-4 py-2">{transaction.Customer_ID}</td>
              <td className="px-4 py-2">{transaction.Payment_Method}</td>
              <td className="px-4 py-2">{`$ ${transaction.Transaction_Amount}`}</td>
              <td className="px-4 py-2">{transaction.Transaction_Date}</td>
              <td className="px-4 py-2">{transaction.Billing_Address}</td>
              <td className="px-4 py-2">{transaction.Shipping_Address}</td>
              <td className={`${transaction.Status == 'Legit' ? 'text-green-500' : 'text-red-500'} px-4 py-2 font-bold`}>{transaction.Status}</td>
              <td className="px-4 py-2">{transaction.Reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
