import cls from './Cart.module.css';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import CartIcon from "../../assets/icons/CartIcon";

interface CartProps {
    show: () => void;
}
const Cart = ({show}:CartProps) => {
    const { cart, total } = useSelector((state: RootState) => state.cart)
    const formatedPrice = Number(total ?? 0).toFixed(2)
    return (
        <div onClick={show} className={cls.cart}>
            <CartIcon/>
            <p className={cls.count}>{cart.length ?? 0}</p>
            <p>{formatedPrice}p</p>
        </div>
    );
};

export default Cart;