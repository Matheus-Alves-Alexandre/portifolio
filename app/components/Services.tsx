"use client";
import { Building2, User2 } from "lucide-react";
import React from "react";
import ServiceCard from "./cards/ServiceCard";

import { motion, Variants } from "framer-motion";

const Services = () => {
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
  const services = [
    {
      Expecialization: "Website Design",
      Text: "I created digital products with unique ideas figma & framer",
      Enterprise: "5 Projects",
    },
    {
      Expecialization: "Development",
      Text: "I build website to go live with next.js, vercel and node.js",
      Enterprise: "17 Projects",
    },
    {
      Expecialization: "Consulting",
      Text: "Schedule a meeting to discuss how our specialized consulting can significantly boost your website and achieve your strategic goals",
      Enterprise: "2 Projects",
    },
  ];
  return (
    <section className="w-full flex flex-col  p-16 gap-10">
      <div className="flex text-[#565656] ">
        <div className="border rounded-full items-center flex p-1 gap-2">
          <Building2 size={15} />
          <h1 className="font-normal mr-2 ">Services</h1>
        </div>
      </div>
      <div className="">
        <h1 className="font-normal text-6xl text-[#fff] mb-10">
          My Specializations{" "}
          <span className="text-primary-color">Specializations</span>
        </h1>
        <div className="">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="justify-start flex flex-col "
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            {services.map((experience, index) => (
              <motion.div key={index} className="item" variants={item}>
                <ServiceCard
                  Expecialization={experience.Expecialization}
                  Text={experience.Text}
                  Enterprise={experience.Enterprise}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Services;
