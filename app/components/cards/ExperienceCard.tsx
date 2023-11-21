"use client";
type Experience = {
  Date: string;
  Work: string;
  Enterprise: string;
};

const ExperienceCard: React.FC<Experience> = ({ Date, Work, Enterprise }) => {
  return (
    <div className="border-l text-[#565656]  p-10">
      <h2 className="text-[#565656] ">{Date}</h2>
      <h1 className="text-[#fff]">{Work}</h1>
      <span className="text-[#565656] ">{Enterprise}</span>
    </div>
  );
};

export default ExperienceCard;
