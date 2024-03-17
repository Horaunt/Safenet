import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  other,
  ai,
  card,
  linux,
  languages,
  reactjs,
  redux,
  tailwind,
  development,
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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Skills",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Cybersecurity Expert",
    icon: backend,
  },
  {
    title: "Flutter Developer",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Development",
    company_name: "",
    icon: development,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Flutter",
      "ReactJS",
      "React Native",
      "NextJS",
      "NodeJS",
      "MongoDB",
      "AWS",
      "Restful API",
    ],
  },
  {
    title: "Other Skills",
    company_name: "",
    icon: other,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Docker",
      "Apache",
      "Metaspoilt",
      "Wireshark",
      "Burp Suite",
      "OWASP TOP 10",
      "CI/CD",
    ],
  },
  {
    title: "Languages",
    company_name: "",
    icon: languages,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "JavaScript",
      "Python",
      "Java",
      "Dart",
      "C++",
      "Html/CSS",
      "SQL",
      "Bash",
      "R",
      "Yaml",
      "TypeScript",
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
    name: "AI Assistant App using Flutter",
    description:
      "An AI-powered assistant application built using Flutter. It utilizes the OpenAI API key to generate images and text-based responses, providing users with personalized assistance.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "Dally",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/Horaunt/ai_assistant",
  },
  {
    name: "Custom Arch Linux Rice",
    description:
      "A customized Arch Linux desktop environment featuring Hyprland as the desktop environment, Kitty as the terminal emulator, Rofi as the application manager,Waybar as the status bar.",
    tags: [
      {
        name: "Linux",
        color: "blue-text-gradient",
      },
      {
        name: "Arch",
        color: "green-text-gradient",
      },
      {
        name: "Distro",
        color: "pink-text-gradient",
      },
    ],
    image: linux,
    source_code_link: "https://github.com/Horaunt/dotfiles",
  },
  {
    name: "Profile Card App",
    description:
      "A simple profile card application designed to display user information in an elegant and user-friendly format.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: card,
    source_code_link: "https://github.com/Horaunt/Profile_app1",
  },
];

export { services, technologies, experiences, testimonials, projects };
