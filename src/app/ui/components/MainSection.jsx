"use client";

import { usePathname } from "next/navigation";
import Hero from "./Hero";
import clsx from "clsx";

export default function MainSection({ children }) {
  const pathname = usePathname();
  return (
    <main className="h-full w-full flex flex-row flex-nowrap px-2 md:px-8 md:gap-8 items-center justify-evenly overflow-hidden max-w-screen-xl">
      <div
        className={clsx("flex-1 flex md:flex justify-center", {
          hidden: pathname !== "/",
        })}
      >
        <Hero />
      </div>

      <div
        className={clsx("flex-1 flex justify-center", {
          hidden: pathname === "/",
        })}
      >
        {children}
      </div>
    </main>
  );
}
