"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function ProjectCard() {
  const list = [
    {
      title: "Hacked Hogwarts",
      img: "/ex.png",
      link: "",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
      title: "JS Portfolio",
      img: "/ex.png",
      link: "",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
      title: "KEA - 3d Semester Exam",
      img: "/ex.png",
      link: "",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
      title: "Farsight Studio",
      img: "/ex.png",
      link: "",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
  ];

  return (
    <div className="gap-8 grid grid-cols-2 sm:grid-cols-2">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable>
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
      ))}
    </div>
  );
}
