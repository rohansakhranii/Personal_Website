import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import StatsPanel from "./components/StatsPanel";
import About from "./components/About";
import GamePath from "./components/GamePath";
import Skills from "./components/Skills";
import Products from "./components/Products";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Navbar />
      <Header />
      <ProgressBar />
      <StatsPanel />
      <About />
      <GamePath />
      <Skills />
      <Products />
      <Footer />
    </div>
  );
}
