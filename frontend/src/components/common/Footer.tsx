import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center  justify-between text-gray-500 text-sm text-center py-4 px-8 border-t border-gray-800">
      <div>© 2025 Speedo Prime. All Rights Reserved.</div>
      <div className="flex items-center justify-center space-x-6 mt-2">
        <a href="#" className="hover:underline">
          Terms Of Use
        </a>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Policy
        </a>
        <a href="#" className="hover:underline">
          FAQ
        </a>
      </div>
    </footer>
  );
};

export default Footer;
