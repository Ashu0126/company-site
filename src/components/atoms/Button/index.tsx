import style from "./index.module.scss";

interface Ibutton {
  children: string;
  icon?: string;
  type?: "submit" | "reset" | "button";
}

const Button = (props: Ibutton) => {
  const { children, icon, type = "button" } = props;

  return (
    <button className={style.btn} type={type}>
      {icon && <img src={icon} alt="icon" />}
      {children}
    </button>
  );
};

export default Button;
