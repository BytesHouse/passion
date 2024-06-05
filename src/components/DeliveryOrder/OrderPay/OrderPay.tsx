import React, { useState } from "react";

const OrderPay = () => {
    const [selectedTypePay, setSelectedTypePay] = useState<String>();

    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTypePay(event.target.value);
    };

    return (
        <>
            <div className="bg-[#F1F2F560] px-[30px] py-[40px] rounded-[6px] mt-[57px]">
                <fieldset>
                    <legend className="text-[#F7D22D] font-[700] text-[28px] leading-[17px] mb-[38px]">
                        Способы оплаты
                    </legend>
                    <p>
                        <input
                            className="bg-[#F7D22D]"
                            type="radio"
                            name="pay"
                            value="card"
                            id="card"
                            onChange={radioHandler}
                        />
                        <label className="pl-[14px]" htmlFor="card">
                            Картой на сайте
                        </label>
                    </p>

                    {selectedTypePay === "card" && <h3>{selectedTypePay}</h3>}

                    <p>
                        <input
                            type="radio"
                            name="pay"
                            value="cash"
                            id="cash"
                            onChange={radioHandler}
                        />
                        <label className="pl-[14px]" htmlFor="tea">
                            Наличными
                        </label>
                    </p>
                </fieldset>
            </div>
        </>
    );
};

export default OrderPay;
