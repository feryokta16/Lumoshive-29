import React, { useState } from "react";
import TitlePageComponent from "../TitlePage/TitlePageComponent";
import "./FormContactStyles.css";
import DOMPurify from "dompurify";

const FormContactComponent = ({ page }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(DOMPurify.sanitize(event.target.value));
  };
  const handleEmailChange = (event) => {
    setEmail(DOMPurify.sanitize(event.target.value));
  };
  const handlePhoneChange = (event) => {
    setPhone(DOMPurify.sanitize(event.target.value));
  };
  const handleMessageChange = (event) => {
    setMessage(DOMPurify.sanitize(event.target.value));
  };
  console.log(name, email, phone, message);
  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanedName = DOMPurify.sanitize(name);
    const cleanedEmail = DOMPurify.sanitize(email);
    const cleanedPhone = DOMPurify.sanitize(phone);
    const cleanedMessage = DOMPurify.sanitize(message);
    console.log(cleanedName, cleanedEmail, cleanedPhone, cleanedMessage);
  };
  return (
    <div
      className={`container-fluid ${
        page === "home" ? "bg-contact-second" : "bg-color-container-contact"
      }`}
    >
      <TitlePageComponent
        title="Get In Touch"
        description="Hey! Lets Talk"
        page={page}
      />

      <div className="container">
        <div className="row">
          <div className="col-md" />
          <form onSubmit={handleSubmit} className="col-md-8 card p-4 mb-5 me-3">
            <div className="my-3">
              <input
                type="text"
                className="form-control bg-input-contact py-2"
                id="name"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control bg-input-contact py-2"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control bg-input-contact py-2"
                id="phone"
                placeholder="Phone"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control bg-input-contact py-2"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Your Message"
                value={message}
                onChange={handleMessageChange}
              ></textarea>
            </div>
            <button type="submit" className="btn-custom-contact">
              Send Now
            </button>
          </form>
          <div className="col-md-3 card p-4 mb-5">
            <div className="d-flex flex-column">
              <div>
                <div className="d-flex align-items-center">
                  <div className="p-2 color-primary-contact ">
                    <i className="icon-contact border bg-body-tertiary rounded bi bi-telephone-inbound-fill  fs-4"></i>
                  </div>
                  <div className="p-2 flex-grow-1">
                    <p className="mb-0 fw-bold color-primary-contact ">
                      Call Anytime
                    </p>
                    <p>
                      + 91 23678 27867 <br /> + 91 67678 92878
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div className="p-2 color-primary-contact ">
                    <i className=" icon-contact border bg-body-tertiary rounded bi bi-envelope-fill  fs-4"></i>
                  </div>
                  <div className="p-2 flex-grow-1">
                    <p className="mb-0 fw-bold color-primary-contact">
                      Send Email
                    </p>
                    <p>
                      connect@itfirms.com <br />
                      hello@itfirms.com
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div className="p-2 color-primary-contact ">
                    <i className=" icon-contact border bg-body-tertiary rounded bi bi-geo-alt-fill  fs-4"></i>
                  </div>
                  <div className="p-2 flex-grow-1">
                    <p className="mb-0 fw-bold color-primary-contact">
                      Visit Us
                    </p>
                    <p>
                      20 Island Park Road, <br />
                      New Jearsy, New York,
                    </p>
                  </div>
                </div>
              </div>
              <h5 className="fw-bold text-center mb-3">Follows Us</h5>
              <div className="d-flex flex-row mb-3 justify-content-center text-white">
                <a
                  href="https://www.linkedin.com/feed/"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <i className="border bg-primary-contact icon-contact rounded bi bi-linkedin fs-4 me-2"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <i className="border bg-primary-contact icon-contact rounded bi bi-instagram fs-4 me-2"></i>
                </a>
                <a
                  href="https://www.facebook.com/?locale=id_ID"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <i className="border bg-primary-contact icon-contact rounded bi bi-facebook fs-4 me-2"></i>
                </a>
                <a
                  href="https://x.com/i/flow/login"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <i className="border bg-primary-contact icon-contact rounded bi bi-twitter fs-4 me-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md" />
        </div>
      </div>
    </div>
  );
};

export default FormContactComponent;
