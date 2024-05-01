import React from 'react';
import { useState, useEffect } from 'react';
import verificationImage from '../assets/verifyemail.png'; // Import your verification image
import { Link } from 'react-router-dom';

function EmailVerification() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                    <div className="text-center">
                        <img
                            src={verificationImage}
                            alt="Verification"
                            className={`mx-auto h-24 ${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}
                        />
                        <h1 className="text-3xl font-bold mt-4">Verify Your Email Address</h1>
                        <p className="mt-2 text-gray-600">A verification email has been sent to your email address. Please check your inbox and click on the verification link to complete the registration process.</p>


                        <Link to="/">
                            <button type="submit" className="group relative w-full flex justify-center mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-blue-500 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-5a2 2 0 114 0h-4z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Done
                            </button>

                        </Link>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailVerification;
