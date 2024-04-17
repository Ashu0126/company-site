import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import style from "./styles/app.module.scss";

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <Home />
      <AboutUs />
      <OurServices />
      <ContactUs />
    </div>
  );
}

export default App;
