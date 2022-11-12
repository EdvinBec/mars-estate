import Image from "next/image";
import React from "react";

import marsLogo from "../assets/img/MarsLogo.png";
import { Bars2Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  return (
    <header className="w-full h-screen bg-hero-background bg-cover bg-center">
      <div className="w-full h-full bg-[rgba(0,0,0,.4)] flex flex-col justify-between items-center">
        <nav className="flex justify-between items-center w-[90%]">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={marsLogo}
              alt="Logo"
              className="w-[100px] cursor-pointer"
            />
          </motion.div>
          <ul
            className="hidden md:flex text-md md:justify-between xl:justify-center xl:gap-24 md:w-1/2 text-white
           font-[EuclidFlexLight] uppercase tracking-widest"
          >
            <motion.li
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="#"
                className="hover:text-[#f89e2b] hover:border-b-2 border-[#f89e2b]
                transition ease-in-out duration-200 pb-1"
              >
                Apartments
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="#"
                className="hover:text-[#f89e2b] hover:border-b-2 border-[#f89e2b]
                transition ease-in-out duration-200 pb-1"
              >
                Stocks
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link
                href="#"
                className="hover:text-[#f89e2b] hover:border-b-2 border-[#f89e2b]
                transition ease-in-out duration-200 pb-1"
              >
                Contacts
              </Link>
            </motion.li>
          </ul>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex gap-8"
          >
            <button
              className="font-[EuclidFlexLight] text-white text-md font-normal uppercase tracking-widest hover:text-[#f89e2b]
                transition ease-in-out duration-200 pb-1"
            >
              Sign in
            </button>
            <motion.div whileTap={{ scale: 0.5, rotate: -90 }}>
              <Bars2Icon className="w-12 text-white md:hidden xl:block cursor-pointer" />
            </motion.div>
          </motion.div>
        </nav>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex gap-8 w-[90%] items-center mb-12"
        >
          <h2 className="text-5xl font-[EuclidFlexSemi] text-white tracking-wide">
            CS7M
          </h2>
          <p className="text-white font-[EuclidFlexLight] text-sm w-[200px] opacity-90 md:text-md md:w-[250px]">
            Stylish architecture wil not leave anyone indifferent
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
