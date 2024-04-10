import LogoMaracuya from "../LogoMaracuya/LogoMaracuya";
import Burger from "../Burger/Burger";
import cls from './Header.module.css';
import {CSSTransition} from 'react-transition-group'
import {useEffect, useState} from "react";
import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {categories} from "../../config/categories";
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../features/products/productsSlice";

const Header = () => {
    const [isEnter, setIsEnter] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.products.products);
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
    const handleClickFilter = (category: number) => {
        dispatch(setFilter(category))
        console.log(category)
        setIsEnter(false);
    }
    return (
        <div className={cls.header}>
            <div className={cls.container}>
                <CSSTransition
                    in={isEnter}
                    timeout={5000}
                    classNames="myclass"
                >
                    <div className="my-paragraph">
                            <ul className={cls.navi}>
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
                <LogoMaracuya enter={undefined} />
                <p><span className={cls.span}>M</span>aracu<span className={cls.span}>Й</span>a</p>
                <Burger enter={handleClick} />
            </div>
        </div>
    );
};

export default Header;