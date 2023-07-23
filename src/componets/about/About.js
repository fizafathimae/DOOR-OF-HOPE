import React from "react";
import "./About.css";
function About() {
  return (
    <div>
      <div className="section3">
        <div className="container5">
          <div className="content-section3">
            <div className="title">
              <h1 align="center">ABOUT US</h1>
            </div>
            <div className="content">
              <h3> WELCOME TO THE FAMILY!</h3>
              <p>
                So take a look around our website; meet the team, see what we
                do. We would love to get to know you more, learn about how you
                heard of our organization and also hear any thoughts or ideas
                that you might have. if you are interested in volunteering or
                donating, please click the appropriate buttons above. We cannot
                do this work alone so we're glad you're here.We are a family,
                where love guides us all as we grow and expand year after year.
                Not just a regular children's home, we are a nearly
                self-sustaining organization; recieving no government assistance
                of any kind. Take a look around and if you have any question
                just get in contact with us via the menu above.
                <br />
                Welcome to the family!
              </p>
            </div>
            <div className="button">
              <a href="">Read More</a>
            </div>

            <div className="social">
              <a href="">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
