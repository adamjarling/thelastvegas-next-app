import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";

const VideosPage = () => {
  return (
    <Main>
      <Banner className="md:py-20">
        <BannerHeadline>Videos</BannerHeadline>
      </Banner>
      <p className="mb-20 text-center">Video grid goes here</p>
    </Main>
  );
};

export default VideosPage;
