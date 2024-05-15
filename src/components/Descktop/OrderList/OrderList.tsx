import { useSelector } from "react-redux";
import Ruble from "../../../assets/icons/Ruble/Ruble";
import { RootState } from "../../../store/store";

const OrderList = () => {
    const order = JSON.parse(localStorage.getItem("cart") || "");
    const { total } = useSelector((state: RootState) => state.cart);
    return (
        <>
            <div className="ml-[42px] w-[40%]">
                <div>
                    <h2 className="font-[800] text-[16px] leading-[28px] text-[#F7D22D] my-[15px]">
                        Состов заказа:
                    </h2>
                    <div className="bg-red-50 h-[60vh] overflow-auto">
                        {order.map((item: any) => (
                            <div
                                className="flex flex-col gap-[30px]"
                                key={item.id}
                            >
                                <div className="flex justify-between">
                                    <div className="flex flex-col">
                                        <p>{item.name}</p>
                                        <p className="flex gap-[10px]">
                                            {item.price} <Ruble /> {item.count}{" "}
                                            шт.
                                        </p>
                                    </div>
                                    <div>
                                        <p>{item.price * item.count}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-[5px] mt-[20px]">
                        <div className="flex justify-between px-[22px]">
                            <p>Сумма заказа:</p>
                            <p className="flex">
                                {total} <Ruble />
                            </p>
                        </div>
                        <div className="flex justify-between px-[22px]">
                            <p>Доставка:</p>
                            <p className="flex">
                                55 <Ruble />
                            </p>
                        </div>
                        <div className="flex justify-between px-[22px]">
                            <p>ИТОГО:</p>
                            <p className="flex">
                                total + 55 <Ruble />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderList;
