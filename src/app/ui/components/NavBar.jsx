"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Underline from "@/app/ui/components/Underline";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignOutButton,
  useAuth,
} from "@clerk/nextjs";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CustomButton from "@/app/ui/components/CustomButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { SignedIn } from "@clerk/nextjs";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const { isSignedIn } = useAuth();
  const [iconColor, setIconColor] = useState("#0a0a0a");

  const pages = [
    {
      id: 1,
      label: "Home",
      link: "/",
    },
    {
      id: 2,
      label: "Projects",
      link: "/projects",
    },
    {
      id: 3,
      label: "Resume",
      link: "#",
    },
    {
      id: 4,
      label: isSignedIn ? (
        <div>
          <ClerkLoading>
            <LockOpenOutlinedIcon fontSize="small" sx={{ color: "#ededed" }} />
          </ClerkLoading>

          <ClerkLoaded>
            <SignOutButton>
              <LockOpenOutlinedIcon
                fontSize="small"
                sx={{ color: "#ededed" }}
              />
            </SignOutButton>
          </ClerkLoaded>
        </div>
      ) : (
        <div>
          <ClerkLoading>
            <LockOutlinedIcon fontSize="small" sx={{ color: "#ededed" }} />
          </ClerkLoading>

          <ClerkLoaded>
            <SignInButton>
              <LockOutlinedIcon fontSize="small" sx={{ color: "#ededed" }} />
            </SignInButton>
          </ClerkLoaded>
        </div>
      ),
      link: isSignedIn ? pathname : "/signin",
    },
  ];

  return (
    <nav className="relative">
      <SignedIn>
        {pathname === "/projects" ? (
          <CustomButton
            className="absolute right-0 -bottom-16 hover:-translate-y-1 hover:scale-110 transition ease-out duration-300"
            link="/projects/create"
            isFilled={true}
            iconRight={<AddOutlinedIcon sx={{ color: iconColor }} />}
            setIconColor={setIconColor}
          >
            ADD PROJECT
          </CustomButton>
        ) : null}
      </SignedIn>

      <ul className="flex flex-row items-center justify-end gap-4">
        {pages.map((page) => {
          const isActive =
            page.link === "/"
              ? pathname === "/"
              : pathname.startsWith(page.link); // Only use startsWith for non-root links
          return (
            <li
              key={page.id}
              className="hover:-translate-y-1 hover:scale-110 transition ease-out duration-300"
            >
              <Link
                href={page.link}
                className={clsx(
                  "w-full h-full font-sans font-light uppercase tracking-widest"
                )}
              >
                {isActive ? <Underline>{page.label}</Underline> : page.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
