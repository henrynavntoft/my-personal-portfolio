import React from "react";
import { Image } from "@nextui-org/react";

export default function TechStackCard() {
  const list = [
    {
      img: "/next.js.svg",
      alt: "Next.js logo",
    },
    {
      img: "/typescript.svg",
      alt: "Next.js logo",
    },
    {
      img: "/tailwind.svg",
      alt: "Next.js logo",
    },
  ];

  return (
    <div className="py-5 gap-8 grid grid-cols-3 sm:grid-cols-3">
      {list.map((item, index) => (
        <div key={index} className="flex justify-center items-center">
          <Image
            src={item.img}
            alt={item.alt}
            className="object-contain dark:invert"
            style={{ width: "100%", maxWidth: "75px" }}
          />
        </div>
      ))}
    </div>
  );
}
