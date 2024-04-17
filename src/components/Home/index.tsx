import style from "./index.module.scss";

const Home = () => {
  return (
    <section className={style.home}>
      <div className={style.heroContent}>
        <h1>
          Lorem ipsum <span>dolor, sit</span>
        </h1>
        <p>
          amet consectetur adipisicing elit. Id repellat obcaecati unde maiores
          deserunt nam, eius cupiditate autem hic architecto quod sapiente
          placeat nobis impedit modi labore. Blanditiis, necessitatibus qui?
        </p>
        <button>explore us</button>
      </div>
      <img
        src="https://www.zebrawebs.com/images/background/digital%20seo.png"
        alt=""
      />
    </section>
  );
};

export default Home;
