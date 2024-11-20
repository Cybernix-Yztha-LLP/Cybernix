import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import axios from "axios";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // Add message state
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Handle success (e.g., save token, redirect)
      console.log(response.data); // You can save the token in local storage or context
      setMessage("Login successful!"); // Display success message
      setTimeout(() => {
        navigate("/"); // Redirect to home or another page after successful login
      }, 2000); // Wait for 2 seconds before redirecting
    } catch (err) {
      // Handle error
      setError("Invalid email or password"); // Display an error message
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
      <div className="flex flex-col items-center">
        <div className="text-sm text-gray-500 mb-8 self-start">
          <span>Home</span>
          <span className="mx-2">{">"}</span>
          <span>Login</span>
        </div>

        <h1 className="text-5xl font-bold mb-16 text-center">Login</h1>

        {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message */}
        {message && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">{message}</span>
          </div>
        )} {/* Display success message */}

        <div className="w-full max-w-xl space-y-8">
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
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-base">
              <span className="px-6 bg-white text-gray-500">or continue with</span>
            </ div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>

          <div className="text-sm text-center">
            <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</Link>
          </div>

          <div className="text-sm text-center">
            <span>Don't have an account? </span>
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;