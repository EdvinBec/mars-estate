import Image from "next/image";
import React from "react";
import vancouver from "../assets/img/vancouver-house-min.jpg";
import quality from "../assets/img/EXCELLENTquality.png";

type Props = {};

const ExcellentQuality = (props: Props) => {
  return (
    <div className="h-screen bg-black md:flex">
      <div className="bg-white w-full md:w-1/2 h-1/2 md:h-screen flex flex-col justify-center items-center">
        <div className="w-4/5 flex flex-col gap-8 justify-start">
          <Image src={quality} alt="excellent quality" className="w-full" />
          <p className="w-full font-[EuclidFlexNormal]">
            The houses are aranged so that as much sunlight as possible gets
            into each apartment. A pedestrian boulevard with bike paths will
            stretch through the entire residential quarter. Schools and
            kindergartens will open within walking distance.
          </p>
          <button className="w-[125px] border-black border-2 px-2 py-2 hover:bg-[rgba(0,0,0,.1)] transition ease-in-out ">
            Show more
          </button>
        </div>
      </div>
      <div className="h-1/2 md:h-screen md:w-1/2">
        <Image className="w-full h-full" src={vancouver} alt="building" />
      </div>
    </div>
  );
};

export default ExcellentQuality;
