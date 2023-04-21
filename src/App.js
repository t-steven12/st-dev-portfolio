/* The following code is derived from the following YouTube tutorial by Clint Briley of the channel "Code Commerce": https://www.youtube.com/watch?v=2kg0z1qNrkw&t=664s */

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
       <Navbar />
       <Home />
       <About />
       <Skills />
       <Work />
       <Contact />
    </div>
  );
}

export default App;
