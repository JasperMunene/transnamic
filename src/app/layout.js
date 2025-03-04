import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import "./css/globals.css";
import "./css/styles.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

const eurostyle = localFont({
  src: "./fonts/EuroStyle.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Transnamic",
  description: "Transnamic group",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={`${manrope.className} antialiased`}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <main className="body-font">
          {children}
        </main>
      </ThemeProvider>
      </body>
      </html>
  );
}
