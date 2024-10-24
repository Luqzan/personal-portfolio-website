import "./globals.css";
import { geistMono, geistSans } from "./ui/fonts";

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
