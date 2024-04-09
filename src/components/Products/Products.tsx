import cls from './Products.module.css'
import ProductCard from "../ProductCard/ProductCard";
import {products} from "../../config/db";
import WomanEat from "../../assets/icons/WomanEat/WomanEat";
const Products = () => {
    return (
        <section>
            <div className={cls.container}>
                <h4 className={cls.title}>Продукты</h4>
                <ul className={cls.list}>
                    {products.map((product) => {
                        return <ProductCard key={product.id} product={product}/>
                    })}
                </ul>
                <WomanEat/>
            </div>
        </section>
    );
};

export default Products;