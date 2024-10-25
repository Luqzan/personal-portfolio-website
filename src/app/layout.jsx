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
      <body className={`antialiased`}>
        <div className="flex justify-center w-full">
          <div className="relative h-screen w-full max-w-screen-xl grid grid-rows-[3rem_calc(100vh-6rem)_3rem] grid-cols-1 ">
            <header className="flex flex-col justify-end px-8 bg-background">
              <NavBar />
            </header>

            <div className="fixed top-[4rem] h-[8vh] w-full bg-gradient-to-b from-background to-transparent bg-red-900" />

            <main className="h-full grid items-center justify-items-center overflow-clip">
              {children}
            </main>

            <div className="fixed bottom-[4rem] h-[8vh] w-full bg-gradient-to-t from-background to-transparent bg-red-900" />

            <footer className="flex flex-col justify-start px-8 bg-background">
              test
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
