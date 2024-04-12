import {useEffect, useRef, useState} from "react";
import LogoMaracuya from "../LogoMaracuya/LogoMaracuya";
import styles from './FormCart.module.css';
import { sendMessage } from "../../api/telegram";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../store/store";
import { getFormatedString } from "./helpers/getFormatedString";
import {clearCart} from "../../features/cart/cartSlice";
import {generateUniqueId} from "./helpers/generateUniqueId";
import emailjs from '@emailjs/browser';


const FormCart = () => {
    const form = useRef<any>(null);
    const dispatch = useDispatch();
    const [delivery, setDelivery] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        cart: '',
        id: '',
        message: '',
    });
    const [errors, setErrors] = useState<{[key: string]: string}>({});

    const {cart, total} = useSelector((state:RootState) => state.cart)
    const totalWithDelivery = total + 55;

    useEffect(()=>{
        const tmp = cart.map((item: any)=>{
            return {
                [item.name]: `${item.count}шт. ${Number(item.price * item.count).toFixed(2)}руб.`,
            }
        })
        setFormData({...formData, cart: JSON.stringify(tmp)})
    },[cart])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: ''
        });
    };
    useEffect(() => {
        setDelivery(cart.length <= 3
            ?
            55
            :
            cart.length > 3 && cart.length <= 6
                ?
                45
                :
                35)
    }, [cart]);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const { name, phone, email, address, cart } = formData;
        if(cart.length === 2){
            setErrors({ ...errors, cart: 'Корзина пуста' });
            alert('Корзина пуста');
            return;
        }

        if (!name.trim()) {
            setErrors({ ...errors, name: 'Введите имя' });
            return;
        }
        if (!phone.trim()) {
            setErrors({ ...errors, phone: 'Введите телефон' });
            return;
        }
        if (!email.trim()) {
            setErrors({ ...errors, phone: 'Введите телефон' });
            return;
        }
        if (!address.trim()) {
            setErrors({ ...errors, address: 'Введите адрес' });
            return;
        }

        // Отправка сообщения
        try {
            const id = generateUniqueId(name).toUpperCase();
            localStorage.setItem('id', id);
            const message = `Новый заказ:\n---------------------\nid: ${id}\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nАдрес: ${address}\n---------------------\nКорзина: \n${getFormatedString(cart)}\n---------------------\nСумма: ${total.toFixed(2)} ₽\nДоставка: ${delivery} ₽\nИтого: ${totalWithDelivery.toFixed(2)} ₽`;
            setIsLoading(true);
            setFormData({
                ...formData,
                id,
                message: `${getFormatedString(cart)}
                \nСумма: ${total.toFixed(2)} ₽
                `,
            });
            await sendMessage(message);
            await emailjs
                .sendForm('service_s5ds6nv', 'template_flowqo8', form.current, {
                    publicKey: 'THEiU4AMswjhRFp5i',
                })
            alert('Заказ оформлен!');
            dispatch(clearCart());
        } catch (error) {
            // console.error('Error while sending message:', error);
            setErrors({ ...errors, name: 'Ошибка при отправке сообщения' });
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <div id="contacts" className={styles.wrapper}>
            <LogoMaracuya enter={undefined} />
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
                <div className={styles.flexCol}>
                    <div>
                        <label htmlFor="name">Имя</label>
                        <input
                            placeholder="Пётр Николаевич"
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className={styles.error}>{errors.name}</span>}
                    </div>
                    <div>
                        <label htmlFor="phone">Телефон</label>
                        <input
                            placeholder="Orange, Moldcell, IDC"
                            id="phone"
                            name="phone"
                            type="text"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                    </div>
                    <div>
                        <label htmlFor="email">Электронный адрес</label>
                        <input
                            placeholder="Ваш email"
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor="address">Адрес</label>
                        <input
                            placeholder="ул. Ленина д. 101, кв. 4"
                            id="address"
                            name="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        {errors.address && <span className={styles.error}>{errors.address}</span>}
                    </div>
                    <div>
                        <div className={styles.cart}>
                            Состав заказа
                        </div>
                        <div className={styles.prodList}>
                            <ul>
                                {cart.map((item, index) => (
                                    <li key={index} className={styles.prodItem}>
                                        <div>
                                            {/* В качестве ключа используем первое свойство объекта, предполагая, что оно представляет имя товара */}
                                            <p>{item.name}</p>
                                            {/* Для описания товара используйте соответствующее значение объекта */}
                                            {/*<span>Короткое описание товара</span>*/}

                                        </div>
                                        {/* Выводим цену товара */}
                                        <p className={styles.price}>
                                            {Number(item.price * item.count).toFixed(2)} ₽
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <hr/>
                            <div className={styles.total}>
                                <div>
                                    <p>
                                        Сумма:
                                    </p>
                                    <p>
                                        {total.toFixed(2)} ₽
                                    </p>
                                </div>
                                <div>
                                    <p>Доставка:</p>
                                    <p>{delivery ?? 0} ₽</p>
                                </div>
                                <div>
                                    <p>
                                        Итого:
                                    </p>
                                    <p>
                                        {(total + delivery).toFixed(2)} ₽
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <button type="submit" className={styles.button} disabled={isLoading}>
                        {isLoading ? 'Отправка...' : 'Оформить заказ'}
                    </button>
                </div>

            </form>

        </div>
    );
};

export default FormCart;
