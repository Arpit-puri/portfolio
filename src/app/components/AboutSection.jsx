"use client";
import React from "react";
import Image from "next/image";
import img from "../../../public/images/pc.jpg";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 ">
        <li>NODE.JS</li>
        <li>EXPRESS</li>
        <li>MONGODB</li>
        <li>REACTJS</li>
        <li>NEXTJS</li>
        <li>JAVASCRIPT</li>
        <li>JAVA</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 ">
        <li>KIET GHAZIABAD, U.P.</li>
        <li>GREENWAY MODERN SCHOOL, DELHI</li>
      </ul>
    ),
  },
  {
    title: "certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2 ">
        <li>Data Structures From COURSERA</li>
        <li>
          Introduction to Cloud Development with HTML, CSS, and JavaScript From
          IBM
        </li>
        <li>JAVA From GREAT LEARNING</li>
        <li>SQL from Hacker Rank</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handelTabChange = (id) => {
    setTab(id);
  };
  return (
    <section className="text-white ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <Image src={img} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am currently in my 4th year pursuing a B.Tech degree in CS branch
            at KIET group of Institutions in Ghaziabad, Uttar Pradesh . I have a
            strong background in MERN stack development and have successfully
            completed several projects in this technology stack. Currently, I am
            expanding my skills by learning MySQL and Next.js and am working on
            a project in Next.js. I also do competetive programming on code-chef
            in java. I believe that my experience in web development and
            competitive coding in Java has enhanced my problem-solving
            abilities.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handelTabChange("skills")}
              active={tab === "skills"}
            >
              skills
            </TabButton>
            <TabButton
              selectTab={() => handelTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handelTabChange("certification")}
              active={tab === "certification"}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
