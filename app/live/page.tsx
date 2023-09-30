import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";

const ShowsPage = () => {
  return (
    <Main>
      <Banner className="md:py-20">
        <BannerHeadline>Live</BannerHeadline>
      </Banner>
      <p className="mb-20 text-center">Tour history here</p>
    </Main>
  );
};

export default ShowsPage;
