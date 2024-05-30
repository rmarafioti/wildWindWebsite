import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Root from "./layout/Root";
import Home from "./layout/Home";
import Contact from "./layout/Contact";
import Shop from "./layout/Shop";
import Tattoos from "./layout/Tattoos";
import GiftCards from "./layout/GiftCards";
import Aftercare from "./layout/AfterCare";
import Faq from "./layout/Faq";
import Return from "./Return";
import CheckoutForm from "./CheckoutForm";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/tattoos" element={<Tattoos />} />
          <Route path="/giftcards" element={<GiftCards />} />
          <Route path="/aftercare" element={<Aftercare />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/return" element={<Return />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
