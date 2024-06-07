import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    decTotal,
    incTotal,
    load,
    removeFromCart,
} from "../../features/cart/cartSlice";
import { RootState } from "../../store/store";
import Ruble from "../../assets/icons/Ruble/Ruble";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

interface ProductCardProps {
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        image: string;
    };
}
const ProductCard = ({ product }: ProductCardProps) => {
    const { id, name, description, price, image } = product;
    const dispatch = useDispatch();
    const { cart } = useSelector((state: RootState) => state.cart);
    const cartLocal = JSON.parse(localStorage.getItem("cart") || "") || cart;

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, count: 1 }));
    };

    useEffect(() => {
        if (localStorage.getItem("cart") === null) {
            localStorage.setItem("cart", JSON.stringify([]));
        } else {
            dispatch(load(JSON.parse(localStorage.getItem("cart") || "[]")));
        }
    }, []);

    const dis = cartLocal.find((item: any) => item.id === product.id);

    const countInCart = JSON.parse(localStorage.getItem("cart") || "").find(
        (item: any) => item.id === product.id
    );

    const increment = () => {
        dispatch(incTotal(dis));
        console.log(dis.id);
    };

    const decrement = () => {
        if (countInCart.count > 1) {
            dispatch(decTotal(dis));
        } else if (countInCart.count === 1) {
            const count = countInCart.count;
            const item = dis;
            dispatch(removeFromCart({ item, count }));
        }
    };

    const size = useWindowSize();

    return (
        <>
            {size.width! < 1024 ? (
                <div>
                    {/* MObile */}
                    <li className="border-b-[1px] border-b-[rgba(128,128,128,0.48)] px-[20px]">
                        <div className="flex gap-[25px]">
                            <div className="flex flex-col justify-center items-center gap-[15px]">
                                <img
                                    className="w-[280px] h-[280px] rounded-full border-[rgba(128,128,128,0.2)]"
                                    src={image}
                                    alt="фотография"
                                />
                                <p className="flex justify-center items-center text-[4.5em] font-bold w-[250px]">
                                    {(Math.round(100 * price) / 100).toFixed(2)}
                                    <Ruble />
                                </p>
                            </div>
                            <div className="flex flex-col gap-[30px]">
                                <p className="text-[2.5em] font-[800] text-black">
                                    {name}
                                </p>
                                <p className="text-[1.8em] font-[500] text-[#686466]">
                                    {description}
                                </p>
                                <button
                                    disabled={Boolean(dis)}
                                    onClick={handleAddToCart}
                                    className="text-[2.8em] py-[15px] px-[55px] bg-[#f7d22d] self-start uppercase rounded-[8px] text-[#473e43] disabled:bg-[#d3d3d3]"
                                    type="button"
                                >
                                    {dis ? "Добавлено" : "Добавить"}
                                </button>
                            </div>
                        </div>
                    </li>
                </div>
            ) : (
                <div>
                    {/* Desktop */}
                    <li className=" border-b-[rgba(128,128,128,0.48)] shadow-[0px_4px_28px_0px_#00000014] mx-auto px-[20px] w-[300px] mb-[15px]">
                        <div className="relative flex flex-col justify-center items-center gap-[15px]">
                            <img
                                className="w-[250px] h-[200px] mx-[5px] my-[15px] rounded-[20px] border-[rgba(128,128,128,0.2)]"
                                src={image}
                                alt="фотография"
                            />
                            <p
                                className="text-[24px]] h-[50px] text-center font-[800] text-black overflow-hidden"
                                title={name}
                            >
                                {name}
                            </p>
                            <button
                                disabled={Boolean(dis)}
                                onClick={handleAddToCart}
                                className=" relativetext-[20px] font-[700] my-[15px] mx-auto py-[15px] px-auto w-[80%] bg-[#f7d22d] self-start uppercase rounded-[20px] text-[#473e43] disabled:bg-[#d3d3d3]"
                                type="button"
                            >
                                {dis ? (
                                    <div className="flex justify-center px-[25px]">
                                        <p>{countInCart.count}</p>
                                    </div>
                                ) : (
                                    <p className="flex justify-center w-full items-center mx-auto [&>svg]:w-[20px] [&>svg]:h-[20px] [&>svg]:pt-[2px]">
                                        {(
                                            Math.round(100 * price) / 100
                                        ).toFixed(2)}
                                        <Ruble />
                                    </p>
                                )}
                            </button>
                            {dis && (
                                <div className="absolute bottom-[25px] px-[20px] text-[25px] flex justify-between w-[200px] z-50">
                                    <button
                                        className="pointer"
                                        onClick={decrement}
                                    >
                                        -
                                    </button>
                                    <button
                                        className="pointer"
                                        onClick={increment}
                                    >
                                        +
                                    </button>
                                </div>
                            )}
                        </div>
                    </li>
                </div>
            )}
        </>
    );
};

export default ProductCard;
