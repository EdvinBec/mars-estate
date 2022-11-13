import React from "react";

type Props = {};

const QuoteCard = (props: Props) => {
  return (
    <div className="h-[500px] w-full bg-black flex flex-col justify-center items-center">
      <div className="h-[90%] w-[80%] md:h-full md:w-[95%] flex flex-col justify-center">
        <h3 className="text-white font-[EuclidFlexNormal] text-sm mb-2">
          Credo of Mars
        </h3>
        <div className="w-full h-[80%] bg-green-background bg-cover">
          <div className="w-full h-full bg-[rgba(0,0,0,.5)] flex justify-center items-center text-center">
            <h1 className="text-3xl md:text-6xl font-[EuclidFlexBold] text-white uppercase tracking-widest">
              Taking care of nature as yourself
            </h1>
          </div>
        </div>
        <h3 className="ml-auto text-[#f89e2b] font-[EuclidFlexNormal] text-sm mt-2 hover:text-opacity-80 cursor-pointer">
          Learn more
        </h3>
      </div>
    </div>
  );
};

export default QuoteCard;
