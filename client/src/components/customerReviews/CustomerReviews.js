import React, { useEffect } from "react";
import PropTypes from "prop-types";
// import img from "../../img/round.png";
import { carousel } from "../layout/carousel";
import "./CustomerReviews.css";
import { connect } from "react-redux";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

//
const CustomerReviews = () => {
  return (
    <div
      style={{
        height: "300px",
        margin: "auto"
      }}
      className='container'
    >
      <CarouselProvider
        style={{
          height: "300px",
          textAlign: "center",
          marginBottom: "40px"
        }}
        naturalSlideWidth={100}
        naturalSlideHeight={10}
        totalSlides={3}
      >
        <Slider style={{ textAlign: "center" }}>
          <Slide index={0}>
            <div className='reviewDiv'>
              <div>
                <img alt='Image placeholder' className='rounded-circle' />
              </div>
              <blockquote>
                <p>
                  &ldquo;Et quidem, impedit eum fugiat excepturi iste aliquid
                  suscipit, tempore, delectus rem soluta <br></br> voluptatem
                  distinctio sed dolores, magni fugit nemo cum expedita. Totam a
                  accusantium sunt aut autem placeat officia.&rdquo;
                </p>
              </blockquote>
              <p>
                <em>&mdash; Jean Smith</em>
              </p>
            </div>
          </Slide>
          <Slide index={1}>
            {" "}
            <div className='reviewDiv'>
              <div>
                <img alt='Image placeholder' className='rounded-circle' />
              </div>
              <blockquote>
                <p>
                  &ldquo;Et quidem, impedit eum fugiat excepturi iste aliquid
                  suscipit, tempore, delectus rem soluta <br></br> voluptatem
                  distinctio sed dolores, magni fugit nemo cum expedita. Totam a
                  accusantium sunt aut autem placeat officia.&rdquo;
                </p>
              </blockquote>
              <p>
                <em>&mdash; Jean Smith</em>
              </p>
            </div>
          </Slide>
          <Slide index={2}>
            {" "}
            <div className='reviewDiv'>
              <div>
                <img alt='Image placeholder' className='rounded-circle' />
              </div>
              <blockquote>
                <p>
                  &ldquo;Et quidem, impedit eum fugiat excepturi iste aliquid
                  suscipit, tempore, delectus rem soluta <br></br> voluptatem
                  distinctio sed dolores, magni fugit nemo cum expedita. Totam a
                  accusantium sunt aut autem placeat officia.&rdquo;
                </p>
              </blockquote>
              <p>
                <em>&mdash; Jean Smith</em>
              </p>
            </div>
          </Slide>
        </Slider>
        <div>
          {" "}
          <ButtonBack>
            <span style={{}}>&#8592;</span>{" "}
          </ButtonBack>
          <ButtonNext>
            <span style={{}}>&#8594;</span>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

// CustomerReviews.propTypes = {
//   carousel: PropTypes.func.isRequired
// };
export default CustomerReviews;
