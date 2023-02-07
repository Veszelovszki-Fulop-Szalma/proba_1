import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Kotveny from "./pages/Kotveny/Kotveny";
import Kripto from "./pages/Kripto/Kripto";
import Reszveny from "./pages/Reszveny/Reszveny";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/kotveny",
//     element: <Kotveny />,
//   },
//   {
//     path: "/reszveny",
//     element: <Reszveny />,
//   },
//   {
//     path: "/kripto",
//     element: <Kripto />,
//   },
// ]);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/kotveny" element={<Kotveny />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
