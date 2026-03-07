import React from "react";
import prj1 from "../../assets/projects/prj1.png";
import prj2 from "../../assets/projects/prj2.png";
import prj3 from "../../assets/projects/prj3.png";
import prj4 from "../../assets/projects/prj4.png";
import prj5 from "../../assets/projects/prj5.png";
import prj6 from "../../assets/projects/prj6.png";
import prj7 from "../../assets/projects/prj7.png";
import prj8 from "../../assets/projects/prj8.png";
import prj9 from "../../assets/projects/prj9.png";

const stories = [
{
id:1,
title:"Empowering a Village With Its First Learning Center",
location:"Samuye Village, Shinyanga District",
image:prj1,
text:"In the remote village of Samuye in Shinyanga District, children once walked over 10 kilometers to the nearest school, leading many to drop out early. With TYC’s support, the community built its first inclusive learning center equipped with creative learning materials and skill-based activities. Attendance rose by 80%, and families reported renewed hope for their children’s future. This milestone brought the village closer to TYC’s vision of ensuring that every child is empowered with quality education regardless of location."
},

{
id:2,
title:"A Girl’s Journey From Early Marriage Risk to Tech Champion",
location:"Shinyanga District",
image:prj2,
text:"At just 14, Rehema Mapolu in Shinyanga District was under pressure to leave school for early marriage. Through TYC’s mentorship and girls’ empowerment program, her family understood the importance of education. She joined digital literacy classes and later created a simple mobile application for tracking village water points. Her story demonstrates how inclusive, child-centered education can transform not only a girl’s life but also her entire community’s perspective on the future."
},

{
id:3,
title:"Turning Struggling Students Into Confident Learners",
location:"Lake Zone Community",
image:prj3,
text:"In an underserved lake zone community, many students were performing far below national standards due to overcrowded classrooms and limited learning resources. TYC introduced child-centered teaching methods and after-school tutoring sessions in collaboration with local educators. Within a year, pass rates increased from 42% to 76%, and students developed new confidence in their abilities."
},

{
id:4,
title:"Vocational Skills That Brought Hope to Unemployed Youth",
location:"Nzega Town Council, Tabora",
image:prj4,
text:"A group of out-of-school youth in Nzega Town Council had lost hope after failing to secure formal employment. In 2024, TYC supported 16 youths through carpentry and electrical training. By the end of the program, participants had started micro-businesses, generating income to support their families. Their transformation shows the power of skill-based education in shaping self-reliant Tanzanian youth."
},

{
id:5,
title:"A Teacher Who Rediscovered the Joy of Teaching",
location:"Tanzania",
image:prj5,
text:"Fatuma Ally, a primary school teacher, felt overwhelmed by outdated teaching methods and low student engagement. Through TYC’s educator-training workshops, she learned inclusive techniques, creative classroom practices, and positive discipline strategies. Her classroom became one of the school’s most inspiring environments, with students participating actively in lessons."
},

{
id:6,
title:"Solar-Powered Learning for a Community Without Electricity",
location:"Rural Tanzania",
image:prj6,
text:"In a rural village lacking electricity, learning often stopped when the sun went down. TYC installed solar-powered learning stations and introduced digital education tools for students and teachers. Within months, learners improved their reading and problem-solving skills while teachers integrated technology into daily lessons."
},

{
id:7,
title:"Reviving a Failing School Through Community Involvement",
location:"Tanzania",
image:prj7,
text:"From 2022 to 2025, TYC supported vulnerable students by providing scholastic materials to 16 primary schools and 8 secondary schools. The support helped many students from poor families continue their education. Enrollment increased significantly, and the schools regained their reputation as supportive learning environments."
},

{
id:8,
title:"An Orphan’s Path From Silence to Self-Expression",
location:"Ukenyenge Primary School, Kishapu District",
image:prj8,
text:"After losing both parents, Musa Shija from Ukenyenge Primary School became withdrawn and struggled to participate in class. Through TYC’s psychosocial support program, he found confidence through art and storytelling. Over time he regained his voice and even won a regional creative writing competition."
},

{
id:9,
title:"Bridging the Language Gap for Early Learners",
location:"Tanzania",
image:prj9,
text:"Many early-grade learners struggled because lessons were taught in a language they barely understood. TYC worked with educators to create bilingual learning materials and train teachers in child-friendly literacy methods. Students quickly improved in reading comprehension and classroom participation."
}
];

function Project() {
return (

<div className="bg-white">

{/* Header */}
<div className="text-center py-20 px-6">
<h1 className="text-4xl md:text-5xl font-bold text-[#2d4256] mb-6">
Our Impact Projects
</h1>

<p className="text-gray-600 max-w-2xl mx-auto">
Real stories that show how education, mentorship and skills development
are transforming communities across Tanzania.
</p>
</div>


{/* Stories Section */}

<div className="space-y-28 max-w-7xl mx-auto px-6">

{stories.map((story,index)=>(
<div
key={story.id}
className="grid md:grid-cols-2 gap-12 items-center"
>

{/* Image */}

<div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
<img
src={story.image}
alt={story.title}
className="rounded-2xl shadow-xl w-full h-[400px] object-cover hover:scale-105 transition duration-500"
/>
</div>


{/* Text */}

<div>

<p className="text-sm text-gray-400 mb-2">
0{story.id} • {story.location}
</p>

<h2 className="text-3xl font-semibold text-[#2d4256] mb-4">
{story.title}
</h2>

<p className="text-gray-600 leading-relaxed">
{story.text}
</p>

</div>

</div>
))}

</div>


{/* Bottom Impact Section */}

<div className="mt-28 bg-[#2d4256] text-white py-16 text-center px-6">

<h2 className="text-3xl font-bold mb-6">
Building Brighter Futures
</h2>

<p className="max-w-3xl mx-auto text-lg">
Through collaboration with communities, educators and partners,
TYC continues to create meaningful change and opportunities for
children and youth across Tanzania.
</p>

</div>

</div>

);
}

export default Project;