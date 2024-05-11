import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import App from "./components/App/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import Privacy from "./components/Privacy/Privacy";
import Products from "./components/Products/Products";
import FormCart from "./components/FormCart/FormCart";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/products/:name",
            element: <Products />,
        },
        {
            path: "/privacy",
            element: <Privacy />,
        },
        {
            path: "/cart",
            element: <FormCart />,
        },
        {
            path: "*",
            element: <Error404 />,
        },
    ],
    { basename: "/" }
);

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
