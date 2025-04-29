import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow overflow-y-auto max-h-[calc(100vh-167px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
