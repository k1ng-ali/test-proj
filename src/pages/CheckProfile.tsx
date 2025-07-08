import useMediaQuery from "@mui/material/useMediaQuery";
import {useEffect, useState} from "react";
import logo from "../assets/images/Logo.svg"
import ava1 from "../assets/images/ava-1.jpg"
import banner from "../assets/images/game-banner.png"
import "./Styles/CheckProfile.css"
import {Avatar, InfoPane, Button, LangButton, TelegramButton} from "../components/UI/ui-kit.tsx";
import {formatTime} from "../Utils/utils.ts";

export default function CheckProfile() {
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
        if (secondsLeft === 0) return;

        const timer = setInterval(() => {
            setSecondsLeft((prev: number) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [secondsLeft]);

    const isMobile = useMediaQuery('(max-width: 64rem)')
    return (
        <div className={`CheckProfile ${isMobile ? "CheckProfile--mobile" : "CheckProfile--desktop"}`}>
            <img src={logo} className={`logo ${isMobile ? "logo--mobile" : "logo--desktop"}`}/>
            {!isMobile ? (
                <div className={`left-container`}>
                    <img src={banner} className={"banner"}/>
                    <h3 className={"banner--title"}>
                        Command & Conquer™ Red Alert™
                        3-Uprising
                    </h3>
                    <div className={"order--dlc"}>
                        <p className={"order-num"}>

                        </p>
                        <div className={`dlc-container`}>
                            <InfoPane text={"DLC"} ClassName={"dlc"}/>
                            <InfoPane text={"Время на активацию 00:00:00"} ClassName={"dlc--timer"}/>
                        </div>
                        <p className={"banner-desc"}>Для активации DLC нужна основная игра на аккаунте</p>
                    </div>
                </div>
            ): null}

            <div className={`container ${isMobile ? "container--mobile" : "container--desktop"}`}>
                <div className={`first-container ${isMobile ? "first-container--mobile" : "first-container--desktop"}`}>
                    <p className={`title ${isMobile ? "title--mobile" : "title--desktop"}`}>
                        { isMobile ?
                        `Для активации DLC нужна основная игра на аккаунте` : `Проверка профилья`}
                    </p>
                </div>
                <div className={`second-container ${isMobile ? "second-container--mobile" : "second-container--desktop"}`}>
                    <Avatar
                        ClassName={"ava"}
                        variant={"checking"}
                        loadedImg={(secondsLeft > 0) ? false : true}
                        src={(secondsLeft > 0) ? "" : ava1}
                    />
                    { isMobile ? (
                        <div className={`dlc-container`}>
                            <InfoPane text={"DLC"} ClassName={"dlc"}/>
                            <InfoPane text={"Время на активацию 00:00:00"} ClassName={"dlc--timer"}/>
                        </div> ) : null }
                    {isMobile ? (
                        <h3 className={"order-name"}>
                            Command & Conquer™ Red Alert™
                            3-Uprising
                        </h3> ) : null }
                    {isMobile ? (
                        <p className={"order-num"}>Заказ #99999999</p>
                    ) : null }
                    <div className={"text"}>
                        <p className={"check-nick"}>
                        Steam никнейм покупателя. Проверьте перед покупкой!
                        </p>
                        {
                            <a className={"link"} href={"https://steamcommunity.com/profiles/steamid64"}>
                                https://steamcommunity.com/profiles/steamid64
                            </a>
                        }
                        {
                            (secondsLeft == 0) &&
                            <p className={"full-text"}>
                                Вам отправлен запрос на добавление друзья в Steam.
                                Вам необходимо принять нашего бота с никнеймом “Bot Name”
                                в друзья. Далее вам отправят купленный товар.
                            </p>
                        }
                    </div>
                    <div className={"btn-group"}>
                    {(secondsLeft > 0) &&
                        <Button
                            className={"confirm-btn"}
                            variant={"tertiary"}
                            size={"mobile"}
                        >
                            Это мой аккаунт {formatTime(secondsLeft)}
                        </Button>
                        }
                        <Button
                            className={"change-acc"}
                            variant={"primary"}
                            size={"mobile"}
                        >
                            Сменить аккаунт
                        </Button>
                    </div>
                </div>
                <div className={`third-container`}>
                    <div className={`lang`}>
                        <LangButton text={"RU"}
                                    onSubmit={() => {}}
                                    variant={"primary"}
                                    className={"lang--left"}
                        />
                        <LangButton
                            text={"EN"}
                            onSubmit={ () => {}}
                            variant={"secondary"}/>
                    </div>
                    <TelegramButton
                        className={"tg--btn"}
                        size={"mobile"}
                    />
                </div>
            </div>
        </div>
    )
}