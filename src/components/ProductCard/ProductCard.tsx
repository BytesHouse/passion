import cls from './ProductCard.module.css'
interface ProductCardProps {
    product: {
        id: number,
        name: string,
        description: string,
        price: number,
        image: string
    }
}
const ProductCard = ({product}: ProductCardProps) => {
    const {name, description, price, image} = product
    return (
        <li className={cls.card}>
            <div className={cls.content}>
                <div className={cls.image}>
                    <img src={image} alt="product"/>
                    <p className={cls.price}>{price} ₽</p>
                </div>
                <div className={cls.info}>
                    <p className={cls.title}>{name}</p>
                    <p className={cls.description}>{description}</p>
                    <button className={cls.addBtn} type='button'>В корзину</button>
                </div>
            </div>
        </li>
    );
};

export default ProductCard;