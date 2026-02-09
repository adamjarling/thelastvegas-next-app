import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerWrapper from "@/components/live/BannerWrapper";
import Main from "@/components/Main";
import Obfuscate from "@/components/Obfuscate";
import SummerfestPromo from "@/components/live/SummerfestPromo";

const ShowsPage = () => {
  return (
    <Main flushTop>
      <BannerWrapper />
      <Banner className="md:py-20">
        <BannerHeadline>Live</BannerHeadline>
      </Banner>

      <section className="mb-24 text-center">
        <h2 className="mb-10 text-6xl uppercase">Booking</h2>
        <p className="mb-5 text-center">
          Booking: <Obfuscate />
        </p>
      </section>

      <SummerfestPromo />
    </Main>
  );
};

export default ShowsPage;
