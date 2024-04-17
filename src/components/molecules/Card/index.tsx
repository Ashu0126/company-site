import style from "./index.module.scss";

const Card = () => {
  return (
    <div className={style.card}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/5738/5738077.png"
        alt=""
      />
      <h4>App Development</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        assumenda nihil sint? Nam aliquid natus excepturi expedita perspiciatis,
        minus
      </p>
      <a href="javascript.void(0)">Explore</a>
    </div>
  );
};

export default Card;
