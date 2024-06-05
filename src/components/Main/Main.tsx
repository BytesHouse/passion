import { useLocalStorage } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

const Main = () => {
    let mags: string[] = ["Products", "Sherif", "Drive", "Blagoda", "Miasko"];
    const [nameShop, saveNameShop] = useLocalStorage<any>(
        "shopName",
        "products"
    );

    const handleSelectShop = (e: React.MouseEvent<HTMLElement>) => {
        saveNameShop(e.currentTarget.textContent);
    };
    return (
        <>
            <section className="container flex flex-col justify-center items-center gap-[20px] mx-auto h-full font-[200] text-[2.5em]">
                <h4>Выберите магазин:</h4>
                <ul className="flex flex-col gap-[1em]">
                    {mags.map((e: string) => (
                        <Link
                            className="w-[200px] h-[100px] border bg-red-50 flex justify-center items-center"
                            key={e}
                            onClick={handleSelectShop}
                            to={`/products/${e.toLowerCase()}`}
                        >
                            {e}
                        </Link>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Main;
