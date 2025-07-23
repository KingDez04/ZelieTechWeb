import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import NavBar from "./components/NavBar/NavBar";
import ArticleNav from "./components/ArticleNav/ArticleNav";
import Home from "./components/Home/Home";
// import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Insights from "./components/Insights/Insights";
import FirstArticle from "./components/Insights/Articles/FirstArticle";
import SecondArticle from "./components/Insights/Articles/SecondArticle";
import ThirdArticle from "./components/Insights/Articles/ThirdArticle";
import FourthArticle from "./components/Insights/Articles/FourthArticle";
import FifthArticle from "./components/Insights/Articles/FifthArticle";
import Launch from "./components/Launch/Launch";
import Join from "./components/Join/Join";
import Contact from "./components/Contact/Contact";

const App = () => {
  const location = useLocation();

  const renderNavBar = () => {
    if (location.pathname.includes("/insights/")) {
      return <ArticleNav />;
    }
    return <NavBar />;
  };

  return (
    <>
      {renderNavBar()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/firstArticle" element={<FirstArticle />} />
        <Route path="/insights/secondArticle" element={<SecondArticle />} />
        <Route path="/insights/thirdArticle" element={<ThirdArticle />} />
        <Route path="/insights/fourthArticle" element={<FourthArticle />} />
        <Route path="/insights/fifthArticle" element={<FifthArticle />} />
        <Route path="/launch" element={<Launch />} />
        <Route path="/join-us" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
