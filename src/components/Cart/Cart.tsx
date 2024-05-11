import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CartIcon from "../../assets/icons/CartIcon/CartIcon";
import Ruble from "../../assets/icons/Ruble/Ruble";
import { useState } from "react";
import CartModal from "../CartModal/CartModal";
import { useClickAway } from "@uidotdev/usehooks";

const Cart = () => {
    const { cart, total } = useSelector((state: RootState) => state.cart);
    const [cartShow, setCartShow] = useState(false);

    const handleClickCartShow = () => setCartShow(!cartShow);

    const ref: any = useClickAway(() => {
        handleClickCartShow();
    });

    const handleClearkCart = () => {
        localStorage.setItem("cart", "[]");
        handleClickCartShow();
    };

    const formatedPrice = Number(total ?? 0).toFixed(2);
    const length =
        cart.length <= 3
            ? { background: "#ef3a65" }
            : cart.length > 3 && cart.length <= 6
            ? {
                  background: "#f7d22d",
                  color: "black",
                  border: "2px solid black",
              }
            : { background: "green" };

    return (
        <>
            {cart.length && (
                <div
                    onClick={handleClickCartShow}
                    className="fixed flex justify-between items-center gap-[10px] text-[2.5em] cursor-pointer right-[20px] bottom-[20px] bg-[#F7D22D] p-[20px] rounded-[8px] shadow-[1px_1px_1px_3px_rgba(0,0,0,0.25)]"
                >
                    <CartIcon />
                    <p
                        style={length}
                        className="flex justify-center items-center w-[70px] h-[70px] text-white text-[1.3em] rounded-[50%] bg-red-600 py-[10px] absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%]"
                    >
                        {cart.length ?? 0}
                    </p>
                    <p className="flex justify-evenly items-center [&>svg]mt-[10px]">
                        {formatedPrice} <Ruble />
                    </p>
                </div>
            )}
            {cartShow && (
                <CartModal
                    refProps={ref}
                    closeCart={handleClickCartShow}
                    clearCart={handleClearkCart}
                />
            )}
        </>
    );
};

export default Cart;
