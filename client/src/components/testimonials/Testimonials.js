import React from "react";
import PropTypes from "prop-types";
import "./Testimonials.css";
import ContactForm from "../layout/contactForm/ContactForm";

const Testimonials = props => {
  const listing = {};

  return (
    <div>
      <div className='jumbotron jumbotron-fluid reviews-jumbo'>
        <div class='container'>
          <h3 class='display-4'>There for our Clients</h3>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 reviewDiv'>
            <h2 id='testimonialsHeader'>Here's what they are saying...</h2>
            <p className='review'>
              <em>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo."
              </em>
              <p className='reviewerName'>-Jane Doe</p>
            </p>
            <p className='review'>
              <em>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo."
              </em>
              <p className='reviewerName'>-Jane Doe</p>
            </p>
            <p className='review'>
              <em>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo."
              </em>
              <p className='reviewerName'>-Jane Doe</p>
            </p>
            <p className='review'>
              <em>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo."
              </em>
              <p className='reviewerName'>-Jane Doe</p>
            </p>
          </div>
          <ContactForm listing={listing} placeHolder={"Send us a message"} />{" "}
        </div>
      </div>
    </div>
  );
};

Testimonials.propTypes = {};

export default Testimonials;
