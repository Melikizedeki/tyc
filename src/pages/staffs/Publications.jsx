import React, { useState } from "react";

const publicationsData = [
  {
    id: 1,
    title: "Youth Policy Analysis Report 2024",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    summary:
      "An in-depth analysis of youth policy implementation challenges and recommendations for Tanzania.",
    category: "Report",
    date: "March 2024",
    file: "#",
  },
  {
    id: 2,
    title: "Entrepreneurship Training Manual",
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572",
    summary:
      "A practical guide designed to equip young entrepreneurs with essential business skills.",
    category: "Manual",
    date: "November 2023",
    file: "#",
  },
  {
    id: 3,
    title: "Community Health Newsletter",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    summary:
      "Quarterly newsletter highlighting community health awareness activities.",
    category: "Newsletter",
    date: "July 2023",
    file: "#",
  },
];

function Publications() {
  const [filter, setFilter] = useState("All");

  const filteredPublications =
    filter === "All"
      ? publicationsData
      : publicationsData.filter((pub) => pub.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2d4256] mb-4">
          Publications
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our reports, research papers, manuals and newsletters that
          promote youth empowerment and community development.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {["All", "Report", "Manual", "Newsletter"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-full transition duration-300 ${
              filter === category
                ? "bg-[#2d4256] text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Publications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
        {filteredPublications.map((pub) => (
          <div
            key={pub.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-500"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={pub.image}
                alt={pub.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">
                {pub.category}
              </span>

              <h2 className="text-xl font-semibold text-[#2d4256] mt-3 mb-2">
                {pub.title}
              </h2>

              <p className="text-gray-600 text-sm mb-3">{pub.summary}</p>

              <p className="text-xs text-gray-500 mb-4">
                Published: {pub.date}
              </p>

              <div className="flex gap-3">
                <a
                  href={pub.file}
                  className="bg-[#2d4256] text-white px-4 py-2 rounded-full text-sm hover:bg-[#1f2f3d] transition"
                >
                  Download PDF
                </a>

                <button className="border border-[#2d4256] text-[#2d4256] px-4 py-2 rounded-full text-sm hover:bg-[#2d4256] hover:text-white transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-[#2d4256] text-white py-12 rounded-3xl max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Want to Stay Updated?
        </h2>
        <p className="mb-6">
          Subscribe to receive our latest reports and newsletters directly in your inbox.
        </p>
        <button className="bg-white text-[#2d4256] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default Publications;