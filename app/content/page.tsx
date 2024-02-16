"use client";

import Image from "next/image";
import React from "react";
import Typed from "typed.js";
import { HtmlIcon } from "../component/icons/html";
import { CssIcon } from "../component/icons/css";
import { JavaScriptIcon } from "../component/icons/javascript";
import { NodeJsIcon } from "../component/icons/node";
import { TypeScriptIcon } from "../component/icons/typescript";
import { ReactIcon } from "../component/icons/react";
import { MongoDbIcon } from "../component/icons/mongodb";
import { ExpressJsIcon } from "../component/icons/expressjs";
import { Navbar } from "../component/navbar";

const icons = [
  { component: <HtmlIcon />, key: 'html' },
  { component: <CssIcon />, key: 'css' },
  { component: <JavaScriptIcon />, key: 'javascript' },
  { component: <TypeScriptIcon />, key: 'typescript' },
  { component: <MongoDbIcon />, key: 'mongodb' },
  { component: <ExpressJsIcon />, key: 'expressjs' },
  { component: <ReactIcon />, key: 'react' },
  { component: <NodeJsIcon />, key: 'nodejs' }
];

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
      <Navbar />
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
      <div className="p-2 w-full">
        <div>
          <h1 className="text-4xl text-center sm:text-3xl font-bold p-4 pb-12">
            Programming Languages
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-12 p-2 items-center justify-center">
          {icons.map(({ component, key }) => (
            <div key={key} className="card sm:w-[96px] scale-100 hover:scale-105 ease-in duration-200">
              {component}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Content;
