import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faEye,
  faChalkboardTeacher,
  faLightbulb,
  faUsers,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

import heroImg from "../../../assets/education.png"; // replace with actual image

const PROGRAMS = [
  { id: 1, title: "Improving Learning Environments", icon: faBullseye },
  { id: 2, title: "Teacher Professional Development", icon: faChalkboardTeacher },
  { id: 3, title: "Digital Literacy & Innovation", icon: faLightbulb },
  { id: 4, title: "Youth Empowerment & Life Skills", icon: faUsers },
  { id: 5, title: "Community Engagement", icon: faHandsHelping },
];

const WhatWeDo = () => {
  return (
    <div className="bg-slate-50 text-slate-800">

      {/* ===== HERO ===== */}
      <section className="relative min-h-72 md:h-[450px] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>
        <div className="absolute inset-0 bg-teal-900/70"></div>
        <div className="relative z-10 px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            What We Do
          </h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Empowering Tanzanian youth and children with inclusive, skill-focused education and community programs.
          </p>
        </div>
      </section>

      {/* ===== GOAL, VISION & MISSION ===== */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center mb-12 md:mb-16">
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100">
          <FontAwesomeIcon icon={faBullseye} className="text-teal-600 text-3xl md:text-4xl mb-4" />
          <h3 className="font-bold text-lg md:text-xl text-teal-900 mb-2">Main Goal</h3>
          <p className="text-slate-600 leading-relaxed text-xs md:text-base">
            To improve access to inclusive, quality, and skill-focused education for Tanzanian youth and children in underserved communities.
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100">
          <FontAwesomeIcon icon={faEye} className="text-teal-600 text-3xl md:text-4xl mb-4" />
          <h3 className="font-bold text-lg md:text-xl text-teal-900 mb-2">Vision</h3>
          <p className="text-slate-600 leading-relaxed text-xs md:text-base">
            A Tanzania where every child and youth is empowered with quality education, creativity, and skills to thrive and contribute to national development.
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="text-teal-600 text-3xl md:text-4xl mb-4" />
          <h3 className="font-bold text-lg md:text-xl text-teal-900 mb-2">Mission</h3>
          <p className="text-slate-600 leading-relaxed text-xs md:text-base">
            To work with communities, educators, and stakeholders to provide inclusive, child-centered, and skill-based education that prepares Tanzania’s young people for future opportunities.
          </p>
        </div>
      </section>

      {/* ===== SPECIFIC OBJECTIVES ===== */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 text-center mb-8 md:mb-10">Specific Objectives</h2>
        <ul className="list-decimal list-inside space-y-3 md:space-y-4 text-slate-700 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
          <li>Strengthen community engagement to support children’s education.</li>
          <li>Enhance school infrastructure and access to learning resources.</li>
          <li>Build teacher capacity in modern and digital teaching methodologies.</li>
          <li>Establish digital learning hubs to promote youth ICT skills.</li>
          <li>Deliver life-skills and leadership training programs for youth.</li>
        </ul>
      </section>

      {/* ===== KEY ACTIVITIES ===== */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 text-center mb-8 md:mb-12">Key Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {PROGRAMS.map((program) => (
              <div
              key={program.id}
              className="bg-white p-4 md:p-6 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform text-center"
            >
              <div className="text-teal-600 text-3xl md:text-5xl mb-4">
                <FontAwesomeIcon icon={program.icon} />
              </div>
              <h3 className="font-bold text-xl text-teal-900 mb-2">{program.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {/* Placeholder: add program description here or leave for future */}
                Detailed actions for this component can be displayed here.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TARGET BENEFICIARIES ===== */}
      <section className="py-20 max-w-7xl mx-auto px-6 bg-teal-50 rounded-3xl">
        <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">Target Beneficiaries</h2>
        <ul className="list-disc list-inside space-y-3 text-slate-700 max-w-2xl mx-auto text-center leading-relaxed">
          <li>Primary and secondary school children</li>
          <li>Youth aged 10–24</li>
          <li>Teachers and school administrators</li>
          <li>Parents and community leaders</li>
          <li>Out-of-school and marginalized youth</li>
        </ul>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">TYC Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <h3 className="font-bold text-teal-900 mb-2">Integrity</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We uphold the highest standards of honesty, transparency, and ethical conduct.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <h3 className="font-bold text-teal-900 mb-2">Accountability</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We are answerable for our actions, ensuring responsible stewardship of resources and trust.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <h3 className="font-bold text-teal-900 mb-2">Excellence</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We strive for excellence in all we do, continually improving and innovating.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <h3 className="font-bold text-teal-900 mb-2">Collaboration</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We recognize the importance of partnerships and foster cooperation among stakeholders.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <h3 className="font-bold text-teal-900 mb-2">Inclusivity</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We promote diversity, equity, and inclusion, valuing all perspectives.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <h3 className="font-bold text-teal-900 mb-2">Civic Engagement</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We encourage active citizenship and engagement between communities and government.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhatWeDo;