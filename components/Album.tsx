import React from "react";
import type { Album } from "@/data/albums";
import Image from "next/image";

interface Props {
  album: Album;
}

const Album: React.FC<Props> = ({ album }) => {
  const buttons = [
    { name: "Amazon", url: album.streaming?.amazonMusic },
    { name: "Apple", url: album.streaming?.appleMusic },
    { name: "Spotify", url: album.streaming?.spotify },
    { name: "YouTube", url: album.streaming?.youTubeMusic },
  ];

  return (
    <div
      key={album.title}
      className="flex flex-col items-center mb-6 space-y-4"
    >
      <Image className="object-cover" src={album.nextImage} alt={album.title} />
      <h2 className="text-2xl">{album.title}</h2>
      <p className="flex justify-evenly">
        <span className="">{album.year}</span>
        {album.recordLabel &&
          (album.recordLabel.url ? (
            <a
              href={album.recordLabel.url}
              target="_blank"
              className="before:content-['_-_']"
            >
              {album.recordLabel.title}
            </a>
          ) : (
            <span className="before:content-['_-_']">
              {album.recordLabel.title}
            </span>
          ))}
      </p>
      <div className="flex space-x-1 text-sm uppercase justify-evenly">
        {buttons.map((button) =>
          button.url ? (
            <a
              key={button.name}
              className="px-3 py-1 border border-x-gray-200"
              href={button.url}
            >
              {button.name}
            </a>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Album;
