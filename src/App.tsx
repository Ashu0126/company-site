import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import style from "./styles/app.module.scss";

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <section className={style.home}>
        <div className={style.heroContent}>
          <h1>
            Lorem ipsum <span>dolor, sit</span>
          </h1>
          <p>
            amet consectetur adipisicing elit. Id repellat obcaecati unde
            maiores deserunt nam, eius cupiditate autem hic architecto quod
            sapiente placeat nobis impedit modi labore. Blanditiis,
            necessitatibus qui?
          </p>
          <button>explore us</button>
        </div>
        <img
          src="https://www.zebrawebs.com/images/background/digital%20seo.png"
          alt=""
        />
      </section>
      <section>
        <OurServices />
      </section>
      <section>
        <h2>About Us</h2>
      </section>
      <ContactUs />
    </div>
  );
}

export default App;
