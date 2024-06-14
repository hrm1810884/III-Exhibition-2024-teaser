import { Button } from "@mantine/core";
import Image from "next/image";

import {
    backgroundStyle,
    displayItemContainer,
    displayItemWrapper,
    eventInfoStyle,
    imageContainer,
    imageStyle,
    registerButtonStyle,
    titleStyle,
} from "./TeaserPage.css";
export const TeaserPage = () => {
    return (
        <div className={backgroundStyle}>
            <div className={displayItemWrapper}>
                <div className={displayItemContainer}>
                    <div className={eventInfoStyle}>
                        <p className={titleStyle}>なにいう展</p>
                        <div className={imageContainer({ content: "date" })}>
                            <Image
                                src={`/Date.png`}
                                alt="the date of iii exhibition 2024"
                                className={imageStyle}
                                layout="fill"
                                objectFit="contain"
                            ></Image>
                        </div>
                        <div className={imageContainer({ content: "venue" })}>
                            <Image
                                src={`/Venue.png`}
                                alt="the place of iii exhibition 2024"
                                className={imageStyle}
                                layout="fill"
                                objectFit="contain"
                            ></Image>
                        </div>
                    </div>
                    <a target="_blank" href="https://iii-exhibition2024extra.peatix.com/">
                        <Button className={registerButtonStyle}>来場登録</Button>
                    </a>
                </div>
            </div>
        </div>
    );
};
