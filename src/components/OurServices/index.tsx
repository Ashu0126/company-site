import Card from "../Card";
import style from "./index.module.scss";

const OurServices = () => {
  return (
    <div className={style.serviceContainer}>
      <div className={style.header}>
        <h6>OUR SERVICES</h6>
        <h2>We Do Everything</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
          recusandae dolore. Quam non repellendus, rem est animi quo excepturi
          libero, harum delectus quia odio esse illum. Accusamus vel provident
          totam.
        </p>
      </div>
      <div className={style.services}>
        <div className={style.serviceCards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
