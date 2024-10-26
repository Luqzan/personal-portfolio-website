"use client";

import { usePathname } from "next/navigation";
import Hero from "./Hero";
import clsx from "clsx";

export default function MainSection({ children }) {
  const pathname = usePathname();
  return (
    <main className="h-full w-full flex flex-row flex-nowrap items-center justify-evenly gap-8 overflow-hidden max-w-screen-xl">
      <div
        className={clsx("flex md:flex", {
          hidden: pathname !== "/",
        })}
      >
        <Hero />
      </div>

      <div
        className={clsx("h-full min-w-[320px]", {
          hidden: pathname === "/",
        })}
      >
        {children}
      </div>
    </main>
  );
}
