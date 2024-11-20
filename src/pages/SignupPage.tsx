import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupPage: React.FC = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // Message state for success
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        firstname,
        lastname,
        email,
        password,
      });

      // Handle success
      console.log(response.data); // You can save the token in local storage or context
      setMessage("Account created successfully!"); // Display success message
      setTimeout(() => {
        navigate("/login"); // Redirect to login page after successful signup
      }, 2000); // Wait for 2 seconds before redirecting
    } catch (err) {
      // Handle error
      setError("Error creating account. Please try again."); // Display an error message
      console.error(err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      {/* Center content */}
      <div className="flex flex-col items-center">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8 self-start">
          <span>Home</span>
          <span className="mx-2">{">"}</span>
          <span>Signup</span>
        </div>

        <h1 className="text-5xl font-bold mb-16 text-center">Create Account</h1>

        {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message */}
        {message && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">{message}</span>
          </div>
        )} {/* Display success message */}

        <div className="w-full max-w-xl space-y-8">
          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-6">
            <button className="flex items-center justify-center px-6 py-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm">
              <FontAwesomeIcon icon={faGoogle} className="text-red-500 mr-3" />
              <span className="text-base font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center px-6 py-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm">
              <FontAwesomeIcon icon={faApple} className="mr-3" />
              <span className="text-base font-medium">Apple</span>
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-base">
              <span className="px-6 bg-white text-gray-500">or continue with</span>
            </div>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text" // Corrected this line
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value )} // Update firstname state
                  className="block w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)} // Update lastname state
                  className="block w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                className="block w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                className="block w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            >
              Create Account
            </button>
          </form>

          <p className="text-base text-gray-600 text-center">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;