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
