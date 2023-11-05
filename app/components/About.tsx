import { Home, User2 } from "lucide-react";
import React from "react";

const About = () => {
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
        <span className="text-[#565656] font-normal text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum,
          distinctio facere! Aut temporibus sit quo illum veritatis rerum culpa
          ea iure cumque similique, corrupti ex esse, natus, quaerat placeat
          iusto?
        </span>
      </div>
    </section>
  );
};

export default About;
