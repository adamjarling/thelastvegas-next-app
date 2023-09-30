const siteTitle = "The Last Vegas - Hard glam boogie rock from Chicago USA";
const ogImage = "/images/tlv-old-school-loft.jpg";

const config = {
  OPEN_GRAPH: {
    description:
      "The Last Vegas are a hard rock band from Chicago USA who have released 8 albums and toured the world with Motley Crue, AC/DC, Guns N Roses, Buckcherry, Papa Roach, Theory of a Deadman, and more.",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/og?cover=${encodeURIComponent(ogImage)}`,
      },
    ],
    locale: "en-US",
    siteName: siteTitle,
    title: siteTitle,
    type: "website",
    url: "https://thelastvegas.com",
  },
  SITE: {
    description: "Description of the site",
    name: "The Last Vegas",
    title: siteTitle,
  },
};

export type NavItem = {
  name: string;
  href: string;
};

const nav: NavItem[] = [
  // {
  //   href: "/about",
  //   name: "About",
  // },
  // {
  //   href: "/masonry-gallery",
  //   name: "Masonry Gallery",
  // },
  {
    href: "/discography",
    name: "Discography",
  },
  {
    href: "/photos",
    name: "Photos",
  },
  {
    href: "/videos",
    name: "Videos",
  },
  {
    href: "/live",
    name: "Live",
  },
];

const socialMedia = {
  instagram: {
    handle: "",
    url: "",
  },
  facebook: {
    handle: "",
    url: "",
  },
  twitter: {
    handle: "",
    url: "",
  },
  spotify: {
    handle: "",
    url: "",
  },
  youTube: {
    handle: "",
    url: "",
  },
};

export { config, nav, socialMedia };
