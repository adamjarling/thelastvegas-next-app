import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";

const About = () => {
  return (
    <Main flushTop={false}>
      <Banner>
        <BannerHeadline>About</BannerHeadline>
      </Banner>

      <div className="container space-y-6 text-justify">
        <p>
          The Last Vegas is a powerhouse rock band that ignites stages with
          their electrifying sound and contagious energy. Hailing from the heart
          of Chicago, this quintet has carved their path with a raw,
          unapologetic style that pays homage to the golden era of rock while
          infusing it with a modern edge.
        </p>

        <p>
          Formed in the early 2000s, The Last Vegas quickly gained recognition
          for their relentless live performances, earning them a dedicated
          following in the underground rock scene. Comprising members Chad
          Cherry (vocals), Adam Arling (guitar), John Wator (guitar), Bryan
          Wilkinson (guitar), Danny Smash (bass), and Nate Arling (drums), the
          band delivers a high-octane blend of gritty riffs, anthemic choruses,
          and pop hooks.
        </p>

        <p>
          Their breakthrough came with the release of their debut album, "Seal
          the Deal," in 2006, which showcased their signature blend of punk and
          swagger. The album's success propelled them onto larger stages,
          leading to tours alongside rock legends such as AC/DC, Motley Crue,
          and Guns N' Roses.
        </p>

        <p>
          With each subsequent release, including albums like "Whatever Gets You
          Off" and "Bad Decisions," The Last Vegas continued to refine their
          sound, earning critical acclaim and expanding their fanbase worldwide.
          Their music resonates with audiences craving the raw energy and
          rebellious spirit of classic rock, while also drawing in new listeners
          with its modern twists and infectious melodies.
        </p>

        <p>
          Beyond their studio recordings, The Last Vegas is renowned for their
          electrifying live shows, known to unleash sonic guitar assaults and
          bombastic drum solos, delivered with a blues-infused swagger from
          front-man Chad Cherry.
        </p>

        <p>
          As they continue to headline festivals or tear through intimate club
          gigs around the globe, The Last Vegas remains a driving force in the
          rock scene, proving that the spirit of rock 'n' roll is alive and well
          in the 21st century. With an unbridled energy, undeniable talent, and
          unwavering dedication to their craft, The Last Vegas stands as a
          testament to the enduring power of rock music.
        </p>
      </div>
    </Main>
  );
};

export default About;
