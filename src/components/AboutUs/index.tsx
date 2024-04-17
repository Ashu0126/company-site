import Button from "../Button";
import style from "./index.module.scss";

const AboutUs = () => {
  return (
    <div className={style.aboutUsContainer}>
      <img
        src="https://png.pngtree.com/png-vector/20221024/ourmid/pngtree-hands-holding-symbols-of-different-programming-languages-png-image_6346899.png"
        alt=""
      />
      <div className={style.content}>
        <h6>ABOUT US</h6>
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus molestias exercitationem aut aspernatur ipsum quasi
          dolore totam, sint natus sit amet consectetur adipisicing elit. Velit,
          expedita! Animi
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          esse impedit sunt nemo est molestiae quod error adipisci, nostrum
          soluta blanditiis placeat amet explicabo pariatur animi eveniet nam
          dolore repellendus?Lorem ipsum dolor quibusdam
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

export default AboutUs;
