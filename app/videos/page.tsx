"use client";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";
import { Container } from "zuma-blocks";

const videos = [
  {
    title: "The Last Vegas - I'm Bad",
    youTubeId: "9lV0Nl5F8R4",
    description:
      "Music video for The Last Vegas' song 'I'm Bad' from the album 'Whatever Gets You Off'",
    thumbnail: "",
  },
  {
    title: "The Last Vegas - Bloodthirsty",
    youTubeId: "E0jojclPoR4",
    description:
      "Music video for The Last Vegas' song 'Bloodthirsty', the only video released from the album 'Eat Me' on AFM Records",
    thumbnail: "",
  },
  {
    title: "The Last Vegas - You and Me",
    youTubeId: "IgLp272cuJg",
    description:
      "Music video for The Last Vegas' song 'You and Me' from the album 'Sweet Salvation'",
    thumbnail: "",
  },
  {
    title: "The Last Vegas - Apologize",
    youTubeId: "TdIMwhFhyIg",
    description:
      "Music video for The Last Vegas' song 'Apologize' from the album 'Whatever Gets You Off'",
    thumbnail: "",
  },
  {
    title: "The Last Vegas - Evil Eyes",
    youTubeId: "wRQoT31zLAQ",
    description:
      "Music video for The Last Vegas' song 'Evil Eyes' from the album 'Bad Decisions'",
    thumbnail: "",
  },
  {
    title: "The Last Vegas - Whatever Gets You Off",
    youTubeId: "hozZAxOuG_Q",
    description:
      "Music video for The Last Vegas' song 'Whatever Gets You Off' from the album 'Whatever Gets You Off'",
    thumbnail: "",
  },
  {
    title: "The Last Vegas - Come With Me",
    youTubeId: "skYsMgl8Qno",
    description:
      "Music video for The Last Vegas' song 'Come With Me' from the album 'Sweet Salvation'",
    thumbnail: "",
  },
  {
    title: "The Last Vegas - AC/DC!",
    youTubeId: "OBYhxTwr0zI",
    description: "Behind the Scenes The Last Vegas performing with AC/DC!",
    thumbnail: "",
  },
  {
    title: "The Last Vegas - Miss You",
    youTubeId: "uWYf4BLm9VQ",
    description:
      "Music video for The Last Vegas' song 'Miss You' from the album 'Sweet Salvation'",
    thumbnail: "",
  },
  {
    title: "The Last Vegas - Other Side",
    youTubeId: "GPX-4mf-vO4",
    description:
      "Music video for The Last Vegas' song 'Other Side' from the album 'Bad Decisions'",
    thumbnail: "",
  },
];

const VideosPage = () => {
  return (
    <Main>
      <Banner className="md:py-20">
        <BannerHeadline>Videos</BannerHeadline>
      </Banner>
      <Container>
        <div className="space-y-20">
          {videos.map((video) => (
            <div key={video.youTubeId}>
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${video.youTubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* <p className="text-center">{video.description}</p> */}
            </div>
          ))}
        </div>
      </Container>
    </Main>
  );
};

export default VideosPage;
