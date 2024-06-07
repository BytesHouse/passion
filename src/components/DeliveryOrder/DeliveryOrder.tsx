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
