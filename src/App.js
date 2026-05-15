import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueProp from "./components/ValueProp";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import FinalCTA from "./components/Contact";
import Team from "./components/Team";
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs/>
      <ValueProp />
      <Team/>
      <Services />
      <HowItWorks />
      <Projects />
      <Testimonials />
      <FinalCTA/>
      <Footer />
    </div>
  );
}