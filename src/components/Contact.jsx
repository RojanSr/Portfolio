import React from "react";

const Contact = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    window.alert("Submitted!");
  }

  return (
    <div className="contact-main" id="contact-section">
      <h2 className="contact--title">Contact me</h2>
      <form className="contact--form">
        <div className="personal-detail">
          <label htmlFor="">Username</label>
          <input type="text" required />
          <label htmlFor="">Email</label>
          <input type="email" required />
        </div>
        <div className="comment">
          <label htmlFor="">Comment</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="comment"
            required
          ></textarea>
          <button onClick={handleSubmit}>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
