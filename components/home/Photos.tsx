import Image from "next/image";
import Link from "next/link";
import React from "react";
import bloodThirstyVid from "@/public/photos/IMG_6266-bw.jpg";
import nateSmash from "@/public/photos/l_6c0ff513ec9abc0d2ae1673172642984.jpg";
import smash from "@/public/photos/_MG_7802.jpg";
import stage from "@/public/photos/IMG_0388.jpg";
import ukDressing from "@/public/photos/uk_dressing_room.jpg";
import wild from "@/public/photos/l_aec33430c8804c13a374080250300519.jpg";

const images = [
  { src: nateSmash, alt: "The Last Vegas" },
  {
    src: stage,
    alt: "TLV at Madison Square Garden",
  },
  { src: bloodThirstyVid, alt: "Bloodthirsty video shoot" },
  {
    src: ukDressing,
    alt: "TLV hanging out in UK dressing room",
  },
  {
    src: wild,
    alt: "TLV goin nuts",
  },

  { src: smash, alt: "The Last Vegas" },
];

const HomePhotos = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      {images.map((image) => (
        <Link key={image.alt} href="/photos">
          <Image src={image.src} alt={image.alt} className="object-cover" />
        </Link>
      ))}
    </div>
  );
};

export default HomePhotos;
