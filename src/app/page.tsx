import { Button } from "@nextui-org/button";
import ProjectCard from "./components/card";
import TechStackCard from "./components/cardTech";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <div className="px-32 max-sm:px-6 max-lg:px-10">
        <Divider className="my-4" />

        <h1 className="text-4xl"> Henry Lundberg Navntoft</h1>
        <br />
        <h2 className="text-2xl">Designer & Developer</h2>
        <br />

        <p>
          Born in 2000 in Copenhagen, Denmark.
          <br />
          <br />
          I am a firm believer that web design should be simple, easy to
          understand, and functional. My goal is to contribute my young and
          unbiased perspective to make existing designs even more effective and
          user-friendly.
          <br />
          <br />I am passionate about improving and optimising web experiences,
          and I aspire to help create digital spaces that are both intuitive and
          visually appealing. Interested in talking / seeing some of my
          projects? Continue scrolling!
        </p>
        <Divider className="my-4" />
        <h2 className="text-2xl">Projects</h2>
        <br />
        <ProjectCard />

        <Divider className="my-4" />

        <h2 className="text-2xl">Tech Stack</h2>
        <TechStackCard />

        <Divider className="my-4" />

        <h2 className="text-2xl">Resume</h2>
        <br />
        <p>You can read more about me and my experience here...</p>
        <br />
        <Button>Download Resume</Button>

        <Divider className="my-4" />
      </div>
    </>
  );
}
