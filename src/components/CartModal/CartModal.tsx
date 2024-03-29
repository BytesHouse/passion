import cls from './CartModal.module.css';
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {decTotal, incTotal, removeFromCart} from "../../features/cart/cartSlice";
const CartModal = ({refProps}: {refProps: any}) => {
    const {cart, total} = useSelector((state: any) => state.cart);
    return (
            <div  className={cls.wrapper}>
                <div ref={refProps} className={cls.modal}>
                    <div className={cls.body}>
                        {cart?.length ? cart.map((item: any) => (
                            <CartItem key={item.id} item={item}/>
                        )) : <p className={cls.empty}>Корзина пуста</p>}
                    </div>
                    <div className={cls.footer}>
                        <div className={cls.total}>Сумма заказа: <span>{total} ₽</span></div>
                        <button className={cls.btn}>Оформить заказ</button>
                    </div>
                </div>
            </div>
    );
};

const CartItem = ({item}: {item: any}) => {
    const [count, setCount] = React.useState(1);
    const dispatch = useDispatch();
    const increment = () => {
        setCount(count + 1);
        dispatch(incTotal(item));
    };
    const decrement = () => {
        if(count > 1) {
            setCount(count - 1);
            dispatch(decTotal(item));
        }
    }
    const handleRemove = () => {
        dispatch(removeFromCart(item));
    }
    return (
        <div className={cls.item}>
            <div className={cls.image}><img src={item.image} alt=""/></div>
            <div className={cls.name}>
                <p>{item.name}</p>
                <div className={cls.count}>
                    <button onClick={decrement} className={cls.btn}>-</button>
                    <span>{count}</span>
                    <button onClick={increment} className={cls.btn}>+</button>
                </div>
            </div>
            <div className={cls.price}>
                <button onClick={handleRemove} className={cls.close}>&times;</button>
                <p>{count * item.price} ₽</p>
            </div>
        </div>
    );
}

export default CartModal;