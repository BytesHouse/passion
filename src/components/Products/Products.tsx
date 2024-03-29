import cls from './Products.module.css'
import ProductCard from "../ProductCard/ProductCard";
import {products} from "../../config/db";
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
            </div>
        </section>
    );
};

export default Products;