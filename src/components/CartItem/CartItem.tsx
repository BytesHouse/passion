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
                    <div className="flex mb-[10px] mx-[20px] h-[200px] gap-[25px] border-b-[1px] border-b-[gray]">
                        <div className="flex justify-center items-center w-[200px] [&>img]:w-[150px] [&>img]:h-[150px] [&>img]:rounded-[50px]">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="flex flex-col justify-between my-[15px] w-[400px] text-[24px]">
                            <p
                                className="overflow-hidden h-[100px]"
                                title={item.name}
                            >
                                {item.name}
                            </p>
                            <div className="flex justify-between items-center w-[200px] bg-[#F3F3F7] rounded-[8px]">
                                <button
                                    onClick={decrement}
                                    className="text-[24px] text-[black] bg-[#F7D22D] py-[10px] px-[20px] rounded-[8px]"

                                >
                                    -
                                </button>
                                <span>{count}</span>
                                <button
                                    onClick={increment}
                                    className="text-[24px] text-[black] bg-[#F7D22D] py-[10px] px-[20px] rounded-[8px]"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center max-w-[100px] min-w-[80px]">
                            <button
                                onClick={handleRemove}
                                className="flex items-center justify-center text-[48px] text-[black] bg-[#F7D22D] m-[15px] w-[50px] h-[50px] rounded-[8px]"
                            >
                                &times;
                            </button>
                            <p className="flex items-center text-[20px] font-[600] mb-[20px] [&>svg]:w-[15px] [&>svg]:h-[15px] [&>svg]:mt-[5px]">
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
