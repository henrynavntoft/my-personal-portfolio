"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

export default function ProjectCard() {
  const list = [
    {
      title: "Hacked Hogwarts",
      img: "/hogwarts.png",
      link: "https://github.com/henrynavntoft/henry-navntoft_hacked_hogwarts",
      desc: "An interactive web application simulating a cyber attack on Hogwarts School. Utilizing JavaScript for dynamic filtering and sorting, this project offers an engaging user interface where participants learn about cybersecurity in a creative and immersive environment.",
    },
    {
      title: "JS Portfolio",
      img: "/jsportfolio.png",
      link: "https://github.com/henrynavntoft/personal-website",
      desc: "This project showcases my foundational skills in HTML, CSS, and JavaScript, evident in my original portfolio website. It features a clean, responsive design, demonstrating my ability to build effective web interfaces using core web technologies..",
    },
  ];

  return (
    <div className="gap-8 grid grid-cols-1 sm:grid-cols-2">
      {list.map((item, index) => (
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <Card shadow="sm" isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-full"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between flex-col">
              <b>{item.title}</b>
              <p className="text-default-500">{item.desc}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
