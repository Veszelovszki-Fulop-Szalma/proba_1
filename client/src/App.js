import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Kotveny from "./pages/Kotveny/Kotveny";
import Kripto from "./pages/Kripto/Kripto";
import Reszveny from "./pages/Reszveny/Reszveny";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/kotveny" element={<Kotveny />} />
          <Route path="/Kripto" element={<Kripto />} />
          <Route path="/Reszveny" element={<Reszveny />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
