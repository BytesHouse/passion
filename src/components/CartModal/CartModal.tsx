import cls from './CartModal.module.css';
const CartModal = ({refProps}: {refProps: any}) => {
    return (
            <div  className={cls.wrapper}>
                <div ref={refProps} className={cls.modal}>
                    <div className={cls.header}>
                        <button className={cls.closeModal}>&times;</button>
                    </div>
                    <div className={cls.body}>
                        <div className={cls.item}>
                            <div className={cls.name}>Product 1</div>
                            <div className={cls.price}>1000 руб.</div>
                            <div className={cls.count}>
                                <button className={cls.btn}>-</button>
                                <span>1</span>
                                <button className={cls.btn}>+</button>
                            </div>
                            <button className={cls.close}>&times;</button>
                        </div>
                        <div className={cls.item}>
                            <div className={cls.name}>Product 2</div>
                            <div className={cls.price}>2000 руб.</div>
                            <div className={cls.count}>
                                <button className={cls.btn}>-</button>
                                <span>1</span>
                                <button className={cls.btn}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className={cls.footer}>
                        <div className={cls.total}>Итого: 3000 руб.</div>
                        <button className={cls.btn}>Оформить заказ</button>
                    </div>
                </div>
            </div>
    );
};

export default CartModal;