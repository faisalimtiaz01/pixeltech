import type { Metadata } from "next";
import { Poppins,Comfortaa } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['800', '700', '600', '500','400', '300'],
  subsets: ['latin'],
  display: 'swap',
  preload: true
})


const comfortaa = Comfortaa({
  weight: [ '700', '600', '500','400', '300'],
  subsets: ['latin'],
  display: 'swap',
  preload: true

})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} ${poppins.className}`}>{children}</body>
    </html>
  );
}
