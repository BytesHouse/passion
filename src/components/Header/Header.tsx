import LogoMaracuya from "../LogoMaracuya/LogoMaracuya";
import Burger from "../Burger/Burger";
import cls from './Header.module.css';
import {CSSTransition} from 'react-transition-group'
import React, {useEffect, useState} from "react";
import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {categories} from "../../config/categories";
import {useDispatch, useSelector} from "react-redux";
import {reset, setFilter} from "../../features/products/productsSlice";
import AddressComponent from "../AddressComponent/AddressComponent";

const Header = () => {
    const [isEnter, setIsEnter] = useState(false);
    const [isShowAddress, setIsShowAddress] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(isEnter){
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
        }else{
            document.body.style.overflow = 'auto';
            document.body.style.position = 'static';
        }
    }, [isEnter])

    const handleClickLogo = () => {
        setIsShowAddress(!isShowAddress);
    }

    const handleClick = () => {
        setIsEnter((prev: boolean) => !prev);
    }
    const handleClickFilter = (category: number) => {
        dispatch(setFilter(category))
        setIsEnter(false);
    }
    const handleReset = () => {
        dispatch(reset())
        setIsEnter(false);
    }
    return (
        <div className={cls.header}>
            {isShowAddress && <AddressComponent handler={handleClickLogo}/>}
            <div className={cls.container}>
                <CSSTransition
                    in={isEnter}
                    timeout={5000}
                    classNames="myclass"
                >
                    <div className="my-paragraph">
                            <ul className={cls.navi}>
                                <li onClick={handleReset}>Все продукты</li>
                                {categories.map((category) => {
                                    return <li onClick={() => handleClickFilter(category.category)} key={category.id}>{category.name}</li>
                                })}
                                <hr/>
                                <li className={cls.last}>+373 (68) 76-24-27</li>
                            </ul>
                        <div onClick={() => setIsEnter((v) => !v)} className="my-div">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </div>
                    </div>
                </CSSTransition>
                <button onClick={handleClickLogo}><LogoMaracuya enter={undefined} /></button>
                <p><span className={cls.span}>M</span>aracu<span className={cls.span}>Й</span>a</p>
                <Burger enter={handleClick} />
            </div>
        </div>
    );
};

export default Header;