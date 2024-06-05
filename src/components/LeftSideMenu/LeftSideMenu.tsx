import {FormEvent, useState} from "react";
import LogoMaracuya from "../../assets/icons/LogoMaracuya/LogoMaracuya";
import FormSignIn from "../FormSignIn/FormSignIn";

const LeftSideMenu = ({isShow,handleClickBack }: {isShow: any, handleClickBack: any}) => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <div className={`${isShow ? "right-0" : "right-[100%]" } absolute top-0  w-full h-screen bg-white flex flex-col justify-between p-14`}>
            <div>
                <button onClick={handleClickBack} className="bg-gray-300 px-10 py-5 rounded-full text-[1.7rem]">Назад</button>
            </div>
            <FormSignIn handleSubmit={handleSubmit} />
            <div className="self-center mb-[150px] pb-[50px]">
                <LogoMaracuya/>
            </div>
        </div>
    );
};

export default LeftSideMenu;