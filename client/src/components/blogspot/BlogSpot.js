import React from "react";
import PropTypes from "prop-types";
import "./BlogSpot.css";
import article1img from "../../img/article1img.jpg";
import article2img from "../../img/article2img.jpg";
import article3img from "../../img/article3img.jpg";
import article4img from "../../img/article4img.jpg";

import ContactForm from "../layout/contactForm/ContactForm";

const BlogSpot = props => {
  const listing = {};

  return (
    <div>
      <div className='jumbotron jumbotron-fluid blog-jumbo'>
        <div class='container'>
          <h1 class='display-4'>BlogSpot</h1>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div id='articlesRow' className='col-lg-8 col-md-8 col-sm-12'>
            <div className='articleItem'>
              <img className='articleImgs' src={article1img} alt='' />
              <h4 className='articleHeaders'>
                READY TO BUY A HOME TOGETHER? 4 SCENARIOS TO TALK THROUGH WITH A
                PARTNER
              </h4>
            </div>
            <div className='articleItem'>
              <img className='articleImgs' src={article2img} alt='' />
              <h4 className='articleHeaders'>
                READY TO BUY A HOME TOGETHER? 4 SCENARIOS TO TALK THROUGH WITH A
                PARTNER
              </h4>
            </div>
            <div className='articleItem'>
              <img className='articleImgs' src={article3img} alt='' />
              <h4 className='articleHeaders'>
                READY TO BUY A HOME TOGETHER? 4 SCENARIOS TO TALK THROUGH WITH A
                PARTNER
              </h4>
            </div>
            <div className='articleItem'>
              <img className='articleImgs' src={article4img} alt='' />
              <h4 className='articleHeaders'>
                READY TO BUY A HOME TOGETHER? 4 SCENARIOS TO TALK THROUGH WITH A
                PARTNER
              </h4>
            </div>
          </div>
          <ContactForm listing={listing} placeHolder={"Send us a message"} />{" "}
        </div>
      </div>
    </div>
  );
};

BlogSpot.propTypes = {};

export default BlogSpot;
