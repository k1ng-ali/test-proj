import "./Styles/LoginByCode.css"
import useMediaQuery from "@mui/material/useMediaQuery";
import {useState} from "react";
import logo from "../assets/images/Logo.svg"
import {Button, Input, CheckBot, LangButton, TelegramButton} from "../components/UI/ui-kit.tsx"
export default function LoginByCode() {
    const [botChecked, setBotChecked] = useState(false)
    const [lang, setLang] = useState("RU")
    const [inputValue, setValue] = useState<string>("")
    const [valideValue, setValideValue] = useState(true)
    const [checkError, setCheckError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const isMobile = useMediaQuery('(max-width: 64rem)')

    return (
        <div className={"login-byCode"}>
            <img src={logo} className={`logo ${isMobile ? "logo--mobile" : "logo--desktop"}`}/>
                <div className={`container ${isMobile ? "container--mobile" : "container--desktop"}`}>
                    <div className={`container-top ${isMobile ? "container-top--mobile" : "container-top--desktop"}`}>
                    <p className={`error-message ${valideValue ? "error-message--hidden" : ""}`}>
                        Некорректный код заказа. Проверьте ещё раз.
                    </p>
                </div>
                <div className={`container-bottom ${isMobile ? "container-bottom--mobile" : "container-bottom--desktop"}`}>
                    <h2>Введите уникальный код заказа</h2>
                    <Input
                        variant={valideValue ? "primary" : "error"}
                        placeholder={"Введите уникальный код"}
                        className={"input-cod"}
                        OnChange={(val) => {
                            setValue(val)
                            setValideValue(true)
                            setIsLoading(false)
                        }}
                        value={inputValue}
                    />
                    <Button
                        variant={"tertiary"}
                        className={"accept-btn"}
                        isLoading={isLoading}
                        OnClick={() => {
                            if (inputValue.trim() === "") {
                                setValideValue(false)
                            } else {
                                setValideValue(true)
                            }
                            if (botChecked) {
                                setCheckError(false)
                            } else {
                                setCheckError(true)
                            }
                            if (inputValue.trim() !== "" && botChecked){
                                setIsLoading(true)
                            }
                        }}
                    >
                        Подтвердить
                    </Button>
                    <CheckBot
                        checked={botChecked}
                        onChange={(checked) => {
                            setBotChecked(checked)
                            setCheckError(false)
                        }}
                        label={"Я не робот"}
                        error={checkError}
                        className={"checkBot"}/>
                    <p>Связаться с продавцом</p>
                    <div className={"feedback"}>
                        <div className={"lang"}>
                            <LangButton
                                text={"RU"}
                                onSubmit={() => {
                                    setLang("RU")
                                }}
                                variant={lang == "RU" ? "primary" : "secondary"}/>
                            <LangButton
                                text={"EN"}
                                onSubmit={() => {
                                    setLang("EN")
                                }}
                                variant={lang == "EN" ? "primary" : "secondary"}
                                className={'lang--en'}
                            />
                        </div>
                        <TelegramButton
                            size={"mobile"}
                            className={"tg"}
                            OnClick={() => {
                                console.log("Open Telegram")
                            }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
