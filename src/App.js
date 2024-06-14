import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/navbar/navbar";
import Footer from "./components/layout/footer/footer";
import Home from "./components/pages/home/home";
import About from "./components/pages/about/about";
import Contact from "./components/pages/contact/contact";
import Storage from "./components/pages/category/storage";

function App() {
  return (
    <Router>
      <div className="App bg-zinc-100 dark:bg-stone-400">
        <Navbar />
        <Routes>
          <Route path="/ecommerce" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/products/storage" element={<Storage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
