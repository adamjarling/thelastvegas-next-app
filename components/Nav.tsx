"use client";

import { FiMenu, FiX } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

import { IoIosMenu } from "react-icons/io";
import SocialMediaIcons from "./SocialMediaIcons";
import { config } from "@/nttb-config";
import { usePathname } from "next/navigation";
import { Container } from "zuma-blocks";
import tlvLogoInitialsWhite from "@/public/images/tlv-logo-white.png";
import tlvLogo from "@/public/images/tlv-sweet-salvation-logo-white.png";
import Image from "next/image";

interface NavProps {
  links: {
    href: string;
    name: string;
  }[];
}

const Nav: React.FC<NavProps> = ({ links }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      setOpacity(Math.ceil(v));
    });
  }, [scrollYProgress]);

  const navVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
    },
  };

  return (
    <div className="fixed top-0 z-20 w-full">
      <Container>
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity - 0.1 }}
          transition={{
            duration: 0.5,
          }}
        ></motion.div>
        <nav
          className={`flex justify-between items-center py-3 lg:py-5 shadow-sm w-full`}
        >
          {/* Desktop nav */}
          <div className={`flex items-center opacity-100 z-30`}>
            <motion.a
              href="/"
              className={`text-lg font-semibold text-white uppercase ${
                isMobileNavOpen && "hidden"
              }`}
            >
              <span className="hidden lg:block">
                <Image
                  src={tlvLogo}
                  alt="The Last Vegas logo"
                  className="w-auto h-16"
                />
              </span>
              <span className="lg:hidden">
                <Image src={tlvLogo} alt="TLV logo" className="w-auto h-16" />
              </span>
            </motion.a>
          </div>
          <div className={`hidden lg:flex uppercase opacity-100 z-30`}>
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`mx-4 text-sm`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className={`lg:hidden flex items-center z-20`}>
            <motion.button
              type="button"
              className={`focus:outline-none`}
              onClick={toggleMobileNav}
              aria-name="Toggle mobile menu"
            >
              {isMobileNavOpen ? (
                <FiX size={40} color="white" />
              ) : (
                <IoIosMenu size={40} />
              )}
            </motion.button>
          </div>
          {isMobileNavOpen && (
            <motion.div
              className={`lg:hidden fixed inset-0 bg-black z-10 h-screen`}
              initial="closed"
              animate="open"
              variants={navVariants}
            >
              <div className="container mt-20">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`block text-3xl py-2 text-white hover:text-gray-200`}
                    onClick={toggleMobileNav}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-20">
                  <SocialMediaIcons />
                </div>
              </div>
            </motion.div>
          )}
        </nav>
      </Container>
    </div>
  );
};

export default Nav;
