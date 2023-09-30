"use client";

import { Container, ExternalLink } from "zuma-blocks";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Button from "@/components/Button";
import HeroImage from "@/components/Hero";
import HomePhotos from "@/components/home/Photos";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";
import { albums } from "@/data/albums";
import cityFlag from "@/public/images/Flag_of_Chicago,_Illinois-bw.png";
import { motion } from "framer-motion";
import peacemakerImg from "@/public/images/peacemaker-tt.webp";

export default function Home() {
  return (
    <>
      <Main flushTop>
        <ParallaxHero
          imageUrl="/images/tlv-old-school-loft.jpg"
          // headline="Parallax Banner goes here"
          altText="Yo Mama"
        />

        <div className="space-y-12 md:space-y-32">
          {/* <BannerHeadline className="mt-16">Sweet Home Chicago</BannerHeadline> */}
          <h1 className="sr-only">The Last Vegas</h1>
          <Container>
            <div className="flex flex-col items-center mb-8">
              <p>As seen on </p>
              <div className="flex justify-center">
                <ExternalLink
                  href={`https://www.hbomax.com/series/urn:hbo:series:GYb0FKQLsGIyPfQEAAAAM`}
                >
                  <Image src={peacemakerImg} alt="Peacemaker TV show" />
                </ExternalLink>
              </div>
            </div>
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/TdIMwhFhyIg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Container>

          <Container className="">
            <div className="flex flex-col items-center pb-20 space-y-10">
              <BannerHeadline>Albums</BannerHeadline>
              <p className="text-center">
                Take a fresh look at some classic albums from The Last Vegas
              </p>
              <div className="grid grid-cols-1 gap-12 mb-20 md:grid-cols-3">
                {albums
                  .filter(
                    (album) =>
                      [
                        "Bad Decisions",
                        "Whatever Gets You Off",
                        "Sweet Salvation",
                      ].indexOf(album.name) > -1
                  )
                  .map((album) => (
                    <div
                      key={album.name}
                      className="flex flex-col items-center space-y-4"
                    >
                      <Image src={album.nextImage} alt={album.name} />
                    </div>
                  ))}
              </div>
              <Link href="/discography" className="button">
                View All
              </Link>
            </div>
          </Container>

          <section>
            <HomePhotos />
            <div className="flex justify-center my-12">
              <Link href="/photos" className="button">
                View Photos
              </Link>
            </div>
          </section>
        </div>
      </Main>
    </>
  );
}
