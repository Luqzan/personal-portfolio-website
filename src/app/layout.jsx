import "@/app/globals.css";
import { geistMono, geistSans } from "@/app/ui/fonts";
import NavBar from "./ui/components/NavBar";

export const metadata = {
  title: {
    template: "%s | Luqzan Ariff",
    default: "Luqzan Ariff",
  },
  description: "Luqzan's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans} ${geistMono}`}>
      <body className="flex flex-col items-center w-full h-full antialiased">
        <header className="sticky top-0 flex flex-col w-full max-w-screen-xl">
          <div className="flex flex-row p-8 bg-background">
            <div className="ml-auto">
              <NavBar />
            </div>
          </div>

          <div className="w-full h-[8vh] bg-gradient-to-b from-background to-transparent" />
        </header>

        <main className="h-full w-full flex items-center justify-center">
          {children}
        </main>

        <footer className="sticky bottom-0 flex flex-col w-full max-w-screen-xl">
          <div className="w-full h-[8vh] bg-gradient-to-t from-background to-transparent" />

          <div className="flex flex-row p-8 bg-background">
            <div className="">Test</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
