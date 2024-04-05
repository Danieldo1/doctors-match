import { Work_Sans } from "next/font/google";
import "./globals.css";

const works = Work_Sans({ subsets: ["latin"],style:["normal", "italic"], weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "DoctorMatch",
  description: "Find your next doctor, with DoctorMatch.Meet now the best doctors anywhere!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={works.className}>{children}</body>
    </html>
  );
}
