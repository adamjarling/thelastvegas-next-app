"use client";

import Album from "@/components/Album";
import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Container from "@/components/Container";
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
            <Album key={album.title} album={album} />
          ))}
        </div>
      </Container>
    </Main>
  );
};

export default DiscographyPage;
