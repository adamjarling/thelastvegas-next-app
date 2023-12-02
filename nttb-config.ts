const siteTitle = "The Last Vegas - Hard glam boogie rock from Chicago USA";
const ogImage = "/images/tlv-old-school-loft.jpg";
const url = "https://thelastvegas.com";

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
    url,
  },
  SITE: {
    description: "Description of the site",
    name: "The Last Vegas",
    title: siteTitle,
    url,
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
    handle: "thelastvegas",
    url: "https://www.instagram.com/thelastvegas/",
  },
  facebook: {
    handle: "thelastvegas",
    url: "https://www.facebook.com/thelastvegas/",
  },
  twitter: {
    handle: "THELASTVEGAS",
    url: "https://twitter.com/THELASTVEGAS",
  },
  spotify: {
    handle: "",
    url: "https://open.spotify.com/artist/7fXDfYeQzpPak5bAizQApC?si=QOIFpQftSmmPMpQy-HHLyw",
  },
  youTube: {
    handle: "@thelastvegasvideos",
    url: "https://www.youtube.com/@thelastvegasvideos",
  },
};

export { config, nav, socialMedia };
