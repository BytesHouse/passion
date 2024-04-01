import Header from "../Header/Header";
import Main from "../Main/Main";
import Cart from "../Cart/Cart";
import CartModal from "../CartModal/CartModal";
import {useState} from "react";
import { useClickAway } from "@uidotdev/usehooks";
import Footer from "../Footer/Footer";
import FormCart from "../FormCart/FormCart";
import {useDispatch} from "react-redux";
import {load} from "../../features/cart/cartSlice";

const App = () => {
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




    return (
        <>
            <Header/>
            <Main/>
            <Cart show={handleShowModal}/>
            {showModal && <CartModal show={setShowModal} refProps={ref}/>}
            <FormCart />
            <Footer />
        </>
    );
};

export default App;