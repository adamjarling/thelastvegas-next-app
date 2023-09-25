"use client";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";
import { Container } from "zuma-blocks";
import { albums } from "@/data/albums";

const DiscographyPage = () => {
  return (
    <Main>
      <Banner className="md:py-20">
        <BannerHeadline className="text-4xl md:text-8xl lg:text-[128px]">
          Discography
        </BannerHeadline>
      </Banner>

      <Container fullWidth>
        <div className="grid grid-cols-1 gap-12 mb-20 md:grid-cols-2">
          {albums.map((album) => (
            <div
              key={album.name}
              className="flex flex-col items-center space-y-4"
            >
              <Image src={album.nextImage} alt={album.name} />
              <h2 className="text-2xl">{album.name}</h2>
              <p>{album.year}</p>
              <p>{album.recordLabel}</p>
            </div>
          ))}
        </div>
      </Container>
    </Main>
  );
};

export default DiscographyPage;
