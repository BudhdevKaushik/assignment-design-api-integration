import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <h2 className="text-2xl font-semibold text-white mb-2">
        Create an account
      </h2>
      <p className="text-sm text-gray-400 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-[#222] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-500"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full bg-[#222] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-500"
        />

        <div className="flex items-start gap-2 text-sm text-gray-400">
          <input type="checkbox" id="terms" className="mt-1" />
          <label htmlFor="terms" className="leading-tight">
            You have agreed to Speedo Prime{" "}
            <span className="text-blue-400 underline cursor-pointer">
              Privacy Policy
            </span>
            ,{" "}
            <span className="text-blue-400 underline cursor-pointer">
              Rules and Regulation
            </span>
            , that you will abide by all the internal updates and policies of
            the platform.
          </label>
        </div>

        <button
          onClick={() => navigate("/")}
          type="submit"
          className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition duration-300"
        >
          Verify Account
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-6">
        Already have an account?{" "}
        <Link to="/auth" className="text-red-500 hover:underline">
          Login
        </Link>
      </p>
    </Fragment>
  );
};

export default Register;
