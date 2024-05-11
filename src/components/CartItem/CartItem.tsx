import { useDispatch } from "react-redux";
import { useState } from "react";
import {
    decTotal,
    incTotal,
    removeFromCart,
} from "../../features/cart/cartSlice";
import Ruble from "../../assets/icons/Ruble/Ruble";

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
        <div className="flex justify-between mb-[10px] ml-[20px] mr-[5px] gap-[25px] border-b-[1px] border-b-[gray]">
            <div className="[&>img]:w-[270px] [&>img]:h-[270px] [&>img]:border-[1px] [&>img]:border-[solid] [&>img]:border-[black] [&>img]:rounded-[50%]">
                <img src={item.image} alt="" />
            </div>
            <div className="flex-1">
                <p>{item.name}</p>
                <div className="flex justify-between max-w-[320px] bg-[#F3F3F7] rounded-[8px] h-[1.1em]">
                    <button
                        onClick={decrement}
                        className="text-[3.5em] text-[black] bg-[#F7D22D] py-[50px] px-[20px] rounded-[8px]"
                    >
                        -
                    </button>
                    <span>{count}</span>
                    <button
                        onClick={increment}
                        className="text-[3.5em] text-[black] bg-[#F7D22D] py-[50px] px-[20px] rounded-[8px]"
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <button
                    onClick={handleRemove}
                    className="text-[3.5em] text-[black] bg-[#F7D22D] py-[50px] px-[20px] rounded-[8px]"
                >
                    &times;
                </button>
                <p className="flex items-center [&>svg]:mt-[10px]">
                    {(count * item.price).toFixed(2)} <Ruble />
                </p>
            </div>
        </div>
    );
};

export default CartItem;
