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
      <div className="">
        <h1 className="font-normal text-6xl text-[#fff] mb-10">
          Im a <span className="text-primary-color">Matheus</span>, <br /> im a
          fullstack developer
        </h1>
        <span className="text-[#565656] font-normal text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          veritatis dolorem rerum iste voluptates
        </span>
      </div>
      <div className="justify-end flex">
        <div className="items-center">
          <Link
            href={"#about"}
            className=" relative items-center flex justify-center  "
          >
            <Image src={mRounded} alt="" className="animate-spin-slow" />
            <ArrowRight size={40} className="absolute text-[#fff] " />
          </Link>
        </div>
      </div>
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
    </section>
  );
};

export default Hero;
