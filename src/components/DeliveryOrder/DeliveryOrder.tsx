import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OrderForm from "./OrderForm/OrderForm";
import OrderList from "./OrderList/OrderList";

const DeliveryOrder = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto mt-[2.5em] w-[80%]">
                <div className="flex font-[600] text-[17px] leading-[28px]">
                    <OrderForm />
                    <OrderList />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DeliveryOrder;
