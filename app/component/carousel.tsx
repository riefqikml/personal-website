import Html from "@/public/html.svg";
import Css from "@/public/css.svg";
import JavaScript from "@/public/javascript.svg";
import TypeScript from "@/public/typescript.svg";
import MongoDb from "@/public/mongodb.svg";
import Express from "@/public/express.svg";
import React from "@/public/react.svg";
import NodeJs from "@/public/node.svg";
import NextJs from "@/public/nextjs.svg";

import Image from "next/image";

const logos = [
  { src: Html, alt: "Html" },
  { src: Css, alt: "Css" },
  { src: JavaScript, alt: "JavaScript" },
  { src: TypeScript, alt: "TypeScript" },
  { src: MongoDb, alt: "MongoDb" },
  { src: Express, alt: "Express" },
  { src: React, alt: "React" },
  { src: NodeJs, alt: "NodeJs" },
  { src: NextJs, alt: "NextJs" },
];

export const Carousel = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              className="w-[75px] md:w-[100px]"
            />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              className="w-[75px] md:w-[100px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
