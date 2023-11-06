import { User2, Briefcase } from "lucide-react";
import React from "react";

const Resume = () => {
  return (
    <section className="w-full flex flex-col  p-16 gap-10">
      <div className="flex text-[#565656] ">
        <div className="border rounded-full items-center flex p-1 gap-2">
          <Briefcase size={15} />
          <h1 className="font-normal text-xs">RESUME</h1>
        </div>
      </div>
      <div className="">
        <h1 className="font-normal text-6xl text-[#fff] mb-10">
          Im a <span className="text-primary-color">Matheus</span>, <br /> im a
          fullstack developer
        </h1>
        <div className="justify-start flex flex-col ">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>
    </section>
  );
};

export default Resume;

const ExperienceCard = ({}) => {
  return (
    <div className="border-l text-[#565656]  p-10">
      <h2 className="text-[#565656] ">date</h2>
      <h1 className="text-[#fff]">work</h1>
      <span className="text-[#565656] ">name enterprise</span>
    </div>
  );
};
