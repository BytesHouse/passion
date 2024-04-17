import cls from "./ProductCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { RootState } from "../../store/store";
import Ruble from "../../assets/icons/Ruble/Ruble";
interface ProductCardProps {
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        image: string;
    };
}
const ProductCard = ({ product }: ProductCardProps) => {
    const { name, description, price, image } = product;
    const dispatch = useDispatch();
    const { cart } = useSelector((state: RootState) => state.cart);
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };
    const dis = cart.find((item) => item.id === product.id);
    return (
        <li className={cls.card}>
            <div className={cls.content}>
                <div className={cls.image}>
                    <img
                        className={cls.productImage}
                        src={image}
                        alt="product"
                    />
                    <p className={cls.price}>
                        {(Math.round(100 * price) / 100).toFixed(2)}
                        <Ruble />
                    </p>
                </div>
                <div className={cls.info}>
                    <p className={cls.title}>{name}</p>
                    <p className={cls.description}>{description}</p>
                    <button
                        disabled={Boolean(dis)}
                        onClick={handleAddToCart}
                        className={cls.addBtn}
                        type="button"
                    >
                        {dis ? "Добавлено" : "Добавить"}
                    </button>
                </div>
            </div>
        </li>
    );
};

export default ProductCard;
