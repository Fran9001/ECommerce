import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Home from "./components/home/home";
import InfiniteSlider from "./components/slider/InfiniteSlider";

function App() {
  return (
    <div className="App bg-zinc-100">
      <Navbar />
      <Hero />
      <InfiniteSlider />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
