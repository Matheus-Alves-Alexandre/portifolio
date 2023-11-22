"use client";
import { User2, Briefcase } from "lucide-react";
import React from "react";
import ExperienceCard from "./cards/ExperienceCard";

import { motion, Variants } from "framer-motion";

const Resume = () => {
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
    { Date: "2017", Work: "jovem aprendiz", Enterprise: "Sodexo" },
    { Date: "2020", Work: "Programador ", Enterprise: "Banco Votorantim" },
    {
      Date: "2022",
      Work: "Full stack developer Junior",
      Enterprise: "Siq Systems",
    },
    { Date: "2023", Work: "Full stack developer Pleno", Enterprise: "Ystevo" },
    {
      Date: "NOW",
      Work: "Full stack developer Pleno",
      Enterprise: "Freelancer",
    },
  ];
  return (
    <section className="w-full flex flex-col  p-16 gap-10">
      <div className="flex text-[#565656] ">
        <div className="border rounded-full items-center flex p-1 gap-2">
          <Briefcase size={15} />
          <h1 className="font-normal  mr-2">Resume</h1>
        </div>
      </div>
      <div className="">
        <h1 className="font-normal text-6xl text-[#fff] mb-10 sm:text-3xl  md:text-6xl  lg:text-6xl   xl:text-6xl">
          Education & <span className="text-primary-color">Experience</span>
        </h1>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="justify-start flex flex-col "
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          {companies.map((experience, index) => (
            <motion.div key={index} className="item" variants={item}>
              <ExperienceCard
                Date={experience.Date}
                Enterprise={experience.Enterprise}
                Work={experience.Work}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
