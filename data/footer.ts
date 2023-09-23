import { nav, socialMedia } from "@/nttb-config";

import { SocialIcons } from "zuma-blocks";

export type FooterNav = {
  name: string;
  href: string;
};

export const footerNav = [
  {
    href: "/",
    name: "Home",
  },
  ...nav,
];

export type FooterSocial = {
  name: string;
  href: string;
  icon: React.FC<{ className: string }>;
};

export const footerSocials = [
  {
    name: "Facebook",
    href: socialMedia.facebook.url,
    icon: SocialIcons.FacebookIcon,
  },
  {
    name: "Instagram",
    href: socialMedia.instagram.url,
    icon: SocialIcons.InstagramIcon,
  },
  {
    name: "Twitter",
    href: socialMedia.twitter.url,
    icon: SocialIcons.TwitterIcon,
  },
  {
    name: "YouTube",
    href: socialMedia.youTube.url,
    icon: SocialIcons.YouTubeIcon,
  },
];
