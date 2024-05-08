import React from "react";
import light from "../../../../assets/images/slides/light.webp";
import dark from "../../../../assets/images/slides/dark.webp";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

const Slider = () => {
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
                <ul className="flex gap-[1em]">
                    {mags.map((e: string) => (
                        <Link
                            className="container mx-auto flex items-center justify-center gap-[35px] overflow-auto p-[20px]"
                            key={e}
                            onClick={handleSelectShop}
                            to={`/products/${e.toLowerCase()}`}
                        >
                            <div>
                                {e}
                                <img
                                    className="flex-1 h-[312px] rounded-[13px] shadow-[0_0_30px] animate-colorShift"
                                    src={light}
                                    alt=""
                                />
                            </div>
                        </Link>
                    ))}
                </ul>
            </section>
        </>

        // <div className="container mx-auto flex items-center justify-center gap-[35px] overflow-auto p-[20px]">
        //     <Link to="/products/sherif">
        //         <img
        //             className="flex-1 h-[312px] rounded-[13px] shadow-[0_0_30px] animate-colorShift"
        //             src={light}
        //             alt=""
        //         />
        //     </Link>
        //     <Link to="/products/drive">
        //         <img
        //             className="flex-1 h-[312px] rounded-[13px] shadow-[0_0_30px] animate-colorShift"
        //             src={dark}
        //             alt=""
        //         />
        //     </Link>
        //     <Link to="/products/Blagoda">
        //         <img
        //             className="flex-1 h-[312px] rounded-[13px] shadow-[0_0_30px] animate-colorShift"
        //             src={light}
        //             alt=""
        //         />
        //     </Link>
        //     <Link to="/products/Miasko">
        //         <img
        //             className="flex-1 h-[312px] rounded-[13px] shadow-[0_0_30px] animate-colorShift"
        //             src={dark}
        //             alt=""
        //         />
        //     </Link>
        // </div>
    );
};

export default Slider;
