import React from "react";
import { Link } from "react-router-dom";

import parliament from "../../assets/events/parliament.png";
import malala from "../../assets/events/malala.PNG";
import children from "../../assets/events/children.png";
import violence from "../../assets/events/violence.png";

const EVENTS = [
  {
    id: 1,
    title: "TYC Supports Community Tree Planting in Shinyanga",
    date: "July 2025",
    image: malala,
    description:
      "The Tanzanian Youth and Children (TYC) continues to promote environmental sustainability by supporting community tree planting initiatives in Shinyanga. Through this activity, TYC works closely",
  },
  {
    id: 2,
    title: "Children Protection and Safeguarding in Shinyanga",
    date: "June 2025",
    image: children,
    description:
      "From June 24 to 26 2025, TYC organized a comprehensive three-day refresher course on Child Protection and Safeguarding in Shinyanga, aimed at strengthening the capacity.",
  },
  {
    id: 3,
    title: "TYC Pushes Gender Equity Agenda in Parliament",
    date: "May 2025",
    image: parliament,
    description:
      "TYC Executive Director with Ten/Met Board Chairperson, UNICEF & UNESCO Development Partners in collaboration with the Ministry of Education during the presentation of the education budget at Dodoma Parliamentary Hall in May 2025.",
  },
  {
    id: 4,
    title: "Empowering Youth with Computer Skills in Shinyanga",
    date: "June 2025",
    image: violence,
    description:
      "TYC (Tanzanian Youth and Children) focuses on empowering young people in Shinyanga by providing them with essential computer skills and digital knowledge.",
  },
];

const Events = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ===== PAGE INTRO ===== */}
      <section className="py-16 md:py-20 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-teal-900 mb-4 md:mb-6">
          Our Events
        </h1>

        <p className="text-slate-600 text-base md:text-lg">
          Explore our latest workshops, forums, and community initiatives
          empowering youth across Tanzania.
        </p>
      </section>

      {/* ===== EVENTS GRID ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {EVENTS.map((event) => (
            <article
              key={event.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-52 sm:h-56 md:h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                  {event.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 flex flex-col">
                <h3 className="text-lg md:text-xl  font-bold text-teal-900 mb-2 md:mb-3">
                  {event.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  {event.description.length > 110
                    ? event.description.substring(0, 110) + "..."
                    : event.description}
                </p>

                <Link
                  to={`/events/${event.id}`}
                  className="mt-4 text-green-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}

        </div>
      </section>
    </div>
  );
};

export default Events;