import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import About from "./About";
import TestimonialCards from "./Comments";
import Contact from "./Contact";
import Faq from "./Faq";
import Features from "./Features";
import Home from "./Home";
import Trending from "./Trending";

const Dashboard = () => {
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
};

export default Dashboard;
