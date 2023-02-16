import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import SectionDes from "../sectionDes";
import emailJs from "@emailjs/browser";
import "./contact.css";
import Toast from "../toast";

const Contact = () => {
  const theme = useSelector((state) => state.themes.themes);
  const name = useRef();
  const email = useRef();
  const content = useRef();
  // toast
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  // send email
  const sendEmail = (e) => {
    e.preventDefault();
    if (name.current.value && email.current.value && content.current.value) {
      const params = {
        name: name.current.value,
        email: email.current.value,
        content: content.current.value,
      };
      setLoading(true);
      emailJs
        .send("mail_services", "contact_form", params, "0kNxqaLU4ZEojIQZs")
        .then(
          (result) => {
            setLoading(false);
            setMessages((arr) => [...arr, result.text]);
          },
          (error) => {
            setLoading(false);
            setMessages((arr) => [...arr, error.text]);
          }
        );
    } else {
      setMessages((arr) => [...arr, "Bạn phải điền hết các trường thông tin!"]);
    }
  };
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <SectionDes title="Contact" des="Contact me" />
        <div className={`contact-wrap ${theme}`}>
          <div className="contact-component contact-left">
            <h3 className="contact-title">Liên hệ</h3>
            <div className="contact-info">
              <i className="bx bx-phone-call"></i>
              <h4 className="contact-label">Phone</h4>
              <p className="contact-des">(+84) 979 450 816</p>
              <a href="tel: +84979450816" className="contact-action">
                Call me
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
            <div className="contact-info">
              <i className="bx bxl-messenger"></i>
              <h4 className="contact-label">Messenger</h4>
              <p className="contact-des">Nguyễn Duy Hiếu</p>
              <a
                href="https://www.facebook.com/gintoki2701"
                className="contact-action"
                target="_blank"
              >
                Write me
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
          {/* form */}
          <div className="contact-component contact-right">
            <h3 className="contact-title">Email cho mình</h3>
            <div className={`contact-form ${theme}`}>
              <div className="form-div">   
                <label htmlFor="form-name">Name</label>
                <input
                  type="text"
                  name="name"
                  ref={name}
                  className="form-input form-name"
                  placeholder="Input your name"
                  spellCheck="false"
                />
              </div>
              <div className="form-div">
                <label htmlFor="form-email">Email</label>
                <input
                  type="email"
                  name="email"
                  ref={email}
                  className="form-input form-email"
                  placeholder="Input your email"
                  spellCheck="false"
                />
              </div>
              <div className="form-div">
                <label htmlFor="form-textarea">Nội dung email</label>
                <textarea
                  name="content"
                  ref={content}
                  className="form-input form-textarea"
                  cols="30"
                  rows="10"
                  placeholder="Write to me what you want"
                  spellCheck="false"
                ></textarea>
              </div>
              <button
                className={`btn form-submit-btn ${theme}`}
                onClick={sendEmail}
              >
                {loading && (
                  <>
                    Loading
                    <i class="bx bx-loader-alt loading-icon"></i>
                  </>
                )}
                {!loading && (
                  <>
                    Send email
                    <i className="uil uil-message"></i>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="toast">
        {messages.map((message, index) => {
          return <Toast key={index} message={message} />;
        })}
      </div>
    </section>
  );
};

export default Contact;
