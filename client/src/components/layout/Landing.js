import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../listingSearch/SearchForm";
import FeaturedListings from "../featuredListings/FeaturedListings";
import CustomerReviews from "../customerReviews/CustomerReviews";
import Contact from "../contact/Contact";
import Footer from "./footer/Footer";
import ScrapedArticles from "../scrapedArticles/ScrapedArticles";
import "./Landing.css";
import Background from "../../img/hero_2.jpg";

const Landing = () => {
  return (
    <div>
      <div
        id='landingJumbo'
        className='jumbotron jumbotron-fluid'
        style={{
          // backgroundImage: `url(${Background})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center center",
          // position: "relative",
          height: "700px"
          // marginBottom: "0"
        }}
      ></div>

      <SearchForm />
      <FeaturedListings />
      <CustomerReviews />
      <ScrapedArticles />
    </div>
  );
};

export default Landing;
