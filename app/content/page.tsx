"use client";

import Image from "next/image";
import React from "react";
import Typed from "typed.js";
import { Carousel } from "../component/carousel";

const Content = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["My name is Riefqi and I am a self-taught developer."],
      typeSpeed: 50,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex p-12 justify-center">
        <div className="rounded-badge w-96 h-[252px] bg-base-200 border-none shadow-xl scale-100 hover:scale-105 ease-in duration-200">
          <div className="flex justify-center avatar py-4">
            <div className="w-24 rounded-full">
              <Image
                src="/midoriya.jpg"
                alt="Midoriya"
                priority={true}
                width={500}
                height={500}
                className="w-auto h-auto"
              />
            </div>
          </div>
          <div className="card-body text-center py-0 px-4">
            <h2 className="card-title justify-center">Hello there!</h2>
            <div className="type-wrap p-1">
              <span ref={el} />
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 w-full">
        <div>
          <h1 className="text-xl text-center sm:text-3xl font-bold p-4 pb-12">
            {
              "Here are the programming languages and stacks that I've worked with."
            }
          </h1>
        </div>
      </div>
      <div className="lg:mx-96">
        <Carousel />
      </div>
    </>
  );
};

export default Content;
