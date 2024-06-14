import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const backgroundStyle = style({
    backgroundImage: `url(/WEB2.png)`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100dvh",
    width: "100dvw",
});

export const displayItemWrapper = style({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
});

export const displayItemContainer = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    maxWidth: "90%",
    height: "100%",
    padding: "1rem",
});

export const eventInfoStyle = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "flex-start",
    width: "100%",
    maxWidth: "100%",
    height: "70%",
    maxHeight: "70%",
    gap: "2px",
});

export const titleStyle = style({
    display: "flex",
    position: "relative",
    color: "black",
    textShadow: "1px 10px 2px rgba(84,6,6,0.25)",
    lineHeight: 1.2,
    height: "fit-content",
    maxWidth: "100%",
    marginTop: "2rem",
    "@media": {
        "screen and (max-width: 380px)": {
            // marginTop: "rem",
            fontSize: "3rem",
            marginBottom: "1.5rem",
        },
        "screen and (min-width: 380px)": {
            marginTop: "0rem",
            fontSize: "5rem",
        },
        "screen and (min-width: 550px)": {
            marginTop: "0rem",
            fontSize: "7.5rem",
        },
        "screen and (min-width: 768px)": {
            marginTop: "0rem",
            fontSize: "10rem",
        },
    },
});

export const imageContainer = recipe({
    base: {
        display: "block",
        position: "relative",
        width: "100%",
    },
    variants: {
        content: {
            date: {
                height: "10vw",
            },
            venue: {
                height: "20vw",
            },
        },
    },
});

export const imageStyle = style({
    // width: "100%",
    // height: "auto",
});

export const registerButtonStyle = style({
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    fontSize: "5rem",
    background: "radial-gradient(#e4e4e4,#9b7373)",
    borderRadius: "60% / 60%",
    color: "rgb(255, 255, 255)",
    marginBottom: "1rem",
    padding: "1px",
    width: "20rem",
    height: "10rem",
    filter: "drop-shadow(0px 5px  4px #850000)",
    position: "relative",
    "::after": {
        content: '""',
        position: "absolute",
        top: "5px",
        left: "5px",
        right: "5px",
        bottom: "5px",
        border: "2px solid #ffffff",
        borderRadius: "inherit",
    },
    ":active": {
        transform: "translateY(7px)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        filter: "none",
    },
});
