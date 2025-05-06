import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title:{
    template: "%s - E@Store",
    default:"E@Store",
  },
  description:"E@Store Online Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins"
  
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
