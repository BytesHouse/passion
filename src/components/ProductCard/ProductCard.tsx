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
    const { id, name, description, price, image } = product;
    const dispatch = useDispatch();
    const { cart } = useSelector((state: RootState) => state.cart);
    const handleAddToCart = () => {
        const cartAddItem = [
            { id: id },
            { name: name },
            { price: price },
            { count: 1 },
            { description: description },
            { image: image },
        ];
        localStorage.setItem("cart1", JSON.stringify(cartAddItem));
        dispatch(addToCart(product));
    };

    const dis = cart.find((item) => item.id === product.id);

    return (
        <li className="border-b-[1px] border-b-[rgba(128,128,128,0.48)] px-[20px] bg-red-50">
            <div className="flex gap-[25px]">
                <div className="flex flex-col justify-center items-center gap-[15px]">
                    <img
                        className="w-[280px] h-[280px] rounded-full border-[rgba(128,128,128,0.2)]"
                        src={image}
                        alt="фотография"
                    />
                    <p className="flex justify-center items-center text-[4.5em] font-bold w-[250px]">
                        {(Math.round(100 * price) / 100).toFixed(2)}
                        <Ruble />
                    </p>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <p className="text-[2.5em] font-[800] text-black">{name}</p>
                    <p className="text-[1.8em] font-[500] text-[#686466]">
                        {description}
                    </p>
                    <button
                        disabled={Boolean(dis)}
                        onClick={handleAddToCart}
                        className="text-[2.8em] py-[15px] px-[55px] bg-[#f7d22d] self-start uppercase rounded-[8px] text-[#473e43] disabled:bg-[#d3d3d3]"
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
