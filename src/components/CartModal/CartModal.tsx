import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Ruble from "../../assets/icons/Ruble/Ruble";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

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

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 pt-[10em] px-[1em] md:px-[5em] lg:px-[10em] overflow-scroll bg-black/[.4]">
            <div ref={refProps}>
                {/* закрывает модалку при клике вне компонента*/}
                <div className="flex justify-between items-center h-[3em] bg-[#f7d22d] px-[2em] mx-[10px] rounded-t-[20px] text-[1.5em] font-[700]">
                    <p>Корзина</p>
                    <div onClick={closeCart}>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </div>
                </div>
                <div className="flex flex-col bg-white border-[4px] border-[solid] border-[#f7d22d] mx-[10px] mt-[-1px] px-[15px] rounded-b-[20px]">
                    <div className="max-h-[65vh] overflow-auto py-[10px]">
                        {cart?.length ? (
                            cart.map((item: any) => (
                                <CartItem key={item.id} item={item} />
                            ))
                        ) : (
                            <p className="text-[5.5em] text-center p-[1.5em] border-b-[1px]">
                                Корзина пуста
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col items-end gap-[35px] p-[20px]">
                        <div className="flex justify-between text-[3.5em] font-[400] max-w-full gap-12">
                            <p className="text-end">Сумма заказа:</p>
                            <p className="flex items-center [&>svg]:w-[40px] [&>svg]:h-[42px] [&>svg]:mt-[15px]">
                                {total.toFixed(2)} <Ruble />
                            </p>
                        </div>
                        {cart?.length ? (
                            <div className="flex justify-end m-[10px] gap-[1.1em] font-[700] text-[3em]">
                                <button
                                    onClick={clearCart}
                                    className="p-[15px] bg-[#F7D22D] rounded-[20px] text-center"
                                >
                                    Очистить корзину
                                </button>
                                <Link
                                    to="/order"
                                    className="p-[15px] bg-[#F7D22D] rounded-[20px] text-center"
                                >
                                    Оформить заказ
                                </Link>
                            </div>
                        ) : (
                            <button
                                onClick={closeCart}
                                className="font-[700] text-[3em] p-[15px] bg-[#F7D22D] rounded-[20px] text-center"
                            >
                                Закрыть корзину
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
