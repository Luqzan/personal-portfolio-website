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

export default function NavBar() {
  const pathname = usePathname();
  const { isSignedIn } = useAuth();

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
      link: isSignedIn ? "/logout-url-here" : "/signin",
    },
  ];

  return (
    <nav>
      <ul className="flex flex-row items-center justify-end gap-4">
        {pages.map((page) => {
          return (
            <li key={page.id}>
              <Link
                href={page.link}
                className={clsx(
                  "w-full h-full font-sans font-light uppercase tracking-widest"
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
