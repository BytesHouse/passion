import LogoMaracuya from "../../assets/icons/LogoMaracuya/LogoMaracuya";
import Burger from "../../assets/icons/Burger/Burger";
import cls from "./Header.module.css";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { categories } from "../../config/categories";
import { useDispatch } from "react-redux";
import { reset, setFilter } from "../../features/products/productsSlice";
import { Link } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";

const Header = () => {
    const [isEnter, setIsEnter] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () => {
        setIsEnter((prev: boolean) => !prev);
    };
    useEffect(() => {
        if (isEnter) {
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.position = "static";
        }
    }, [isEnter]);
    const handleClickFilter = (category: number) => {
        dispatch(setFilter(category));
        setIsEnter(false);
    };
    const handleReset = () => {
        dispatch(reset());
        setIsEnter(false);
    };

    const size = useWindowSize();

    return (
        <>
            {size.width! < 1024 ? (
                <>
                    {/* Mobile */}
                    <div className={cls.header}>
                        <div className={cls.container}>
                            <CSSTransition
                                in={isEnter}
                                timeout={5000}
                                classNames="myclass"
                            >
                                <div className="my-paragraph">
                                    <ul className={cls.navi}>
                                        <li onClick={handleReset}>
                                            Все продукты
                                        </li>
                                        {categories.map((category) => {
                                            return (
                                                <li
                                                    onClick={() =>
                                                        handleClickFilter(
                                                            category.category
                                                        )
                                                    }
                                                    key={category.id}
                                                >
                                                    {category.name}
                                                </li>
                                            );
                                        })}
                                        <hr />
                                        <li className={cls.last}>
                                            +373 (68) 76-24-27
                                        </li>
                                    </ul>
                                    <div
                                        onClick={() => setIsEnter((v) => !v)}
                                        className="my-div"
                                    >
                                        <FontAwesomeIcon icon={faXTwitter} />
                                    </div>
                                </div>
                            </CSSTransition>
                            <Link to="/">
                                <LogoMaracuya enter={undefined} />
                            </Link>
                            <Link to="/">
                                <p>
                                    <span className={cls.span}>M</span>aracu
                                    <span className={cls.span}>Й</span>a
                                </p>
                            </Link>
                            <Burger enter={handleClick} />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* Desktop */}
                    <div className="wrapper flex flex-col">
                        <div className="container mx-auto px-[20px]">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-[50px]">
                                    <Link to="/">
                                        <LogoMaracuya
                                            w={80}
                                            h={80}
                                        ></LogoMaracuya>
                                    </Link>
                                    <div className="font-semibold">
                                        <h1>
                                            Доставка продуктов{" "}
                                            <span className="text-amber-300">
                                                Дубоссары
                                            </span>
                                        </h1>
                                        <h2>Время доставки от 20 мин</h2>
                                    </div>
                                </div>
                                <Link to="/">
                                    <p className="text-[42px]">
                                        <span className="text-red-500 font-medium">
                                            M
                                        </span>
                                        aracu
                                        <span className="text-red-500 font-medium">
                                            Й
                                        </span>
                                        а
                                    </p>
                                </Link>
                                <div className="flex items-center gap-[30px]">
                                    <a
                                        className="text-[#696F7A] uppercase font-semibold rounded-full px-[30px] py-[5px] bg-gray-300"
                                        href="tel: +37368762427"
                                    >
                                        Позвонить
                                    </a>
                                    <a
                                        className="text-amber-300 text-[26px] font-semibold"
                                        href="tel: +37368762427"
                                    >
                                        + (373) 68 76-24-27
                                    </a>
                                </div>
                            </div>
                            <ul className="flex text-[14px] justify-between uppercase font-semibold">
                                {categories.map((item) => (
                                    <li key={item.id}>{item.short}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Header;
