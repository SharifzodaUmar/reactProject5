import { useState } from "react";

import "./App.css";
import logo from "./assets/logo.png";
import dog from "./assets/dog.png";
import n1 from "./assets/n1.png";
import n2 from "./assets/n2.png";
import n3 from "./assets/n3.png";
import social from "./assets/social.png";
import surat1 from "./assets/surat1.png";
import surat2 from "./assets/surat2.png";
import surat3 from "./assets/surat3.png";
import surat4 from "./assets/surat4.png";
import surat5 from "./assets/surat5.png";
import surat6 from "./assets/surat6.png";
import surat7 from "./assets/surat7.png";
import surat8 from "./assets/surat8.png";
import surat9 from "./assets/surat9.png";
import surat10 from "./assets/surat10.png";
import wave from "./assets/wave.png";
import wave2 from "./assets/wave2.png";
import shape from "./assets/shape.png";

function App() {
  return (
    <div>
      <header>
        <div className="headerDiv1">
          <img src={logo} alt="" />
          <p>Life insurance</p>
          <p>Why Bello</p>
          <p>Help</p>
        </div>
        <div className="headerDiv2">
          <p>Log in</p>
          <button>Get my price</button>
        </div>
      </header>
      <hr />

      <section className="section-1">
        <div className="sec1Div">
          <p style={{ color: "#F46752", fontSize: "18px", fontWeight: "600" }}>
            MEET BELLO
          </p>
          <p style={{ fontWeight: "600", fontSize: "64px" }}>
            A new kind of life insurance
          </p>
          <p style={{ color: "#5A6482", fontSize: "22px", fontWeight: "500" }}>
            Secure your family's financial future, <br /> in as little as 10
            minutes.
          </p>
          <button>
            Get my price <img src={shape} alt="" />
          </button>
        </div>
        <img className="surat1" src={surat1} alt="" />
      </section>

      <section className="section-2">
        <img src={surat2} alt="" />
        <div>
          <p style={{ color: "#F46752", fontSize: "18px", fontWeight: "600" }}>
            Secure your future
          </p>
          <p style={{ fontWeight: "600", fontSize: "44px" }}>
            It’s more affordable <br /> than you think
          </p>
          <p style={{ color: "#5A6482", fontSize: "22px", fontWeight: "500" }}>
            Life insurance shouldn’t be confusing or expensive. Bello’s term
            life insurance makes protecting your loved ones easy and affordable.
          </p>
          <p>Get My Price ➡️</p>
        </div>
      </section>

      <section className="section-3">
        <div>
          <p style={{ color: "#F46752", fontSize: "18px", fontWeight: "600" }}>
            Technology meets service
          </p>
          <p style={{ fontWeight: "500", fontSize: "45px" }}>
            We're here to help
          </p>
          <p style={{ color: "#5A6482", fontSize: "22px", fontWeight: "500" }}>
            Bella, our smart bot, can guide you to your perfect <br /> policy.
            There’s also human help whenever you need it.
          </p>
          <p>Get help ➡️</p>
        </div>
        <img src={surat3} alt="" />
      </section>

      <section className="section-4">
        <div className="topDiv">
          <p
            style={{
              marginTop: "60px",
              color: "#F46752",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            Technology meets service
          </p>
          <p style={{ fontWeight: "500", fontSize: "43px" }}>
            You’re in safe hands
          </p>
          <p style={{ color: "#5A6482", fontSize: "19px" }}>
            We've partnered with, [insert underwriter], one of the world’s
            largest, most trusted insurance companies. This <br /> means we can
            ensure reliability in paying Claims.
          </p>
        </div>
        <div className="BottomDiv">
          <article>
            <img src={surat5} alt="" />
            <p style={{ color: "#1D253C", fontSize: "24px" }}>Top-Rated</p>
            <p>
              A+ Financial Strength Rating by <br /> A.M. Best. What does this
              mean?
            </p>
          </article>
          <article>
            <img src={surat6} alt="" />
            <p style={{ color: "#1D253C", fontSize: "24px" }}>
              Expert guidance
            </p>
            <p>
              We've placed millions of dollars in coverage <br /> people
              nationwide.
            </p>
          </article>
          <article>
            <img src={surat7} alt="" />
            <p style={{ color: "#1D253C", fontSize: "24px" }}>We care</p>
            <p>
              A+ Financial Strength Rating by <br /> A.M. Best. What does this
              mean?
            </p>
          </article>
        </div>
      </section>
      <img className="surat4" src={surat4} alt="" />
      <img className="dog" src={dog} alt="" />

      <section className="section-5">
        <article>
          <p style={{ color: "#F46752", fontWeight: "500" }}>How it works</p>
          <p style={{ fontSize: "44px", fontWeight: "500", color: "white" }}>
            Affordable life insurance in minutes
          </p>
          <p style={{ color: "#ACB4BF", fontSize: "19px" }}>
            We use technology to save you time and money – no pushy sales
            agents, <br /> paperwork, or extra fees. Just a few clicks and
            you’re done.
          </p>
          <div className="sec5Div">
            <div className="sec5Card">
              <img src={n1} alt="" />
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "22px",
                  fontWeight: "600",
                }}
              >
                Get My Price
              </p>
              <p style={{ color: "#ACB4BF", fontSize: "16px" }}>
                Choose the amount that you <br /> would like to be covered for{" "}
                <br /> and we’ll give you a quote.
              </p>
            </div>
            <div className="sec5Card">
              <img src={n2} alt="" />
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "22px",
                  fontWeight: "600",
                }}
              >
                Apply
              </p>
              <p style={{ color: "#ACB4BF", fontSize: "16px" }}>
                Answer a few questions and <br /> get your final price.
              </p>
            </div>
            <div className="sec5Card">
              <img src={n3} alt="" />
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "22px",
                  fontWeight: "600",
                }}
              >
                You’re Covered
              </p>
              <p style={{ color: "#ACB4BF", fontSize: "16px" }}>
                Choose the amount that you <br /> would like to be covered for{" "}
                <br /> and we’ll give you a quote.
              </p>
            </div>
            <img className="wave" src={wave} alt="" />
          </div>{" "}
          <img className="wave2" src={wave2} alt="" />
          <button className="btn">Get my price</button>
        </article>
      </section>

      <section className="section-2">
        <img src={surat8} alt="" />
        <div>
          <p style={{ color: "#F46752", fontSize: "18px", fontWeight: "600" }}>
            You've Got This
          </p>
          <p style={{ fontWeight: "600", fontSize: "44px" }}>
            Everything you need— <br />
            completely free
          </p>
          <p style={{ color: "#5A6482", fontSize: "22px", fontWeight: "500" }}>
            Life insurance shouldn’t be confusing or expensive. Bello’s term
            life insurance makes protecting your loved ones easy and affordable.
          </p>
          <p>Visit Learning Center ➡️</p>
        </div>
      </section>

      <section className="section-7">
        <article style={{ backgroundColor: "#A9D8FF4D" }}>
          <p style={{ color: "#7CAFDD", fontSize: "34px", fontWeight: "600" }}>
            Calculator
          </p>
          <p style={{ color: "#5A6482", fontSize: "16px" }}>
            How much life insurance do I <br /> need?
          </p>
          <p style={{ color: "#7CAFDD", fontSize: "16px", fontWeight: "600" }}>
            Calculate Coverage ➡️
          </p>
        </article>
        <article style={{ backgroundColor: "#FFAE684D" }}>
          <p style={{ color: "#E79751", fontSize: "34px", fontWeight: "600" }}>
            Term vs. <br /> perm
          </p>
          <p style={{ color: "#5A6482", fontSize: "16px" }}>
            Term vs. whole life insurance. <br /> Which is best for you?
          </p>
          <p style={{ color: "#E79751", fontSize: "16px", fontWeight: "600" }}>
            See the winner ➡️
          </p>
        </article>
        <article style={{ backgroundColor: "#FA52404D" }}>
          <p style={{ color: "#FA5240", fontSize: "34px", fontWeight: "600" }}>
            Pricing
          </p>
          <p style={{ color: "#5A6482", fontSize: "16px" }}>
            Term vs. whole life insurance. <br /> Which is best for you?
          </p>
          <p style={{ color: "#FA5240", fontSize: "16px", fontWeight: "600" }}>
            Tell me more ➡️
          </p>
        </article>
        <article style={{ backgroundColor: "#126F854D" }}>
          <p style={{ color: "#126F85", fontSize: "34px", fontWeight: "600" }}>
            Insurance <br />
            101
          </p>
          <p style={{ color: "#5A6482", fontSize: "16px" }}>
            Term vs. whole life insurance. <br /> Which is best for you?
          </p>
          <p style={{ color: "#126F85", fontSize: "16px", fontWeight: "600" }}>
            Become an expert ➡️
          </p>
        </article>
      </section>

      <section className="section-8">
        <div className="sec8Div">
          <article>
            <p style={{ fontSize: "44px", fontWeight: "600" }}>
              Get Started Today.
            </p>
            <p style={{ color: "#676562", fontSize: "19px" }}>
              Join the Bello community of people who are securing their
              financial future.
            </p>
            <button className="btn">Get my price</button>
          </article>
        </div>

        <img className="surat9" src={surat9} alt="" />
        <img className="surat10" src={surat10} alt="" />
      </section>

      <section className="section-9">
        <div className="sec9Left">
          <img src={logo} alt="" />
          <p style={{'color':'#5A6482'}}>
            Bello is a trading name of Bello Insurance Services <br /> LLC. Bello
            policies are issued by [Insert Underwriter <br /> here].{" "}
          </p>
          <div style={{'width':'346px','height':'60px','border':'1px solid grey', display:'flex','justifyContent':'end'}}>
            <p style={{'backgroundColor':'#126F85','width':'84px','height':'60px ','marginRight':'40px',color:'white',display:'flex','justifyContent':'center',alignItems:'center' }}>Go ➡️</p>
           
          </div> <img src={social} alt="" />
        </div>

<article className="sec9Right">
  <div>
    <p style={{'fontSize':'16px'}}>Resources</p>
    <p style={{'color':'#5A6482'}}>Term life insurance plans</p>
    <p style={{'color':'#5A6482'}}>Insurance calculator</p>
    <p style={{'color':'#5A6482'}}>Contact</p>
    <p style={{'color':'#5A6482'}}>FAQs</p>
  </div>
  <div>
    <p style={{'fontSize':'16px'}}>Magazine</p>
    <p style={{'color':'#5A6482'}}>Term life insurance plans</p>
    <p style={{'color':'#5A6482'}}>Insurance calculator</p>
    <p style={{'color':'#5A6482'}}>Contact</p>
    <p style={{'color':'#5A6482'}}>FAQs</p>
  </div>
  <div>
    <p style={{'fontSize':'16px'}}>More</p>
    <p style={{'color':'#5A6482'}}>Term life insurance plans</p>
    <p style={{'color':'#5A6482'}}>Insurance calculator</p>
    <p style={{'color':'#5A6482'}}>Contact</p>
    <p style={{'color':'#5A6482'}}>FAQs</p>
  </div>
</article>




      </section><footer>
  <p>© 2020 Bello insurance Services LLC. All right reserved.</p>
  <button>Get my price</button>
</footer>
    </div>
  );
}

export default App;
