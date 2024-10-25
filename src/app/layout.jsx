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
          <div className="relative min-h-screen w-full max-w-screen-xl grid grid-rows-[6rem_calc(100vh-12rem)_6rem] grid-cols-1">
            <header className="p-8 sticky top-0 flex flex-col justify-end bg-background">
              <NavBar />
            </header>

            <div className="fixed top-[6rem] h-[8vh] w-full bg-gradient-to-b from-background to-transparent" />

            <main className="h-full grid items-center justify-items-center">
              {children}
            </main>

            <div className="fixed bottom-[6rem] h-[8vh] w-full bg-gradient-to-t from-background to-transparent" />

            <footer className="p-8 sticky bottom-0 flex flex-col justify-start bg-background">
              test
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
