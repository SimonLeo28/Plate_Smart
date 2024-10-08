// src/components/Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-whitesmoke text-black py-4"> {/* Kept reduced height with py-4 */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Plate Smart</h2>
            <p className="text-sm mt-2">
              Serving food is better than wasting food.
            </p>
          </div>

          {/* All Rights Reserved */}
          <div className="text-black mb-4 md:mb-0">
            <p>© 2024 PLATE SMART. All rights reserved.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61566359181940" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="www.linkedin.com/in/ise-department-aiems-21977b329" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
