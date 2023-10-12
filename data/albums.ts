import { StaticImageData } from "next/image";
import albumBadDecisions from "@/public/images/albums/album_bad-decisions.jpg";
import albumEatMe from "@/public/images/albums/album_eat-me.jpg";
import albumHighClassTrash from "@/public/images/albums/album-high-class-trash-1600x1600.jpg";
import albumLickEm from "@/public/images/albums/LickEm-LeaveEm.jpg";
import albumOtherSideEP from "@/public/images/albums/album-other-side-cover.png";
import albumSeal from "@/public/images/albums/album_seal_the_deal.jpeg";
import albumSelfTitled from "@/public/images/albums/album-self-titled-cover.jpg";
import albumSweetSalvation from "@/public/images/albums/album_sweet-salvation.jpg";
import albumWhateverGetsYouOff from "@/public/images/albums/album_whatever-gets-you-off.jpg";

export type Album = {
  nextImage: StaticImageData;
  producer?: string;
  recordLabel?: {
    url: string;
    title: string;
  };
  streaming?: {
    amazonMusic?: string;
    appleMusic?: string;
    spotify?: string;
    youTubeMusic?: string;
  };
  title: string;
  year: string;
};

export const albums: Album[] = [
  {
    streaming: {
      amazonMusic:
        "https://amazon.com/music/player/albums/B01AUYMHZG?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_KxCUQQn2ouItgBc7Scqne1FUa",
      appleMusic: "https://music.apple.com/us/album/eat-me/1076912741",
      spotify: "https://open.spotify.com/album/2bJQCfd3rn6bdW6pxr0Jbe",
      youTubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_n4EtojMpnJ6cBU1xq6BQJQRSW6fHoPUxk&si=FmgnbJSBKaPZ3S7O",
    },
    nextImage: albumEatMe,
    producer: "The Last Vegas and Chris Laney",
    recordLabel: {
      url: "https://shop.afm-records.de/audio/heavy-metal-hard-rock/958/the-last-vegas-eat-me-digipak-cd", // Provide a valid URL
      title: "AFM Records",
    },
    title: "Eat Me",
    year: "2016",
  },
  {
    streaming: {
      amazonMusic: "",
      appleMusic: "",
      spotify: "",
      youTubeMusic:
        "https://music.youtube.com/watch?v=7-7lC1Sp-zY&si=ChM8HY9uHcUIziyq",
    },
    nextImage: albumSweetSalvation,
    producer: "Roy Z",
    recordLabel: {
      url: "", // Provide a valid URL
      title: "E-One Music",
    },
    title: "Sweet Salvation",
    year: "2014",
  },
  {
    streaming: {
      amazonMusic:
        "https://amazon.com/music/player/albums/B0BB9FR7B2?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_V77f8E5euEWAO22czaPKOvj87",
      appleMusic: "https://music.apple.com/us/album/bad-decisions/1444089490",
      spotify:
        "https://open.spotify.com/album/2PDXoyaYeM2FGLGM91BUck?si=UDeULeJrQFyaGCDTVhGsxg",
      youTubeMusic:
        "https://music.youtube.com/watch?v=0g8JFa0Wt0c&si=7HCdIdODq_bN1LkN",
    },
    nextImage: albumBadDecisions,
    producer: "Johnny K",
    recordLabel: {
      url: "", // Provide a valid URL
      title: "FrostByte / E-One Music",
    },
    title: "Bad Decisions",
    year: "2012",
  },
  {
    streaming: {
      amazonMusic: "",
      appleMusic: "",
      spotify: "",
      youTubeMusic: "",
    },
    nextImage: albumOtherSideEP,
    producer: "Johnny K",
    recordLabel: {
      url: "", // Provide a valid URL
      title: "The Last Vegas",
    },
    title: "Other Side EP",
    year: "2011",
  },
  {
    streaming: {
      amazonMusic:
        "https://amazon.com/music/player/albums/B07Y6NVJ92?marketplaceId=ATVPDKIKX0DER",
      appleMusic:
        "https://music.apple.com/us/album/whatever-gets-you-off/1695704772",
      spotify:
        "https://open.spotify.com/album/6GTlhDIRRMsDOoAp7szHeE?si=P3934xv_Rwq0RUjHQoeI6A",
      youTubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_lne4GyKLboZ6Ymo8WD9CHWajCiQF7VieY&si=QlBYGy8RPeYDU15U",
    },
    nextImage: albumWhateverGetsYouOff,
    producer: "Nikki Sixx, DJ Ashba, Marti Frederiksen",
    recordLabel: {
      url: "", // Provide a valid URL
      title: "Eleven Seven Music",
    },
    title: "Whatever Gets You Off",
    year: "2009",
  },
  {
    streaming: {
      amazonMusic:
        "https://amazon.com/music/player/albums/B08CLQD67G?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_KEHzpzx95ExvnM6JIXTq1zAcw",
      appleMusic: "",
      spotify:
        "https://open.spotify.com/album/1UIs4KmQEcLHdcKNvQwejM?si=s57QfJs5RDaJPcnFqaiXHw",
      youTubeMusic: "",
    },
    nextImage: albumSelfTitled,
    producer: "The Last Vegas",
    recordLabel: {
      url: "", // Provide a valid URL
      title: "The Last Vegas",
    },
    title: "Self Titled",
    year: "2008",
  },
  {
    streaming: {
      amazonMusic: "",
      appleMusic: "",
      spotify: "",
      youTubeMusic: "",
    },
    nextImage: albumHighClassTrash,
    producer: "The Last Vegas",
    recordLabel: {
      url: "", // Provide a valid URL
      title: "The Last Vegas",
    },
    title: "High Class Trash",
    year: "2007",
  },
  {
    streaming: {
      amazonMusic: "",
      appleMusic: "https://music.apple.com/us/album/seal-the-deal/537176274",
      spotify:
        "https://open.spotify.com/album/4mI4gT1BkSsGxcNZ18Erkq?si=ihR7x4jmQV64Pn3e8QacQA",
      youTubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_m9oH9RTaH2qLu2YivIIcB-O0SJ9iVC50w&si=oZgXk_NRFuumc2w0",
    },
    nextImage: albumSeal,
    producer: "Sanford Parker and The Last Vegas",
    recordLabel: {
      url: "", // Provide a valid URL
      title: "Get Hip Records",
    },
    title: "Seal the Deal",
    year: "2006",
  },
  {
    streaming: {
      amazonMusic: "",
      appleMusic:
        "https://music.apple.com/us/album/lick-em-and-leave-em/537163722",
      spotify:
        "https://open.spotify.com/album/0WCks6QCVVseQNrbBmDKCK?si=_-6w51NFTcicHBrHJTpRkw",
      youTubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_l2pCJNPikiYCTslAyMefV_2LlADBAOLMM&si=sLqjdZAjGjg3UbVi",
    },
    nextImage: albumLickEm,
    producer: "Sanford Parker and The Last Vegas",
    recordLabel: {
      url: "", // Provide a valid URL
      title: "Get Hip Records",
    },
    title: "Lick Em and Leave Em",
    year: "2004",
  },
];
