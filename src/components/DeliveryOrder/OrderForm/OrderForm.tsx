import { useEffect, useRef, useState } from "react";
import { generateUniqueId } from "./helpers/generateUniqueId";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { getFormatedString } from "./helpers/getFormatedString";
import { sendMessage } from "../../../api/telegram";
import { clearCart } from "../../../features/cart/cartSlice";
import emailjs from "@emailjs/browser";
import OrderPay from "../OrderPay/OrderPay";
import Ruble from "../../../assets/icons/Ruble/Ruble";
import ArrowRight from "../../../assets/icons/ArrowRight/ArrowRight";
import ArrowLeft from "../../../assets/icons/ArrowLeft/ArrowLeft";
import { Link } from "react-router-dom";

const OrderForm = () => {
    const form = useRef<any>(null);
    const { cart, total } = useSelector((state: RootState) => state.cart);

    const [delivery, setDelivery] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        cart: "",
        id: "",
        message: "",
    });

    const dispatch = useDispatch();
    const totalWithDelivery = total + delivery;

    useEffect(() => {
        const tmp = cart.map((item: any) => {
            return {
                [item.name]: `${item.count}шт. ${Number(
                    item.price * item.count
                ).toFixed(2)}руб.`,
            };
        });
        setFormData({ ...formData, cart: JSON.stringify(tmp) });
        // eslint-disable-next-line
    }, [cart]);

    useEffect(() => {
        setDelivery(
            cart.length <= 3
                ? 60
                : cart.length > 3 && cart.length <= 6
                ? 50
                : 35
        );
    }, [cart]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({
            ...errors,
            [e.target.name]: "",
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const { name, phone, email, address, cart } = formData;

        if (!name.trim()) {
            setErrors({ ...errors, name: "Введите имя" });
            return;
        }
        if (!phone.trim()) {
            setErrors({ ...errors, phone: "Введите телефон" });
            return;
        }
        if (!email.trim()) {
            setErrors({ ...errors, email: "Введите почту" });
            return;
        }
        if (!address.trim()) {
            setErrors({ ...errors, address: "Введите адрес" });
            return;
        }

        // Отправка сообщения
        try {
            const id = generateUniqueId(name).toUpperCase();
            localStorage.setItem("id", id);
            const message = `Новый заказ:\n---------------------\nid: ${id}\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email}\n Адрес: ${address}\n---------------------\n Корзина: \n${getFormatedString(
                cart
            )}\n---------------------\n Сумма: ${total.toFixed(
                2
            )} ₽\n Доставка: ${delivery} ₽\n Итого: ${totalWithDelivery.toFixed(
                2
            )} ₽`;
            setIsLoading(true);
            setFormData({
                ...formData,
                id,
                message: `${getFormatedString(cart)}
                \n Сумма: ${total.toFixed(2)} ₽
                `,
            });
            await sendMessage(message);
            await emailjs.sendForm(
                "service_s5ds6nv",
                "template_flowqo8",
                form.current,
                {
                    publicKey: "THEiU4AMswjhRFp5i",
                }
            );
            alert("Заказ оформлен!");
            dispatch(clearCart());
            console.log(message);
        } catch (error) {
            // console.error('Error while sending message:', error);
            setErrors({ ...errors, name: "Ошибка при отправке сообщения" });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="flex-1">
                <h2 className="font-[800] text-[1.5em] lg:text-[32px] leading-[39px] text-[#F7D22D] mb-[15px]">
                    Заказ на доставку:
                </h2>

                <form ref={form} onSubmit={handleSubmit}>
                    <input
                        id="id"
                        name="id"
                        type="text"
                        hidden
                        value={formData.id}
                    />
                    <input
                        id="message"
                        name="message"
                        type="text"
                        hidden
                        value={formData.message}
                    />
                    <div className="relative flex flex-col text gap-[15px]">
                        <div className="flex flex-col lg:flex-row justify-between">
                            <label htmlFor="name">Имя</label>
                            <input
                                className="lg:h-[48px] lg:max-w-[460px] w-full py-[10px] pl-[19px] border-[1.5px] border-[#E2E2E9] rounded-[7px]"
                                placeholder="Имя"
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && (
                                <span className="absolute right-10 top-2.5 text-[#F7D22D] text-[15px] font-[700]">
                                    {errors.name}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col lg:flex-row relative justify-between">
                            <label htmlFor="phone">Телефон</label>
                            <input
                                className="lg:h-[48px] lg:max-w-[460px] w-full py-[10px] pl-[19px] border-[1.5px] border-[#E2E2E9] rounded-[7px]"
                                placeholder="Orange, Moldcell, IDC"
                                id="phone"
                                name="phone"
                                type="text"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && (
                                <span className="absolute right-10 top-2.5 text-[#F7D22D] text-[15px] font-[700]">
                                    {errors.phone}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col lg:flex-row relative justify-between">
                            <label htmlFor="email">Электронный адрес</label>
                            <input
                                className="lg:h-[48px] lg:max-w-[460px] w-full py-[10px] pl-[19px] border-[1.5px] border-[#E2E2E9] rounded-[7px]"
                                placeholder="Ваш email"
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <span className="absolute right-10 top-2.5 text-[#F7D22D] text-[15px] font-[700]">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col lg:flex-row relative justify-between">
                            <label htmlFor="address">Адрес</label>
                            <input
                                className="lg:h-[120px] lg:max-w-[460px] w-full py-[10px] pl-[19px] border-[1.5px] border-[#E2E2E9] rounded-[7px]"
                                placeholder="ул. Ленина д. 101, кв. 4"
                                id="address"
                                name="address"
                                type="text"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            {errors.address && (
                                <span className="absolute right-10 top-[35%] text-[#F7D22D] text-[15px] font-[700]">
                                    {errors.address}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between">
                            <label htmlFor="address">Комментарий</label>
                            <input
                                className="lg:h-[48px] lg:max-w-[460px] w-full py-[10px] pl-[19px] border-[1.5px] border-[#E2E2E9] rounded-[7px]"
                                placeholder="Побыстрее пожалуйста..."
                                id="time"
                                name="time"
                                type="text"
                                value=""
                                onChange={handleChange}
                            />
                        </div>

                        <OrderPay />

                        <div className="flex justify-between items-center">
                            <Link to={'/'} className="border px-[150px] py-[30px] flex gap-[15px] items-center"><ArrowLeft /><span>Назад</span></Link>
                            <button
                                type="submit"
                                className="flex justify-center items-center h-[120px] lg:h-[60px] w-[420px] lg:w-[300px] bg-[#F7D22D] rounded-[8px] text-[#231F20] text-[30px] lg:text-[15px] font-[800]"
                                disabled={isLoading}
                            >
                                {isLoading
                                    ? "Отправка..."
                                    // : `Оформить заказ на ${totalWithDelivery}`}
                                    : `Оформить заказ`}
                                {!isLoading && (
                                    <div className="flex justify-between items-center gap-[14px]">
                                        <p className="hidden lg:block [&>svg]:h-[16px] [&>svg]:w-[16px] pt-[5px]">
                                            <Ruble />
                                        </p>
                                        <span className="hidden lg:block"><ArrowRight /></span>
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default OrderForm;
