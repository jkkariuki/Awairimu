import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import img1 from "./img/img_1.jpg";
import img2 from "./img/img_2.jpg";
import img3 from "./img/img_3.jpg";
import img4 from "./img/img_4.jpg";
import img5 from "./img/img_5.jpg";
import { connect } from "react-redux";
import Spinner from "../layout/spinner/spinner";
import { getJClistings } from "../../actions/trulia";
import { getAllRetsListings } from "../../actions/trulia";

import { search } from "../../actions/trulia";
import { simplyRetsSearch } from "../../actions/trulia";

import Pagination from "../layout/Pagination";

const FeaturedListings = ({
  //getJClistings,
  getAllRetsListings,
  search,
  searchResults,
  listings,
  loading,
  simplyRetsSearch
}) => {
  useEffect(
    () => {
      //getJClistings();
      getAllRetsListings();
    },
    [getAllRetsListings]
    //[getJClistings]
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage] = useState(8);
  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;

  console.log(searchResults);

  const currentListings = listings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  return (
    <section class='section visit-section' id='next-section'>
      <div class='container'>
        <div class='row'>
          <div class='col-md-12'>
            <h2 class='heading' data-aos='fade-up'>
              Popular Properties
            </h2>
          </div>
        </div>
        <div class='row'>
          {loading || currentListings === null ? (
            <Spinner />
          ) : (
            currentListings.map(listing => (
              <div class='col-lg-3 col-md-6 visit mb-3' data-aos='fade-up'>
                <Link to={`/listing/${listing.mlsId}`}>
                  <img
                    style={{ height: "260px", width: "350px" }}
                    src={listing.photos[0]}
                    alt='Image placeholder'
                    class='img-fluid rounded'
                  />{" "}
                  <h3>
                    {listing.sta === "For Rent" ? (
                      <Link to='property-single.html'>
                        ${listing.prc}/month
                      </Link>
                    ) : (
                      <Link to='property-single.html'>
                        {formatter.format(listing.listPrice)}
                      </Link>
                    )}
                  </h3>
                  <div class='reviews-star float-left'>
                    {listing.address.full}, {listing.address.city},{" "}
                    {listing.address.state}
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
        <Pagination
          listingsPerPage={listingsPerPage}
          totalListings={listings.length}
          paginate={paginate}
        />
      </div>
    </section>
  );
};

FeaturedListings.propTypes = {
  getJClistings: PropTypes.func.isRequired,
  getAllRetsListings: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  listings: PropTypes.array.isRequired,
  searchResults: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  simplyRetsSearch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  listings: state.trulia.listings,
  searchResults: state.trulia.searhResults,
  loading: state.trulia.loading
});
export default connect(mapStateToProps, {
  getJClistings,
  getAllRetsListings,
  search,
  simplyRetsSearch
})(FeaturedListings);
