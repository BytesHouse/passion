import React from 'react';
import light from '../../../src/assets/images/slides/light.webp';
import dark from '../../../src/assets/images/slides/dark.webp';
import Header from "./components/Header/Header";

const Desktop = () => {
    return (
        <div className="flex flex-col gap-[15px]">
            <Header />
            <div className="container mx-auto flex items-center justify-center gap-[35px] overflow-auto p-[20px]">
                <img className="flex-1 h-[312px] rounded-[13px] shadow-[0_0_6px] shadow-amber-300" src={light}
                     alt=""/>
                <img className="flex-1 h-[312px] rounded-[13px] shadow-[0_0_6px] shadow-amber-300" src={dark}
                     alt=""/>
                <img className="flex-1 h-[312px] rounded-[13px] shadow-[0_0_6px] shadow-amber-300" src={light}
                     alt=""/>
                <img className="flex-1 h-[312px] rounded-[13px] shadow-[0_0_6px] shadow-amber-300" src={dark}
                     alt=""/>
            </div>
            <div>1</div>
        </div>
    );
};

export default Desktop;