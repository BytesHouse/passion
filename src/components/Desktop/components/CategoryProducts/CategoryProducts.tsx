import React from 'react';
import ProductCardDesktop from "../ProductCardDesktop/ProductCardDesktop";

interface CategoryProductsProps {
    title: string;
    products: any;
    loading: boolean;
}

const CategoryProducts = ({title, products, loading}: CategoryProductsProps) => {
    return (
        <li className="container mx-auto px-[20px]">
            <h2 className="text-2xl font-bold">{title}</h2>
            {loading ? <ul className="grid lg:grid-cols-4 gap-y-2">
                {products.length ? products.slice(0,8).map((product: any) => {
                    return <ProductCardDesktop key={product.id} product={product}/>
                }): <p className="">Продуктов нет</p>}
            </ul> : <p className="">Загрузка...</p>}
        </li>
    );
};

export default CategoryProducts;
