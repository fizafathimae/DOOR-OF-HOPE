import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <p>
            <i>Dear visitor,</i>
            <br />
            We know that once you have read all about us, you would not like to
            leave without getting to know a little more about us or clarifying
            some of the questions that may have just popped into your head! We
            know you care for them just as we do. We are sure that some of you
            would want to really come down, see who we are and what we actually
            do.
          </p>
        </div>
        <div className="container4">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"></div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  563 Sugar Camp Road,
                  <br />
                  Owatonna,Minnascota,
                  <br />
                  673987
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon"></div>
              <div className="text">
                <h3>Phone</h3>
                <p>0495-234567</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"></div>
              <div className="text">
                <h3>Email</h3>
                <p>abc@yawee.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2> Send Message</h2>
            <div className="inputBox">
              <input type="text" name="" required="required" />
            </div>
            <span>Full name</span>
          </form>

          <form>
            {" "}
            <div className="inputBox">
              <input type="text" name="" required="required" />
            </div>
            <span>Email</span>
          </form>

          <form>
            {" "}
            <div className="inputBox">
              <textarea required="required"></textarea>
            </div>
            <span>Type your message...</span>
          </form>

          <form>
            {" "}
            <div className="inputBox">
              <input type="submit" name="" value="Send" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
