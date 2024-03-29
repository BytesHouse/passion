import cls from './Cart.module.css';

interface CartProps {
    show: () => void;
}
const Cart = ({show}:CartProps) => {
    return (
        <div onClick={show} className={cls.cart}>
            <p>Корзина</p>
            <p className={cls.count}>1</p>
        </div>
    );
};

export default Cart;