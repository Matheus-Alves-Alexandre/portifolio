"use client";
import Image from "next/image";

import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

import { mRounded } from "../../public/assets/index";
import Link from "next/link";

const Hero = () => {
  const countP = useMotionValue(0);
  const countY = useMotionValue(0);
  const Project = useTransform(countP, Math.round);
  const Years = useTransform(countY, Math.round);

  useEffect(() => {
    const animation = animate(countP, 17, { duration: 3 });
    const year = animate(countY, 8, { duration: 3 });
    return animation.stop, year.stop;
  }, []);
  return (
    <section className="w-full flex flex-col  p-16 gap-10">
      <div className="flex text-[#565656] ">
        <div className="border rounded-full items-center flex p-1 gap-2">
          <Home size={15} />
          <h1 className="font-normal text-xs">INTRODUCE</h1>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=""
      >
        <h1 className="font-normal text-6xl text-[#fff] mb-10">
          Im a <span className="text-primary-color">Matheus</span>, <br /> im a
          fullstack developer
        </h1>
        <span className="text-[#565656] font-normal text-base">
          Sou um desenvolvedor web especializado em Next.js e Node.js. Minha
          paixão é criar aplicativos web rápidos e eficientes. Se você procura
          alguém para projetar e desenvolver soluções web de alta qualidade,
          estou aqui para ajudar.
        </span>
      </motion.div>
      <div className="justify-between  flex sm:text-xl sm:-ml-10">
        <div className="flex gap-20 ml-10">
          <div className="justify-center items-center">
            <div className="flex justify-center items-center">
              <motion.h1 className="text-6xl">{Project}</motion.h1>
              <h1 className="text-7xl">+</h1>
            </div>
            <span className="text-[#565656] ">
              Project
              <br /> Complete
            </span>
          </div>
          <div className="justify-center items-center">
            <div className="flex justify-center items-center">
              <motion.h1 className="text-6xl">{Years}</motion.h1>
              <h1 className="text-7xl">+</h1>
            </div>
            <span className="text-[#565656] ">
              Years of
              <br /> Experience
            </span>
          </div>
        </div>
        <div className="items-center">
          <Link
            href={"#about"}
            className=" relative items-center flex justify-center sm:hidden "
          >
            <Image src={mRounded} alt="" className="animate-spin-slow" />
            <ArrowRight size={40} className="absolute text-[#fff] " />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
