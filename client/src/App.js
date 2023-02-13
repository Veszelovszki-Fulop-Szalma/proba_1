import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Kotveny from "./pages/Kotveny/Kotveny";
import Kripto from "./pages/Kripto/Kripto";
import Reszveny from "./pages/Reszveny/Reszveny";
import Footer from "./components/Footer";

import Belepes from "./pages/Belepes/Belepes";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/kotveny" element={<Kotveny />} />
          <Route path="/Kripto" element={<Kripto />} />
          <Route path="/Reszveny" element={<Reszveny />} />
          <Route path="/Belepes" element={<Belepes />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
