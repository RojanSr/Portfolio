import React from "react";

const Contact = () => {
  return (
    <footer>
      <div className="contact-main" id="contact-section">
        <h2 className="contact--title">
          Contact <span className="highlight-text">me</span>
        </h2>
        <form className="contact--form">
          <div className="personal-detail">
            <label htmlFor="">Username</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className="comment">
            <label htmlFor="">Comment</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="comment"
            ></textarea>
            <button>Send</button>
          </div>
        </form>
      </div>
      <div className="social-main">
        <a
          href="https://github.com/RojanSr"
          target="_blank"
          className="social-icon"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/RojanSr0730"
          target="_blank"
          className="social-icon"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rojan-rai-460879268/"
          target="_blank"
          className="social-icon"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Contact;
