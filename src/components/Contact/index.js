import "./index.scss";
import { React, useRef } from "react";
import satellite from "./img/Satellite.png";
import earth from "./img/Earth.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0qw80ot",
        "template_z5dbgbm",
        refForm.current,
        "7u23sWW-W9vq8Vplg"
      )

      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        (error) => {
          alert("Failed to send the message, please try again", error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="text-zone">
        <h1>Contact</h1>
        <p>Feel free to send me a message</p>

        <div className="contact-animation">
          <section>
            <div className="satellite">
              <img src={satellite} draggable="false" alt="" />
              {/* <div className='radar'>
                                        <div class="Arc Out">
                                            <div class="Arc Middle">
                                                <div class="Arc In"></div>
                                            </div>
                                        </div>
                                    </div> */}
            </div>
            <div className="earth">
              <img src={earth} draggable="false" alt="" />
              {/* <div className='earth-signal'></div>  currently disabled */}
            </div>
          </section>
        </div>

        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input
                  placeholder="Name"
                  type="text"
                  name="from_username"
                  required
                />
              </li>
              <li className="half">
                <input
                  placeholder="Email"
                  type="email"
                  name="email_username"
                  required
                />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject_username"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="send-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
