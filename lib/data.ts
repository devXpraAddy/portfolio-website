import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Aidea from "@/public/Ai_saas.png";
import olympicData from "@/public/olympic.png";
import echoextractor from "@/public/echoextractor.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap), // icon: <LuGraduationCap/> we could have written in this formate if the file was is .tsx formate
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AIdea",
    description:
      "AIdea is an AI-powered platform that simplifies content creation. Generate images,videos,code,conversations,and more using the latest AI technology. ",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "MySQL",
      "Prisma",
      "Stripe",
      "Crisp",
      "Zod",
    ],
    imageUrl: Aidea,
    link: "https://aidea-sable.vercel.app/",
  },
  {
    title: "Echo Extractor",
    description:
      "EchoExtractor automates Amazon price tracking. Get instant alerts when prices change on your desired products.",
    tags: [
      "Next.js",
      "Bright Data",
      "Cheerio",
      "Nodemailer",
      "MongoDB",
      "Headless UI",
      "Tailwind CSS",
    ],
    imageUrl: echoextractor,
    link: "https://echo-extractor.vercel.app/",
  },
  {
    title: "Olympics Data Analysis",
    description:
      "Uncovered hidden trends in historical Olympics data. Improved dataset accuracy by 20% using Python, then created interactive visualizations for in-depth analysis.",
    tags: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Streamlit",
    ],
    imageUrl: olympicData,
    link: "https://data-behind-the-glory.streamlit.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
