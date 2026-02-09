import { nav } from "@/nttb-config";

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
