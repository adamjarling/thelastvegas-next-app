"use client";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import { Container } from "zuma-blocks";
import Image from "next/image";
import Main from "@/components/Main";
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
        <div className="grid grid-cols-1 gap-6 mb-20 md:grid-cols-2">
          {albums.map((album) => (
            <div
              key={album.title}
              className="flex flex-col items-center space-y-4"
            >
              <Image
                className="object-cover"
                src={album.nextImage}
                alt={album.title}
              />
              <h2 className="text-2xl">{album.title}</h2>
              <p>
                {album.year} -
                {album.recordLabel &&
                  (album.recordLabel.url ? (
                    <a href={album.recordLabel.url} target="_blank">
                      {album.recordLabel.title}
                    </a>
                  ) : (
                    album.recordLabel.title
                  ))}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Main>
  );
};

export default DiscographyPage;
