import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import TestimonialCards from "./Pages/Comments";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import Features from "./Pages/Features";
import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
// import LetterGlitch from "./Letter";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Trending />
      <About />
      <Features />
      <Faq />
      <Contact />
      <TestimonialCards />
      <Footer />
    </div>
  );
}

export default App;
