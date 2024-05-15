import { useRef, useState } from "react";
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

const OrderForm = () => {
    const form = useRef<any>(null);
    const { cart, total } = useSelector((state: RootState) => state.cart);
    const totalWithDelivery = total + 55;
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
        time: "",
    });

    const dispatch = useDispatch();

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
        const { name, phone, email, address, time, cart } = formData;

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
        } catch (error) {
            // console.error('Error while sending message:', error);
            setErrors({ ...errors, name: "Ошибка при отправке сообщения" });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="w-[60%]">
                <h2 className="font-[800] text-[32px] leading-[39px] text-[#F7D22D] mb-[15px]">
                    Заказ на доставку
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
                    <div className="flex flex-col text gap-[15px]">
                        <div className="flex justify-between">
                            <label htmlFor="name">Имя</label>
                            <input
                                className="h-[48px] w-[540px] py-[10px] pl-[19px] border-[1.5px] border-[#E2E2E9] rounded-[7px]"
                                placeholder="Имя"
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span>{errors.name}</span>}
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="phone">Телефон</label>
                            <input
                                className="h-[48px] w-[540px] py-[10px] pl-[19px] border-[1.5px] border-[#E2E2E9] rounded-[7px]"
                                placeholder="Orange, Moldcell, IDC"
                                id="phone"
                                name="phone"
                                type="text"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <span>{errors.phone}</span>}
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="email">Электронный адрес</label>
                            <input
                                className="h-[48px] w-[540px] py-[10px] pl-[19px] border-[1.5px] border-[#E2E2E9] rounded-[7px]"
                                placeholder="Ваш email"
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span>{errors.email}</span>}
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="address">Адрес</label>
                            <input
                                className="h-[120px] w-[540px] py-[10px] pl-[19px] border-[1.5px] border-[#E2E2E9] rounded-[7px]"
                                placeholder="ул. Ленина д. 101, кв. 4"
                                id="address"
                                name="address"
                                type="text"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            {errors.address && <span>{errors.address}</span>}
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="address">Время доставки</label>
                            <input
                                className="h-[48px] w-[540px] py-[10px] pl-[19px] border-[1.5px] border-[#E2E2E9] rounded-[7px]"
                                placeholder="Побыстрее"
                                id="time"
                                name="time"
                                type="text"
                                value={formData.time}
                                onChange={handleChange}
                            />
                        </div>

                        <OrderPay />

                        <div className="flex justify-between items-center">
                            <div className="flex gap-[15px] items-center">
                                <p>
                                    <ArrowLeft />
                                </p>
                                <button>Назад в корзину</button>
                            </div>
                            <button
                                type="submit"
                                className="flex justify-center items-center h-[60px] w-[300px] bg-[#F7D22D] rounded-[8px] text-[#231F20] text-[15px] font-[800]"
                                disabled={isLoading}
                            >
                                {isLoading
                                    ? "Отправка..."
                                    : `Оформить заказ на ${totalWithDelivery}`}
                                {!isLoading && (
                                    <div className="flex justify-between items-center gap-[14px]">
                                        <p className="[&>svg]:h-[16px] [&>svg]:w-[16px] pt-[5px]">
                                            <Ruble />
                                        </p>
                                        <ArrowRight />
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
