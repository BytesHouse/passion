import cls from './Products.module.css'
import ProductCard from "../ProductCard/ProductCard";
import {products} from "../../config/db";
import WomanEat from "../../assets/icons/WomanEat/WomanEat";
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import {useEffect, useState} from "react";
const Products = () => {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        const getUsers = async () => {
            const productsCollectionRef = collection(db, 'products');
            const data = await getDocs(productsCollectionRef);
            setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // Сохранение данных в состояние
        };

        getUsers();
    }, []);
    return (

        <section>
            <div className={cls.container}>
                <h4 className={cls.title}>Продукты</h4>
                <ul className={cls.list}>
                    {products.map((product: any) => {
                        return <ProductCard key={product.id} product={product}/>
                    })}
                </ul>
                <WomanEat/>
            </div>
        </section>
    );
};

export default Products;