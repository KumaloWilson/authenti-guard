import React, { useState } from 'react';
import axios from 'axios';
import loginbgImg from '../assets/loginbg.avif';
import paymentImg from '../assets/payment.png';
import { RingLoader } from 'react-spinners';

const API_URL = 'http://127.0.0.1:5000/predict/randomforest';
const TRANSACTION_API_URL = 'https://st-josephs-employee-database.onrender.com/transactions';

function generateUUID() {
    // Generate a random hexadecimal number
    const hexDigits = '0123456789abcdef';
    let uuid = '';
    for (let i = 0; i < 32; i++) {
        uuid += hexDigits[Math.floor(Math.random() * 16)];
    }

    // Format the UUID as per the UUID standard (8-4-4-4-12)
    return (
        uuid.substr(0, 8) +
        '-' +
        uuid.substr(8, 4) +
        '-' +
        uuid.substr(12, 4) +
        '-' +
        uuid.substr(16, 4) +
        '-' +
        uuid.substr(20)
    );
}

// Generate a random UUID
const randomUUID = generateUUID();

const ipAddresses = [
    "212.195.49.198",
    "123.456.789.012",
    "987.654.321.098",
    "111.222.333.444",
    "210.128.102.101",
    "54.32.11.89",
    "98.76.54.32",
    "203.128.56.78",
    "87.65.43.21",
    "45.67.89.123",
    "143.89.12.76",
    "76.98.32.54",
    "192.168.0.1",
    "10.0.0.1",
    "172.16.0.1",
    "185.92.220.1",
    "104.16.22.100",
    "13.32.76.45",
    "77.88.99.11",
    "34.224.102.23"
];
const reasons = [
    "Unusual Purchase Frequency",
    "Unusual Purchase Amount",
    "Unusual Behavior Compared to User History",
    "Large Number of Accounts Linked to Same Device",
    "Abnormal Purchase Patterns",
    "Unusual Transaction Location",
    "Unusual Transaction Method",
    "Mismatched Cardholder Name and Billing Information",
    "Unusually High Transaction Volume",
    "Rapid Series of Transactions",
    "Unusual IP Address",
    "Unusual Transaction Amount",
    "Unusual Transaction Time or Frequency",
    "Unusual Device or Location",
    "Invalid Card Information",
    "Previous Fraudulent Activity",
    "Unusual Customer Behavior"
];


const randomIP = ipAddresses[Math.floor(Math.random() * ipAddresses.length)];
const randomReason = reasons[Math.floor(Math.random() * reasons.length)];

const PredictionForm: React.FC = () => {
    const [formData, setFormData] = useState({
        "Transaction ID": "",
        "Customer ID": "",
        "Shipping Address": "",
        "Billing Address": "",
        "IP Address": "",
        "Transaction Amount": 0,
        "Transaction Date": "",
        "Payment Method": "",
        "Product Category": "",
        "Quantity": 0,
        "Customer Age": 0,
        "Customer Location": "",
        "Device Used": "",
        "Account Age Days": 0,
        "Card Number": "",
        "Card Holder's Name": "",
        "Expiry Date": "",
        "CVV": ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const [loading, setLoading] = useState(false);
    const [showResponse, setShowResponse] = useState(false);
    const [prediction, setPrediction] = useState("");
    const [reason, setReason] = useState("");

    const handleTransaction = async (status: string, reason: string) => {
        try {
            const transactionData = {
                "Transaction_ID": randomUUID,
                "Customer_ID": 'w1b87f62-51b2-493b-ad6a-77e0fe13e098',
                "Shipping_Address": formData["Shipping Address"],
                "Billing_Address": formData["Billing Address"],
                "IP_Address": randomIP,
                "Transaction_Amount": formData["Transaction Amount"],
                "Transaction_Date": "01/05/2024 13:58",
                "Payment_Method": 'credit card',
                "Product_Category": 'electronic',
                "Quantity": formData["Quantity"],
                "Customer_Age": formData["Customer Age"],
                "Customer_Location": formData["Customer Location"],
                "Device_Used": 'desktop',
                "Account_Age_Days": 67,
                "Status": status,
                "Reason": reason,
            };
            await axios.post(TRANSACTION_API_URL, transactionData);
        } catch (error) {
            console.error('Error submitting transaction data:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            setShowResponse(false);

            const fraudData = {
                "Transaction ID": randomIP,
                "Customer ID": "d1b87f62-51b2-493b-ad6a-77e0fe13e785",
                "Shipping Address": formData['Shipping Address'],
                "Billing Address": formData['Shipping Address'],
                "IP Address": randomIP,
                "Transaction Amount": formData['Transaction Amount'],
                "Transaction Date": "01/05/2024 13:58",
                "Payment Method": "credit card",
                "Product Category": "electronics",
                "Quantity": formData['Quantity'],
                "Customer Age": formData['Customer Age'],
                "Customer Location": formData['Customer Location'],
                "Device Used": "desktop",
                "Account Age Days": 67
            }

            const response = await axios.post(API_URL, fraudData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setPrediction(response.data.prediction);
            setReason(response.data.reason || "");
            setShowResponse(true);
            if (response.data.prediction.includes("Fraudulent")) {
                const confirmed = window.confirm("This transaction is flagged as fraudulent. Press OK to flag the user.");
                if (confirmed) {
                    await handleTransaction("Fraudulent", response.data.reason || randomReason);
                }
            } else {
                const confirmed = window.confirm("Payment successful. Press OK to continue.");
                if (confirmed) {
                    await handleTransaction("Legit", response.data.reason || "");
                }
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-100" style={{ backgroundImage: `url(${loginbgImg})` }}>
            <div className="w-1/2 p-8 bg-gray-100 rounded-xl text-center my-16">
                <div className="space-y-8 m-20">
                    <div>
                        <img className="mx-auto h-20 w-20" src={paymentImg} alt="Logo" />
                        <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">Make Payment</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" name="Card Number" placeholder="Card Number" required onChange={handleChange} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="text" name="Card Holder's Name" placeholder="Card Holder's Name" required onChange={handleChange} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="date" name="Expiry Date" placeholder="Expiry Date" required onChange={handleChange} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="text" name="CVV" placeholder="CVV" required onChange={handleChange} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="text" name="Shipping Address" placeholder="Shipping Address" required onChange={handleChange} className="px-3 py-2 col-span-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="text" name="Billing Address" placeholder="Billing Address" required onChange={handleChange} className="px-3 py-2 col-span-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="hidden" name="IP Address" placeholder="IP Address" required onChange={handleChange} className="px-3 py-2 col-span-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="number" name="Transaction Amount" placeholder="Transaction Amount" required onChange={handleChange} className="px-3 py-2 col-span-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="hidden" name="Transaction Date" placeholder="Transaction Date" required onChange={handleChange} className="px-3 py-2 col-span-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="hidden" name="Payment Method" placeholder="Payment Method" required onChange={handleChange} className="px-3 py-2 col-span-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="hidden" name="Product Category" placeholder="Product Category" required onChange={handleChange} className="px-3 py-2 col-span-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="number" name="Quantity" placeholder="Quantity" required onChange={handleChange} className="px-3 py-2 col-span-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="number" name="Customer Age" placeholder="Customer Age" required onChange={handleChange} className="px-3 py-2 col-span-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="text" name="Customer Location" placeholder="Customer Location" required onChange={handleChange} className="px-3 py-2 col-span-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="hidden" name="Device Used" placeholder="Device Used" required onChange={handleChange} className="px-3 py-2 col-span-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="hidden" name="Account Age Days" placeholder="Account Age Days" required onChange={handleChange} className="px-3 py-2 col-span-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                        </div>
                        <button type="submit" className="py-2 px-4 mt-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            {loading ? (
                                <RingLoader color="#fff" loading={loading} size={24} />
                            ) : (
                                "Make Payment"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PredictionForm;
