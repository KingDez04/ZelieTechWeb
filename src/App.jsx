import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import NavBar from "./components/NavBar/NavBar";
import MobileNavBar from "./components/NavBar/MobileNavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <Router>
      <NavBar />
      <MobileNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
