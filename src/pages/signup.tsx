import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import loginimg from "../assets/login.png";
import loginbgimg from "../assets/loginbg.avif";
import { auth } from "../services/firebaseauth";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");

    const handleRememberMe = (e) => {
        if (e.target.checked) {
            localStorage.setItem("rememberedEmail", email);
        } else {
            localStorage.removeItem("rememberedEmail");
        }
    };

    const register = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, {
                displayName: name, // Use the name state variable here
            });

            await sendEmailVerification(user);
            setRegisterStatus("Verification email sent! Please check your inbox.");
            // navigate to email verification screen here (implementation depends on your framework)
        } catch (error) {
            setRegisterStatus(error.message);
        }
    };

    return (


        <div className="flex flex-col items-center justify-center h-screen bg-gray-100" style={{ backgroundImage: `url(${loginbgimg})` }}>
            <div className="border-4 border-solid border-slate-100 min-w-1/4 max-w-1/4 p-8 bg-slate-100 rounded-2xl text-center duration-500 ease-in hover:border-blue-500 hover:transform transition-transform transform hover:scale-105">
                <div className="space-y-8 m-20">
                    <div>
                        <img className="mx-auto h-20 w-20" src={loginimg} alt="Logo" />
                        <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">Create your Account</h2>
                        <p className="text-red-500 mb-4">{registerStatus}</p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={register}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="name" className="sr-only">Username</label>
                                <input id="username" name="username" type="text" autoComplete="username" onChange={(e) => {
                                    setName(e.target.value);
                                }} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:border-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Username" value={name} />
                            </div>


                            <div className="my-4">
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autoComplete="email" onChange={(e) => {
                                    setEmail(e.target.value);
                                }} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none p-4 focus:border-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address" value={email} />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input id="password" name="password" type="password" autoComplete="current-password" onChange={(e) => {
                                    setPassword(e.target.value);
                                }} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:border-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-primary"
                                        onChange={handleRememberMe}
                                    />
                                    <span className="ml-2">Remember me</span>
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-blue-500 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-5a2 2 0 114 0h-4z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Create Account
                            </button>

                            <div className="text-sm mt-3 text-center">
                                <p className="font-medium text-black">
                                    Already have an Account{" "}
                                    <Link to="/login" className="text-blue-500 font-bold hover:underline">Log In</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;