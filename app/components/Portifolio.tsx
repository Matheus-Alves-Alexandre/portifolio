import { User2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { place } from "../../public/assets/index";

const Portifolio = () => {
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
        <div className=" grid grid-cols-2">
          <PortCardUno />
          <PortCardUno />
          <PortCardUno />
          <PortCardUno />
        </div>
      </div>
    </section>
  );
};

export default Portifolio;

const PortCardDuo = ({}) => {
  return (
    <div className="  ">
      <img src="../../public/assets/place.jpg" alt="" />{" "}
      <div className=" flex absolute">
        <span className=" ml-5 mt-2 bg-background rounded-full p-2">figma</span>
      </div>
    </div>
  );
};
const PortCardUno = ({}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl gap-5 mt-5">
      <figure>
        <Image src={place} alt="" className="w-full h-[150px]" />{" "}
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          {/*  <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};
