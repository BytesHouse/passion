import Header from "./components/Header/Header";
import NewProducts from "./components/NewProducts/NewProducts";
import Slider from "./components/Slider/Slider";

const Desktop = () => {

    return (
        <div className="flex flex-col gap-[15px]">
            <Header />
            <Slider/>
            <NewProducts/>
        </div>
    );
};

export default Desktop;