import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

type Props = { image: StaticImageData; altText: string; description: string };

const SkillCard = ({ image, altText, description }: Props) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleShow = (value: boolean) => {
    setShowDetails(value);
  };
  return (
    <div
      onMouseOver={() => handleShow(true)}
      onFocus={() => handleShow(true)}
      onBlur={() => handleShow(false)}
      onMouseLeave={() => handleShow(false)}
      className="aspect-square flex justify-center items-center group [perspective:1000px] [perspective-origin:50%_-40%] relative "
    >
      <div className="shadow-lg h-full w-full flex justify-center items-center group-focus:[transform:rotatex(45deg)] group-hover:[transform:rotatex(45deg)] bg-gradient-to-b from-transparent/10 to-transparent/5 bg-white/100 group-hover:bg-white/50 group-focus:bg-white/50 transition-all ease-in">
        <Image
          src={image}
          alt={altText}
          className="h-full w-full max-w-[150px] max-h-[150px] p-5 transition-all ease-linear duration-300"
        />
      </div>
      <div className="absolute bottom-[20px] left-0 w-full h-[90%] sm:h-[60%]">
        <div className="relative w-full h-full overflow-hidden">
          <div
            className={`${
              showDetails
                ? "translate-y-[0] opacity-100"
                : "translate-y-[200px] opacity-0"
            } absolute h-full w-full left-0 top-0 bg-gradient-to-b from-white/100 to-transparent/1 backdrop-blur-sm p-2 sm:p-5 flex flex-col justify-center gap-2`}
          >
            <p className="text-[3.2vw] sm:text-sm sm:!leading-7 text-black/70">
              {description}
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
