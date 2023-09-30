import Image from "next/image";
import Link from "next/link";
import React from "react";
import bandWild from "@/public/photos/l_aec33430c8804c13a374080250300519.jpg";
import bloodThirstyVid from "@/public/photos/IMG_6266-bw.jpg";
import nateDrums from "@/public/photos/l_6c0ff513ec9abc0d2ae1673172642984.jpg";
import ukCell from "@/public/photos/UKdressingcell.JPG";

const images = [
  {
    src: nateDrums,
    alt: "Nate Arling",
  },
  { src: bloodThirstyVid, alt: "Bloodthirsty video shoot" },
  { src: bandWild, alt: "The Last Vegas" },
  { src: ukCell, alt: "The Last Vegas UK" },
];

const HomePhotos = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      {images.map((image) => (
        <Link key={image.alt} href="/photos">
          <Image src={image.src} alt={image.alt} />
        </Link>
      ))}
    </div>
  );
};

export default HomePhotos;
