"use client";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";
import React from "react";
import { config, nav, socialMedia } from "@/nttb-config";

const socials = [
  {
    name: "Facebook",
    href: socialMedia.facebook.url,
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: socialMedia.instagram.url,
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    href: socialMedia.twitter.url,
    icon: FaXTwitter,
  },
  {
    name: "YouTube",
    href: socialMedia.youTube.url,
    icon: FaYoutube,
  },
];

const footerNav = [{ href: "/", name: "Home" }, ...nav];

const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-gray-900"></div>
      <footer className="relative py-12 text-center tracking-wide uppercase border-t border-gray-900 bg-gray-950">
        <nav className="flex flex-col items-center gap-4 mb-8 md:flex-row md:justify-center md:gap-8">
          {footerNav.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wider text-gray-300 underline hover:no-underline hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-6 mb-8">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={social.name}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-0">
          &copy; {new Date().getFullYear()} {config.SITE.name}. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
