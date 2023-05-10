import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "A Todo App built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={josefin.className}>
        {children}
      </body>
    </html>
  );
}
