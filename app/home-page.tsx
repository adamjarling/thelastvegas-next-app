"use client";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Button from "@/components/Button";
import HeroImage from "@/components/Hero";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";
import { motion } from "framer-motion";
import { Container, ExternalLink } from "zuma-blocks";
import Image from "next/image";
import peacemakerImg from "@/public/images/peacemaker-tt.webp";
import cityFlag from "@/public/images/Flag_of_Chicago,_Illinois-bw.png";

export default function Home() {
  return (
    <>
      <Main flushTop>
        <ParallaxHero
          imageUrl="/images/tlv-old-school-loft.jpg"
          // headline="Parallax Banner goes here"
          altText="Yo Mama"
        />
        <Banner>
          <BannerHeadline>Sweet Salvation</BannerHeadline>
          {/* <Image
            src={cityFlag}
            alt="Chicago Flag"
            className="inline-block w-24 pt-20 m-auto"
          /> */}
        </Banner>
        <div className="space-y-12 md:space-y-20">
          <h1 className="sr-only">The Last Vegas</h1>
          <Container>
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/TdIMwhFhyIg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="flex flex-col items-center mt-8">
              <p>As seen on </p>
              <div className="flex justify-center">
                <ExternalLink
                  href={`https://www.hbomax.com/series/urn:hbo:series:GYb0FKQLsGIyPfQEAAAAM`}
                >
                  <Image src={peacemakerImg} alt="Peacemaker TV show" />
                </ExternalLink>
              </div>
            </div>
          </Container>

          <Banner className="text-white bg-black">
            <BannerHeadline>Albums</BannerHeadline>
            <p>Take a fresh look at some classic albums from The Last Vegas</p>
          </Banner>
        </div>
      </Main>
    </>
  );
}
