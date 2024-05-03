import React, { useState } from "react";
import { Link } from "react-router-dom";
import Delivery from "../Delivery/Delivery";
import Map from "../Map/Map";

const Markets = () => {
    let mags: string[] = ["Sherif", "Drive", "Blagoda", "Miasko"];
    const [selectShop, setSelectShop] = useState<any>("products");

    const handleSelectShop = (e: React.MouseEvent<HTMLElement>) => {
        setSelectShop(e.currentTarget.textContent);
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
            {/* <Delivery />
            <Map />
            <p>{process.env.GOOGLE_MAP_API}</p> */}
        </>
    );
};

export default Markets;
