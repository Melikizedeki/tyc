import React from "react";
import { useParams, Link } from "react-router-dom";
import EVENTS from "../../data/event"; // make sure EVENTS is exported from a separate file

const EventDetails = () => {
  const { id } = useParams();

  const event = EVENTS.find((e) => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="text-center py-32">
        <h2 className="text-3xl font-bold text-teal-900">Event Not Found</h2>
        <Link
          to="/events"
          className="text-green-600 font-bold mt-6 inline-block"
        >
          ← Back to Events
        </Link>
      </div>
    );
  }

  return (
  <div className="bg-slate-50 text-slate-800">

    {/* ===== HERO SECTION ===== */}
    <section className="relative min-h-72 md:h-[500px] overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>

      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 text-center text-white px-4 sm:px-6">
        <div className="bg-teal-600 inline-block px-4 sm:px-5 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 md:mb-4 shadow-lg">
          {event.date}
        </div>
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl leading-tight">
          {event.title}
        </h1>
      </div>
    </section>

    {/* ===== CONTENT SECTION ===== */}
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">

      <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl">
        <p className="text-base md:text-lg leading-relaxed text-slate-700">
          {event.description}
        </p>
      </div>

      {/* ===== GALLERY ===== */}
      {event.gallery && (
        <div className="mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-teal-900 mb-6 md:mb-8 text-center">
            Event Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {event.gallery.map((img, index) => (
                <img
                key={index}
                src={img}
                alt="event"
                className="rounded-3xl shadow-lg object-cover h-48 sm:h-56 md:h-72 w-full hover:scale-105 transition-transform duration-500"
              />
            ))}
          </div>
        </div>
      )}

      {/* ===== BACK BUTTON ===== */}
      <div className="mt-12 md:mt-20 text-center">
        <Link
          to="/events"
          className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-10 py-2 sm:py-4 rounded-full font-bold shadow-xl transition-all transform hover:scale-105 text-sm sm:text-base">
          ← Back to Events
        </Link>
      </div>

    </section>

  </div>
  );
};

export default EventDetails;