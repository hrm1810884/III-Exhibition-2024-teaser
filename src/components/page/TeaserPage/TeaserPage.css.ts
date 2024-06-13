import { vars } from "@/styles";
import { style } from "@vanilla-extract/css";

export const backgroundStyle = style({
    backgroundImage: "url(/WEB2.png)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100dvh",
});

export const displayItemContainer = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "100vw",
    height: "100%",
    padding: "1rem",
});

export const eventInfoStyle = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "flex-start",
    width: "80%",
    maxWidth: "80%",
    gap: "2px",
});

export const titleStyle = style({
    display: "flex",
    color: "black",
    textShadow: "1px 10px 2px rgba(84,6,6,0.25)",
    height: "fit-content",
    maxWidth: "100%",
    lineHeight: 1.2,
    fontSize: "5rem",
    marginTop: "2rem",
    "@media": {
        "screen and (min-width: 768px)": {
            marginTop: "0rem",
            fontSize: "10rem",
        },
        "screen and (min-width: 550px)": {
            // marginTop: "rem",
            fontSize: "7.5rem",
        },
        "screen and (max-width: 380px)": {
            // marginTop: "rem",
            fontSize: "3rem",
            marginBottom: "1.5rem",
        },
    },
});

export const imageContainer = style({
    display: "block",
});

export const imageStyle = style({
    // width: "100%",
    // height: "auto",
});

export const registerButtonStyle = style({
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    fontSize: vars.fontSizes.lg,
    background: "radial-gradient(#D9D9D9,#A4A4A4)",
    border: "1px solid black",
    borderRadius: "60% / 60%",
    color: "rgb(76,76,76)",
    marginBottom: "1rem",
    padding: "0.5rem",
    width: "14rem",
    height: "7rem",
    filter: "drop-shadow(0 0 0.35rem red)",
    ":hover": {
        color: "black",
        filter: "drop-shadow(0 0 0.75rem red)",
    },
});
