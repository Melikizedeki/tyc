import React, { useState } from "react";

import img1 from "../../assets/Gallery/img1.png";  
import img2 from "../../assets/Gallery/img2.png";
import img3 from "../../assets/Gallery/img3.png";
import img4 from "../../assets/Gallery/img4.png";
import img5 from "../../assets/Gallery/img5.png";
import img6 from "../../assets/Gallery/img6.png";
import img7 from "../../assets/Gallery/img7.png";
import img8 from "../../assets/Gallery/img8.png";
import img9 from "../../assets/Gallery/img9.png";
import img10 from "../../assets/Gallery/img10.png";
import img11 from "../../assets/Gallery/img11.png";
import img12 from "../../assets/Gallery/img12.png";
import img13 from "../../assets/Gallery/img13.png";
import img14 from "../../assets/Gallery/img14.png";
import img15 from "../../assets/Gallery/img15.png";



const galleryData = [
  
  {
    id: 1,
    year: "2025",
    image: img1,
    
  },
  {
    id: 2,
    year: "2025",
    image: img2,
    
  },
  {
    id: 3,
    year: "2025",
    image: img3,
    
  },

   {
    id: 4,
    year: "2025",
    image: img4,
    
  },

   {
    id: 5,
    year: "2025",
    image: img5,
    
  },
   {
    id: 6,
    year: "2025",
    image: img6,
    
  },
   {
    id: 7,
    year: "2025",
    image: img7,
    
  },
   {
    id: 8,
    year: "2025",
    image: img8,
    
  },
   {
    id: 9,
    year: "2024",
    image: img9,
    
  },
   {
    id: 10,
    year: "2024",
    image: img10,
    
  },
   {
    id: 11,
    year: "2024",
    image: img11,
    
  },
   {
    id: 12,
    year: "2024",
    image: img12,
    
  },
   {
    id: 13,
    year: "2024",
    image: img13,
    
  },
   {
    id: 14,
    year: "2024",
    image: img14,
    
  },
   {
    id: 15,
    year: "2024",
    image: img15,
    
  },


];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Group images by year
  const groupedByYear = galleryData.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {});

  // Sort years descending (newest first)
  const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">Gallery Archive</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore our activities, community engagement, and educational
          initiatives documented over the years.
        </p>
      </div>

      {/* Year Sections */}
      <div className="max-w-7xl mx-auto space-y-20">
        {sortedYears.map((year) => (
          <div key={year}>
            
            {/* Year Heading */}
            <div className="mb-8 flex items-center gap-4">
              <div className="h-1 w-12 bg-blue-600"></div>
              <h2 className="text-3xl font-bold text-gray-800">{year}</h2>
            </div>

            {/* Images Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {groupedByYear[year].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                >
                  <img
                    src={item.image}
                   
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <h3 className="text-white text-lg font-semibold text-center px-2">
                     
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-2 right-4 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}