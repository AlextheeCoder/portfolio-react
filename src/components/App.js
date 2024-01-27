import './App.css';
import Navbar from "./Navbar";
import Intro from "./Intro"
import Aboutme from './Aboutme';
import Services from "./Services"
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <div className="main">
      <Navbar />
      <Intro />
      <Aboutme />
      <Services />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
