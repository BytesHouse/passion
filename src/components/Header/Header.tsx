import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";
import cls from './Header.module.css';
import {CSSTransition} from 'react-transition-group'
import {useEffect, useState} from "react";
import './style.css';

const Header = () => {
    const [isEnter, setIsEnter] = useState(false);
    const handleClick = () => {
        setIsEnter((prev: boolean) => !prev);
    }
    useEffect(()=>{
        if(isEnter){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    }, [isEnter])
    return (
        <div className={cls.header}>
            <div className={cls.container}>
                <CSSTransition
                    in={isEnter}
                    timeout={5000}
                    classNames="myclass"
                >
                    <div className="my-paragraph">
                        — Как дела? <br/> <br/>

                        — Аааааааааааааа, я думала сова... <br/> <br/>
                        <div onClick={() => setIsEnter((v) => !v)} className="my-div">X</div>
                    </div>
                </CSSTransition>
                <Logo/>
                <p><span className={cls.span}>M</span>aracu<span className={cls.span}>Й</span>a</p>
                <Burger enter={handleClick} />
            </div>
        </div>
    );
};

export default Header;