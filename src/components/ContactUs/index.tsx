import style from "./index.module.scss";
import axios from "axios";

const ContactUs = () => {
  console.log(process.env.RESEND_API_KEY);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      cname: formData.get("cname"),
      message: formData.get("message"),
    };
    console.log(payload);
    try {
      await axios.post("/api/contact", payload);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={style.contactContainer}>
      <div className={style.context}>
        <h6>CONTACT US</h6>
        <h2>{`Let's Talk!`}</h2>
        <p>We will reach out to you within 24 hours</p>
        <h5>Don't like filling up forms? Email us directly at-</h5>
        <a href="mailto:xyz@abc.com">
          <img
            src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"
            alt=""
          />
          <p>xyz@abc.com</p>
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={style.input}>
          <img
            src="https://cdn-icons-png.freepik.com/256/1077/1077063.png?semt=ais_hybrid"
            alt=""
          />
          <input type="text" placeholder="Name" name="name" />
        </div>
        <div className={style.input}>
          <img
            src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"
            alt=""
          />
          <input type="email" placeholder="Email Address" name="email" />
        </div>
        <div className={style.input}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/1200px-Infobox_info_icon.svg.png"
            alt=""
          />
          <input type="text" placeholder="Company Name" name="cname" />
        </div>
        <div className={style.input}>
          <img
            src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Pencil-icon.png"
            alt=""
          />
          <textarea
            placeholder="How we can help you? Feel free to get in touch!"
            name="message"
          />
        </div>
        <button type="submit">
          <img
            src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Paper-Plane-icon.png"
            alt=""
          />
          Get in Touch
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
