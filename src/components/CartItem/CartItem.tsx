import { useDispatch } from "react-redux";
import { useState } from "react";
import {
    decTotal,
    incTotal,
    removeFromCart,
} from "../../features/cart/cartSlice";
import Ruble from "../../assets/icons/Ruble/Ruble";
import { useWindowSize } from "@uidotdev/usehooks";

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
        } else if (count === 1) {
            dispatch(removeFromCart({ item, count }));
        }
    };

    const handleRemove = () => {
        dispatch(removeFromCart({ item, count }));
        console.log({ item, count });
    };

    const size = useWindowSize();

    return (
        <>
            {size.width! < 1024 ? (
                <>
                    {/* Mobile  */}
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
                </>
            ) : (
                <>
                    {/* Desktop */}
                    <div className="flex justify-between w-[90%] h-[100px] m-[24px] border-b-[1px]">
                        <div className="[&>img]:w-[70px] [&>img]:h-[70px] [&>img]:rounded-[20px] w-[70px]">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="flex flex-col gap-14px">
                            <div className="flex justify-between ml-[10px] gap-[10px] font-[700] text-[15px] w-full">
                                <p
                                    className="overflow-hidden w-[250px] h-[50px]"
                                    title={item.name}
                                >
                                    {item.name}
                                </p>
                                <p className="flex justify-end">
                                    <button
                                        onClick={handleRemove}
                                        className="text-[15px] text-[black] w-[37px] h-[37px] bg-[#F7D22D] p-auto rounded-full"
                                    >
                                        &times;
                                    </button>
                                </p>
                            </div>
                            <div className="flex justify-between w-full">
                                <div className="flex justify-between items-center ml-[10px] w-[120px] h-[32px] px-[15px] py-[8px] font-[400] text-[24px] bg-[#F3F3F7] rounded-[8px]">
                                    <button onClick={decrement}>-</button>
                                    <span>{count}</span>
                                    <button onClick={increment}>+</button>
                                </div>

                                <p className="flex justify-end items-center font-[700] text-[20px] [&>svg]:mt-[8px] [&>svg]:min-w-[20px] [&>svg]:min-h-[20px] [&>svg]:w-[20px] [&>svg]:h-[20px]">
                                    {(count * item.price).toFixed(2)} <Ruble />
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default CartItem;
