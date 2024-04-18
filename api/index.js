const express = require("express");
const bodyParser = require("body-parser");
const { Resend } = require("resend");
const cors = require("cors");

// Load environment variables
require("dotenv").config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  try {
    const { name, email, cname, message } = req.body;

    const emailContent = {
      from: email,
      to: "xyz@abc.com",
      subject: "Let's Connect",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Company Name: ${cname}</p>
        <p>Message: ${message}</p>
      `,
    };

    await resend.emails.send(emailContent);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
