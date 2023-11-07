import { User2 } from "lucide-react";
import Image from "next/image";
import React from "react";

import { mLogo, mPhoto } from "../../public/assets/index";

const Testimonials = () => {
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
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <TestmonialsCard />
            </div>
            <div id="item2" className="carousel-item w-full">
              <TestmonialsCard />
            </div>
            <div id="item3" className="carousel-item w-full">
              <TestmonialsCard />
            </div>
            <div id="item4" className="carousel-item w-full">
              <TestmonialsCard />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const TestmonialsCard = ({}) => {
  return (
    <div className="border rounded-xl p-5">
      <div className="flex  ">
        <Image
          src={mPhoto}
          alt=""
          className=" rounded-full w-[64px] h-[64px] mr-3"
        />
        <div className="grid mb-5">
          <h1 className="font-semibold">cliente</h1>
          <h2>empresa</h2>
        </div>
      </div>
      <span className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestiae
        repudiandae repellat quia quae,
      </span>
    </div>
  );
};
