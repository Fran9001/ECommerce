import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import Home from './components/home/home';

function App() {
  return (
    <div className="App bg-zinc-100">
      <Navbar />
      <Hero />
      <div className="w-full flex justify-center items-center gap-8 h-fit mb-4 bg-zinc-200">
        <img src={require("./images/brands/Samsung.png")} alt="Samsung logo" className="w-0 md:w-20 lg:w-24 xl:w-32 2xl:w-40 grayscale hover:grayscale-0" />
        <img src={require("./images/brands/Apple.png")} alt="Apple logo" className="w-0 md:w-20 lg:w-24 xl:w-32 2xl:w-40 grayscale hover:grayscale-0"/>
        <img src={require("./images/brands/Motorola.png")} alt="Motorola logo" className="w-0 md:w-20 lg:w-24 xl:w-32 2xl:w-40 grayscale hover:grayscale-0"/>
        <img src={require("./images/brands/Nvidia.png")} alt="Nvidia logo" className="w-0 md:w-20 lg:w-24 xl:w-32 2xl:w-40 grayscale hover:grayscale-0"/>
        <img src={require("./images/brands/Ryzen.png")} alt="Ryzen logo" className="w-0 md:w-20 lg:w-24 xl:w-28 2xl:w-28 grayscale hover:grayscale-0"/>
        <img src={require("./images/brands/Intel.png")} alt="Intel logo" className="w-0 md:w-20 lg:w-24 xl:w-28 2xl:w-28 grayscale hover:grayscale-0"/>
        <img src={require("./images/brands/Logitech.png")} alt="Logitech logo" className="w-0 md:w-20 lg:w-24 xl:w-32 2xl:w-40 grayscale hover:grayscale-0"/>
        <img src={require("./images/brands/Kingston.png")} alt="Kingston logo" className="w-0 md:w-20 lg:w-24 xl:w-32 2xl:w-40 grayscale hover:grayscale-0"/>
        
      </div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
