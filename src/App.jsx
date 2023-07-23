import "./App.css";
import HeroSection from "./comonents/HeroSection";
import Nav from "./comonents/Nav";
import Features from "./comonents/Features";
import Testimonials from "./comonents/Testimonials";
import Footer from "./comonents/Footer";

function App() {
  return (
    <div className="">
      <Nav />
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
