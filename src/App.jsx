import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import NavBar from "./components/NavBar/NavBar";
import MobileNavBar from "./components/NavBar/MobileNavBar";
const App = () => {
  return (
    <Router>
      <NavBar />
      <MobileNavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
