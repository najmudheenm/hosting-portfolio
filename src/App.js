// global style
import GlobalStyle from "./components/GlobelStyle";

//import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetails from "./pages/MovieDetails";

//Router
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />

      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="work" element={<OurWork />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="work/:id" element={<MovieDetails />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
