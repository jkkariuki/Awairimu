import React from "react";
import SearchForm from "../listingSearch/SearchForm";
import FeaturedListings from "../featuredListings/FeaturedListings";
import CustomerReviews from "../customerReviews/CustomerReviews";
import ScrapedArticles from "../scrapedArticles/ScrapedArticles";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <div
        id='landingJumbo'
        className='jumbotron jumbotron-fluid'
        style={
          {
            // backgroundImage: `url(${Background})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center center",
            // position: "relative",
            // height: "700px"
            // marginBottom: "0"
          }
        }
      ></div>

      <SearchForm />
      <FeaturedListings />
      <CustomerReviews />
      <ScrapedArticles />
    </div>
  );
};

export default Landing;
