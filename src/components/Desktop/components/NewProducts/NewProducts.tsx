import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { load } from "../../../../features/products/productsSlice";
import ProductCard from "../../../ProductCard/ProductCard";
import { useWindowSize } from "@uidotdev/usehooks";

const NewProducts = () => {
    const shopName =
        String(localStorage.getItem("shopName"))
            .toLowerCase()
            .replace(/[^\w\s]|_/g, "") || "products";

    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.products.filtered);
    const [loading, setLoading] = useState(false);

    //Пока без sizewidth статично
    const [countSlide, setCountSlide] = useState(4);
    const [numberSlide, setNumberSlide] = useState(0);

    const numberSlidePrevios = () => {
        let tmp = numberSlide;
        tmp--;
        if (tmp < 0) {
            tmp = products.length - countSlide;
        }
        setNumberSlide(tmp);
    };

    const numberSlideNext = () => {
        let tmp = numberSlide;
        tmp++;
        if (tmp + countSlide > products.length) {
            tmp = 0;
        }
        setNumberSlide(tmp);
    };

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

        if (size.width! < 1024) {
            setCountSlide(3);
            console.log(countSlide);
        } else if (size.width! > 1024) {
            setCountSlide(4);
        }

        getProducts();
    }, []);

    const size = useWindowSize();

    return (
        <div className="container mx-auto p-[20px] flex flex-col gap-[25px]">
            <h3 className="font-bold text-2xl">Новые продукты</h3>

            <ul
                className="relative container flex justify-between items-center;
"
            >
                {!loading ? (
                    <>
                        {products.length > 4 && (
                            <button
                                className="w-[100px] h-[400px] absolute left-[-120px] font-[700] text-[24px] rounded-[10px] bg-[#F7D22D] shadow-[0px_4px_28px_0px_#00000014] z-[10]"
                                onClick={numberSlidePrevios}
                            >
                                {"<"}
                            </button>
                        )}
                        {products
                            .slice(numberSlide, numberSlide + countSlide)
                            .map((product: any) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        {products.length > 4 && (
                            <button
                                className="w-[100px] h-[400px] absolute right-[-120px] font-[700] text-[24px] rounded-[10px] bg-[#F7D22D] shadow-[0px_4px_28px_0px_#00000014]"
                                onClick={numberSlideNext}
                            >
                                {">"}
                            </button>
                        )}
                    </>
                ) : (
                    <p>Загрузка...</p>
                )}
            </ul>
        </div>
    );
};

export default NewProducts;
