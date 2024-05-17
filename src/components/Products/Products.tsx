import { useWindowSize } from "@uidotdev/usehooks";
import ProductsDesktop from "./ProductsDesktop/ProductsDesktop";
import ProductsMobile from "./ProductsMobile/ProductsMobile";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Products = () => {
    const size = useWindowSize();

    return (
        <>
            <Header />
            <Cart />
            {size.width! < 1024 ? (
                <>
                    {/* Mobile */}
                    <ProductsMobile />
                </>
            ) : (
                <>
                    <ProductsDesktop />
                </>
            )}
            <Footer />
        </>
    );
};

export default Products;
