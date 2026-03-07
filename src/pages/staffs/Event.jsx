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
      "The Tanzania Youth Coalition (TYC) continues to promote environmental sustainability by supporting community tree planting initiatives in Shinyanga. Through this activity, TYC works closely"
  },
  {
    id: 2,
    title: "Children protection and safeguarding in Shinyangan",
    date: "June 2025",
    image: children,
    description:
      "From June 24 to 26 2025, TYC organized a comprehensive three-day refresher course on Child Protection and Safeguarding in Shinyanga, aimed at strengthening the capacity .",
  },
  {
    id: 3,
    title: "TYC Pushes Gender Equity Agenda in Parliament",
    date: "April 2025",
    image: parliament,
    description:
    "TYC  Executive Director with Ten/Met Bord Chairperson, UNICEF & UNESCO Developemnt Partners in Collaboration with the Minister  of Education office, during presentation of Education budget at Dodoma parliamentary  hall on May-2025"
      

  },

  {
    id: 4,
    title: "End Violence Against Children ",
    date: "June 2025",
    image: violence,
    description:
      "TYC successfully convened the End Violence Against Children (VAC) Caucus Meeti",
  },



];

const Events = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ===== PAGE INTRO ===== */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-900 mb-6">
          Our Events
        </h1>
        <p className="text-slate-600 text-lg">
          Explore our latest workshops, forums, and community initiatives
          empowering youth across Tanzania.
        </p>
      </section>

      {/* ===== EVENTS GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-10">

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
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-teal-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                  {event.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-55">
                <h3 className="text-xl font-bold text-teal-900 mb-3">
                  {event.title}
                </h3>

                <p className="text-slate-600 text-sm grow">
                  {event.description.length > 110
                    ? event.description.substring(0, 110) + "..."
                    : event.description}
                </p>

                <Link
                  to={`/events/${event.id}`}
                  className="mt-4 text-green-600 font-bold flex items-center group-hover:translate-x-2 transition-transform"
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
