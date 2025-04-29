import React from "react";
import Sidebar from "../common/Sidebar";
import ProfileSection from "../common/ProfileSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col md:flex-row p-8">
        <Sidebar />
        <ProfileSection />
      </div>
    </div>
  );
};

export default Home;
