import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { InfoBlock } from "../InfoBlock/InfoBlock";
import { BestCafe } from "../BestCafe/BestCafe";

interface MobileProps {
    handleShowModal: () => void;
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    refProps: any;
}

const Mobile = ({handleShowModal, showModal, setShowModal, refProps}: MobileProps) => {
    // const address = localStorage.getItem("address")
    return (
        <>
            <Header />
            <InfoBlock/>
            <Main />
            <BestCafe/>
            <Footer />
        </>
    );
};

export default Mobile;
