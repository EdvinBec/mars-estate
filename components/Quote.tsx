import React from "react";

type Props = {};

const Quote = (props: Props) => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <h1 className=" text-center text-5xl font-[EuclidFlexSemi] leading-normal w-[90%]">
        <span className="hover:text-[#f89e2b] transition ease-in-out">
          Apartments
        </span>{" "}
        <span className="hover:text-[#f89e2b] transition ease-in-out">
          created
        </span>{" "}
        <span className="hover:text-[#f89e2b] transition ease-in-out">in</span>{" "}
        <span className="hover:text-[#f89e2b] transition ease-in-out">
          order
        </span>{" "}
        <span className="hover:text-[#f89e2b] transition ease-in-out">to</span>{" "}
        <span className="hover:text-[#f89e2b] transition ease-in-out">
          feel
        </span>{" "}
        <span className="hover:text-[#f89e2b] transition ease-in-out">at</span>{" "}
        <span className="hover:text-[#f89e2b] transition ease-in-out">a</span>{" "}
        <span className="hover:text-[#f89e2b] transition ease-in-out">new</span>{" "}
        <span className="hover:text-[#f89e2b] transition ease-in-out">
          level
        </span>
        .{" "}
        <span className="text-[#f89e2b] hover:text-black transition ease-in-out">
          Your
        </span>{" "}
        <span className="hover:text-[#f89e2b] transition ease-in-out">
          adventure
        </span>{" "}
        <span className="hover:text-[#f89e2b] transition ease-in-out">is</span>{" "}
        <span className="hover:text-[#f89e2b] transition ease-in-out">
          waiting
        </span>{" "}
        <span className="hover:text-[#f89e2b] transition ease-in-out">for</span>
        <span className="hover:text-[#f89e2b] transition ease-in-out">
          {" "}
          you
        </span>
        <span className="hover:text-[#f89e2b] transition ease-in-out">.</span>
      </h1>
    </div>
  );
};

export default Quote;
