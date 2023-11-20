import { Button } from "@nextui-org/button";
import ProjectCard from "./components/card";
import TechStackCard from "./components/cardTech";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="px-32 max-sm:px-6 max-lg:px-10">
        <Divider className="my-4" />
        <h1 className="text-4xl"> Henry Lundberg Navntoft</h1>
        <br />
        <h2 className="text-2xl">Frontend Developer</h2>
        <br />

        <p>
          I am Henry Navntoft, a dedicated web designer and front-end developer
          who believes in the simplicity, clarity, and functionality of web
          design.
          <br />
          <br />
          With a young and unbiased perspective, I focus on making designs more
          effective and user-friendly. Passionate about enhancing web
          experiences, I aspire to develop digital spaces that are both
          intuitive and visually captivating.
          <br />
          <br />
          My experience in front-end development and digital marketing, combined
          with my academic background in Multimedia Design, empowers me to
          create solutions that meet business needs and exceed user
          expectations.
        </p>
        <br />
        <p>Please open my resume to read more about me and my experiences.</p>
        <br />
        <div>
          <Link href="/Resume_henry-navntoft.pdf" target="_blank">
            <Button color="secondary">Open Resume</Button>
          </Link>
          <Link
            className="ml-4"
            href="https://linkedin.com/in/henry-lundberg-navntoft"
            target="_blank"
          >
            <Button color="secondary">Connect on LinkedIn</Button>
          </Link>
        </div>
        <Divider className="my-8" />

        <h2 className="text-2xl">Technical Skills</h2>
        <TechStackCard />

        <Divider className="my-8" />
        <h2 className="text-2xl">Portfolio</h2>
        <br />
        <ProjectCard />

        <Divider className="my-8" />
      </div>
    </>
  );
}
