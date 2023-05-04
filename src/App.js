import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import About from "./components/Sessions/About/About";
import Contact from "./components/Sessions/Contact/Contact";
import Home from "./components/Sessions/Home/Home";
import Services from "./components/Sessions/Services/Services";
import Workshop from "./components/Sessions/Workshop/Workshop";


function App() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <PhotoGallery />
      <Workshop />
      <Contact />
    </>
  );
}

export default App;
