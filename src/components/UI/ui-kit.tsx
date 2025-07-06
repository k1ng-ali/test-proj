import "./ui-kit.css"
import useMediaQuery from '@mui/material/useMediaQuery';
import Check from "../../assets/ico/check.svg"
import Info from "../../assets/ico/info.svg"
import TG from "../../assets/ico/tg.svg"
import Ellips from "../../assets/ico/Loading.svg"
import UnknownAva from "../../assets/images/unlknown-ava.png"
interface ButtonProps {
    variant?: "primary" | "secondary" | "tertiary" | "error" | "like" | "dislike";
    size?: "desktop" | "mobile";
    withLogo?: boolean;
    children?: React.ReactNode;
    logo?: React.ReactNode;
    className?: string;
    OnClick?: () => void;
    isLoading?: boolean;
}
export const Button = (
    {variant, size, withLogo, children, logo, className, OnClick, isLoading}: ButtonProps) => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const btnSize = size || (isMobile ? 'mobile' : 'desktop');
    return (
        <div className={`${className ? className : ""}`}>
            <button
                className={`btn btn--${variant} btn--${btnSize} ${withLogo ? 'btn--with-logo' : ''}`}
                onClick={() => {OnClick?.()}}>
                {isLoading ? (<img src={Ellips}/>) : (
                    <>
                    {logo &&
                        <span className={"btn-logo"}>
                        {logo}
                    </span>}
                    {children}
                    </>
                )
                }
            </button>
        </div>
    );
}
interface InputProps {
    variant?: "primary" | "secondary" | "error";
    size?: "desktop" | "mobile";
    placeholder?: string;
    className?: string;
    OnChange?: (val:string) => void;
    value?: string;
}
export const Input = (
    { variant, size , placeholder, className, OnChange, value}: InputProps) => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const inputSize = size || (isMobile ? 'mobile' : 'desktop')
    return (
        <div className={`${className ? className : ""}`}>
            <div className={`input-wrapper input--${variant} input--${inputSize}`}>
                <input
                    placeholder={placeholder}
                    className={`input`}
                    onChange={(e) => {OnChange?.(e.target.value)}}
                    value={value}
                />
            </div>
        </div>
    )
}

interface checkBotProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    error?: boolean;
    label?: string;
    className?: string;
}

export const CheckBot = ({ checked, onChange, error, label, className }:checkBotProps) => {
    return (
        <div className={`${className ? className : "" }`}>
            <label className={`checkbox-container`}>
                <button
                    className={`checkbox ${error ? 'checkbox-error' : ''} ${checked ? 'checkbox-checked' : ''}` }
                    onClick={()=>{onChange(!checked)}}
                >
                    {checked && <img src={Check} className={"check-icon"} />}
                </button>
                {label && <span className="checkbox-label">{label}</span>}
            </label>
        </div>
    )
}

interface langButtonProps {
    text: string;
    onSubmit: (text: string) => void;
    size?: "desktop" | "mobile";
    variant: "primary" | "secondary";
    className?: string;
}

export const LangButton = ({text, onSubmit, size, variant, className}: langButtonProps) => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const inputSize = size || (isMobile ? 'mobile' : 'desktop')
    return (
        <div className={`${className ? className : ""}`}>
            <button
                className={`lang-button lang--${inputSize} lang--${variant}`}
                onClick={()=>{onSubmit(text)}}>
                {text}
            </button>
        </div>
    )
}

interface TgBtnProps {
    size?: "desktop" | "mobile";
    className?: string;
    OnClick?: () => void;
}

export const TelegramButton = ({size, className, OnClick}: TgBtnProps) => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const inputSize = size || (isMobile ? 'mobile' : 'desktop')
    return (
        <div className={`${className ? className : ""}`}>
            <button
                className={`tg-btn tg--${inputSize}`}
                onClick={()=>{OnClick?.()}}>
                <img className={"tg-ico"} src={TG}/>
            </button>
        </div>
    )
}

interface InfoPaneProps {
    text: string;
    info?: string;
    variant?: "desktop" | "mobile";
    ClassName?: string;
}

export const InfoPane = (
    {text, variant, ClassName}: InfoPaneProps) => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const inputSize = variant || (isMobile ? 'mobile' : 'desktop')
    return (
        <div className={ClassName}>
            <div className={`info-pane info--${inputSize}`}>
                {text}
                <img src={Info} className={"info-icon"}/>
            </div>
        </div>
    )
}

interface AvatarProps {
    variant?: "checking" | "success";
    loadedImg?: boolean;
    src?: string;
    ClassName?: string;
}

export const Avatar = (
    {variant, loadedImg, src, ClassName}: AvatarProps) => {
    return (
        <div className={ClassName}>
            <img src={loadedImg ? src : UnknownAva} className={`avatar avatar--${variant}`}/>
        </div>
    )
}
