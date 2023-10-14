"use client";

import React from "react";
import ReactObfuscate from "react-obfuscate";

const Obfuscate = () => {
  return (
    <ReactObfuscate
      email="natearling@tko.com"
      headers={{
        subject: "TLV booking",
      }}
    />
  );
};

export default Obfuscate;
