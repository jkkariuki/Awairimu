import React from "react";
import "./CustomerReviews.css";
import reviewer1 from "../../img/reviewer1.jpg";
import reviewer2 from "../../img/reviewer2.jpg";

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
    <div id='reviewsContainer' className='container'>
      <div>
        <h3 id='carouselHeader'>Satisfied Customers!</h3>
      </div>

      <CarouselProvider
        id='carouselProvider'
        naturalSlideWidth={100}
        naturalSlideHeight={10}
        totalSlides={3}
      >
        <Slider style={{ textAlign: "center" }}>
          <Slide index={0}>
            <div className='reviewDiv'>
              <div>
                <img
                  src={reviewer1}
                  alt='customer'
                  className='rounded-circle'
                />
              </div>
              <blockquote>
                <p>
                  &ldquo;Et quidem, impedit eum fugiat excepturi iste aliquid
                  suscipit, tempore, delectus rem soluta <br></br> voluptatem
                  distinctio sed dolores, magni fugit nemo cum expedita. Totam a
                  accusantium sunt aut autem placeat officia.&rdquo;
                </p>
                <p>
                  <em>&mdash; Jean Smith</em>
                </p>
              </blockquote>
            </div>
          </Slide>
          <Slide index={1}>
            {" "}
            <div className='reviewDiv'>
              <div>
                <img
                  src={reviewer2}
                  alt='customer'
                  className='rounded-circle'
                />
              </div>
              <blockquote>
                <p>
                  &ldquo;Et quidem, impedit eum fugiat excepturi iste aliquid
                  suscipit, tempore, delectus rem soluta <br></br> voluptatem
                  distinctio sed dolores, magni fugit nemo cum expedita. Totam a
                  accusantium sunt aut autem placeat officia.&rdquo;
                </p>
                <p>
                  <em>&mdash; Jean Smith</em>
                </p>
              </blockquote>
            </div>
          </Slide>
          <Slide index={2}>
            {" "}
            <div className='reviewDiv'>
              <div>
                <img
                  src={reviewer2}
                  alt='customer'
                  className='rounded-circle'
                />
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
        <div id='reviewSlidebtn'>
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

export default CustomerReviews;
