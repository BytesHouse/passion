import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OrderForm from "./OrderForm/OrderForm";
import OrderList from "./OrderList/OrderList";
import { useDispatch } from "react-redux";
import { load } from "../../features/cart/cartSlice";

const DeliveryOrder = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("cart") === null) {
            localStorage.setItem("cart", JSON.stringify([]));
        } else {
            dispatch(load(JSON.parse(localStorage.getItem("cart") || "[]")));
        }
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Header />
            <div className="lg:container mx-auto px-[20px] mt-[1.2em] w-full lg:w-[80%] flex flex-col-reverse lg:flex-row gap-[30px] font-[600] text-[2.5em] lg:text-[17px] lg:leading-[28px]">
                    <OrderForm />
                    <OrderList />
            </div>
            <Footer />
        </>
    );
};

export default DeliveryOrder;
