import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-black w-screen flex items-center justify-center px-4">
      <div className="max-w-6xl w-full bg-[#151515] rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <img
            src="/images/movies.png"
            alt="Movies"
            className="h-48 md:h-full w-full object-cover rounded-t-lg md:rounded-tl-lg md:rounded-bl-lg"
          />
          <div className="absolute inset-0">
            <div className="h-full w-full bg-gradient-to-l from-black/60 to-transparent"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-[#111] p-6 md:p-10 flex flex-col justify-center">
          <div className="mb-4 md:mb-8">
            <img src="/images/speedo-prime.png" className="mx-auto" />
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
