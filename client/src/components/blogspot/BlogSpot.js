import React from "react";
import PropTypes from "prop-types";
import "./BlogSpot.css";
import article1img from "../../img/article1img.jpg";
import article2img from "../../img/article2img.jpg";
import article3img from "../../img/article3img.jpg";
import article4img from "../../img/article4img.jpg";
import { Link } from "react-router-dom";

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
              <Link to='blog/article1'>
                <h4 className='titleHeaders'>
                  READY TO BUY A HOME TOGETHER? 4 SCENARIOS TO TALK THROUGH WITH
                  A PARTNER
                </h4>
                <img className='articleImgs' src={article1img} alt='' />

                <h6>
                  <em>Wedding or not, homeownership can be for anyone.</em>
                </h6>
              </Link>
            </div>
            <div className='articleItem'>
              <Link to='blog/article2'>
                <h4 className='titleHeaders'>
                  First CEO: Why We Chose RE/MAX{" "}
                </h4>
                <img className='articleImgs' src={article2img} alt='' />

                <h6>
                  <em>
                    RE/MAX announces acquisition of First, the intelligent
                    coaching platform. “It was refreshing to find a brand
                    committed to developing products that truly improve
                    productivity and success,” writes First CEO &amp;
                    Co-Founder.
                  </em>
                </h6>
              </Link>
            </div>
            <div className='articleItem'>
              <Link to='blog/article3'>
                <h4 className='titleHeaders'>
                  NEW YEAR, NEW HOME: 6 RESOLUTIONS FOR BUYING A HOME IN 2020
                </h4>
                <img className='articleImgs' src={article3img} alt='' />

                <h6>
                  <em>
                    Real estate agents say starting early is key when it comes
                    to buying a first home.
                  </em>
                </h6>
              </Link>
            </div>
            <div className='articleItem'>
              <Link to='blog/article4'>
                <h4 className='titleHeaders'>
                  4 NEGOTIATION TACTICS YOUR REAL ESTATE AGENT KNOWS
                </h4>
                <img className='articleImgs' src={article4img} alt='' />

                <h6>
                  <em>
                    Experience can make the most dramatic difference during a
                    home purchase. 3
                  </em>
                </h6>
              </Link>
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
