import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
export const metadata = {
  title: "MathRix'25",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </head>
      <body>
        {/* <Header/> */}
        {children}
        <Analytics />
      </body>
      {/* <Footer/> */}
    </html>
  );
}
