import { StaticImageData } from "next/image";
import albumBadDecisions from "@/public/images/albums/album_bad-decisions.jpg";
import albumEatMe from "@/public/images/albums/album_eat-me.jpg";
import albumSweetSalvation from "@/public/images/albums/album_sweet-salvation.jpg";
import albumWhateverGetsYouOff from "@/public/images/albums/album_whatever-gets-you-off.jpg";

export type Album = {
  amazonMusic?: string;
  appleMusic?: string;
  labelHref: string;
  name: string;
  nextImage: StaticImageData;
  producedBy: string;
  recordLabel: string;
  spotify?: string;
  year: string;
  youTubeMusic?: string;
};

export const albums: Array<Album> = [
  {
    amazonMusic: "",
    appleMusic: "",
    labelHref: "",
    name: "Eat Me",
    nextImage: albumEatMe,
    producedBy: "The Last Vegas and Chris Laney",
    recordLabel: "AFM Records",
    spotify: "",
    year: "2016",
    youTubeMusic: "",
  },
  {
    amazonMusic: "",
    appleMusic: "",
    labelHref: "",
    name: "Sweet Salvation",
    nextImage: albumSweetSalvation,
    producedBy: "Roy Z",
    recordLabel: "E-One Music",
    spotify: "",
    year: "2014",
    youTubeMusic: "",
  },
  {
    amazonMusic: "",
    appleMusic: "",
    labelHref: "",
    name: "Bad Decisions",
    nextImage: albumBadDecisions,
    producedBy: "Johnny K",
    recordLabel: "FrostByte / E-One Music",
    spotify: "",
    year: "2012",
    youTubeMusic: "",
  },
  {
    amazonMusic: "",
    appleMusic: "",
    labelHref: "",
    name: "Whatever Gets You Off",
    nextImage: albumWhateverGetsYouOff,
    producedBy: "Nikki Sixx, DJ Ashba, Marti Frederiksen",
    recordLabel: "Eleven Seven Music",
    spotify: "",
    year: "2009",
    youTubeMusic: "",
  },
];
