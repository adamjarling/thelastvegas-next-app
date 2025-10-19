"use client";

import React from "react";
import ReactObfuscate from "react-obfuscate";

const Obfuscate = () => {
  return (
    <ReactObfuscate
      email="info@thelastvegas.com"
      headers={{
        subject: "TLV booking / info",
      }}
    />
  );
};

export default Obfuscate;
