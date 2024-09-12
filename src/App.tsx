import { Home } from "./pages/Home";
import React, { Fragment } from "react";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Fragment>
  );
};

export default App;
