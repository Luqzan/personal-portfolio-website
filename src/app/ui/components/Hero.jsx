"use client";

import CustomLink from "@/app/ui/components/CustomLink";
import Underline from "@/app/ui/components/Underline";
import { useState } from "react";

export default function Hero() {
  const [iconColor, setIconColor] = useState("#0a0a0a");
  return (
    <div className="relative flex flex-col gap-12 px-2 md:px-0">
      <div className="flex flex-col gap-6">
        <p className="text-center font-mono text-3xl font-extralight tracking-wider">
          WELCOME TO MY
        </p>

        <h1 className="font-mono font-light text-center text-5xl tracking-widest">
          Portfolio
        </h1>

        <p className="max-w-[400px] text-center font-sans text-xl font-thin tracking-widest leading-7">
          My name is <Underline>Luqzan Ariff</Underline>, and I just{" "}
          <span className="text-nowrap">kick-started</span> my career as a{" "}
          <Underline>Full-Stack Developer</Underline>!
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <CustomLink link="/about" isFilled={true}>
          CONTACT ME
        </CustomLink>

        <CustomLink link="/projects">MY WORKS &rarr;</CustomLink>
      </div>
    </div>
  );
}
