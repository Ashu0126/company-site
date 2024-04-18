import style from "./index.module.scss";

interface ICard {
  icon: string;
  heading: string;
  desc: string;
  linkText: string;
}

const Card = (props: ICard) => {
  const { icon, heading, desc, linkText } = props;

  const handleClick = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className={style.card}>
      <img src={icon} alt="" />
      <h4>{heading}</h4>
      <p>{desc}</p>
      <a href="javascript.void(0)" onClick={handleClick}>
        {linkText}
      </a>
    </div>
  );
};

export default Card;
