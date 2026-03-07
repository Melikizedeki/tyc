import React from "react";

// Replace with real partner logos
import partner1 from "../../../assets/partner/partner1.png";
import partner2 from "../../../assets/partner/partner2.png";
import partner3 from "../../../assets/partner/partner3.png";
import partner4 from "../../../assets/partner/partner4.png";
import partner5 from "../../../assets/partner/partner5.png";
import partner6 from "../../../assets/partner/partner6.png";
import partner7 from "../../../assets/partner/partner7.png";

import partner9 from "../../../assets/partner/partner9.png";
import partner10 from "../../../assets/partner/partner10.png";
import partner11 from "../../../assets/partner/partner11.png";
import partner12 from "../../../assets/partner/partner12.png";
import partner13 from "../../../assets/partner/partner13.png";

import partner14 from "../../../assets/partner/partner14.png";
import partner15 from "../../../assets/partner/partner15.png";
import partner16 from "../../../assets/partner/partner16.png";
import partner17 from "../../../assets/partner/partner17.png";  
import partner18 from "../../../assets/partner/partner18.png";

const STRATEGIC_PARTNERS = [
  
  { name: "Tanzania Gender Networking Program (TGNP)", logo: partner4 },
  { name: "MKUKI Coalition", logo: partner9 },
  { name: "Haki Elimu", logo: partner12 },
  { name: "AfriYAN", logo: partner13 },
  { name: "AfriYAN", logo: partner14 },
  { name: "AfriYAN", logo: partner15 },
];

const DEVELOPMENT_PARTNERS = [
  { name: "Tanzania Development Trust", logo: partner1 },
  { name: "WAJIBU - Institute of Public Accountability", logo: partner2 },
   { name: "Africa Giving", logo: partner5 },
 
];

const ACTIVE = [
  { name: "Ten/Met", logo: partner3 },
  { name: "Tanzania Youth Coalition (TYC)", logo: partner6 },
  { name: "Tanzania Non-Governmental Organization (TANGO)", logo: partner7 },
  
   { name: "Tanzania Child Rights Forum (TCRF)", logo: partner10 },
     { name: "Tanzania Human Rights Defenders Coalition", logo: partner11 },
      { name: "Policy Forum", logo: partner16 },
      { name: "mkuki", logo: partner17 },
      { name: "Tanzania Ending Child Marriage Network ( TECMN)", logo: partner18 },
=======

const STRATEGIC_PARTNERS = [
  { name: "Tanzania Development Trust", logo: partner1 },
  { name: "WAJIBU - Institute of Public Accountability", logo: partner2 },
  { name: "Ten/Met", logo: partner3 },
  { name: "Tanzania Gender Networking Program (TGNP)", logo: partner4 },
  { name: "Africa Giving", logo: partner5 },
  { name: "Tanzania Youth Coalition (TYC)", logo: partner6 },
];

const DEVELOPMENT_PARTNERS = [
  { name: "Tanzania Non-Governmental Organization (TANGO)", logo: partner7 },
  { name: "National Council of Non-Governmental Organization (NaCoNGO)", logo: partner8 },
  { name: "MKUKI Coalition", logo: partner9 },
  { name: "Tanzania Child Rights Forum (TCRF)", logo: partner10 },
  { name: "Tanzania Human Rights Defenders Coalition", logo: partner11 },
  { name: "Haki Elimu", logo: partner12 },
  { name: "AfriYAN", logo: partner13 },

];

const Partners = () => {
  return (
    <div className="bg-slate-50 text-slate-800">

      {/* ===== PAGE INTRO ===== */}
      <section className="py-12 md:py-20 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-teal-900 mb-4 md:mb-6">
          Our Partners
        </h1>
        <p className="text-slate-600 text-sm md:text-lg leading-relaxed">
          Collaboration is at the heart of our work. We partner with government
          institutions, development agencies, NGOs, and private sector
          organizations to maximize youth empowerment and sustainable impact.
        </p>
      </section>

      {/* ===== STRATEGIC PARTNERS ===== */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl md:text-2xl font-bold text-teal-900 text-center mb-4">
          Strategic Partners
        </h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center">
          {STRATEGIC_PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-3 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all flex items-center justify-center hover:grayscale-0 hover:-translate-y-2"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===== DEVELOPMENT PARTNERS ===== */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-bold text-teal-900 text-center mb-4">
            Development & Funding Partners
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-7 gap-10 items-center">
            {DEVELOPMENT_PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all flex items-center justify-center  hover:grayscale-0 hover:-translate-y-2"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


        <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-bold text-teal-900 text-center mb-4">
            TYC is active member in these National Coalitions
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-7 gap-10 items-center">
            {ACTIVE.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all flex items-center justify-center  hover:grayscale-0 hover:-translate-y-2"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== HOW WE COLLABORATE ===== */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-teal-900 mb-12">
            How We Collaborate
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-1 transition-transform">
              <h3 className="font-bold text-lg text-teal-800 mb-3">
                Policy Engagement
              </h3>
              <p className="text-slate-600">
                Working together to strengthen youth participation in national
                and international policy processes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-1 transition-transform">
              <h3 className="font-bold text-lg text-teal-800 mb-3">
                Program Implementation
              </h3>
              <p className="text-slate-600">
                Co-designing and delivering impactful youth-focused initiatives
                across Tanzania.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-1 transition-transform">
              <h3 className="font-bold text-lg text-teal-800 mb-3">
                Capacity Strengthening
              </h3>
              <p className="text-slate-600">
                Providing technical support, training, and shared learning
                platforms for sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-teal-900 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Build Impact Together
        </h2>
        <p className="max-w-2xl mx-auto text-teal-100 mb-8">
          We welcome partnerships that align with our mission of empowering
          youth and promoting sustainable development.
        </p>

        <button className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-full font-bold shadow-lg transition-all transform hover:scale-105">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Partners;
