import axios from "axios";
import style from "./index.module.scss";
import Button from "../../atoms/Button";
import data from "./../../../data/contact.json";
import Input from "../../atoms/Input";

const ContactUs = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const payload: any = {};

    data?.form?.inputField?.forEach((input: any) => {
      payload[input?.name] = formData.get(input?.name);
    });

    try {
      const response = await axios.post(
        "https://company-site-api.vercel.app/send-email",
        payload
      );

      if (response.status === 200) {
        alert("Email sent successfully!");
        e.target.reset();
      } else {
        console.error("Failed to send email");
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
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
            alt="Mail Icon"
          />
          <p>xyz@abc.com</p>
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        {data?.form?.inputField?.map(
          (input: {
            name: string;
            placeholder: string;
            icon: string;
            type: string;
          }) => (
            <Input
              name={input?.name}
              placeholder={input?.placeholder}
              icon={input?.icon}
              type={input?.type}
            />
          )
        )}
        <Button
          icon={
            "https://icons.iconarchive.com/icons/iconsmind/outline/512/Paper-Plane-icon.png"
          }
          type="submit"
        >
          {data?.form?.btnText}
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
