import { useLocalStorage } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";
import { shops, ShopsType } from "../../config/shops";

const Main = () => {
    // let mags: string[] = ["Products", "Sherif", "Drive", "Blagoda", "Miasko"];
    const [nameShop, saveNameShop] = useLocalStorage<any>(
        "shopName",
        "products"
    );

    const handleSelectShop = (e: string) => {
        saveNameShop(e);
    };

    return (
        <>
            <section className="container flex flex-col justify-center items-center gap-[20px] mx-auto mt-[20px] mb-[120px] font-[200] text-[2.5em]">
                <h4 className="text-[1.5em] font-bold text-center">Дубоссары: Лучшие заведения и магазины</h4>
                <ul className="flex gap-[1em] flex-wrap justify-around">
                    {shops.map((e: ShopsType) => (
                        <Link
                            className="p-[20px] w-[300px] min-h-[260px] border flex flex-col justify-center items-center"
                            key={e.id}
                            onClick={() => handleSelectShop(e.shopName)}
                            to={`/products/${e.shopName}`}
                        >
                            <img
                                width={150}
                                height={150}
                                src={e.image}
                                alt={e.name}
                            />
                            <span className="text-[1em] font-semibold uppercase truncate">
                                {e.name}
                            </span>
                        </Link>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Main;
