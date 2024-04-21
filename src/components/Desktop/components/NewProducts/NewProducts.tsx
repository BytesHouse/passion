import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../../config/firebase";
import {load} from "../../../../features/products/productsSlice";

const NewProducts = () => {
    const products = useSelector((state: any) => state.products.filtered);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    // получить данные для массива продуктов
    const itemStyle = "flex-1 flex gap-[15px] border border-gray-200 p-[5px] rounded-lg shadow-md w-[300px] m-2"
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
        <div className="container mx-auto p-[20px] flex flex-col gap-[25px]">
            <h3 className="font-bold text-2xl">Новые продукты</h3>
            <ul className="flex justify-between items-stretch">
                {products.slice(0, 4).map((product: any) => <li className={itemStyle}><img className="self-center h-[120px] max-w-[50%]" src={product.image} alt={product.id}/>
                    <div className="flex flex-col w-full">
                        <p className="font-semibold text-[16px]">{product.name}</p>
                        <p className="font-bold text-[24px] text-amber-300">{product.price}</p>
                        <button className=" mt-auto bg-amber-300 rounded-lg px-2 py-1">ДОБАВИТЬ</button>
                    </div>
                </li>)}
            </ul>
        </div>
    );
};

export default NewProducts;