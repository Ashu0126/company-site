import style from "./styles/app.module.scss";

function App() {
  return (
    <div className={style.app}>
      <section className={style.home}>
        <div className={style.navbar}>
          <h3>COMPANY NAME</h3>
          <ul>
            <li>services</li>
            <li>about us</li>
            <li>contact us</li>
          </ul>
        </div>
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
      </section>
      <section>
        <h2>Our Services</h2>
      </section>
      <section>
        <h2>About Us</h2>
      </section>
      <section>
        <h2>Contact Us</h2>
      </section>
    </div>
  );
}

export default App;
