import Ruble from "../../../assets/icons/Ruble/Ruble";

const OrderList = () => {
    const order = JSON.parse(localStorage.getItem("cart") || "");
    return (
        <>
            <div className="ml-[42px]">
                <div>
                    <h2 className="font-[800] text-[16px] leading-[28px] text-[#F7D22D] my-[15px]">
                        Состов заказа:
                    </h2>
                    <div>
                        {order.map((item: any) => (
                            <div
                                className="flex flex-col gap-[30px]"
                                key={item.id}
                            >
                                <div>{item.name}</div>
                                <div>
                                    {item.price} {Ruble}
                                    {item.count}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderList;
