import Header from "../Header/Header";
import Main from "../Main/Main";
import Cart from "../Cart/Cart";
import CartModal from "../CartModal/CartModal";
import {useEffect, useState} from "react";
import { useClickAway, useWindowSize } from "@uidotdev/usehooks";
import Footer from "../Footer/Footer";
import FormCart from "../FormCart/FormCart";
import {useDispatch} from "react-redux";
import {load, removeFromCart} from "../../features/cart/cartSlice";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Mobile from "../Mobile/Mobile";

const App = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    if(localStorage.getItem('cart') === null) {
        localStorage.setItem('cart', JSON.stringify([]))
    } else {
        dispatch(load(JSON.parse(localStorage.getItem('cart') ?? '[]')))
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
        }, 2000);
    }, []);
    const size = useWindowSize();
    return (
        <>
            { loading ? (
            <LoadingScreen />
                ) : size.width! < 1024 ?  (
                    <>
                    <Mobile handleShowModal={handleShowModal} showModal={showModal} setShowModal={setShowModal} refProps={ref}/>
                    </>
            ) :
                <>
                </>}
        </>
    );
}
export default App;