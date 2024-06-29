import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
/*import Root from "./Root";*/
import Home from "./features/Home";
import Contact from "./features/Contact";
import RequestAppt from "./features/RequestAppt";
import Shop from "./features/Shop";
import Tattoos from "./features/Tattoos";
import GiftCards from "./features/GiftCards";
import Care from "./features/Care";
import Faq from "./features/Faq";
import Return from "./features/Return";
import CheckoutForm from "./features/CheckoutForm";
import RequestSent from "./features/RequestSent";
import Reviews from "./features/Reviews";
import Media from "./features/Media";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/*<Route path="/" element={<Root />} />*/}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/requestappt" element={<RequestAppt />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/tattoos" element={<Tattoos />} />
          <Route path="/giftcards" element={<GiftCards />} />
          <Route path="/aftercare" element={<Care />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/return" element={<Return />} />
          <Route path="/requestsent" element={<RequestSent />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/media" element={<Media />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
