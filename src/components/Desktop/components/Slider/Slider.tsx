import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

const Slider = () => {
    // let mags: string[] = ["Products", "Sherif", "Drive", "Blagoda", "Miasko"];

    //Временный массив
    const mags = [
        {
            id: 0,
            name: "Products",
            image: "http://dubossary.ru/wp-content/uploads/2022/07/2022-7-308.jpg",
            link: "/products/products",
        },
        {
            id: 1,
            name: "Sherif",
            image: "https://sheriff.md/photo/news/news1_69_7153.JPG",
            link: "/products/sherif",
        },
        {
            id: 2,
            name: "Drive",
            image: "https://avatars.mds.yandex.net/get-altay/4804646/2a0000017959de2fce393e44b1d0613f415e/XXXL",
            link: "/products/drive",
        },
        {
            id: 3,
            name: "Blagoda",
            image: "https://bmarket24.ru/upload/iblock/import/4007HQa99u.jpg",
            link: "/products/blagoda",
        },
        {
            id: 4,
            name: "Miasko",
            image: "https://lh3.googleusercontent.com/p/AF1QipPoNZcVXhZy9wX77VYdoy6O39kU4ARFjvVo6CmH=w600-k",
            link: "/products/miasko",
        },
    ];

    const [nameShop, saveNameShop] = useLocalStorage<any>(
        "shopName",
        "products"
    );

    const handleSelectShop = (name: string) => {
        saveNameShop(name);
    };

    const [countSlide, setCountSlide] = useState(2);
    const [numberSlide, setNumberSlide] = useState(0);

    const numberSlidePrevios = () => {
        let tmp = numberSlide;
        tmp--;
        if (tmp < 0) {
            tmp = mags.length - countSlide;
        }
        setNumberSlide(tmp);
    };

    const numberSlideNext = () => {
        let tmp = numberSlide;
        tmp++;
        if (tmp + countSlide > mags.length) {
            tmp = 0;
        }
        setNumberSlide(tmp);
    };

    let tmpPrev: number = 0;
    let tmpNext: number = tmpPrev + countSlide;

    if (numberSlide === 0) {
        tmpPrev = mags.length - 1;
    } else {
        tmpPrev = numberSlide;
    }

    if (numberSlide + countSlide === mags.length) {
        tmpNext = 0;
    } else {
        tmpNext = numberSlide + countSlide;
    }

    useEffect(() => {
        //Таймер слайдера новых продуктов
        const timerNextSlide = setInterval(() => {
            numberSlideNext();
        }, 5000);

        return () => clearInterval(timerNextSlide);
    });

    return (
        <>
            <section className="relative mx-auto flex justify-center items-center h-full font-[200]">
                {/* Левый отступ */}
                <>
                    <div className="absolute w-[520px] left-[-450px]">
                        {mags.slice(tmpPrev - 1, tmpPrev).map((e: any) => (
                            <Link
                                className="container mx-auto flex items-center justify-center gap-[35px] overflow-auto p-[20px]"
                                key={e.id}
                                onClick={() => handleSelectShop(e.name)}
                                to={`/products/${e.name}`}
                            >
                                <div className="[&>img]:w-[320px] [&>img]:h-[200px]">
                                    {/* {e.name} */}
                                    <img
                                        className="flex-1 w-full rounded-[13px] shadow-[0_0_30px] animate-colorShift"
                                        src={e.image}
                                        alt=""
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                    <button
                        className="absolute w-[50px] h-[50px] px-[20px] font-[700] text-[24px] flex items-center justify-center rounded-full bg-[#F7D22D] shadow-[0px_4px_28px_0px_#00000014] left-[-100px] z-[10]"
                        onClick={numberSlidePrevios}
                    >
                        {"<"}
                    </button>
                </>
                <ul className="container flex justify-center gap-[25px]">
                    {mags
                        .slice(numberSlide, numberSlide + countSlide)
                        .map((e: any) => (
                            <Link
                                className="flex items-center justify-center gap-[35px] overflow-auto p-[20px]"
                                key={e.id}
                                onClick={() => handleSelectShop(e.name)}
                                to={`/products/${e.name}`}
                            >
                                <div className="[&>img]:w-[520px] [&>img]:h-[300px]">
                                    {/* {e.name} */}
                                    <img
                                        className="w-full rounded-[13px] shadow-[0_0_30px] animate-colorShift"
                                        src={e.image}
                                        alt=""
                                    />
                                </div>
                            </Link>
                        ))}
                </ul>
                {/* Правый отступ */}
                <>
                    <div className="absolute w-[520px] right-[-450px]">
                        {mags.slice(tmpNext, tmpNext + 1).map((e: any) => (
                            <Link
                                className="container mx-auto flex items-center justify-center gap-[35px] overflow-auto p-[20px]"
                                key={e.id}
                                onClick={() => handleSelectShop(e.name)}
                                to={`/products/${e.name}`}
                            >
                                <div className="[&>img]:w-[320px] [&>img]:h-[200px]">
                                    {/* {e.name} */}
                                    <img
                                        className="flex-1 w-full rounded-[13px] shadow-[0_0_30px] animate-colorShift"
                                        src={e.image}
                                        alt=""
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                    <button
                        className="absolute w-[50px] h-[50px] px-[20px] font-[700] text-[24px] flex items-center justify-center rounded-full bg-[#F7D22D] shadow-[0px_4px_28px_0px_#00000014] right-[-100px] z-[10]"
                        onClick={numberSlideNext}
                    >
                        {">"}
                    </button>
                </>
            </section>
        </>
    );
};

export default Slider;
