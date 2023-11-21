import Image from "next/image";
import React from "react";

type Skills = {
  ImageSrc: string;
  Number: string;
};

const SkillCard: React.FC<Skills> = ({ ImageSrc, Number }) => {
  return (
    <div className="text-[#565656] items-center border rounded-full p-20 justify-center hover:border-primary-color">
      <div className="">
        <Image
          src={ImageSrc}
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <div className="mt-20">
        <span className="text-[#fff] font-medium text-base">{Number}</span>
      </div>
    </div>
  );
};

export default SkillCard;
