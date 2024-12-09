import prise from "../../public/images/prise.png";
import mencer from "../../public/images/mencer.png";
import space from "../../public/images/space-home.png";
import awesomeFresh from "../../public/images/solution.png";
import prodile from "../../public/images/prodile.png";
import getLinked from "../../public/images/getlinked.png";
import metabnb from "../../public/images/metabnb.png";
import spicyGuitar from "../../public/images/spicy-guitar.png";
import ecom from "../../public/images/ecom.png";
import bloodSaver from "../../public/images/bloodsaverhome.png";
import divinecare from "../../public/images/divinecare.png";
import eventhive from "../../public/images/eventhive.png";
import moviebox from "../../public/images/moviebox.png"
import shortly from "../../public/images/shortly.png"
import kenesglow from "../../public/images/kenesglow.png"

export const data = {
  experience: [
    {
      position: "Frontend Developer • Prise (Remote) ↗",
      duration: "2024 - Present",
      url: "https://www.prise.africa/",
      about:
        "Build, style and maintain critical components for prise frontend. Worked closely with the senior developers, designers to implement a comprehensive user dashboard,.",
      skills: [
        "SCSS",
        "Angular",
        "TypeScript",
        "Postman",
      ],
    },

    {
      position: "Frontend Developer • Ectype (Remote) ↗",
      duration: "2023 - 2024",
      url: "https://www.ectype.finance/",
      about:
        "Collaborated with backend engineers to ensure seamless integration for Ectype's projects and implementation of a batch upload feature, boosting traders' productivity by 60% for the Ectype product.",
      skills: [
        "TailwindCSS",
        "JavaScript",
        "TypeScript",
        "NextJs",
        "TanstackQuery",
      ],
    },

    {
      position: "Frontend Engineer • Research In Nigeria (RIN) (Remote) ↗",
      duration: "2023 - 2024",
      url: "https://www.researchinnigeria.org/",
      about:
        "Collaborated with backend developers to implement role-based access controls, improving security and user experience by tailoring access for distinct user roles.",
      skills: [
        "Styled-Components",
        "JavaScript",
        "React",
        "TailwindCSS",
        "Redux",
      ],
    },
    {
        position: "Frontend Developer • Oman Diabetes Association (Oman - Remote) ↗",
        duration: "2022 - 2023",
        url: "",
        about:  "Developed and maintained multiple web pages for a major organization, improving user experience and driving a 20% increase in website traffic.",
        skills: [
            "HTML",
            "CSS",
            "Javascript",
            "BootStrap"
        ]

    }
  ],

  landingPageProjects: [
    {
      name: "Kenesglow Portfolio",
      description: "A portfolio website showcasing my services and brand",
      imgUrl: `${kenesglow}`,
      hostedURL: "https://kenesglow.vercel.app/",
      featured: false,
      techUsed: ["React", "Typescript", "Tailwindcss", "Framer Motion"]
    },
    {
      name: "Prise",
      description: "A platform to manage finances of students, your school, cafes",
      imgURL: `${prise}`,
      hostedURL: "https://www.prise.africa/",
      featured: true,
      techUsed: ["Angular", "SCSS", "TypeScript", "Postman"],
    },
    {
        name: "Mencer",
        description: "A decentralized platform that helps transform web3 beginners to pro",
        techUsed: ["React.js", "TailwindCSS", "ShadCN", "Motoko", "ShadCN"],
        imgURL: `${mencer}`,
        repoURL: "https://github.com/TryYourBestAndLeaveTheRest/mencer_show",
        hostedURL: "https://www.mencer.io/",
        featured: true,

    },
    {
        name: "AwesomeFresh",
        description: "A landing page for an Agricultural firm",
        techUsed: ["React.js", "TailwindCSS", "ShadCN", "Motoko", "ShadCN"],
        imgURL: `${awesomeFresh}`,
        repoURL: "https://github.com/BenedictaUche/awesomefresh",
        hostedURL: "https://awesomefresh.vercel.app/",
        featured: false,

    },
    {
      name: "Prodile",
      description:
        "A website to connect farmers with consumers",
      techUsed: ["NextJs", "TailwindCSS", "TanstackQuery", "FramerMotion", "ShadCN"],
      imgURL: `${prodile}`,
      repoURL: "",
      hostedURL: "https://app-prodile.vercel.app/",
      featured: true,
    },
    {
        name: "SpicyAcademy",
        description:
          "A website that allows for learning of playing the guitar",
        techUsed: ["NextJs", "TailwindCSS", "TanstackQuery", "FramerMotion", "ShadCN"],
        imgURL: `${spicyGuitar}`,
        repoURL: "",
        hostedURL: "https://spicy-guitar.vercel.app/",
        featured: true,
    },
    {
        name: "ecom",
        description:
          "A website to auction photographs and other amazing artworks.",
        techUsed: ["NextJs", "TailwindCSS", "TanstackQuery", "ShadCN", "Firebase", "Firestore"],
        imgURL: `${ecom}`,
        repoURL: 'https://github.com/BenedictaUche/ecom',
        hostedURL: "https://ecom-five-woad.vercel.app/",
        featured: false,
    },
    {
      name: "GetLinked",
      description: "A getLinked Hackathon Project",
      techUsed: [
        "React.js",
        "TypeScript",
        "TailwindCSS",
        "getLinked API",
        "Framer Motion",
      ],
      imgURL: `${getLinked}`,
      repoURL: "https://github.com/BenedictaUche/getLinked",
      hostedURL: "https://getlinked-gold.vercel.app/",
      featured: false,
    },
  ],

  archiveProjects: [
    {
      name: "Divine Care Pharmaceuticals",
      description:
        "An ecommerce website for a pharmacy store",
      techUsed: ["NextJS", "TailwindCSS", "Firebase", "Firestore", "ContentfulCMS"],
      imgUrl: `${divinecare}`,
      repoURL: "https://github.com/BenedictaUche/DivineCare-Pharmaceuticals",
      hostedURL: "https://divine-care-pharmaceuticals-l8ra.vercel.app/",
      featured: false,
    },
    {
      name: "metabnb",
      description:
        "A platform that allows users to list accommodations to-let.",
      techUsed: ["ReactJs", "TailwindCSS", "metabnbAPI"],
      imgURL: `${metabnb}`,
      repoURL:
        "https://github.com/BenedictaUche/metabnb",
      hostedURL: "http://metabnb-three.vercel.app/",
      featured: false,
    },
    {
      name: "EventHive",
      description:
        "A application that simplifies event management and discovery.",
      techUsed: ["ReactJS", "TailwindCSS", "ExpressJS", "EventAPI"],
      imgURL: `${eventhive}`,
      repoURL: "https://github.com/BenedictaUche/eventhive",
      hostedURL: "https://eventhive-nine.vercel.app/",
      featured: false,
    },
    {
      name: "BloodSavers",
      description: "An HMO dashboard.",
      techUsed: ["ReactJs", "Javascript", "TailwindCSS", ""],
      imgURL: `${bloodSaver}`,
      repoURL: "https://github.com/BenedictaUche/bloodsavers",
      hostedURL: "https://bloodsavers.vercel.app/",
      featured: false,
    },
    {
      name: "moviebox",
      description:
        "A basic landing page for a brand that assists startups in achieving their aims.",
      techUsed: ["ReactJS", "ChakraUI","TMDBAPI"],
      imgURL: `${moviebox}`,
      repoURL: "https://github.com/BenedictaUche/movie-box",
      hostedURL: "https://moviebox-kappa.vercel.app/",
      featured: false,
    },
    {
      name: "Space Tourism",
      description: "A space tourism website.",
      techUsed: ["ReactJS", "TailwindCSS", "SpaceJPEGs"],
      imgURL: `${space}`,
      repoURL: "https://github.com/Omolaso/spaceTourism",
      hostedURL: "https://spacetourplace.netlify.app",
      featured: false,
    },
    {
      name: "Shortly",
      description: "A basic landing page for a food ordering service.",
      techUsed: ["HTML", "CSS", "RebrandlyAPI"],
      imgURL: `${shortly}`,
      repoURL: "https://github.com/BenedictaUche/Shortly",
      hostedURL: "https://shortly-phi-eight.vercel.app/",
      featured: false,
    },
  ],

  skills: [
    "HTML",
    "CSS",
    "SCSS",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "NextJS",
    "Angular",
    "ContentfulCMS",
    "Firebase",
    "Wix",
    "Framer",
    "Git/Github",
  ],

  liveProjects: [
    {
      url: "https://www.prise.africa/",
      title: "Prise",
      description: "A platform to manage finances of students, your school, cafes",
    },
    {
      url: "https://www.researchinnigeria.org/",
      title: "Research In Nigeria (RIN)",
      description: "A platform that connects researchers to opportunities",
    },
  ],
};
