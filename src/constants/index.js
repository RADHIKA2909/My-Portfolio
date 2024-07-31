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
    angular,
    aggrid,
    ngrx,
    bootstrap,
    git,
    deloitte,
    testaing,
    wm,
    portfolio,
    budgetplanner,
    employee,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "work",
      title: " Projects",
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
      title: "Angular Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Client Handling",
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
      name: "git",
      icon: git,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "AG Grid",
      icon: aggrid,
    },
    {
      name: "NgRx",
      icon: ngrx,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Development",
      company_name: "Deloitte USI, Bengaluru",
      icon: deloitte,
      iconBg: "#383E56",
      date: "September 2022 - Present",
      points: [
        "Client: WM (Waste Management - A comprehensive waste, and environmental services company operating in North America)",
        "Developed a cross-platform application using Angular with dependency injection and NgRx store to empower WM in strategically managing future waste management capacity and efforts. This application led to a 30 percent improvement in WM’s ability to forecast future needs.",
        "Took full ownership of the front-end upon team dissolution, delivering 3 successful high-quality releases ahead of schedule. This achievement also culminated in the granting of the 'Project Warrior Award'",
        "Used AG Grid to boost planning efficiency by 70 percent for WM’s operations team with a fast, feature-rich Angular application.",
        "Optimized app performance through load cycle reduction and memory leak fixes, ensuring a smooth user experience.",
        "Successfully migrated Angular version (v15 to v17), extending the application’s lifespan and future proofing it.",
        "Collaborated efficiently with back-end developers and designers.",
        "Acted as a technical liaison for WM, effectively communicating needs, proposing solutions, and implementing fixes to resolve issues and bugs.",
      ],
    },
    {
      title: "UI Testing (Training cum Internship)",
      company_name: "TestAIng/AiEnsured, Bengaluru",
      icon: testaing,
      iconBg: "#383E56",
      date: "May 2021 – July 2021",
      points: [
        "Learnt about different principles and types of testing in a Software Development Life Cycle.",
        "Prepared test cases and bugs report for the UI of many websites including the Company’s own official website via Manual testing.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as good as our product, but the team proved me wrong.",
      name: "Joseph Dorn",
      designation: "Digital Manager",
      company: "WM",
      image: wm,
    },
    {
      testimonial:
        "Radhika has optimzed the website which has increased the efficiency by 50%. Great work Radhika!",
      name: "Parul Gupta",
      designation: "Team Manager",
      company: "Deloitte",
      image: deloitte,
    },
    {
      testimonial:
        "Radhika is a fast learner and does all her work before deadlines. Keep up this same pace, you'll acheive great heights.",
      name: "Ramit Manohar Kaul",
      designation: "Team Lead",
      company: "TestAing/AiEnsured",
      image: testaing,
    },
  ];
  
  const projects = [
    {
      name: "Budget Planner",
      description:
        "Crafted a user-friendly comprehensive budget planning application, to empower users in managing their finances effectively. It has a secure login page and a dashboard featuring various sections designed to monitor expenses, seamlessly add monthly transactions, and compute savings.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: " angular_material",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: budgetplanner,
      source_code_link: "https://github.com/RADHIKA2909/Budget-Planner",
    },
    {
      name: "Employee Details App",
      description:
        "Spearheaded the development of a sophisticated CRUD application - showcasing employee records and their details with extensive CRUD capabilities, enabling effortless record management including reading, adding, updating, and deleting records.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "JSON_server_integration",
          color: "pink-text-gradient",
        },
      ],
      image: employee,
      source_code_link: "https://github.com/RADHIKA2909/Employee-Details-CRUD-Application",
    },
    {
      name: "My Portfolio",
      description:
        "Why settle for a traditional one-page resume when you can explore an engaging 3D portfolio? Utilizing the advanced capabilities of React and Three.js, I've created a visually stunning and interactive digital portfolio where you can know about me, my professional experience, work and skills.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/RADHIKA2909/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };