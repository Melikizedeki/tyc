import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faEye, faHandshake } from "@fortawesome/free-solid-svg-icons";

import slide1 from "../../assets/img4.png";
import slide2 from "../../assets/tog.png";
import slide3 from "../../assets/director.png";
import slide4 from "../../assets/simple.png";

import parliament from "../../assets/events/parliament.png";
import malala from "../../assets/events/malala.png";
import children from "../../assets/events/children.png";

import learn from "../../assets/programs/learn.png";
import community from "../../assets/programs/community.png";
import innovation from "../../assets/programs/innovation.png";
import skill from "../../assets/programs/skill.png";
import teacher from "../../assets/programs/teacher.png";

/* ================= DATA ================= */

const PROGRAMS = [
{
title: "Our Mission",
desc: "To work with communities and educators to provide inclusive, skill-based education that prepares Tanzania’s young people for future opportunities.",
icon: faBullseye,
},
{
title: "Our Vision",
desc: "A Tanzania where every child and youth is empowered with quality education, creativity, and skills to thrive.",
icon: faEye,
},
{
title: "Our Values",
desc: "Integrity, Accountability, Excellence, Collaboration, Inclusivity and Civic Engagement.",
icon: faHandshake,
},
];

const EVENTS = [
{
id: 1,
<<<<<<< HEAD
title: "TYC Supports Community Tree Planting in Shinyanga",
=======
title: "TYC Join Malala Yousafzai Delegation",
>>>>>>> 748ff3978d11bb0b058b22b828823bd69fa4bc01
date: "July 2025",
img: malala,
},
{
id: 2,
title: "Children Protection & Safeguarding",
date: "June 2025",
img: children,
},
{
id: 3,
title: "Gender Equity Agenda in Parliament",
date: "April 2025",
img: parliament,
},
];

const PROGRAM_LIST = [
{ id:1, title:"Improving Learning Environments", img:learn },
{ id:2, title:"Teacher Professional Development", img:teacher },
{ id:3, title:"Digital Literacy & Innovation", img:innovation },
{ id:4, title:"Youth Empowerment & Life Skills", img:skill },
{ id:5, title:"Community Engagement", img:community },
];

/* ================= COMPONENT ================= */

const Home = () => {

const slides = [slide1, slide2, slide3, slide4];
const [current,setCurrent] = useState(0);

useEffect(()=>{
const interval = setInterval(()=>{
setCurrent((prev)=>(prev+1)%slides.length);
},5000);

return ()=> clearInterval(interval);

},[]);

return (

<div className="bg-slate-50 text-slate-800">

{/* ================= HERO ================= */}

<section className="relative h-[60vh] md:h-[85vh] w-full overflow-hidden">

<img
src={slides[current]}
alt="Hero Slide"
className="absolute w-full h-full object-cover transition-opacity duration-500"
/>

<div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-center text-center px-6">

<h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fadeIn">
<<<<<<< HEAD
Empowering Tanzanian <span className="text-teal-400">Youth and Children</span>
=======
Empowering Tanzania’s <span className="text-teal-400">Youth & Children</span>
>>>>>>> 748ff3978d11bb0b058b22b828823bd69fa4bc01
</h1>

<p className="text-sm md:text-lg text-gray-200 max-w-2xl mb-8">
Providing inclusive, quality and skill-based education to unlock their potential.
</p>

<div className="flex flex-col sm:flex-row gap-4">

<Link to="/contact">
  <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition transform hover:scale-105">
    Join Us Today
  </button>
</Link>


</div>

</div>

</section>

{/* ================= MISSION / VISION / VALUES ================= */}

<section className="py-20 max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

{PROGRAMS.map((item,index)=>(

<div
key={index}
className="bg-white p-8 rounded-3xl shadow-md border hover:-translate-y-2 transition duration-300 text-center"
>

<div className="text-teal-600 text-4xl mb-5">
<FontAwesomeIcon icon={item.icon}/>
</div>

<h3 className="text-xl font-bold text-teal-900 mb-3">
{item.title}
</h3>

<p className="text-gray-600 text-sm leading-relaxed">
{item.desc}
</p>

</div>

))}

</div>

</section>

{/* ================= EVENTS ================= */}

<section className="bg-slate-100 py-20">

<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">

<div>
<h2 className="text-3xl font-bold text-red-500 mb-2">
Latest Events
</h2>
<p className="text-gray-500">
Get involved in our latest activities
</p>
</div>

<Link
to="/events"
className="text-teal-700 font-semibold mt-4 md:mt-0 hover:underline"
>
View All →
</Link>

</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

{EVENTS.map((event)=>(
<div
key={event.id}
className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
>

<div className="relative overflow-hidden">

<img
src={event.img}
alt={event.title}
className="w-full h-56 object-cover hover:scale-110 transition duration-500"
/>

<span className="absolute top-4 left-4 bg-teal-600 text-white text-xs px-3 py-1 rounded-full">
{event.date}
</span>

</div>

<div className="p-6">

<h4 className="font-semibold text-lg text-teal-900 mb-3">
{event.title}
</h4>

<Link
to={`/events/${event.id}`}
className="text-green-600 font-semibold hover:underline"
>
Read More →
</Link>

</div>

</div>
))}

</div>

</div>

</section>

{/* ================= PROGRAMS ================= */}

<section className="py-20 max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-teal-900 text-center mb-14">
Our Programs
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

{PROGRAM_LIST.map((item)=>(
<div
key={item.id}
className="bg-white rounded-2xl shadow hover:-translate-y-2 transition p-4 text-center"
>

<div className="h-32 mb-4 overflow-hidden rounded-lg">
<img
src={item.img}
alt={item.title}
className="w-full h-full object-cover"
/>
</div>

<h3 className="text-sm font-bold text-teal-900">
{item.title}
</h3>

</div>
))}

</div>

</section>

{/* ================= EXECUTIVE MESSAGE ================= */}

<section className="pb-24 px-6">

<div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">

<img
src={slide3}
alt="Executive Director"
className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover"
/>

<div>

<h3 className="text-xl font-bold text-teal-900 mb-4">
Message from the Executive Director
</h3>

<p className="text-gray-600 leading-relaxed text-sm md:text-base">
At TYC, we are committed to empowering youth across Tanzania with
education, skills and opportunities. Our programs focus on building
strong communities and unlocking the potential of every child.
</p>

<p className="mt-5 font-semibold text-teal-900">
– Lucas Daudi, Executive Director
</p>

</div>

</div>

</section>

</div>
);
};

export default Home;
