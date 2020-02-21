import React from "react";
import SearchForm from "../listingSearch/SearchForm";
import FeaturedListings from "../featuredListings/FeaturedListings";
import CustomerReviews from "../customerReviews/CustomerReviews";
import ScrapedArticles from "../scrapedArticles/ScrapedArticles";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <div className='jumbotron jumbotron-fluid landing-jumbo'></div>

      <SearchForm />
      <FeaturedListings />
      <CustomerReviews />
      <ScrapedArticles />
    </div>
  );
};

export default Landing;
