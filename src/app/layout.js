import { Preahvihear, Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const preahvihear = Preahvihear({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-preahvihear",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plusjakarta",
});

export const metadata = {
  title: "Ibrahim Memon",
  description:
    "Currently, I'm a Software Engineer at Facebook, A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${preahvihear.variable} ${poppins.variable} ${plusJakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
