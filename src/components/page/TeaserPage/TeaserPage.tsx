import { Button } from "@mantine/core";
import Image from "next/image";

import {
    backgroundStyle,
    displayItemContainer,
    eventInfoStyle,
    imageContainer,
    imageStyle,
    registerButtonStyle,
    titleStyle,
} from "./TeaserPage.css";

export const TeaserPage = () => {
    return (
        <div className={backgroundStyle}>
            <div className={displayItemContainer}>
                <div className={eventInfoStyle}>
                    <p className={titleStyle}>なにいう展</p>
                    <div className={imageContainer}>
                        <Image
                            src={`/Date.png`}
                            alt="the date of iii exhibition 2024"
                            className={imageStyle}
                            layout="responsive"
                            width={800}
                            height={40}
                        ></Image>
                    </div>
                    <div className={imageContainer}>
                        <Image
                            src={`/Venue.png`}
                            alt="the place of iii exhibition 2024"
                            className={imageStyle}
                            layout="responsive"
                            width={500}
                            height={200}
                        ></Image>
                    </div>
                </div>
                <Button className={registerButtonStyle}>来場登録</Button>
            </div>
        </div>
    );
};
