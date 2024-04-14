import React from 'react';
import {categories} from "../../../../config/categories";
import LogoMaracuya from "../../../LogoMaracuya/LogoMaracuya";

const Header = () => {
    return (
        <div className="wrapper flex flex-col">
            <div className="container mx-auto px-[20px]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-[50px]">
                        <LogoMaracuya w={80} h={80}></LogoMaracuya>
                        <div className="font-semibold">
                            <h1>Доставка продуктов <span className="text-amber-300">Дубоссары</span></h1>
                            <h2>Время доставки от 20 мин</h2>
                        </div>
                    </div>
                    <p className="text-[42px]"><span className="text-red-500 font-medium">M</span>aracu<span
                        className="text-red-500 font-medium">Й</span>а</p>
                    <div className="flex items-center gap-[30px]">
                        <a className="text-[#696F7A] uppercase font-semibold rounded rounded-full px-[30px] py-[5px] bg-gray-300" href='tel: +37368762427'>Позвонить</a>
                        <a className="text-amber-300 text-[26px] font-semibold" href='tel: +37368762427'>+ (373) 68 76-24-27</a>
                    </div>
                </div>
                <ul className="flex text-[14px] justify-between uppercase font-semibold">
                    {categories.map(item => <li>{item.short}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default Header;