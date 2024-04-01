import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import styles from './FormCart.module.css';
import { sendMessage } from "../../api/telegram";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getFormatedString } from "./helpers/getFormatedString";


const FormCart = () => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        cart: '',
    });
    const [errors, setErrors] = useState<{[key: string]: string}>({});

    const {cart, total} = useSelector((state:RootState) => state.cart)
    const totalWithDelivery = total + 70;

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

   
        const { name, phone, address, cart } = formData;
        if (!name.trim()) {
            setErrors({ ...errors, name: 'Введите имя' });
            return;
        }
        if (!phone.trim()) {
            setErrors({ ...errors, phone: 'Введите телефон' });
            return;
        }
        if (!address.trim()) {
            setErrors({ ...errors, address: 'Введите адрес' });
            return;
        }

        // Отправка сообщения
        try {
            const message = `
                        Имя: ${name}
                        Телефон: ${phone}
                        Адрес: ${address}
                        ---------------------\nКорзина: \n${getFormatedString(cart)}
                        Сумма: ${total} ₽
                        Доставка: 70 ₽
                        Итого: ${totalWithDelivery} ₽
            `;
            setIsLoading(true);
            await sendMessage(message);
            console.log('Message sent successfully!');
        } catch (error) {
            console.error('Error while sending message:', error);
            setErrors({ ...errors, name: 'Ошибка при отправке сообщения' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div id="contacts" className={styles.wrapper}>
            <Logo/>
            <form onSubmit={handleSubmit}>
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
        <li>
        {cart.map((item, index) => (
                    <li key={index} className={styles.prodItem}>
                        <div>
                            {/* В качестве ключа используем первое свойство объекта, предполагая, что оно представляет имя товара */}
                            <p>{item.name}</p>
                            {/* Для описания товара используйте соответствующее значение объекта */}
                            <span>Короткое описание товара</span>
                            
                        </div>
                        {/* Выводим цену товара */}
                        <p className={styles.price}>{item.price} руб</p>
                    </li>
                ))}
        </li>
    </ul>
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
