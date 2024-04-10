import cls from './Products.module.css'
import ProductCard from "../ProductCard/ProductCard";
import WomanEat from "../../assets/icons/WomanEat/WomanEat";
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {load} from "../../features/products/productsSlice";
const Products = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.products.products);
    useEffect(() => {
        const getUsers = async () => {
            setLoading(false);
            const productsCollectionRef = collection(db, 'products');
            const data = await getDocs(productsCollectionRef);
            dispatch(load(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))); // Сохранение данных в состояние
            setLoading(true)
        };

        getUsers();
    }, []);
    return (

        <section>
            <div className={cls.container}>
                <h4 className={cls.title}>Продукты</h4>
                {loading ? <ul className={cls.list}>
                    {products.map((product: any) => {
                        return <ProductCard key={product.id} product={product}/>
                    })}
                </ul> : <p className={cls.title}>Загрузка...</p>}
                <WomanEat/>
            </div>
        </section>
    );
};

export default Products;