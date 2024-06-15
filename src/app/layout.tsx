import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Metadata } from "next";
import Local from "next/font/local";
import React from "react";

import "./globals.css";
import "@mantine/core/styles.css";
import { theme } from "@/styles";

const marumoni = Local({
    src: "../../public/x12y16pxMaruMonica.ttf",
    display: "swap",
    variable: "--font--marumoni",
});

export const metadata: Metadata = {
    title: "III-Exhibition Extra 2024 Teaser",
    description: "the teaser web site of iii exhibition 2024 at University of Tokyo",
    icons: {
        icon: "./favicon.ico",
    },
    openGraph: {
        title: "III-Exhibition Extra Teaser",
        description: "the teaser web site of iii exhibition 2024 at University of Tokyo",
        url: "https://www.iiiexhibition.com",
        images: [
            {
                url: "/openGraph.png",
                width: 1200,
                height: 750,
                alt: "III-Exhibition Extra Teaser Image",
            },
        ],
        siteName: "III-Exhibition Extra 2024 Teaser",
    },
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
