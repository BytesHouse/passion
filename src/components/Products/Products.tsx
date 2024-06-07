import { useWindowSize } from "@uidotdev/usehooks";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../config/firebase";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { load } from "../../features/products/productsSlice";
import ProductCard from "../ProductCard/ProductCard";
import { RootState } from "../../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import WomanEat from "../../assets/icons/WomanEat/WomanEat";

interface Product {
    id: any;
    name: string;
    description: string;
    price: number;
    image: string;
    count: number;
    [key: string]: any;
}

const Products = () => {
    const shopName = String(localStorage.getItem("shopName"))
        .toLowerCase()
        .replace(/[^\w\s]|_/g, "");

    const [loading, setLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.filtered);

    useEffect(() => {
        const fetchProducts = async () => {
            // тут должен быть конект с базой данных и затем фильтрация по имени магазина
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

    const size = useWindowSize();

    return (
        <>
            <Header />
            <Cart />
            {size.width! < 1024 ? (
                <>
                    {/* Mobile */}
                    <div>
                        <section className="mt-[20px]">
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

                                    <h4 className="text-center text-[48px] font-[400] mb-[20px]">
                                        Продукты
                                    </h4>
                                    {loading ? (
                                        <p className="text-center text-[48px] font-[400] mb-[20px]">
                                            Загрузка...
                                        </p>
                                    ) : (
                                        <ul className="relative grid grid-cols-1 list-none gap-[30px]">
                                            {filteredProducts.map(
                                                (product: Product) => (
                                                    <ProductCard
                                                        key={product.id}
                                                        product={product}
                                                    />
                                                )
                                            )}
                                        </ul>
                                    )}
                                    <WomanEat />
                                </div>
                            </section>
                        </section>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <section className="mx-auto mt-[2em] min-h-[60%]">
                            <div className="flex flex-col mx-auto px-[20px] h-full w-full min-w-[380px]">
                                <div className="relative h-[20px] w-[1000px] mx-auto text-[2em] rounded-[1em] mb-[2em]">
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

                                <h4 className="text-center text-[2.5em] text-black font-[500] mb-[20px]">
                                    {shopName.toLocaleUpperCase()}
                                </h4>
                                {loading ? (
                                    <p className="text-center text-[2.5em] text-black font-[200] mb-[20px]">
                                        Загрузка...
                                    </p>
                                ) : (
                                    <ul className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-[80%] mx-auto list-none gap-[20px]">
                                        {filteredProducts.map(
                                            (product: Product) => (
                                                <ProductCard
                                                    key={product.id}
                                                    product={product}
                                                />
                                            )
                                        )}
                                    </ul>
                                )}
                            </div>
                        </section>
                    </div>
                </>
            )}
            <Footer />
        </>
    );
};

export default Products;
