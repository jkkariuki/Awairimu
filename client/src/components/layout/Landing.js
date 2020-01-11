import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../listingSearch/SearchForm";
import FeaturedListings from "../featuredListings/FeaturedListings";
import CustomerReviews from "../customerReviews/CustomerReviews";
import Contact from "../contact/Contact";
import Footer from "./footer/Footer";
import ScrapedArticles from "../scrapedArticles/ScrapedArticles";

import Background from "../../img/hero_2.jpg";

const Landing = () => {
  return (
    <div>
      <section
        className='site-hero overlay'
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className='container'>
          <div className='row site-hero-inner align-items-center'>
            <div
              style={{ marginTop: "220px" }}
              className='col-lg-6 col-sm-12 col-md-10 text-left ml-auto'
            >
              <SearchForm />
            </div>
          </div>
          <a href='#next-section' className='smoothscroll scroll-down'>
            Scroll Down
          </a>
        </div>
        <FeaturedListings />
        <CustomerReviews />
        <ScrapedArticles />
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default Landing;
