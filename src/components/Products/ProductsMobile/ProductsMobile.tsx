import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../config/firebase";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { load } from "../../../features/products/productsSlice";
import ProductCard from "../../ProductCard/ProductCard";
import WomanEat from "../../../assets/icons/WomanEat/WomanEat";
import { RootState } from "../../../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Product {
    id: any;
    name: string;
    description: string;
    price: number;
    image: string;
    count: number;
    [key: string]: any;
}

const ProductsMobile = () => {
    const shopName = String(localStorage.getItem("shopName"))
        .toLowerCase()
        .replace(/[^\w\s]|_/g, "");

    const [loading, setLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.filtered);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsCollectionRef = collection(db, shopName);
            const querySnapshot = await getDocs(productsCollectionRef);
            const productsData = querySnapshot.docs.map(
                (doc: QueryDocumentSnapshot) =>
                    ({
                        ...doc.data(),
                        id: doc.id,
                    } as Product)
            );
            dispatch(load(productsData));
            setLoading(false);
        };

        fetchProducts();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredProducts = products.filter((product: { name: string }) =>
        product.name.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            <section className="mt-[15em]">
                <section>
                    <div className="flex flex-col mx-auto px-[20px] h-full max-w-[1140px] min-w-[380px]">
                        <div className="relative h-[20px] w-full text-[2em] rounded-[1em] mb-[2em] ">
                            <div className="absolute top-[50%] left-[2%] text-[rgb(128,128,128)]">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <input
                                className="h-[2em] w-full text-[1em] pl-[2em] border-[2px] border-[rgba(128,128,128,0.2)] rounded-[1em]"
                                type="text"
                                placeholder="Поиск товаров..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>

                        <h4 className="text-center text-[2.5em] text-black font-[200] mb-[20px]">
                            Продукты
                        </h4>
                        {loading ? (
                            <p className="text-center text-[2.5em] text-black font-[200] mb-[20px]">
                                Загрузка...
                            </p>
                        ) : (
                            <ul className="relative grid grid-cols-1 list-none gap-[30px]">
                                {filteredProducts.map((product: Product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </ul>
                        )}
                        <WomanEat />
                    </div>
                </section>
            </section>
        </div>
    );
};

export default ProductsMobile;
