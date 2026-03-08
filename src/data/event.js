import parliament from "../assets/events/parliament.png";
import malala from "../assets/events/malala.PNG";
import children from "../assets/events/children.png";
import violence from "../assets/events/violence.png";

const EVENTS = [

{
  id: 1,
  title: "TYC Supports Community Tree Planting in Shinyanga",
  date: "July 2025",
  image: malala,
  description: `The Tanzania Youth Coalition (TYC) continues to promote environmental sustainability by supporting community tree planting initiatives in Shinyanga. Through this activity, TYC works closely with local communities, youth groups, and volunteers to encourage the planting of trees in schools, public areas, and residential environments.

The initiative aims to combat environmental challenges such as deforestation, climate change, and land degradation that affect many parts of Shinyanga. By planting trees, the community helps restore the natural ecosystem, improve air quality, and create a greener and healthier environment for future generations.

TYC also educates community members on the importance of environmental conservation and proper tree care to ensure the sustainability of planted trees. This program empowers local people, especially youth, to take an active role in protecting their environment while contributing to long-term ecological balance.

Through these efforts, TYC demonstrates its commitment to community development, environmental protection, and building a sustainable future for the people of Shinyanga.`,
  gallery: [malala]
},

  {
    id: 1,
    title: "TYC join in Malala Yousafzai delegation",
    date: "July 2025",
    image: malala,
    description:
      "As a powerful convergence of global influence and national action, Malala Yousafzai’s visit to Tanzania on 9th July 2025 (Malala Day) marked a pivotal moment for girls’ education. The visit strengthened advocacy efforts and inspired stakeholders across the country to prioritize access to quality education for every girl.",
    gallery: [malala, parliament]
  },

  {
    id: 2,
    title: "Children protection and safeguarding in Shinyanga",
    date: "June 2025",
    image: children,
    description:
      "From June 24 to 26, 2025, TYC organized a comprehensive three-day refresher course on Child Protection and Safeguarding in Shinyanga. The program aimed at strengthening the capacity of educators and community leaders to ensure safe learning environments for children.",
    gallery: [children]
  },
  {
    id: 3,
    title: "TYC Pushes Gender Equity Agenda in Parliament",
    date: "May 2025",
    image: parliament,
    description:
      "TYC  Executive Director with Ten/Met Bord Chairperson, UNICEF & UNESCO Developemnt Partners in Collaboration with the Minister  of Education office, during presentation of Education budget at Dodoma parliamentary  hall on May-2025",

  
    gallery: [parliament]
  },
  {
    id: 4,
    title: "Empowering Youth with Computer Skills in Shinyanga",
    date: "June 2025",
    image: violence,
    description:
      `TYC (Tanzanian Youth and Children), focuses on empowering young people in Shinyanga by providing them with essential computer knowledge and digital skills. The program aims to introduce youth to the basics of computer use, internet access, and modern technology so they can better participate in education, communication, and future job opportunities.

Through interactive learning sessions and practical demonstrations, participants gain hands-on experience with computers and learn how technology can be used for learning, creativity, and innovation. The event is part of TYC’s mission to support youth development and promote digital inclusion within the Shinyanga community.`
  },
];

export default EVENTS;
