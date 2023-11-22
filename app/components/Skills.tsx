"use client";
import { User2, UserCog2 } from "lucide-react";
import React from "react";
import SkillCard from "./cards/SkillCard";

import { motion } from "framer-motion";

const Skills = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const companies = [
    { ImageSrc: "/assets/skills/figma.png", number: "50%" },
    { ImageSrc: "/assets/skills/javascript.png", number: "70%" },
    { ImageSrc: "/assets/skills/mongodb.png", number: "50%" },
    { ImageSrc: "/assets/skills/nestjs.png", number: "60%" },
    { ImageSrc: "/assets/skills/nextjs.png", number: "80%" },
    { ImageSrc: "/assets/skills/nodejs.png", number: "70%" },
    { ImageSrc: "/assets/skills/postgresql.png", number: "70%" },
    { ImageSrc: "/assets/skills/react.png", number: "80%" },
  ];
  return (
    <section className="w-full flex flex-col  p-16 gap-10">
      <div className="flex text-[#565656] ">
        <div className="flex text-[#565656] ">
          <div className="border rounded-full items-center flex p-1 gap-2">
            <UserCog2 size={15} />
            <h1 className="mr-1">Skills</h1>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="font-normal text-6xl text-[#fff] mb-10 sm:text-3xl  md:text-6xl  lg:text-6xl   xl:text-6xl">
          My <span className="text-primary-color">Advantages</span>
        </h1>
        <div className=" ">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="justify-start grid gap-20 sm:grid-cols-1  md:grid-cols-4  lg:grid-cols-4   xl:grid-cols-4 "
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            {companies.map((props, index) => (
              <motion.div key={index} className="item" variants={item}>
                <SkillCard ImageSrc={props.ImageSrc} Number={props.number} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
