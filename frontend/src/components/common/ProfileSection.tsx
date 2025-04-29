import React from "react";
import ProfileCard from "./ProfileCard";
import { IoCallOutline } from "react-icons/io5";

const ProfileSection: React.FC = () => {
  return (
    <div className="w-full md:w-3/4 p-4 space-y-6">
      <div className="bg-[#1c1c1c] p-4 rounded-lg flex items-center space-x-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <IoCallOutline className="text-lg" />
        </div>
        <div className="text-lg font-semibold">
          Logged with
          <br />
          8699780274
        </div>
      </div>

      <div className="bg-[#1c1c1c] p-6 rounded-lg space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Manage Profiles</h3>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
            + Add New Profile
          </button>
        </div>

        <div className="space-y-4">
          <ProfileCard name="Profile Name" isYourProfile />
          <ProfileCard name="Profile Name" />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
