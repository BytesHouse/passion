import LogoMaracuya from "../../assets/icons/LogoMaracuya/LogoMaracuya";
import Burger from "../../assets/icons/Burger/Burger";
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
    };
    const handleReset = () => {
        dispatch(reset());
    };

    const size = useWindowSize();

    return (
        <>
            {size.width! < 1024 ? (
                <>
                    {/* Mobile */}
                    <div className="w-full mx-auto min-h-[180px] z-50">
                        <div className="flex justify-between items-center w-full min-w-[320px] mx-auto p-[10px] fixed bg-white border-b-[1px] border-b-[128_128_128_0.2] shadow-[0_4px_8px_rgba(0,0,0,0.1)] z-[10]">
                            {/* Header */}
                            <Link to="/">
                                <LogoMaracuya enter={undefined} />
                            </Link>
                            <Link to="/">
                                <p className="text-[100px] font-[100] font-[Onest]">
                                    <span className="text-[#ef3a65] font-[400]">
                                        M
                                    </span>
                                    aracu
                                    <span className="text-[#ef3a65] font-[400]">
                                        Й
                                    </span>
                                    a
                                </p>
                            </Link>
                            <Burger enter={handleClick} />

                            {/* Анимация бургера */}
                            <CSSTransition
                                in={isEnter}
                                timeout={5000}
                                classNames="myclass"
                            >
                                <div className="my-paragraph flex flex-col z-[999]">
                                    <ul className="flex flex-col justify-between items-center font-[500] text-[36px] h-[75%] overflow-y-auto">
                                        <li onClick={handleReset}>
                                            Все продукты
                                        </li>
                                        {categories.map((category) => {
                                            return (
                                                <li
                                                    className="flex text-center"
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
                                    </ul>
                                    <p className="flex items-center justify-center text-[48px] font-[600] my-[15px] w-full">
                                        +373 (68) 76-24-27
                                    </p>
                                    <div
                                        onClick={() => setIsEnter((v) => !v)}
                                        className="px-[15px] m-[25px] border-black border-[1px] rounded-full absolute top-0 right-0 bg-gray-300 text-[64px]"
                                    >
                                        {/* Значок закрытия модального окна */}
                                        <FontAwesomeIcon icon={faXTwitter} />
                                    </div>
                                </div>
                            </CSSTransition>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* Desktop */}
                    <div className="container mx-auto min-h-[150px] z-50">
                        <div className="w-full fixed h-[120px] bg-white left-0"></div>
                        <div className="container fixed bg-white">
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
