import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavbar from "./components/topNavbar/TopNavbar";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home page/Home";
import Teachers from "./pages/cerebellum-teachers/Teachers";
import ContactUs from "./pages/contact-us/ContactUs";
import HelpCenter from "./pages/help-center/HelpCenter";
import LogIn from "./pages/login/LogIn";
import FAQ from "./pages/faq/FAQ";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cerebellum-teachers" element={<Teachers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/faqs" element={<FAQ />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
