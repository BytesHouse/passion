import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../config/firebase";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { load } from "../../features/products/productsSlice";
import ProductCard from "../ProductCard/ProductCard";
import cls from "./Products.module.css";
import WomanEat from "../../assets/icons/WomanEat/WomanEat";
import { RootState } from "../../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";

interface Product {
    id: any;
    name: string;
    description: string;
    price: number;
    image: string;
    [key: string]: any;
}

const Products = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.filtered);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsCollectionRef = collection(db, "drive"); //Вместо статичного "drive" использовать пропс из компонента Markets
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
    }, [dispatch]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredProducts = products.filter((product: { name: string }) =>
        product.name.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            <ScrollToTop />
            <Header />
            <section className="mt-[15em]">
                <section>
                    <div className={cls.container}>
                        <div className={cls.searchInput}>
                            <div className={cls.icon}>
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <input
                                type="text"
                                placeholder="Поиск продуктов..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>

                        <h4 className={cls.title}>Продукты</h4>

                        {loading ? (
                            <p className={cls.title}>Загрузка...</p>
                        ) : (
                            <ul className={cls.list}>
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
            <Footer />
        </div>
    );
};

export default Products;
