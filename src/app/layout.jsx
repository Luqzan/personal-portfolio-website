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
        <div className="min-h-screen p-8 grid grid-rows-[fit-content(40px)_1fr_40px] grid-cols-1 gap-12">
          <header className="sticky">
            <NavBar />
          </header>

          <main className="grid items-center">{children}</main>

          <footer className="sticky">test</footer>

          {/* <header></header> */}

          {/* <main className="flex flex-col gap-24 sm:flex-row sm:flex-wrap sm:items-center w-full h-full max-w-screen-xl">
            

            <div className="flex-grow bg-slate-500 h-[200px]">
              {children}
            </div>
          </main> */}

          {/* <footer></footer> */}
        </div>
      </body>
    </html>
  );
}
