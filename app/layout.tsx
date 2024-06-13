import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";
import Image from "next/image";
import fav from "@/public/images/favicon.ico"
import Footer from "./components/Footer/Footer";
const poppins = Poppins({
weight:['400','500','600','700','800'],
subsets: ["latin"] });

export const metadata: Metadata = {
title: "PONTO DO CRIADOR | Tudo para seu Pet",
description: " Crie Seus Sonhos",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="en">
<head>
<link rel="icon" href={fav.src} sizes="any" />
</head>
<body className={poppins.className}>
<ResponsiveNav/>
{children}
<Footer/>
</body>
</html>
);
}
