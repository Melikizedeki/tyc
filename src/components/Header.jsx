import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopAboutOpen, setDesktopAboutOpen] = useState(false);
  const [desktopPublicationsOpen, setDesktopPublicationsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobilePublicationsOpen, setMobilePublicationsOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  const aboutRef = useRef(null);
  const publicationsRef = useRef(null);

  // Close desktop dropdowns if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setDesktopAboutOpen(false);
      }
      if (publicationsRef.current && !publicationsRef.current.contains(event.target)) {
        setDesktopPublicationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">

      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="TYC Logo" className="w-10 h-10" />
          <h1 className="text-lg sm:text-xl font-bold text-teal-800">Tanzania Youth Children</h1>
        </div>

        {/* DESKTOP SOCIAL + DONATE */}
        <div className="hidden md:flex items-center gap-6 text-teal-700 text-lg">
          <a href="https://www.facebook.com/people/Tanzanian-Youth-and-Children/61588276603612/" className="hover:text-teal-500 transition">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          <a href="#" className="hover:text-teal-500 transition">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>

          <a href="https://www.instagram.com/tanzanian_youth_children/" className="hover:text-teal-500 transition">
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a href="https://www.linkedin.com/feed/" className="hover:text-teal-500 transition">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

          <button
            onClick={() => setDonateOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
          >
            Donate
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="md:hidden text-2xl text-teal-800"
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
        </button>

      </div>

      {/* DESKTOP NAV */}
      <nav className="hidden md:block bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto flex justify-center gap-10 py-4 text-sm font-semibold uppercase">

          <Link to="/" className="hover:text-teal-300 transition">Home</Link>

          {/* Desktop About */}
          <div className="relative" ref={aboutRef}>
            <button
              onClick={() => setDesktopAboutOpen(prev => !prev)}
              className="hover:text-teal-300 transition"
            >
              ABOUT US
            </button>

            {desktopAboutOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-10 w-64 bg-white text-teal-900 rounded-xl shadow-xl p-5">
                <Link to="/about/history" className="block py-2 hover:text-teal-600">Our History</Link>
                <Link to="/about/whatwedo" className="block py-2 hover:text-teal-600">What We Do</Link>
                <Link to="/about/team" className="block py-2 hover:text-teal-600">Team</Link>
                <Link to="/about/partners" className="block py-2 hover:text-teal-600">Partners</Link>
              </div>
            )}
          </div>

          <Link to="/events" className="hover:text-teal-300 transition">Events</Link>
          <Link to="/gallery" className="hover:text-teal-300 transition">Gallery</Link>
          <Link to="/projects" className="hover:text-teal-300 transition">Projects</Link>

          {/* Desktop Publications */}
          <div className="relative" ref={publicationsRef}>
            <button
              onClick={() => setDesktopPublicationsOpen(prev => !prev)}
              className="hover:text-teal-300 transition"
            >
              PUBLICATIONS
            </button>

            {desktopPublicationsOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-10 w-64 bg-white text-teal-900 rounded-xl shadow-xl p-5">
                <a href="https://drive.google.com/file/d/1BhmU-gaoCKLMp7qUySFog-MXGNWQIWhI/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block py-2 hover:text-teal-600">Annual Report 2025</a>
                <a href="#" className="block py-2 hover:text-teal-600">Annual Report 2024</a>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-teal-300 transition">Contact</Link>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t animate-slideDown">
          <div className="px-6 py-4 space-y-3">

            <Link to="/" className="block py-2 font-semibold text-teal-800" onClick={() => setMobileMenuOpen(false)}>Home</Link>

            {/* Mobile About */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(prev => !prev)}
                className="w-full flex justify-between items-center py-2 text-teal-800 font-semibold"
              >
                About Us <span>{mobileAboutOpen ? "-" : "+"}</span>
              </button>

              {mobileAboutOpen && (
                <div className="pl-4 mt-1 space-y-2 border-l-2 bg-teal-300">
                  <Link to="/about/history" onClick={() => { setMobileMenuOpen(false); setMobileAboutOpen(false); }} className="block py-1 text-gray-700">Our History</Link>
                  <Link to="/about/whatwedo" onClick={() => { setMobileMenuOpen(false); setMobileAboutOpen(false); }} className="block py-1 text-gray-700">What We Do</Link>
                  <Link to="/about/team" onClick={() => { setMobileMenuOpen(false); setMobileAboutOpen(false); }} className="block py-1 text-gray-700">Team</Link>
                  <Link to="/about/partners" onClick={() => { setMobileMenuOpen(false); setMobileAboutOpen(false); }} className="block py-1 text-gray-700">Partners</Link>
                </div>
              )}
            </div>

            <Link to="/events" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-teal-800">Events</Link>
            <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-teal-800">Gallery</Link>
            <Link to="/projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-teal-800">Projects</Link>

            {/* Mobile Publications */}
            <div>
              <button
                onClick={() => setMobilePublicationsOpen(prev => !prev)}
                className="w-full flex justify-between items-center py-2 text-teal-800 font-semibold"
              >
                Publications <span>{mobilePublicationsOpen ? "-" : "+"}</span>
              </button>

              {mobilePublicationsOpen && (
                <div className="pl-4 mt-1 space-y-2 border-l-2 bg-teal-300">
                  <a href="https://drive.google.com/file/d/1BhmU-gaoCKLMp7qUySFog-MXGNWQIWhI/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block py-1 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Annual Report 2025</a>
                  <a href="#" className="block py-1 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Annual Report 2024</a>
                </div>
              )}
            </div>

            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-teal-800">Contact</Link>

            {/* ADDED MOBILE DONATE BUTTON */}
            <button
              onClick={() => setDonateOpen(true)}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition transform hover:scale-105 mt-3"
            >
              Donate
            </button>

            {/* MOBILE SOCIAL ICONS */}
            <div className="flex justify-center gap-6 pt-4 text-teal-700 text-xl border-t mt-4">
              <a href="https://www.facebook.com/people/Tanzanian-Youth-and-Children/61588276603612/" className="hover:text-teal-500">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a href="#" className="hover:text-teal-500">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>

              <a href="https://www.instagram.com/tanzanian_youth_children/" className="hover:text-teal-500">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a href="https://www.linkedin.com/feed/" className="hover:text-teal-500">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>

          </div>
        </nav>
      )}

      {/* DONATE POPUP */}
      {donateOpen && (
        <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm text-center shadow-xl">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Support Our Work</h2>
            <p className="text-gray-600 mb-4">Donate through the following CRDB bank account</p>

            <div className="bg-gray-100 rounded-lg p-4 mb-5 text-left">
              <p><strong>Bank:</strong> CRDB</p>
              <p><strong>Account:</strong> Tanzania Youth Children</p>
              <p><strong>Number:</strong> 000000000</p>
            </div>

            <button
              onClick={() => setDonateOpen(false)}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </header>
  );
};

export default Header;