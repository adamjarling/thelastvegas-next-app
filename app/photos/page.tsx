import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";
import { promises as fs } from "fs";
import path from "path";
import { shuffle } from "@/utils/shuffle";

const sizeOf = require("image-size");

const folder = "photos";

const PhotosPage = async () => {
  // Get filenames from a directory
  const imageDirectory = path.join(process.cwd(), `/public/${folder}`);
  const imageFilenames = (await fs.readdir(imageDirectory)).filter(
    (f) => f !== ".DS_Store"
  );
  const shuffledImageFilenames = shuffle(imageFilenames);

  const images = shuffledImageFilenames.map((ifn): MasonryImage => {
    const dimensions = sizeOf(`${imageDirectory}/${ifn}`);
    return {
      filename: `/${folder}/${ifn}`,
      ...dimensions,
    };
  });

  return (
    <Main>
      <Banner className="md:py-20">
        <BannerHeadline>Photos</BannerHeadline>
      </Banner>
      {images && <MasonryGallery dir={folder} images={images} />}
    </Main>
  );
};

export default PhotosPage;
