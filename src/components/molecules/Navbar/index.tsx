import style from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <h3>COMPANY NAME</h3>
      <ul>
        <li>services</li>
        <li>about us</li>
        <li>contact us</li>
      </ul>
    </div>
  );
};

export default Navbar;
