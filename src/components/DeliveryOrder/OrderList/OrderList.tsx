import { useSelector } from "react-redux";
import Ruble from "../../../assets/icons/Ruble/Ruble";
import { RootState } from "../../../store/store";

const OrderList = () => {
    const order = JSON.parse(localStorage.getItem("cart") || "");
    const { total, cart } = useSelector((state: RootState) => state.cart);
    const deliveryPrice = cart.length <= 3
    ? 60
    : cart.length > 3 && cart.length <= 6
    ? 50
    : 35  
    return (
        <>
            <div className="flex-1">
                <div>
                    <h2 className="font-[800] text-[1.5em] lg:text-[16px] leading-[28px] text-[#F7D22D] my-[15px]">
                        Состов заказа:
                    </h2>
                    <ul className="border shadow-md rounded-lg mt-[1.5em] lg:mt-[0] p-[20px] h-[60vh] overflow-auto">
                        {order.map((item: any) => (
                            <>
                            <li
                                className="shadow-md shadow-yellow-50 p-[10px] grid items-center grid-cols-[2fr_1fr_0.5fr] gap-[15px]"
                                key={item.id}
                            >
                                        <p className="flex-1 max-w-[420px]">{item.name}</p>
                                        <p className="flex gap-[5px] justify-start items-center text-[0.8em]">
                                            {item.price} x {item.count}шт.
                                        </p>
                                        <p className="flex justify-end items-center gap-[5px] text-[0.8em]">{(item.price * item.count).toFixed(2)}<Ruble /></p>
                            </li>
                            <hr className="mx-[10px" />
                            </>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-[5px] mt-[20px]">
                        <div className="flex items-center justify-between px-[22px]">
                            <p>Сумма заказа:</p>
                            <p className="flex items-center text-[1.1em]">
                                {total.toFixed(2)} <Ruble />
                            </p>
                        </div>
                        <div className="flex items-center justify-between px-[22px]">
                            <p>Доставка:</p>
                            <p className="flex items-center text-[1.1em]">
                                {deliveryPrice.toFixed(2)} <Ruble />
                            </p>
                        </div>
                        <div className="flex justify-between px-[22px] items-center">
                            <p>ИТОГО:</p>
                            <p className="flex items-center text-[1.5em]">
                                {(total + deliveryPrice).toFixed(2)}<Ruble />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderList;
