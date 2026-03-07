import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-teal-950 text-teal-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-5">
            TYC Tanzania
          </h3>
          <p className="opacity-70 max-w-md leading-relaxed">
            The Tanzania Youth Children is a membership-based organization
            focused on giving youth a voice in national and international
            policy making.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 uppercase text-sm tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-3 opacity-70">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/membership">Join Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 uppercase text-sm tracking-widest">
            Contact
          </h4>
          <p className="opacity-70 text-sm">Shinyanga, Tanzania</p>
          <p className="opacity-70 text-sm">info@tyc.or.tz</p>
        </div>
      </div>

      <div className="mt-16 border-t border-teal-900 pt-6 text-center text-xs opacity-50">
        © 2026 Tanzania Youth Children. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;