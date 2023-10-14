import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";
import Obfuscate from "@/components/Obfuscate";

const ShowsPage = () => {
  return (
    <Main>
      <Banner className="md:py-20">
        <BannerHeadline>Live</BannerHeadline>
      </Banner>
      <p className="mb-20 text-center">
        Booking: <Obfuscate />
      </p>
    </Main>
  );
};

export default ShowsPage;
