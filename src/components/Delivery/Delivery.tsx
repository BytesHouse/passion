import cls from './Delivery.module.css';
import car from '../../assets/images/last-car.png'
import laptop from '../../assets/images/market.png'
import market from '../../assets/images/laptop.png'
import timecar from '../../assets/images/timecar.png'
const Delivery = () => {
    return (
        <section className={cls.delivery}>
            <div className={cls.container}>
                <h2 className={cls.title}>Оплата и доставка </h2>
                <div className={cls.box}>
                    <img src={market} alt=""/>
                    <h2>Заказ</h2>
                    <p>Просим создать Заказ на покупку товара согласно каталогу сайта.</p>
                </div>
                <div className={cls.box}>
                    <img src={laptop} alt=""/>
                    <h2>Подтверждение</h2>
                    <p>После подтверджения оператором, Ваш заказ успешно принят.</p>
                </div>
                <div className={cls.box}>
                    <img src={timecar} alt=""/>
                    <h2>Сбор заказа</h2>
                    <p>Доставщик начал сбор вашего заказа. Ожидайте уведомления.</p>
                </div>
                <div className={cls.box}>
                    <img src={car} alt=""/>
                    <h2>Доставка</h2>
                    <p>Ваш заказ отправлен и находится в процессе доставки к вам.</p>
                </div>
            </div>
        </section>
    );
};

export default Delivery;