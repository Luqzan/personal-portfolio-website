"use client";

import { usePathname } from "next/navigation";
import Hero from "./Hero";
import clsx from "clsx";

export default function MainSection({ children }) {
  const pathname = usePathname();
  return (
    <main className="h-full w-full flex flex-row flex-nowrap px-2 md:px-8 md:gap-8 items-center justify-evenly overflow-hidden max-w-screen-xl">
      <div
        className={clsx("flex md:flex items-center", {
          hidden: pathname !== "/",
        })}
      >
        <Hero />
      </div>

      <div
        className={clsx("h-full w-full max-w-md", {
          hidden: pathname === "/",
        })}
      >
        <section className="h-full flex items-center">{children}</section>
      </div>
    </main>
  );
}
