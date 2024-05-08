import cls from "./CartModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import {
    decTotal,
    incTotal,
    removeFromCart,
} from "../../features/cart/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Ruble from "../../assets/icons/Ruble/Ruble";

const CartModal = ({ refProps, show }: { refProps: any; show: any }) => {
    const { cart, total } = useSelector((state: any) => state.cart);
    const handleClick = (e: any) => {
        show(false);
    };
    return (
        // <div className={cls.wrapper}>
        //     <div className={cls.border}>
        //         <p>Корзина</p> <FontAwesomeIcon icon={faXTwitter} />
        //     </div>
        //     <div ref={refProps} className={cls.modal}>
        //         <div className={cls.body}>
        //             {cart?.length ? (
        //                 cart.map((item: any) => (
        //                     <CartItem key={item.id} item={item} />
        //                 ))
        //             ) : (
        //                 <p className={cls.empty}>Корзина пуста</p>
        //             )}
        //         </div>
        //         <div className={cls.footer}>
        //             <div className={cls.total}>
        //                 Сумма заказа:{" "}
        //                 <p className={cls.totalPrice}>
        //                     {total.toFixed(2)} <Ruble />
        //                 </p>
        //             </div>
        //             <a
        //                 href="#contacts"
        //                 onClick={handleClick}
        //                 className={cls.btn}
        //             >
        //                 Оформить заказ
        //             </a>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className="absolute">asdasdasd</div>
        </>
    );
};

const CartItem = ({ item }: { item: any }) => {
    const [count, setCount] = useState(+item.count);
    const dispatch = useDispatch();
    const increment = () => {
        setCount(count + 1);
        dispatch(incTotal(item));
    };
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
            dispatch(decTotal(item));
        }
    };
    const handleRemove = () => {
        dispatch(removeFromCart({ item, count }));
    };
    return (
        // <div className={cls.item}>
        //     <div className={cls.image}>
        //         <img src={item.image} alt="" />
        //     </div>
        //     <div className={cls.name}>
        //         <p>{item.name}</p>
        //         <div className={cls.count}>
        //             <button onClick={decrement} className={cls.btn}>
        //                 -
        //             </button>
        //             <span>{count}</span>
        //             <button onClick={increment} className={cls.btn}>
        //                 +
        //             </button>
        //         </div>
        //     </div>
        //     <div className={cls.price}>
        //         <button onClick={handleRemove} className={cls.close}>
        //             &times;
        //         </button>
        //         <p className={cls.itemPrice}>
        //             {(count * item.price).toFixed(2)} <Ruble />
        //         </p>
        //     </div>
        // </div>
        <>
            <div className="absolute">asdasdasd</div>
        </>
    );
};

export default CartModal;
