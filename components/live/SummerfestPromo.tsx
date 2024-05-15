"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import summerFest from "public/images/tlv_summerfest_2024.jpeg";

const SummerfestPromo = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5,
        },
      }}
      className="flex flex-col items-center"
    >
      <Image
        src={summerFest}
        alt="TLV Summerfest 2024"
        className="object-cover max-w-full lg:max-w-3xl"
      />

      <a
        href="https://www.summerfest.com/ticket-info/"
        className="mt-5 button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Tickets
      </a>
    </motion.div>
  );
};

export default SummerfestPromo;
