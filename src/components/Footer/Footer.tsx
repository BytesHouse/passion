import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTelegram,
    faViber,
    // faVk,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import LogoMaracuya from "../../assets/icons/LogoMaracuya/LogoMaracuya";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-[4em]">
            <div>
                <div className="container flex justify-between mx-auto px-[20px]">
                    <LogoMaracuya enter={undefined} />
                    <div className="flex flex-col lg:flex-row items-end lg:items-center justify-between gap-[2em] lg:w-[55em]">
                        {/* flex-col */}
                        <a
                            href="tel: +37368762427"
                            className="no-underline font-[Montserrat] text-[3em] font-[700] leading-[25.6px] text-left text-[#f7d22d] w-[100%]"
                        >
                            +373(68)76-24-27
                        </a>
                        <a
                            href="tel: +37368762427"
                            className="no-underline text-black text-center w-[80%] text-[2.5em] bg-[#f3f3f7] border-2 border-solid border-[#f7d22d] hover:bg-[#f7d22d] rounded-[0.5em] p-[0.5em] mx-auto"
                        >
                            Позвонить
                        </a>
                    </div>
                </div>
                <div className="lg:container lg:grid lg:grid-cols-3 lg:mx-auto lg:mt-[1em]">
                    <div className="flex justify-between p-[e3m] mt-[3em] lg:mt-0">
                        <div className="flex flex-col justify-between text-center text-[2em] w-[100%] lg:justify-start">
                            <p>
                                <strong>Правовая информация</strong>
                            </p>
                            <div>
                                <p>Дубоссары</p>
                                <p>ул. Ломоносова 30</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center my-[25px] gap-[10px] text-[2em]">
                            <Link className="hover:underline" to="/">
                                <p>Главная страница</p>
                            </Link>
                            <Link className="hover:underline" to="/privacy">
                                <p>Политика конфициальности</p>
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center m-auto gap-[1em] text-[2em] text-center my-[2em]">
                        <FontAwesomeIcon
                            icon={faTelegram}
                            size="3x"
                            className="text-[#0059b3]"
                        />
                        <FontAwesomeIcon
                            icon={faViber}
                            size="3x"
                            className="text-[#7360f2]"
                        />
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            size="3x"
                            className="text-[#5ffc7b]"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center mx-auto my-[1em] p-[10px] text-[2em] font-[Onest]">
                    <p>
                        <strong>Остались вопросы? А мы всегда на связи:</strong>
                    </p>
                    <span>Время работы с 8:00 до 22:00</span>
                </div>

                <p className="text-[2em] text-center my-[1em]">
                    Created by{" "}
                    <a
                        className="no-underline"
                        href="https://sterrasoft.com/"
                        target="blanc"
                    >
                        S-Terra-Soft
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
