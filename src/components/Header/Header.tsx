import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";
import cls from './Header.module.css';

const Header = () => {
    return (
        <div className={cls.header}>
            <div className={cls.container}>
                <Logo/>
                <p>Maracuya</p>
                <Burger/>
            </div>
        </div>
    );
};

export default Header;