import React from "react";
import { User2 } from "lucide-react";

type Experience = {
  Expecialization: string;
  Text: string;
  Enterprise: string;
};

const ServiceCard: React.FC<Experience> = ({
  Expecialization,
  Text,
  Enterprise,
}) => {
  return (
    <div className="text-[#565656] items-center border rounded-xl p-4 justify-between flex hover:border-primary-color mb-10">
      <div className="gap-5">
        <h1 className="text-[#fff] font-medium text-base">{Expecialization}</h1>
        <h2 className="font-light">{Text}</h2>
        <span className="text-[#fff] font-light">{Enterprise} </span>
      </div>
    </div>
  );
};

export default ServiceCard;
