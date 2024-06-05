import Footer from "../Footer/Footer";
import Header from "./components/Header/Header";
import NewProducts from "./components/NewProducts/NewProducts";
import ProductsList from "./components/ProductsList/ProductsList";
import Slider from "./components/Slider/Slider";
import ProductsList from "./components/ProductsList/ProductsList";

const Desktop = () => {
    return (
        <div className="flex flex-col gap-[15px]">
            <Header />
            <Slider />
            <NewProducts />
            <ProductsList/>
            <Footer />
        </div>
    );
};

export default Desktop;
