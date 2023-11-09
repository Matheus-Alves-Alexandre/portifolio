"use client";
import { Home, User2 } from "lucide-react";
import React from "react";

import { motion, inView } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const About = () => {
  return (
    <section className="w-full flex flex-col  p-16 gap-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex text-[#565656] ">
          <div className="border rounded-full items-center flex p-1 gap-2">
            <User2 size={15} />
            <h1 className="font-normal text-xs">ABOUT</h1>
          </div>
        </div>
        <div className="">
          <h1 className="font-normal text-6xl text-[#fff] mb-10">
            Every <span className="text-primary-color">Great Code Begins</span>{" "}
            with an Even Better Story
          </h1>
          <span className="text-[#565656] font-normal text-base">
            Desde o início da minha jornada como programador há quase 8 anos,
            tenho me dedicado ao trabalho remoto para diversas organizações,
            consultado startups e colaborado com pessoas talentosas para
            desenvolver soluções digitais tanto para o mundo dos negócios quanto
            para o uso do consumidor. Tenho confiança tranquila em minhas
            habilidades, uma curiosidade natural que impulsiona meu trabalho e
            um compromisso constante de aprimorar minhas habilidades, resolvendo
            um desafio de programação de cada vez.
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
