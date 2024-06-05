import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { load } from "../../../../features/products/productsSlice";
import ProductCard from "../../../ProductCard/ProductCard";

const NewProducts = () => {
    const shopName =
        String(localStorage.getItem("shopName"))
            .toLowerCase()
            .replace(/[^\w\s]|_/g, "") || "products";

    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.products.filtered);
    const [loading, setLoading] = useState(false);
    const i = 0;

    // получить данные для массива продуктов
    const itemStyle =
        "flex-1 flex gap-[15px] border border-gray-200 p-[5px] rounded-lg shadow-md w-[300px] m-2";

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const productsCollectionRef = collection(db, shopName);
            const data = await getDocs(productsCollectionRef);
            dispatch(
                load(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ); // Сохранение данных в состояние
            setLoading(false);

        };

        getProducts();
    }, []);

    return (
        <div className="container mx-auto p-[20px] flex flex-col gap-[25px]">
            <h3 className="font-bold text-2xl">Новые продукты</h3>
            <ul className="flex justify-between items-stretch">
                {!loading ? (
                    products.slice(i, i + 4).map((product: any) => (
                        // <li key={Math.random()} className={itemStyle}>
                        //     <img
                        //         className="self-center h-[120px] max-w-[50%]"
                        //         src={product.image}
                        //         alt={product.id}
                        //     />
                        //     <div className="flex flex-col w-full">
                        //         <p className="font-semibold text-[16px]">
                        //             {product.name}
                        //         </p>
                        //         <p className="font-bold text-[24px] text-amber-300">
                        //             {product.price}
                        //         </p>
                        //         <button className=" mt-auto bg-amber-300 rounded-lg px-2 py-1">
                        //             ДОБАВИТЬ
                        //         </button>
                        //     </div>
                        // </li>
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>Загрузка...</p>
                )}

            </ul>
        </div>
    );
};

export default NewProducts;
