// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Venkatesh waran",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern fullstack apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "venkateshwaranstv@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/venkat-fsd",
  github: "https://github.com/Venkateshwaran-Developer",
  instagram: "https://www.instagram.com/it_z.m_e.__venkat?igsh=bG8xaWE4MDB3MXpm",
  facebook: "https://www.facebook.com/share/1K5rsCGACE/",
  whatsapp: "https://wa.me/919944179753",
  
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "SGA Travels",
    image: "/projects/figgen.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Live Taxi Booking Website ",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://sgt-travels.vercel.app/",
    tech: ["javascript", "react", "tailwind","framer-motion"],
  },
  {
    name: "E-Commerce Website",
    image: "/projects/project4.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Dynamically add and purchase products",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://simple-ecommerce-project.vercel.app/",
    tech: ["react", "node-js", "express-js", "mongodb"],
  },
  {
    name: "Crackers Website",
    image: "/projects/project2.png",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Crackers buying and Selling platform through local vendors",
    gradient: ["#245B57", "#004741"],
    url: "https://www.dltlabs.com/",
    tech: ["react", "tailwind", "javascript"],
  },
  {
    name: "Employee Management System",
    image: "/projects/project5.png",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Add and Manage employees with multiple fields",
    gradient: ["#003052", "#167187"],
    url: "https://employee-center-one.vercel.app/",
    tech: ["mongodb", "react", "node-js", "express-js"],
  },
  {
    name: "Portfolio Website",
    image: "/projects/project3.png",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "Portfolio Website using React",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://venkat-portfolio-gamma.vercel.app/",
    tech: ["react", "javascript", "tailwind","sass"],
  },
  // {
  //   name: "Huminos website",
  //   image: "/projects/huminos.jpg",
  //   blurImage: "/projects/blur/huminos-blur.jpg",
  //   description: "Marketing site for Huminos bots for workplace by facebook",
  //   gradient: ["#17007B", "#3A2C79"],
  //   url: "https://bots.huminos.com/",
  //   tech: ["javascript", "sass", "svg", "gulp"],
  // },
  // {
  //   name: "AKGEC - College Website",
  //   image: "/projects/akgec.jpg",
  //   blurImage: "/projects/blur/akgec-blur.jpg",
  //   description: "Contributed in overall design and development",
  //   gradient: ["#5E4C06", "#746528"],
  //   url: "https://www.akgec.ac.in/",
  //   tech: ["javascript", "html", "css"],
  // },
  // {
  //   name: "Alpha Aesthetics",
  //   image: "/projects/alpha.jpg",
  //   blurImage: "/projects/blur/alpha-blur.jpg",
  //   description: "Designed and developed the platform",
  //   gradient: ["#172839", "#334659"],
  //   url: "https://alpha-aesthetics.ayushsingh.net/",
  //   tech: ["illustrator", "javascript", "angular"],
  // },
  // {
  //   name: "Amantrya - Polling Web App",
  //   image: "/projects/farewell18.jpg",
  //   blurImage: "/projects/blur/farewell18-blur.jpg",
  //   description: "Dark mode dated from 2017 🔥",
  //   gradient: ["#142D46", "#2E4964"],
  //   url: "https://farewell18.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
  // {
  //   name: "BDC 2018 Web Portal",
  //   image: "/projects/bdc18.jpg",
  //   blurImage: "/projects/blur/bdc18-blur.jpg",
  //   description: "Built the portal from zero to production 🚀",
  //   gradient: ["#470700", "#712A23"],
  //   url: "https://bdc2018.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
  // {
  //   name: "Scrolls 2017 - Website",
  //   image: "/projects/scrolls.jpg",
  //   blurImage: "/projects/blur/scrolls-blur.jpg",
  //   description: "Built the portal from zero to production 🚀",
  //   gradient: ["#685506", "#7B6921"],
  //   url: "https://scrolls-17.ayushsingh.net/",
  //   tech: ["angular", "html", "css"],
  // },
  // {
  //   name: "Cardize - Visiting Cards",
  //   image: "/projects/cardize.jpg",
  //   blurImage: "/projects/blur/cardize-blur.jpg",
  //   description: "First web project! Custom visiting card generator",
  //   gradient: ["#552A04", "#614023"],
  //   url: "https://cardize.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "framer-motion",
    "typescript",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["node-js", "express-js", "mongodb", "postgresql"],
  other: ["git", "github", "figma", "api", "webpack","cmd"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full Stack Developer in Superlabs ( Internship )",
    size: ItemSize.SMALL,
    subtitle:
      "Developed and optimized Full-stack React applications at Superlabs, had an Opertunity to work with live projects and enhancing user experience through efficient state management and API integrations",
    // image: "/timeline/reactindia.svg",
    slideImage: "/timeline/superlabs.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Production Manager in Apple Packger",
    size: ItemSize.SMALL,
    subtitle:
      "Built a strong client base and increased profitability by 25% through strategic marketing, competitive pricing, and strong customer relationships.",
    // image: "/timeline/huminos.svg",
    slideImage: "/timeline/cartonbox.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Apple Packager",
    size: ItemSize.SMALL,
    subtitle: "Managed a carton box manufacturing business with my uncle, overseeing production, supply chain, and quality control to ensure efficiency and scalability.",
    // image: "/timeline/octanner.svg",
    slideImage: "/timeline/cartonbox1.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "B.Tech Information Technology in KSRIET",
    size: ItemSize.SMALL,
    subtitle:
      "Completed my UG with 7.79 CGPA, gaining strong expertise in software development, data structures, and full-stack web technologies.",
    // image: "/timeline/dltlabs.svg",
    slideImage: "/timeline/graduation.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  
  

  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Junior Developer in Corvid Consulting Uk (Intership)",
    size: ItemSize.SMALL,
    subtitle:
      "Have involved in various real-time projects under the guidance of Engineering team",
    // image: "/timeline/si.svg",
    slideImage: "/timeline/corvid.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Internal Smart India Hackathon",
    size: ItemSize.SMALL,
    subtitle:
      "Showcased a project titled Virtual Tourist Guide, acquiring valuable hands-on experience. ",
    slideImage: "/timeline/hackathon.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },


  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Web Technologies",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 100+ students on getting started with web technologies like HTML/CSS and JS",
    slideImage: "/timeline/web-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing",
    size: ItemSize.SMALL,
    subtitle: "Secured 1st prize in Web design challenge against 10+ teams",
    slideImage: "/timeline/web.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  
  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "HSC",
    size: ItemSize.SMALL,
    subtitle:
      "Completed Higher Secondary Certificate with a strong academic foundation, excelling in analytical reasoning, problem-solving, and technical skills.",
    // image: "/timeline/xda.svg",
    slideImage: "/timeline/12th.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2015",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "SSLC",
    size: ItemSize.SMALL,
    subtitle:
      "Achieved 92% in SSLC examinations, securing top 10 ranking, demonstrating strong academic foundation and consistent high performance across all subjects",
  
    slideImage: "/timeline/10th.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
