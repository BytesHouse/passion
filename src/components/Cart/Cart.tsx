import cls from './Cart.module.css';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import CartIcon from "../../assets/icons/CartIcon/CartIcon";

interface CartProps {
    show: () => void;
}
const Cart = ({show}:CartProps) => {
    const { cart, total } = useSelector((state: RootState) => state.cart)
    const formatedPrice = Number(total ?? 0).toFixed(2)
    const length =
        cart.length <= 3
            ?
            {background: 'green'}
            :
            cart.length > 3 && cart.length <= 6
                ?
                {background: '#f7d22d', color: 'black', border: '2px solid black'}
                :
                {background: '#ef3a65'}
    return (
        <div onClick={show} className={cls.cart}>
            <CartIcon/>
            <p style={length} className={cls.count}>{cart.length ?? 0}</p>
            <p>{formatedPrice}p</p>
        </div>
    );
};

export default Cart;