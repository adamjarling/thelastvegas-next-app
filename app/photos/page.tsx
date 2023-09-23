import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";

const PhotosPage = () => {
  return (
    <Main>
      <Banner className="md:py-20">
        <BannerHeadline>Photos</BannerHeadline>
      </Banner>
      <p className="mb-20 text-center">Photo grid goes here</p>
    </Main>
  );
};

export default PhotosPage;
