import "@/app/globals.css";
import { geistMono, geistSans } from "@/app/ui/fonts";
import NavBar from "@/app/ui/components/NavBar";
import MainSection from "@/app/ui/components/MainSection";
import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { fileRouter } from "@/app/api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";
import Image from "next/image";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export const metadata = {
  title: {
    template: "%s | Luqzan Ariff",
    default: "Luqzan Ariff",
  },
  description: "Luqzan's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans} ${geistMono} h-full`}>
      <ClerkProvider
        dynamic
        appearance={{
          variables: {
            colorPrimary: "#ededed",
            colorNeutral: "#7a7a7a",
            colorText: "#ededed",
            colorTextOnPrimaryBackground: "#0a0a0a",
            colorBackground: "#0a0a0a",
            colorInputText: "#0a0a0a",
            colorInputBackground: "#ededed",
            fontFamily: "var(--font-geist-sans)",
            fontFamilyButtons: "var(--font-geist-mono)",
            fontWeight: { normal: 200, medium: 300, semibold: 400, bold: 500 },
            borderRadius: "0rem",
          },
          elements: {
            rootBox: "w-full",
            cardBox: "shadow-none w-full",
            card: "p-0",
            formButtonPrimary:
              "uppercase font-mono text-lg tracking-widest py-1 px-4 shadow-none font-extralight bg-foreground text-background rounded-lg font-semibold hover:bg-accent-600 hover:text-foreground",
            header: "hidden",
            formFieldLabel:
              "uppercase tracking-widest font-sans font-extralight",
            formFieldInput: "rounded-lg tracking-widest font-sans font-normal",
            footer: "hidden",
          },
        }}
      >
        <body className="relative h-full w-full antialiased flex justify-center">
          <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />

          <AppRouterCacheProvider
            options={{ key: "css", enableCssLayer: true }}
          >
            <div className="absolute w-full h-full flex flex-col -z-50 opacity-40">
              <Image
                src="/background/bg-1.jpg"
                alt="Background Image"
                quality={100}
                fill={true}
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* bg-gradient-to-b from-background to-transparent */}

            <div className="absolute w-full h-full flex flex-col -z-40">
              <div className="flex-1 bg-gradient-to-b from-background to-transparent" />
              <div className="flex-1 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="h-full w-full max-w-screen-xl">
              <MainSection>{children}</MainSection>
            </div>

            <header className="absolute top-0 w-full">
              <div className="w-full flex flex-col items-center bg-background">
                <div className="flex flex-row px-2 pt-4 pb-0 sm:p-8 w-full max-w-screen-xl">
                  <div className="ml-auto">
                    <NavBar />
                  </div>
                </div>
              </div>

              <div className="w-full h-[4vh] sm:h-[6vh] bg-gradient-to-b from-background to-red-700" />
            </header>

            <footer className="absolute bottom-0 w-full">
              <div className="w-full h-[4vh] sm:h-[6vh] bg-gradient-to-t from-background to-red-700" />

              <div className="w-full flex flex-col items-center bg-background">
                <div className="flex flex-row px-2 pb-4 pt-0 sm:p-8 w-full max-w-screen-xl gap-8">
                  <div className="mr-auto">
                    <p className="font-sans font-extralight text-xs text-foreground tracking-wide">
                      © 2024 Luqzan Ariff Bin Mohd Raus. All original content
                      rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </AppRouterCacheProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
