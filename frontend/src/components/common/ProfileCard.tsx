import React from "react";
import { FaChevronRight } from "react-icons/fa";

interface ProfileCardProps {
  name: string;
  isYourProfile?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, isYourProfile }) => {
  return (
    <div className="flex items-center justify-between bg-[#2c2c2c] p-4 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7b0b0b] to-black flex items-center justify-center shadow-md">
          <img
            src="/images/profile-pic.png"
            alt="Profile Icon"
            className="w-12 h-12"
          />
        </div>

        <span className="font-semibold">{name}</span>
      </div>
      {isYourProfile ? (
        <button className="bg-[#323131] text-white px-3 py-1 rounded-md text-xs">
          Your profile
        </button>
      ) : (
        <FaChevronRight className="text-gray-400" />
      )}
    </div>
  );
};

export default ProfileCard;
