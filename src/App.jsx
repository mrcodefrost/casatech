import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-dark text-light min-h-screen overflow-x-hidden">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="projects"><Projects /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
};

export default App;
