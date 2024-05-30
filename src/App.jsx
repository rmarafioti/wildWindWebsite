import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Return from "./Return";
import CheckoutForm from "./CheckoutForm";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/return" element={<Return />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
