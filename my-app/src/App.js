import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Subscribe from "./pages/Subscribe";
import Footer from "./components/sharedLayout components/Footer";
import Navbar from "./components/sharedLayout components/Navbar";
import { useContext, useState } from "react";
import React from "react";
import useSubscribe from "./custom-hooks/useSubscribe";
export const ShowSubscribeModalContext = React.createContext();
export const SetSubscribeModalContext = React.createContext();
export const FormContext = React.createContext();

function App() {
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const { dispatchHandler, selectedOptions, price } = useSubscribe();
  const formObj = { ...selectedOptions, dispatchHandler };
  const navBarObj = { price, ...selectedOptions, showSubscribeModal };

  return (
    <>
      <ShowSubscribeModalContext.Provider value={navBarObj}>
        <Navbar></Navbar>
      </ShowSubscribeModalContext.Provider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/subscribe"
          element={
            <SetSubscribeModalContext.Provider value={setShowSubscribeModal}>
              <FormContext.Provider value={formObj}>
                <Subscribe />
              </FormContext.Provider>
            </SetSubscribeModalContext.Provider>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
