import { User2 } from "lucide-react";
import React from "react";

const Services = () => {
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
        <div className="">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Services;
const ServiceCard = ({}) => {
  return (
    <div className="text-[#565656] items-center   border rounded-xl p-4 justify-between flex hover:border-primary-color mb-10">
      <div className="gap-5">
        <h1 className="text-[#fff] font-medium text-base">expecialization</h1>
        <h2 className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <span className="text-[#fff]  font-light">12 Project</span>
      </div>
      <div className="">
        <User2 size={50} />
      </div>
    </div>
  );
};
