import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
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

  const handleGoogleLogin = async (credentialResponse: any) => {
    const { credential } = credentialResponse;
    try {
      const response = await axios.post("http://localhost:5000/api/auth/google-login", {
        idToken: credential,
      });

      // Handle success
      console.log(response.data);
      setMessage("Google login successful!"); // Display success message
      setTimeout(() => {
        navigate("/"); // Redirect to home page after successful login
      }, 2000); // Wait for 2 seconds before redirecting
    } catch (err) {
      // Handle error
      setError("Error logging in with Google. Please try again."); // Display an error message
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
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => setError("Login Failed")}
            />
            <button className="flex items-center justify-center px-6 py-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm">
              <FontAwesomeIcon icon={faApple} className="mr-3" />
              <span className="text-base font-medium">Apple</span>
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or sign up with</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-4"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-4"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-4"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-4"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg py-4 hover:bg-blue-700 transition-all duration-200"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;