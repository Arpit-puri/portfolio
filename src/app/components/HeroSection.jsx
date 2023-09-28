"use client";
import React from "react";
import Image from "next/image";
import img from "../../../public/images/dev-1.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2980b9] to bg-[#2c3e50]">
              Hello, I'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Arpit Puri",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "A Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
            Hi there I am a Full-stack web developer.
            <br /> Welcome to my portfolio website, Hope you will enjoy this web
            page.
          </p>
          <div>
            <Link
              href="#contact"
              className="px-6 py-3 text-white rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-[#ff27f4] via-[#c727f0] to-[#f56133] hover:bg-slate-300 hover:text-black"
            >
              Hire Me
            </Link>
            <button className="px-6 py-3 text-black rounded-full w-full sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 mt-3">
              Download CV
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative">
            <Image
              src={img}
              alt="Image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
