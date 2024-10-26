"use client";

import { usePathname } from "next/navigation";
import Hero from "./Hero";
import clsx from "clsx";

export default function MainSection({ children }) {
  const pathname = usePathname();
  return (
    <main className="h-full w-full flex flex-row flex-nowrap px-8 gap-8 items-center justify-evenly overflow-hidden max-w-screen-xl bg-red-900">
      <div
        className={clsx("flex md:flex items-center bg-red-700", {
          hidden: pathname !== "/",
        })}
      >
        <Hero />
      </div>

      <div
        className={clsx("h-full w-full max-w-md bg-red-700", {
          hidden: pathname === "/",
        })}
      >
        <section className="h-full flex items-center">{children}</section>
      </div>
    </main>
  );
}
