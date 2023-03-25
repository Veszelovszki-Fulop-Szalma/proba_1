import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Kotveny from './pages/Kotveny/Kotveny';
import Kripto from './pages/Kripto/Kripto';
import Reszveny from './pages/Reszveny/Reszveny';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio/Portfolio';

import Belepes from './pages/Belepes/Belepes';
import Regis from './pages/Regis/Regis';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Kosar from './pages/Kosar/Kosar';
import Rendeles from './pages/Rendeles/Rendeles';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/kotveny" element={<Kotveny />} />
                    <Route path="/Kripto" element={<Kripto />} />
                    <Route path="/Reszveny" element={<Reszveny />} />
                    <Route path="/Belepes" element={<Belepes />} />
                    <Route path="/Regis" element={<Regis />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                    <Route path="/Kosar/:id" element={<Kosar />} />
                    <Route path="/Rendeles" element={<Rendeles />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
