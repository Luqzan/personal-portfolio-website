"use client";

import { usePathname } from "next/navigation";
import Hero from "./Hero";
import clsx from "clsx";

export default function MainSection({ children }) {
  const pathname = usePathname();
  return (
    <main className="h-full w-full flex flex-row flex-nowrap items-center overflow-hidden max-w-screen-xl">
      <div
        className={clsx("flex flex-1 justify-center md:flex", {
          hidden: pathname !== "/",
        })}
      >
        <Hero />
      </div>

      <div
        className={clsx("flex-1 flex justify-center h-full min-w-[320px]", {
          hidden: pathname === "/",
        })}
      >
        {children}
      </div>
    </main>
  );
}
