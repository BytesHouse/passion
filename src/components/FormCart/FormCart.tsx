import { useState } from "react";
import Logo from "../Logo/Logo";
import styles from './FormCart.module.css';
import { sendMessage } from "../../api/telegram";

const FormCart = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: ''
    });
    const [errors, setErrors] = useState<{[key: string]: string}>({});

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

        // Валидация формы
        const { name, phone, address } = formData;
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
            const message = `Имя: ${name} Телефон: ${phone} Адрес: ${address}`;
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
        <div className={styles.wrapper}>
            <Logo/>
            <form onSubmit={handleSubmit}>
                <div className={styles.flexCol}>
                    <div>
                        <label htmlFor="name">Имя</label>
                        <input
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
                            id="address"
                            name="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        {errors.address && <span className={styles.error}>{errors.address}</span>}
                    </div>
                </div>
                <button type="submit" className={styles.button} disabled={isLoading}>
                    {isLoading ? 'Отправка...' : 'Оформить заказ'}
                </button>
            </form>
        </div>
    );
};

export default FormCart;
