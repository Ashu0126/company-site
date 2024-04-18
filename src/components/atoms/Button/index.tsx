import style from "./index.module.scss";

interface Ibutton {
  children: string;
  icon?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

const Button = (props: Ibutton) => {
  const { children, icon, type = "button", disabled = false } = props;

  return (
    <button className={style.btn} type={type} disabled={disabled}>
      {icon && <img src={icon} alt="icon" />}
      {children}
    </button>
  );
};

export default Button;
