import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OrderForm from "./OrderForm/OrderForm";
import OrderList from "./OrderList/OrderList";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import ArrowLeft from "../../assets/icons/ArrowLeft/ArrowLeft";

const DeliveryOrder = () => {
    const { cart } = useSelector((state: any) => state.cart);
    const cartLocal = JSON.parse(localStorage.getItem("cart") || cart);
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
            {cart.length || cartLocal.length ? (
                <div className="lg:container mx-auto px-[20px] mt-[1.2em] w-full lg:w-[80%] flex flex-col-reverse lg:flex-row gap-[30px] font-[600] text-[2.5em] lg:text-[17px] lg:leading-[28px]">
                    <OrderForm />
                    <OrderList />
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center mx-auto my-[100px] gap-[20px] ">
                    <p className="text-[24px]">Корзина пуста</p>
                    <Link
                        to={"/"}
                        className="border px-[150px] py-[30px] flex gap-[15px] items-center"
                    >
                        <ArrowLeft />
                        <span>Назад</span>
                    </Link>
                </div>
            )}
            <Footer />
        </>
    );
};

export default DeliveryOrder;
