import cls from './ProductCard.module.css'
import {useDispatch} from "react-redux";
import {addToCart} from "../../features/cart/cartSlice";
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
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }
    return (
        <li className={cls.card}>
            <div className={cls.content}>
                <div className={cls.image}>
                    <img src={image} alt="product"/>
                    <p className={cls.price}>{price} ₽</p>
                </div>
                <div className={cls.info}>
                    <p className={cls.title}>{name}</p>
                    <p className={cls.description}>
                        {description}
                    </p>
                    <button onClick={handleAddToCart} className={cls.addBtn} type='button'>В корзину</button>
                </div>
            </div>
        </li>
    );
};

export default ProductCard;