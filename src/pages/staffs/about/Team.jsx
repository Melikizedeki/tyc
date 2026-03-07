import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

import heroImg from "../../../assets/face.png"; // hero image
import lucas from "../../../assets/team/director.png"; // replace with real photos
import shabani from "../../../assets/team/shaban.png";
import subilaga from "../../../assets/team/zonal.png";
import mary from "../../../assets/water.png";
import merciana from "../../../assets/team/project.png";
import mariam from "../../../assets/face.png";

const LEADERSHIP = [
  {
    name: "Lucas Daudi",
    role: "Executive Director",
    image: lucas,
    bio: "A visionary leader driving TYC's mission to empower youth and children across Tanzania with quality education and life skills.",
  },
  {
    name: "Shabani Ramadhani",
    role: "Monitoring & Evaluation Manager",
    image: shabani,
    bio: "Ensures TYC programs achieve measurable impact through rigorous monitoring and evaluation.",
  },
  {
    name: "Subilaga Mwanjabe",
    role: "Zonal Coordinator",
    image: subilaga,
    bio: "Coordinates program activities across regions to maximize reach and community engagement.",
  },
];

const TEAM = [
  { name: "Mary Matondo", role: "Program Manager", image: mary },
  { name: "Merciana William", role: "Project Officer", image: merciana },
  { name: "Mariam Mussa", role: "Finance Manager", image: mariam },
];

const Team = () => {
  return (
    <div className="bg-slate-50 text-slate-800">

      {/* ===== HERO ===== */}
      <section className="relative min-h-72 md:h-[400px] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>
        <div className="absolute inset-0 bg-teal-900/70"></div>
        <div className="relative z-10 px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Meet Our Team
          </h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Dedicated professionals committed to youth empowerment and sustainable development in Tanzania.
          </p>
        </div>
      </section>

      {/* ===== LEADERSHIP SECTION ===== */}
      <section className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-12 md:space-y-20">
        {LEADERSHIP.map((leader, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* INFO */}
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-2xl font-bold text-teal-900 mb-2">
                {leader.name}
              </h3>
              <p className="text-green-600 font-semibold mb-4">
                {leader.role}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {leader.bio}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ===== TEAM GRID ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-900 text-center mb-16">
            Our Dedicated Team
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {TEAM.map((member, index) => (
              <div key={index} className="group text-center">
                {/* PHOTO */}
                <div className="relative w-56 h-56 mx-auto rounded-full overflow-hidden shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-teal-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      View Profile
                    </span>
                  </div>
                </div>

                <h4 className="mt-6 font-bold text-lg text-teal-900">
                  {member.name}
                </h4>
                <p className="text-green-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

    </div>
  );
};

export default Team;