import useMediaQuery from "@mui/material/useMediaQuery";
import ava1 from "../assets/images/background-2.jpg";
import banner from "../assets/images/game-banner2.png";
import logo from "../assets/images/Logo.svg";
import gift from "../assets/images/gift.png"
import close from "../assets/ico/close.svg"
import {Avatar, Button, InfoPane, LangButton, TelegramButton} from "../components/UI/ui-kit.tsx";
import "./Styles/Success.css"

export default function Success() {
    const isMobile = useMediaQuery('(max-width: 64rem)')
    return (
        <div className={`CheckProfile ${isMobile ? "CheckProfile--mobile green" : "CheckProfile--desktop"}`}>
            <img src={logo} className={`logo ${isMobile ? "logo--mobile" : "logo--desktop"}`}/>
            <img src={close} className={`close-btn ${isMobile ? "" : "hidden"}`}/>
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

            <div className={`container 
                    ${isMobile ? "container--mobile container-bottom--desktop-hidden" 
                    : "container--desktop container-bottom--mobile-hidden"}>`}>
                <div className={`first-container ${isMobile ? "first-container--mobile" : "first-container--desktop"}`}>
                </div>
                <div className={`second-container ${isMobile ? "second-container--mobile" : "second-container--desktop"}`}>
                    <div className={`gift ${isMobile ? "hidden" : ""}`}>
                        <h3>Удачная покупка</h3>
                        <img src={gift} className={`gift-img`}/>
                    </div>
                    <Avatar
                        ClassName={`ava--success ava--${!isMobile ? "hidden" : ""}`}
                        variant={"success"}
                        loadedImg={true}
                        src={ ava1}
                    />
                    <h3 className={`cong-text ${!isMobile ? "hidden" : ""}`}>
                        Удачная покупка
                    </h3>
                    <div className={"text"}>
                            <p className={"full-text"}>
                                Спасибо за покупку товара в нашем магазине!
                                Будем рады Вашему отзыву, обращайтесь ещё!
                            </p>
                    </div>
                    <div className={"btn-group"}>

                            <Button
                                className={"confirm-btn"}
                                variant={"tertiary"}
                                size={"mobile"}
                            > Оставить отзыв </Button>

                        <Button
                            className={"change-acc"}
                            variant={"primary"}
                            size={"mobile"}
                        > Главная </Button>
                        <button className={`btn-def btn--check-ver`}>Проверить версию издания</button>
                        <button className={"btn-def btn--goto"}>Посмотреть игру</button>

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
                <button className={`btn-def close ${isMobile ? "hidden" : ""}`}>
                    <img src={close} className={`close-ico`}/>
                    Закрыть
                </button>
            </div>
        </div>
    )
}
