import { Navbar } from "@/app/component/navbar";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center">About Me</h1>
        <div className="p-6 md:px-72 pt-6">
          <p className="text-justify">
            Hello, I am a self-taught programmer since my teenage years. I enjoy
            building various things, from static websites to A.I. tools. I have
            always loved what I do.
          </p>
        </div>
        <div className="flex justify-center pt-4">
          <Image
            src="/icons8-falling-apple-48.png"
            alt="Apple"
            height={48}
            width={48}
            className="text-center"
          />
        </div>
      </div>
    </>
  );
};

export default About;
