import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const FeatureCard2 = (props: Props) => {
  return (
    <div className={`h-full w-full bg-2 bg-cover cursor-pointer`}>
      <div className="w-full h-full bg-[rgba(0,0,0,.5)] flex flex-col justify-end hover:bg-[rgba(0,0,0,.7)] transition ease-in-out">
        <div className=" flex flex-col gap-4 ml-8 mb-12">
          <h2 className="text-white uppercase font-[EuclidFlexSemi] text-3xl w-[100px]">
            Exquisite panorama
          </h2>
          <p className="text-white text-md font-[EuclidFlexNormal] w-2/3">
            Enjoy the views of space and Mars every day
          </p>
          <div className="flex items-center gap-4">
            <h4 className="text-white font-[EuclidFlexNormal]">
              Discover more
            </h4>
            <ArrowRightIcon className="w-8 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard2;
