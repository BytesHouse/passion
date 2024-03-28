import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Header from "./components/Header/Header";
import { store } from './store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
            <Header/>
      </Provider>
  </React.StrictMode>
);

