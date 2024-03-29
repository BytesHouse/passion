import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Header from "./components/Header/Header";
import { store } from './store/store'
import { Provider } from 'react-redux'
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import CartModal from "./components/CartModal/CartModal";
import App from "./components/App/App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
            <App/>
      </Provider>
  </React.StrictMode>
);

