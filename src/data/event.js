import parliament from "../assets/events/parliament.png";
import malala from "../assets/events/malala.png";
import children from "../assets/events/children.png";
import violence from "../assets/events/violence.png";

const EVENTS = [
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
    date: "April 2025",
    image: parliament,
    description:
      "In the halls of Tanzania Parliament, TYC engaged 62 Members of Parliament to advance gender equity in education and social development. The meeting emphasized policy reform and accountability to ensure equal opportunities for girls and boys.",
    gallery: [parliament]
  },
  {
    id: 4,
    title: "End Violence Against Children",
    date: "June 2025",
    image: violence,
    description:
      "TYC successfully convened the End Violence Against Children (VAC) Caucus Meeting. The event brought together stakeholders committed to safeguarding children’s rights and promoting protective systems across Tanzania.",
    gallery: [violence]
  },
];

export default EVENTS;