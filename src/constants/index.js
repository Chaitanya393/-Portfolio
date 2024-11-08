import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate front end developer with a knack for crafting robust and scalable web applications. With hands-on experience, I have honed my skills in front-end technologies like React.js and various libraries like Tailwind, Bootsrap, MaterialUI as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With  professional experience, I have worked with a variety of technologies, including React, Flutter, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Software Developer",
    company: "Quick Assist Pvt.Ltd",
    description: `Led development and troubleshooting for website aesthetics and functionality, enhancing user experience across multiple projects. Utilized HTML, CSS, and JavaScript to implement key features, ensuring seamless deployments. Collaborated with a cross-functional team to build software solutions, gaining hands-on experience with AWS infrastructure.`,
    technologies: ["HTML", "CSS", "Flutter", "React", "JavaScript", "AWS",".....and multiple libraries"],
  },
  {
    year: "2023",
    role: "Front End Developer Intern",
    company: "Signimus Technologies Pvt.Ltd",
    description: `Developed the front-end for a cross-platform mobile app (iOS/Android) using Flutter and Dart. Integrated Google Firebase for data management, optimizing the user experience. Deployed the app on both iOS and Android platforms using Android Studio.`,
    technologies: ["Flutter", "Dart", "Firebase", "Android Studio"],
  }
];


export const PROJECTS = [
  {
    title: "Identity Access Module",
    image: project1,
    description:
      "Led agile development of IAM using React for the front-end and Node.js with PostgreSQL for the back-end, boosting productivity. Collaborated with a cross-functional team to build a robust software solution with AWS integration.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Stock Genie",
    image: project2,
    description:
    "Led the development of a stock trading and screener application with live trading APIs for real-time data. Integrated personalized recommendations, watchlists, and alerts, improving user experience.",
  technologies: ["React", "Node.js", "Trading APIs", "PostgreSQL", "MaterialUI"],
  },
  {
    title: "Detection of Motor Neuron Disease",
    image: project3,
    description:
      "Developed a machine learning model for early detection of diseases like Alzheimer’s and Parkinson’s, achieving 89.9% accuracy during live testing.",
    technologies: ["Python", "Gradio", "Google Colab"],
  },
  {
    title: "Flutter Chat Application",
    image: project4,
    description:
      "Built a dynamic chat application using Flutter, integrated with Firebase for real-time data and secure authentication.",
    technologies: ["Flutter", "Firebase"],
  },
];

export const CONTACT = {
  address: "12/a Manish nagar, Ratlam (M.p) ",
  phoneNo: "+91 9340138238 ",
  email: "chaitanyatiwari2468@gmail.com",
};
