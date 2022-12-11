import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Subscribe from "./pages/Subscribe";
import Footer from "./components/sharedLayout components/Footer";
import Navbar from "./components/sharedLayout components/Navbar";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
