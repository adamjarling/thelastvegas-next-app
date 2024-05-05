import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerWrapper from "@/components/live/BannerWrapper";
import Image from "next/image";
import Main from "@/components/Main";
import Obfuscate from "@/components/Obfuscate";
import summerFest from "public/images/tlv_summerfest_2024.jpeg";
import tkoLogo from "public/images/TKO-logo.png";

const ShowsPage = () => {
  return (
    <Main flushTop>
      <BannerWrapper />
      <Banner className="md:py-20">
        <BannerHeadline>Live</BannerHeadline>
      </Banner>
      <div className="max-w-3xl mx-auto">
        <Image src={summerFest} alt="TLV Summerfest 2024" />
      </div>

      <section className="mt-24 text-center">
        <h2 className="mb-10 text-6xl uppercase">Booking</h2>
        <p className="mb-5 text-center">
          Booking: <Obfuscate />
        </p>
        <div className="flex justify-center mb-20">
          <Image src={tkoLogo} alt="TKO logo" />
        </div>
      </section>
    </Main>
  );
};

export default ShowsPage;
