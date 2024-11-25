import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bootstrap,
  movie,
  Ecommerce,
  cupe,
  atom,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Three.Js Developer",
    icon: backend,
  },
  {
    title: "UI / UX",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "3D Graphics Developer",
    company_name: "Three.js Projects",
    icon: cupe,
    iconBg: "#E6DEDD",
    date: "Level: Expert",
    points: [
      "Created interactive 3D scenes using Three.js, incorporating animations and visual effects for engaging applications.",
      "Experimented with shaders, lighting, and materials for enhanced realism and dynamic effects.",
      "Enhanced user engagement by designing immersive 3D environments.",
      "Developed skills in WebGL and JavaScript for complex visual rendering.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Personal Projects",
    icon: atom,
    iconBg: "#383E56",
    date: "Level: Proficient",
    points: [
      "Developed responsive UIs using React.js, focusing on efficient component design and state management.",
      "Implemented user-friendly layouts and interactions to enhance user experience across devices.",
      "Utilized APIs and integrated backend services to improve application functionality.",
      "Applied best practices in code organization and component-based architecture.",
    ],
  },
  {
    title: "Movie App Developer",
    company_name: "Personal Project",
    icon: movie,
    iconBg: "#383E56",
    date: "Level: Intermediate",
    points: [
      "Built a movie app using React.js, allowing users to browse, search, and filter movies by genre, popularity, and ratings.",
      "Integrated with a third-party movie API to display real-time movie data and recommendations.",
      "Focused on creating a responsive and visually appealing interface.",
      "Gained experience with API integration and data handling in React.",
    ],
  },
  {
    title: "E-Commerce App Developer",
    company_name: "Personal Project",
    icon: Ecommerce,
    iconBg: "#E6DEDD",
    date:  "Level: Beginner",
    points: [
      "Developed an e-commerce app with React.js, featuring product listings, search functionality, cart, and checkout.",
      "Implemented state management to handle dynamic interactions and improve user experience.",
      "Ensured responsive design for compatibility across various devices.",
      "Practiced front-end routing and connecting with backend APIs for data processing.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
