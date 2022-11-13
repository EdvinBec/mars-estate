import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import FeatureCard from "./FeatureCard";
import FeatureCard1 from "./FeatureCard1";
import FeatureCard2 from "./FeatureCard2";
import FeatureCard3 from "./FeatureCard3";

type Props = {};

function FeatureCards({}: Props) {
  return (
    <div className="h-auto md:h-screen w-screen bg-black md:flex items-center justify-center">
      <div className=" md:h-[97%] md:w-[96%] md:flex md:gap-4 md:justify-center">
        <div className="md:h-full md:w-1/2 h-[500px]">
          <FeatureCard1 />
        </div>
        <div className="md:flex md:flex-col md:justify-between md:w-1/2 md:h-full ">
          <div className="md:h-[49%] md:w-[100%] h-[500px]">
            <FeatureCard2 />
          </div>
          <div className="md:h-[49%] md:w-[100%] h-[500px]">
            <FeatureCard3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCards;
