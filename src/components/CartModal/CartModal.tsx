import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Ruble from "../../assets/icons/Ruble/Ruble";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";

const CartModal = ({
    refProps,
    closeCart,
    clearCart,
}: {
    refProps: any;
    closeCart: any;
    clearCart: any;
}) => {
    const { cart, total } = useSelector((state: any) => state.cart);
    const cartLocal = JSON.parse(localStorage.getItem("cart") || cart);
    const cartTotal = +(localStorage.getItem("total") || total);

    const size = useWindowSize();

    return (
        <>
            {size.width! < 1024 ? (
                <>
                    {/* <Mobile /> */}
                    <div className="fixed top-0 bottom-0 left-0 right-0 pt-[5em] px-[2em] md:px-[5em] lg:px-[10em] overflow-hidden bg-black/[.4] z-50">
                        {/* закрывает модалку при клике вне компонента*/}
                        <div ref={refProps} className="">
                            <div className="flex justify-between items-center h-[3em] bg-[#f7d22d] px-[2em] mx-[10px] rounded-t-[20px] text-[1.5em] font-[700]">
                                <p>Корзина</p>
                                <div onClick={closeCart}>
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </div>
                            </div>
                            <div className="flex flex-col bg-white border-[4px] border-[solid] border-[#f7d22d] mx-[10px] mt-[-1px] px-[15px] rounded-b-[20px]">
                                <div className="max-h-[50vh] my-[10px] overflow-x-hidden">
                                    {cart.length || cartLocal.length ? (
                                        cartLocal.map((item: any) => (
                                            <CartItem
                                                key={item.id}
                                                item={item}
                                            />
                                        ))
                                    ) : (
                                        <p className="text-[48px] text-center p-[25px] border-b-[1px]">
                                            Корзина пуста
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col items-end gap-[35px] p-[20px]">
                                    <div className="flex justify-between text-[36px] font-[400] max-w-full gap-12">
                                        <p className="text-end">
                                            Сумма заказа:
                                        </p>
                                        <p className="flex items-center [&>svg]:w-[40px] [&>svg]:h-[42px] [&>svg]:mt-[15px]">
                                            {total.toFixed(2)} <Ruble />
                                        </p>
                                    </div>
                                    {cart?.length ? (
                                        <div className="flex justify-end m-[10px] gap-[20px] font-[700] text-[24px]">
                                            <button
                                                onClick={clearCart}
                                                className="p-[15px] bg-[#F7D22D] rounded-[20px] text-center w-[200px]"
                                            >
                                                Очистить корзину
                                            </button>
                                            <Link
                                                to="/order"
                                                className="p-[15px] bg-[#F7D22D] rounded-[20px] text-center w-[200px]"
                                            >
                                                Оформить заказ
                                            </Link>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={closeCart}
                                            className="font-[700] text-[24px] p-[15px] bg-[#F7D22D] rounded-[20px] text-center w-[200px]"
                                        >
                                            Закрыть корзину
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* Desktop  */}
                    <div className="fixed top-0 bottom-0 left-0 right-0 pt-[10em] px-[1em] md:px-[5em] lg:px-[10em] overflow-hidden bg-black/[.4] z-[999]">
                        {/* закрывает модалку при клике вне компонента*/}
                        <div
                            ref={refProps}
                            className="fixed bottom-[150px] right-[50px] w-[500px] max-h-[800px]"
                        >
                            <div className="flex justify-between items-center h-[2.5em] bg-[#f7d22d] px-[1.5em] mx-[10px] rounded-t-[20px] text-[20px] font-[600]">
                                <p>Корзина</p>
                                <div onClick={closeCart}>
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </div>
                            </div>
                            <div className="relative flex flex-col bg-white border-[4px] border-[solid] border-[#f7d22d] mx-[10px] mt-[-1px] px-[15px] rounded-b-[20px]">
                                <>
                                    {/* верхние закругления */}
                                    <div className="absolute top-0 left-0 w-[15px] h-[15px] bg-[#f7d22d] z-0"></div>
                                    <div className="absolute top-0 left-0 w-[25px] h-[25px] bg-white rounded-[20px] z-1"></div>
                                    <div className="absolute top-0 right-0 w-[15px] h-[15px] bg-[#f7d22d] z-0"></div>
                                    <div className="absolute top-0 right-0 w-[25px] h-[25px] bg-white rounded-[20px] z-1"></div>
                                </>
                                <div className="max-h-[520px] w-full overflow-auto py-[10px] overflow-x-hidden z-10">
                                    {cartLocal.length ? (
                                        cartLocal.map((item: any) => (
                                            <CartItem
                                                key={item.id}
                                                item={item}
                                            />
                                        ))
                                    ) : (
                                        <p className="text-[3.5em] text-center px-auto py-[10vh] border-b-[1px]">
                                            Корзина пуста
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col items-end gap-[25px]">
                                    {cartLocal.length ? (
                                        <div className="flex justify-between items-center mt-[10px] px-[2vw] text-[18px] font-[600] w-full gap-12">
                                            <p className="text-end">
                                                Сумма заказа:
                                            </p>
                                            <p className="flex items-center text-[24px] font-[800] [&>svg]:w-[20px] [&>svg]:h-[22px] [&>svg]:mt-[8px] [&>svg]:fill-[#F7D22D] text-[#F7D22D] ">
                                                {cartTotal.toFixed(2)} <Ruble />
                                            </p>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                    {cartLocal.length ? (
                                        <div className="flex justify-end my-[20px] gap-[1vw] font-[600] text-[15px]">
                                            <button
                                                onClick={clearCart}
                                                className="p-[15px] bg-[#F7D22D] rounded-[20px] text-center min-w-[150px] max-w-[200px]"
                                            >
                                                Очистить корзину
                                            </button>
                                            <Link
                                                to="/order"
                                                className="p-[15px] bg-[#F7D22D] rounded-[20px] text-center min-w-[150px] max-w-[200px]"
                                            >
                                                Оформить заказ
                                            </Link>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={closeCart}
                                            className="font-[600] text-[15px] my-[20px] p-[15px] bg-[#F7D22D] rounded-[20px] text-center"
                                        >
                                            Закрыть корзину
                                        </button>
                                    )}
                                </div>
                                <div className="absolute w-[23px] h-[23px] bg-white bottom-[-7px] right-[80px] rotate-45"></div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default CartModal;
