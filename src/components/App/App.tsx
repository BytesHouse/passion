import Header from "../Header/Header";
import Main from "../Main/Main";
import Cart from "../Cart/Cart";
import CartModal from "../CartModal/CartModal";
import {useState} from "react";
import { useClickAway } from "@uidotdev/usehooks";
import Footer from "../Footer/Footer";

const App = () => {
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
            {showModal && <CartModal refProps={ref}/>}
            <Footer />
        </>
    );
};

export default App;