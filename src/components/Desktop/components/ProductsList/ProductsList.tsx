import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../../../features/products/productsSlice";
import { useEffect, useState } from "react";
import { categories } from "../../../../config/categories";
import CategoryProducts from "../CategoryProducts/CategoryProducts";

function groupByCategory(items: any) {
    // Объект для хранения групп по категориям
    const categories = {} as any;


    // Проходим по каждому элементу массива
    items.forEach((item: any) => {
        // Проверяем, существует ли уже массив для этой категории
        if (!categories[item.category]) {
            // Если нет, создаем новый массив для этой категории
            categories[item.category] = [];
        }
        // Добавляем объект в соответствующий массив
        categories[item.category].push(item);
    });

    // Преобразуем объект в массив массивов
    return Object.values(categories);
}
const ProductsList = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.products.filtered);
    useEffect(() => {
        const getProducts = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const data = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            const groupedData = groupByCategory(data);
            dispatch(load(groupedData));
        };
        getProducts();
    }, []);
    const findItem = (id: number) => {
        return categories.find((item: any) => item.category === id)?.name!;
    };

    return (
        <ul className="list-none">
            {loading ? (
                products.map((category: any) => (
                    <CategoryProducts
                        key={Math.random()}
                        title={findItem(category[0]?.category)}
                        products={category}
                        loading={loading}
                    />
                ))
            ) : (
                <p className="">Загрузка...</p>
            )}

        </ul>
    );
};

export default ProductsList;

