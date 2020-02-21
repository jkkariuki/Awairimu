import React from "react";
import logo from "../../img/logo.jpg";
import "./About.css";
import agentphoto1 from "../../img/agentphoto1.jpg";
import ContactForm from "../layout/contactForm/ContactForm";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";

const About = ({ setAlert }) => {
  const listing = {};
  return (
    <div>
      <div className='jumbotron jumbotron-fluid about-jumbo'>
        <div class='container'>
          <h1 class='display-4'>About</h1>
        </div>
      </div>

      <div style={{ marginTop: "70px" }} className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12 about-item'>
            <h2 className='sectionHeaders'>Our Mission</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
            </p>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 about-item'>
            <h2 className='sectionHeaders'>Philosophy</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
            </p>
          </div>
          <ContactForm listing={listing} placeHolder={"Send us a message"} />{" "}
        </div>

        <h1 id='ourAgents'>Our Agents</h1>

        <div className='row agent-section'>
          <div
            style={{ marginTop: "20px" }}
            className='col-lg-6 col-md-6 col-sm-12'
          >
            <img className='agentPhoto' src={agentphoto1} alt='agent' />

            <h2 className='sectionHeaders'>Agent #1</h2>
            <p className='agentDescript'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
            </p>
          </div>
          <div
            style={{ marginTop: "20px" }}
            className='col-lg-6 col-md-6 col-sm-12'
          >
            <img className='agentPhoto' src={agentphoto1} alt='agent' />

            <h2 className='sectionHeaders'>Agent #2</h2>
            <p className='agentDescript'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { setAlert })(About);
