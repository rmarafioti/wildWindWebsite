import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
/*import Root from "./Root";*/
import Home from "./Home";
import Contact from "./Contact";
import Shop from "./Shop";
import Tattoos from "./Tattoos";
import GiftCards from "./GiftCards";
import Aftercare from "./AfterCare";
import Faq from "./Faq";
import Return from "./Return";
import CheckoutForm from "./CheckoutForm";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/*<Route path="/" element={<Root />} />*/}
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
        <Footer />
      </Router>
    </div>
  );
};

export default App;
