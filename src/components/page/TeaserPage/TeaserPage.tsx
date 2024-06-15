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
                                alt="東京大学 制作展Extra 2024の日時情報を載せた画像です．日時は7月5日(金)から7月8日(月)までです．全日11:00から19:00に開催します．An image showing the date and time information for the University of Tokyo Exhibition Extra 2024. The event is held from Friday, July 5th to Monday, July 8th. It takes place daily from 11:00 AM to 7:00 PM."
                                className={imageStyle}
                                layout="fill"
                                objectFit="contain"
                            ></Image>
                        </div>
                        <div className={imageContainer({ content: "venue" })}>
                            <Image
                                src={`/Venue.png`}
                                alt="東京大学 制作展Extra 2024の開催情報を載せた画像です．会場は東京大学本郷キャンパス 情報学環オープンスタジオにて，東京大学大学院 情報学環・学際情報学府主催のもと行われます．An image showing the event information for the University of Tokyo Exhibition Extra 2024. The venue is the Open Studio at the University of Tokyo Hongo Campus, hosted by the Interfaculty Initiative in Information Studies and Graduate School of Interdisciplinary Information Studies, the University of Tokyo."
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
