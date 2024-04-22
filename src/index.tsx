import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Header from "./components/Header/Header";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import CartModal from "./components/CartModal/CartModal";
import App from "./components/App/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CartNew from "./components/CartNew/CartNew";
import Error404 from "./components/Error404/Error404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/cart",
        element: <CartNew />,
    },
    {
        path: "*",
        element: <Error404 />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
