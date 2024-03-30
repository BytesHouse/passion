import Products from "../Products/Products";
import Delivery from "../Delivery/Delivery";
import Map from "../Map/Map";

const Main = () => {
    return (
        <main>
            <Products/>
            <Delivery/>
            <Map/>
            <p>{process.env.GOOGLE_MAP_API}</p>
        </main>
    );
};

export default Main;