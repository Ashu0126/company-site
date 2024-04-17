import AboutUs from "./components/organisms/AboutUs";
import ContactUs from "./components/organisms/ContactUs";
import Home from "./components/organisms/Home";
import Navbar from "./components/molecules/Navbar";
import OurServices from "./components/organisms/OurServices";
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
