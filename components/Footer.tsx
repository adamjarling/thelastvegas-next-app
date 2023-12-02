"use client";

import { footerNav, footerSocials } from "@/data/footer";

import { FooterSimpleCentered } from "zuma-blocks";
import React from "react";
import { config } from "@/nttb-config";

const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-gray-900"></div>
      <FooterSimpleCentered
        bandName={config.SITE.name}
        className="relative tracking-wide uppercase border-t border-gray-900 bg-gray-950"
        nav={footerNav}
        socials={footerSocials}
      />
    </div>
  );
};

export default Footer;
