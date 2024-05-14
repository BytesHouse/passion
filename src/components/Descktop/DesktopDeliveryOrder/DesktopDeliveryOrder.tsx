import OrderForm from "../OrderForm/OrderForm";
import OrderList from "../OrderList/OrderList";

const DescktopDeliveryOrder = () => {
    return (
        <div className="container mx-auto mt-[100px] w-[80%]">
            <div className="flex font-[600] text-[17px] leading-[28px]">
                <OrderForm />
                <OrderList />
            </div>
        </div>
    );
};

export default DescktopDeliveryOrder;
