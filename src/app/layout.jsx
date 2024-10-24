import "@/app/globals.css";
import { geistMono, geistSans } from "@/app/ui/fonts";
import CustomLink from "@/app/ui/components/CustomLink";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

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
        <div className="grid grid-rows-[1fr] justify-items-center p-8 sm:p-20 sm:min-h-screen">
          {/* <header></header> */}

          <main className="flex flex-col gap-24 sm:flex-row sm:items-center w-full h-full max-w-screen-xl">
            <div className="flex flex-col gap-12 max-w-[24rem]">
              <div className="flex flex-col gap-6">
                <p className="text-center sm:text-start font-mono text-3xl font-extralight tracking-wider leading-normal">
                  WELCOME TO MY{" "}
                  <span className="text-6xl tracking-widest font-light">
                    Portfolio
                  </span>
                </p>

                <p className="text-center sm:text-start font-sans text-xl font-thin tracking-widest leading-6">
                  My name is{" "}
                  <span className="text-accent-500 font-semibold text-nowrap">
                    Luqzan Ariff
                  </span>
                  , and I just <span className="text-nowrap">kick-started</span>{" "}
                  my career as a{" "}
                  <span className="text-accent-500 font-semibold">
                    <span className="text-nowrap">Full-Stack</span> Developer
                  </span>
                  !
                </p>
              </div>

              <div className="flex gap-6">
                <CustomLink
                  isFilled={true}
                  iconRight={
                    <DriveFileRenameOutlineOutlinedIcon className="text-background" />
                  }
                >
                  HIRE ME
                </CustomLink>

                <CustomLink>GET TO KNOW ME &rarr;</CustomLink>
              </div>
            </div>

            <div className="flex-grow">{children}</div>
          </main>

          {/* <footer></footer> */}
        </div>
      </body>
    </html>
  );
}
