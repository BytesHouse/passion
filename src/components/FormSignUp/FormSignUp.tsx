import React from 'react';

const FormSignUp = ({handleSubmit}: any) => {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[35px]">
            <input placeholder="Введите ваш email" className=" h-[155px] border px-10 py-5 rounded-full text-3xl"
                   type="email"/>
            <input placeholder="Введите ваш пароль" className="h-[155px] border px-10 py-5 rounded-full text-3xl"
                   type="password"/>
            <input value="Зарегистрироваться" className="bg-[var(--yellow-main)] px-10 py-14 rounded-full text-5xl" type="submit"/>
        </form>
    );
};

export default FormSignUp;