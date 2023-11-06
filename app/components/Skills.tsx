import { User2 } from "lucide-react";
import React from "react";

const Skills = () => {
  return (
    <section className="w-full flex flex-col  p-16 gap-10">
      <div className="flex text-[#565656] ">
        <div className="border rounded-full items-center flex p-1 gap-2">
          <User2 size={15} />
          <h1 className="font-normal text-xs">ABOUT</h1>
        </div>
      </div>
      <div className="">
        <h1 className="font-normal text-6xl text-[#fff] mb-10">
          Im a <span className="text-primary-color">Matheus</span>, <br /> im a
          fullstack developer
        </h1>
        <div className=" grid grid-cols-4 gap-20">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
      </div>
    </section>
  );
};

export default Skills;

const SkillCard = ({}) => {
  return (
    <div className="text-[#565656] items-center border rounded-full p-20 justify-center hover:border-primary-color">
      <div className="">
        <User2 size={50} />
      </div>
      <div className="mt-20">
        <span className="text-[#fff] font-medium text-base">94</span>
      </div>
    </div>
  );
};
