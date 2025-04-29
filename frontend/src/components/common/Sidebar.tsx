import React from "react";
import { FaDesktop, FaCog } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="w-full md:w-1/4 p-4">
      <h2 className="text-2xl mb-6 font-semibold">Account</h2>
      <div className="bg-[#1c1c1c] p-6 rounded-lg space-y-6 text-gray-400">
        <div>Membership</div>
        <div className="flex items-center space-x-2">
          <FaDesktop /> <span>Devices</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaCog /> <span>Settings</span>
        </div>
        <div className="text-white font-semibold">Profile</div>
      </div>
    </div>
  );
};

export default Sidebar;
