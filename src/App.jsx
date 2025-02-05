import Navbar from "./Components/Navbar";
import About from "./Pages/About";
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
    </div>
  );
}

export default App;
