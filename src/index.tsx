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
import DeliveryOrder from "./components/DeliveryOrder/DeliveryOrder";

import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import SignUp from "./components/SIgnUp/SignUp";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import {ErrorBoundary} from "./components/ErrorBoundary/ErrorBoundary";

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
            path: "/order",
            element: <DeliveryOrder />,
        },
        {
            path: "/sign-up",
            element: <SignUp />,
        },
        {
            path: "/profile",
            element: (
                <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            ),
        },
        {
            path: "/login",
            element: <Login />,
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
        <ErrorBoundary>
            <Provider store={store}>
                <AuthProvider>
                    <RouterProvider router={router} />
                </AuthProvider>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
);
