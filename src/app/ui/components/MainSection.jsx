"use client";

import { usePathname } from "next/navigation";
import Hero from "./Hero";
import clsx from "clsx";

export default function MainSection({ children }) {
  const pathname = usePathname();
  return (
    <main className="h-full w-full flex flex-row flex-nowrap px-2 lg:px-8 lg:gap-8 items-center justify-evenly overflow-hidden">
      <div
        className={clsx("flex-1 flex lg:flex justify-center", {
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
