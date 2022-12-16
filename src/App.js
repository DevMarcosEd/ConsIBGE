import React from "react";
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";

import store from './store'

import RoutesApp from "./routes";
import Header from "./components/Header";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>

        <RoutesApp/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
