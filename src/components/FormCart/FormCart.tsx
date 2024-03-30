import { useForm } from "@mantine/form";
import Logo from "../Logo/Logo";
import styles from './FormCart.module.css';
import { useState } from "react";
import { sendMessage } from "../../api/telegram";

const FormCart = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm({
        initialValues: {
          name: '',
          phone: '',
          adress: '',         
        },
        validate: {
        name: (value) => (value.trim() !== '' ? null : 'Введите имя'),
        phone: (value) => (value.trim() !== '' ? null : 'Введите телефон'),
        adress: (value) => (value.trim() !== '' ? null : 'Введите адрес'),
        },
      });

    const handleSubmit = async (values: { name: string; phone: string; adress: string; }) => {
        console.log("hello");
        try {
            const message = `Имя: ${values.name} Телефон: ${values.phone} Адрес: ${values.adress}`;

            await sendMessage(message);
            setIsLoading(true);
            console.log('Message sent successfully!');
        } catch (error) {
            console.error('Error while sending message:', error);
            form.setFieldError('name', 'Ошибка при отправке сообщения');
        } finally {
            setIsLoading(false);
        }
        console.log('values', values);
    };
    
    return (
        <div className={styles.wrapper}>
            <Logo/>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <div className={styles.flexCol}>
                    <div>
                        <label htmlFor="name">Имя</label>
                        <input {...form.getInputProps('name')} id="name" type="text"  />
                    </div>
                    <div>
                        <label htmlFor="phone">Телефон</label>
                        <input {...form.getInputProps('phone')} id="phone" type="text"  />
                    </div>
                    <div>
                        <label htmlFor="adress">Адрес</label>
                        <input {...form.getInputProps('adress')} id="adress" type="text"  />
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
