import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewProducts from "./components/NewProducts/NewProducts";
import ProductsList from "./components/ProductsList/ProductsList";
import Slider from "./components/Slider/Slider";

const Desktop = () => {
    return (
        <div className="flex flex-col gap-[15px]">
            <Header />
            <Slider />
            <NewProducts />
            {/* <ProductsList /> */}
            <Footer />
        </div>
    );
};

export default Desktop;
