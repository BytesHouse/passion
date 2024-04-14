import React from 'react';
import light from "../../../../assets/images/slides/light.webp";
import dark from "../../../../assets/images/slides/dark.webp";

const Slider = () => {
    return (
        <div className="container mx-auto flex items-center justify-center gap-[35px] overflow-auto p-[20px]">
            <img className="flex-1 h-[312px] rounded-[13px] shadow-[0_0_30px] animate-colorShift" src={light}
                 alt=""/>
            <img className="flex-1 h-[312px] rounded-[13px] shadow-[0_0_30px] animate-colorShift" src={dark}
                 alt=""/>
            <img className="flex-1 h-[312px] rounded-[13px] shadow-[0_0_30px] animate-colorShift" src={light}
                 alt=""/>
            <img className="flex-1 h-[312px] rounded-[13px] shadow-[0_0_30px] animate-colorShift" src={dark}
                 alt=""/>
        </div>
    );
};

export default Slider;