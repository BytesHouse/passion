import React from 'react';
import light from '../../../src/assets/images/slides/light.webp';
import dark from '../../../src/assets/images/slides/dark.webp';
import cls from './Desktop.module.css';

const Desktop = () => {
    return (
        <div>
            <div className={cls.banner}>
                <img src={light} alt=""/>
                <img src={dark} alt=""/>
            </div>
        </div>
    );
};

export default Desktop;