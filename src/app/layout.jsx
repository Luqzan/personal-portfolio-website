import "@/app/globals.css";
import { geistMono, geistSans } from "@/app/ui/fonts";
import NavBar from "@/app/ui/components/NavBar";
import MainSection from "@/app/ui/components/MainSection";
import { ClerkProvider } from "@clerk/nextjs";

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
        <body className="h-full antialiased flex justify-center">
          <header className="fixed top-0 flex flex-col w-full max-w-screen-xl">
            <div className="flex flex-row p-8 bg-background font-">
              <div className="ml-auto">
                <NavBar />
              </div>
            </div>

            <div className="w-full h-[8vh] bg-gradient-to-b from-background to-transparent" />
          </header>

          <MainSection>{children}</MainSection>

          <footer className="fixed bottom-0 flex flex-col w-full max-w-screen-xl">
            <div className="w-full h-[8vh] bg-gradient-to-t from-background to-transparent" />

            <div className="flex flex-row p-8 bg-background">
              <div className="">Test</div>
            </div>
          </footer>
        </body>
      </ClerkProvider>
    </html>
  );
}
