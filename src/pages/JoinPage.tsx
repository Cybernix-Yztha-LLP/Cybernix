// src/pages/JoinPage.tsx
import { User, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const JoinPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <span>Home</span>
        <span className="mx-2">{">"}</span>
        <span>Join</span>
      </div>

      <h1 className="text-5xl font-bold mb-16 text-center">Join Cybernix</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
          <div className="space-y-6">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold">Login</h2>
            <p className="text-gray-600">
              Already have an account? Sign in to access your dashboard and continue learning.
            </p>
            <Button variant="primary" to="/login">
              Sign in
            </Button>
          </div>
        </div>

        {/* Sign Up Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
          <div className="space-y-6">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <UserPlus className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold">Create Account</h2>
            <p className="text-gray-600">
              New to Cybernix? Create an account to start your learning journey today.
            </p>
            <Button variant="secondary" to="/signup">
              Create account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;