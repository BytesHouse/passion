import React from 'react';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Cart from "../Cart/Cart";
import CartModal from "../CartModal/CartModal";
import FormCart from "../FormCart/FormCart";
import Footer from "../Footer/Footer";

interface MobileProps {
    handleShowModal: () => void;
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    refProps: any;
}

const Mobile = ({handleShowModal, showModal, setShowModal, refProps}: MobileProps) => {
    return (
        <>
            <Header/>
            <Main/>
            <Cart show={handleShowModal}/>
            {showModal && <CartModal show={setShowModal} refProps={refProps}/>}
            <FormCart />
            <Footer />
        </>
    );
};

export default Mobile;