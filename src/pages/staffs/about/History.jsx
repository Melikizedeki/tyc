import React from "react";
import historyImg from "../../../assets/children.png"; // Change to your actual history image

const HISTORY_TIMELINE = [
  {
    year: "2017",
    title: "TYC Established as CBO",
    desc: "TYC was initially established as a Community Based Organization to respond to development needs of local communities.",
  },
  {
    year: "2022",
    title: "Registered as NGO",
    desc: "TYC officially registered as a non-profit NGO with registration number 00NGO/R/3052, formalizing its mission to empower youth and children.",
  },
  {
    year: "2023",
    title: "Expanded Programs",
    desc: "Implemented programs targeting education, digital literacy, youth empowerment, and community engagement across Tanzania.",
  },
  {
    year: "2026",
    title: "Strengthening Impact",
    desc: "Continuing to grow as a platform for youth leadership, skills development, and sustainable community development.",
  },
];

const History = () => {
  return (
    <div className="bg-slate-50 text-slate-800">

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-72 md:h-[500px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${historyImg})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-teal-900/70"></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6">
            Our History
          </h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Tanzanian Youth and Children (TYC) is a membership non-profit local organization dedicated to empowering youth and children through education, skills development, and community programs.
          </p>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-4">
            The Story Behind TYC
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Tanzanian Youth and Children (TYC) is a membership non-profit making development-oriented local organization. It was initially established in 2017 as a Community Based Organization (CBO) and finally registered as an NGO in 2022 with registration number 00NGO/R/3052 to respond to some of the development needs of the communities. TYC was founded by a group of voluntary Tanzanians who envisioned that children and youth could access better quality education and reach their full potential in life.
          </p>
        </div>

        {/* Timeline */}
   <div className="relative border-l-4 border-teal-600 ml-4 sm:ml-8 space-y-8 md:space-y-12">
  {HISTORY_TIMELINE.map((item, index) => (
    <div key={index} className="relative pl-8">
      {/* Dot */}
      <div className="absolute -left-5 top-1 w-6 h-6 bg-teal-600 rounded-full border-4 border-white"></div>

      {/* Year & Title */}
      <h3 className="text-xl font-bold text-teal-900">
        {item.year} — {item.title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 mt-2 leading-relaxed">
        {item.desc}
      </p>
    </div>
  ))}
</div>
      </section>

      {/* ===== MILESTONES SECTION ===== */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="p-8 rounded-2xl shadow-lg">
            <h3 className="text-4xl font-extrabold text-teal-700 mb-3">10+</h3>
            <p className="text-slate-600 font-medium">Regions Reached</p>
          </div>
          <div className="p-8 rounded-2xl shadow-lg">
            <h3 className="text-4xl font-extrabold text-teal-700 mb-3">5,000+</h3>
            <p className="text-slate-600 font-medium">Youth Engaged</p>
          </div>
          <div className="p-8 rounded-2xl shadow-lg">
            <h3 className="text-4xl font-extrabold text-teal-700 mb-3">50+</h3>
            <p className="text-slate-600 font-medium">Programs Conducted</p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default History;