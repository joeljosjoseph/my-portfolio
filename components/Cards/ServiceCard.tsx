import React from "react";

type Props = { title: string; description: string };

const ServiceCard = ({ title, description }: Props) => {
  return (
    <div className="w-full flex flex-col gap-4 p-2 sm:p-4">
      <p className="text-[16px] sm:text-lg">{title}</p>
      <p className="text-sm sm:text-[1rem] text-black/60">{description}</p>
    </div>
  );
};

export default ServiceCard;
