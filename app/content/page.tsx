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
import { NextJSIcon } from "../component/icons/nextjs";

const icons = [
	{ component: <HtmlIcon />, key: "html" },
	{ component: <CssIcon />, key: "css" },
	{ component: <JavaScriptIcon />, key: "javascript" },
	{ component: <TypeScriptIcon />, key: "typescript" },
	{ component: <MongoDbIcon />, key: "mongodb" },
	{ component: <ExpressJsIcon />, key: "expressjs" },
	{ component: <ReactIcon />, key: "react" },
	{ component: <NodeJsIcon />, key: "nodejs" },
	{ component: <NextJSIcon />, key: "nextjs" },
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
				<div className="flex flex-wrap md:flex-row gap-12 p-4 items-center justify-center">
					{icons.map(({ component, key }) => (
						<div
							key={key}
							className="card sm:w-[96px] scale-100 hover:scale-110 ease-in duration-200"
						>
							{component}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Content;
