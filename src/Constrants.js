// Skills Section Logo's
import htmlLogo from './assets/tech/html.png';
import cssLogo from './assets/tech/css.png';
import javascriptLogo from './assets/tech/javascript.png';
import reactjsLogo from './assets/tech/reactjs.png';
import reduxLogo from './assets/tech/redux.png';
import tailwindcssLogo from './assets/tech/tailwindcss.png';
import materialuiLogo from './assets/tech/materialui.png';
import bootstrapLogo from './assets/tech/bootstrap.png';
import nodejsLogo from './assets/tech/nodejs.png';
import expressjsLogo from './assets/tech/express.png';
import mysqlLogo from './assets/tech/mysql.png';
import mongodbLogo from './assets/tech/mongodb.png';
import cLogo from './assets/tech/c.png';
import cppLogo from './assets/tech/cpp.png';
import javaLogo from './assets/tech/java.png';
import pythonLogo from './assets/tech/python.png';
import gitLogo from './assets/tech/git.png';
import githubLogo from './assets/tech/github.png';
import vscodeLogo from './assets/tech/vscode.png';
import postmanLogo from './assets/tech/postman.png';
import figmaLogo from './assets/tech/figma.png';
import netlifyLogo from './assets/tech/netlify.png';
import vercelLogo from './assets/tech/vercel.png';


// Experience Section Logo's
import Ulmind_Logo from './assets/experience/Ulmind_Logo.png';
import IETE_Logo from './assets/experience/IETE_Logo.jpeg';
import Eklavya_Logo from './assets/experience/Eklavya_Logo.jpeg';

// Education Section Logo's
import PDHS from './assets/Education/PDHS.webp';
import BRKI from './assets/Education/BRKI.jpeg';
import HIT from './assets/Education/HIT.png';

// Project Section Logo's
import Dish_Drop from './assets/project/Dish_Drop.png';
import Eternastay from './assets/project/Eternastay.png';
import Eklavya from './assets/project/Eklavya.png';
import Todo from './assets/project/Todo.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: Ulmind_Logo,
      role: "Co-Founder & Fullstack Developer",
      company: "ULMIND",
      date: "Nov 2025 - Present",
      desc: "Developed high-performance, scalable web applications using the MERN stack, overseeing both frontend and backend development. Engineered robust RESTful APIs, optimized system performance. Actively contributed to product strategy, architectural planning, and the overall technical growth and direction of the startup. bengali meaning",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "React JS",
         "Redux",
        "Tailwind CSS",
         "Node JS",
         "Express JS", 
        "MongoDb",
        "MySQL",
      ],
    },
    {
      id: 1,
      img: IETE_Logo,
      role: "Fullstack Developer",
      company: "IETE HIT-IT",
      date: "March 2024 - Present",
      desc: "Contributed to impactful, innovation-driven projects as a Fullstack Developer, leading end-to-end development across both frontend and backend. Utilized technologies including HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, and Bootstrap to build scalable, user-centric solutions with clean architecture and optimized performance.",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "React JS",
         "Redux",
        "Tailwind CSS",
         "Node JS",
         "Express JS", 
        "MongoDb",
        "MySQL",
      ],
    },
    {
      id: 2,
      img: Eklavya_Logo,
      role: "Fullstack Developer",
      company: "Eklavya HIT",
      date: "Jan 2024 - Present",
      desc: "Served as a Full Stack Developer in a college social society, leading end-to-end development of web applications. Built responsive, user-focused interfaces and optimized backend systems using HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, and Bootstrap to support seamless digital engagement and society initiatives.",
      skills: [
       "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "React JS",
         "Redux",
        "Tailwind CSS",
         "Node JS",
         "Express JS", 
        "MongoDb",
        "MySQL",
      ],
    },
  ];
  

  export const project = [
    {
      id: 0,
      title: "Dish Drop",
      description:
        "DishDrop is a responsive food delivery website built with HTML, CSS, and JavaScript. It lets users browse a variety of food items, check prices, add them to a cart, and place orders through a simple checkout process. The project focuses on a clean design, smooth user experience, and responsive layout for both mobile and desktop devices.",
      image: Dish_Drop,
      tags: ["HTML", "CSS", "JavaScript","Bootstrap"],
      github: "https://github.com/SAgNik-MonDA/DishDrop-Website",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Eternastay",
      description:
        "Developed a modern and responsive Hotel Booking Website that allows users to browse rooms, check availability, and explore hotel features seamlessly. The frontend is built using HTML, CSS, JavaScript, and Bootstrap, ensuring a clean UI, fast loading, and smooth user experience across all devices.",
      image: Eternastay,
      tags: ["HTML", "CSS", "JavaScript","Bootstrap"],
      github: "https://github.com/SAgNik-MonDA/Hotel-Booking-Frontend",
      webapp: "https://eternastayhotelbooking.netlify.app/",
    },
    {
      id: 2,
      title: "Eklavya official Website",
      description:
        "Designed and developed a fully responsive official website for Eklavya, the social service society of the college. The platform highlights the society’s vision, social initiatives, events, and student involvement, while offering a clean and engaging user experience.",
      image: Eklavya,
      tags: ["HTML", "CSS", "JavaScript","Bootstrap"],
      github: "https://github.com/SAgNik-MonDA/Eklavya-HIT",
      webapp: "https://eklavyahithaldia.netlify.app/",
    },
    {
      id: 3,
      title: "Todo List",
      description:
        "Built a simple yet efficient To-Do List web application using JavaScript, allowing users to add, edit, delete, and manage daily tasks with ease.",
      image: Todo,
      tags: ["Html","JavaScript"],
      github: "https://github.com/SAgNik-MonDA/Todo_List_Project",
      // webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
   
  ];


   export const education = [
    {
      id: 0,
      img: HIT,
      school: "Haldia Institute Of Technology , Haldia",
      date: "Sept 2023 - present",
      grade: "8.19 CGPA",
      desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Information Technology from Haldia Institute of Technology, West Bengal. During my academic journey, I have developed a strong foundation in core computer science concepts and practical software development skills.My coursework includes Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networking, Web Development, and Software Engineering, which have strengthened my problem-solving and analytical abilities.Alongside academics, I actively participate in technical workshops, seminars, and hands-on training programs, allowing me to gain real-world exposure and stay updated with emerging technologies. My experience at Haldia Institute of Technology has played a crucial role in shaping my technical expertise, teamwork skills, and professional growth as an aspiring software developer.",
      degree: "bachelor of Technology in Information Technology",
    },
    {
      id: 1,
      img: BRKI,
      school: "Barchatra Ramkanai Institution,Bankura",
      date: "2022 - 2023",
      grade: "78.8%",
      desc: "I have completed my Class 12 education from Barchatra Ramkanai Institution, Bankura, under the WBCHSE board, where I studied Physics, Chemistry, Mathematics, and Biology.",
      degree: "WBCHSE(XII) - Science",
    },
    {
      id: 2,
      img: PDHS,
      school: "PalashDanga High School ",
      date: "2020-2021",
      grade: "89.28%",
      desc: "I completed my class 10 education from Palashdanga High School , Bankura, under the WBBSE board.",
      degree: "WBBSE(X)",
    },
  ];