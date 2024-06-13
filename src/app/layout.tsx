import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Local from "next/font/local";
import React from "react";

import "./globals.css";
import "@mantine/core/styles.css";
import { theme } from "@/styles";

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--font-noto-sans-jp",
});

const marumoni = Local({
    src: "../../public/x12y16pxMaruMonica.ttf",
    display: "swap",
    variable: "--font--marumoni",
});

export const metadata: Metadata = {
    title: "III-Exhibition Extra Teaser",
    description: "the teaser of iii exhibition 2024 at University of Tokyo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <head>
                <ColorSchemeScript />
            </head>
            <body className={marumoni.className}>
                <MantineProvider theme={theme}>{children}</MantineProvider>
            </body>
        </html>
    );
}
