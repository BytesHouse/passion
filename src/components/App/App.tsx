import { useEffect, useState } from "react";
import { useClickAway, useWindowSize } from "@uidotdev/usehooks";
import { useDispatch } from "react-redux";
import { load } from "../../features/cart/cartSlice";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Mobile from "../Mobile/Mobile";
import Desktop from "../Desktop/Desktop";
import Cart from "../Cart/Cart";

const App = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    if (localStorage.getItem("cart") === null) {
        localStorage.setItem("cart", JSON.stringify([]));
    } else {
        dispatch(load(JSON.parse(localStorage.getItem("cart") ?? "[]")));
    }
    const [showModal, setShowModal] = useState(false);
    const ref = useClickAway(() => {
        setShowModal(false);
    });
    const handleShowModal = () => {
        if (showModal === false) {
            setShowModal(true);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            // }, 2000);
        }, 100);
    }, []);

    useEffect(() => {
        if (localStorage.getItem("cart") === null) {
            localStorage.setItem("cart", JSON.stringify([]));
        } else {
            dispatch(load(JSON.parse(localStorage.getItem("cart") || "[]")));
        }
    }, []);

    const size = useWindowSize();
    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : size.width! < 1024 ? (
                <>
                    <Mobile
                        handleShowModal={handleShowModal}
                        showModal={showModal}
                        setShowModal={setShowModal}
                        refProps={ref}
                    />
                </>
            ) : (
                <>
                    <Desktop />
                </>
            )}
            <Cart />
        </>
    );
};
export default App;
