"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Underline from "./Underline";

export default function NavBar() {
  const pathname = usePathname();

  const pages = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Portfolio",
      link: "#",
    },
    {
      label: "Resume",
      link: "#",
    },
  ];

  return (
    <nav className="">
      <ul className="flex flex-row justify-end gap-4">
        {pages.map((page) => {
          return (
            <li key={page.label}>
              <Link
                href={page.link}
                className={clsx(
                  "font-sans font-extralight uppercase text-md tracking-widest"
                )}
              >
                {pathname === page.link ? (
                  <Underline>{page.label}</Underline>
                ) : (
                  page.label
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
