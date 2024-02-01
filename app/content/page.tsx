"use client";

import Image from "next/image";
import React from "react";
import Typed from "typed.js";

const Content = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["My name is Riefqi and I am a developer."],
      typeSpeed: 50,
      loop: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex p-12 justify-center">
        <div className="card w-96 h-[252px] bg-base-200 border-none shadow-xl scale-100 hover:scale-105 ease-in duration-200">
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
          <div className="card-body text-center pt-0">
            <h2 className="card-title justify-center">Hello there!</h2>
            <div className="type-wrap">
              <span ref={el} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
