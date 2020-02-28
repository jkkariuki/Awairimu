import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/spinner/spinner";
import { getAllRetsListings } from "../../actions/simplyRets";
import { simplyRetsSearch } from "../../actions/simplyRets";
import Pagination from "../layout/Pagination";
import "./FeaturedListing.css";

const FeaturedListings = ({
  getAllRetsListings,
  listings,
  loading,
  simplyRetsSearch
}) => {
  useEffect(() => {
    getAllRetsListings();
  }, [getAllRetsListings]);

  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage] = useState(8);
  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;

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
    <section className='section visit-section' id='next-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 id='featuredHeading' className='heading' data-aos='fade-up'>
              Popular Properties
            </h2>
          </div>
        </div>
        <div className='row'>
          {loading || currentListings === null ? (
            <Spinner />
          ) : (
            currentListings.map((listing, i) => (
              <div
                key={i}
                className='col-lg-3 col-md-6 visit mb-3'
                data-aos='fade-up'
              >
                <Link to={`/listing/${listing.mlsId}`}>
                  <img
                    id='listingImg'
                    src={listing.photos[0]}
                    alt='placeholder'
                    className='img-fluid rounded'
                  />{" "}
                </Link>

                <h3>
                  {listing.sta === "For Rent" ? (
                    <Link to={`/listing/${listing.mlsId}`}>
                      ${listing.prc}/month
                    </Link>
                  ) : (
                    <Link to={`/listing/${listing.mlsId}`}>
                      {formatter.format(listing.listPrice)}
                    </Link>
                  )}
                </h3>
                <div className='reviews-star float-left'>
                  {listing.address.full}, {listing.address.city},{" "}
                  {listing.address.state}
                </div>
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
  getAllRetsListings: PropTypes.func.isRequired,
  listings: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  simplyRetsSearch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  listings: state.simplyRets.listings,
  loading: state.simplyRets.loading
});
export default connect(mapStateToProps, {
  getAllRetsListings,
  simplyRetsSearch
})(FeaturedListings);
