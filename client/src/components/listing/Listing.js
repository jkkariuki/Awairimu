import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/spinner/spinner";
import { getListingById } from "../../actions/simplyRets";
import { saveListing } from "../../actions/profile";

import Alert from "../layout/Alert";
import "./Listing.css";
import logo from "../../img/logo.jpg";
import { setAlert } from "../../actions/alert";
import { listingMsg } from "../../actions/profile";

const Listing = ({
  getListingById,
  listingMsg,
  saveListing,
  setAlert,
  listing: { listing, loading },
  match,
  auth
}) => {
  const [formData, setFormData] = useState("");

  // const { name, phone, msg } = formData;

  useEffect(() => {
    getListingById(match.params.id);
  }, [getListingById, match.params.id]);

  const checkAuth = () => {
    console.log(auth.isAuthenticated);
    if (auth.isAuthenticated === "false") {
      setAlert("Please Login/Register to save listings!", "danger");
    }
    if (auth.isAuthenticated) {
      saveListing(listing);
    } else {
      setAlert("Login to Save!", "danger");
    }
  };

  const onChange = e => setFormData(e.target.value);

  const onSubmit = async e => {
    e.preventDefault();

    listingMsg(listing, { formData });
    setFormData("");
    setAlert("Success!", "success");
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });
  return (
    <Fragment>
      {listing === null || loading.loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div
            className='jumbotron'
            id='listingJumbo'
            style={{
              backgroundImage: "url(" + listing.photos[0] + ")"
            }}
          >
            <div className='container'>
              <div className='row site-hero-inner align-items-center'>
                <div className='col-md-7 text-left mr-auto' data-aos='fade-up'>
                  <h1 className='heading'>
                    {" "}
                    {formatter.format(listing.listPrice)}
                  </h1>
                  <p className='sub-heading'>
                    {listing.address.full}, {listing.address.city},{" "}
                    {listing.address.state}
                  </p>
                </div>
              </div>
              <a href='#next-section' className='smoothscroll scroll-down'>
                Scroll Down
              </a>
            </div>
          </div>

          <div className='container'>
            <div className='row mb-4'>
              <div
                style={{ textAlign: "center", height: "300px" }}
                className='col-md-6 mb-4 mb-md-0'
              >
                <img
                  style={{ height: "250px", width: "300px" }}
                  src={listing.photos[0]}
                  alt='placeholder'
                  className='img-fluid rounded img-shadow'
                />
              </div>
              <div style={{ textAlign: "center" }} className='col-md-6'>
                <img
                  style={{ height: "250px", width: "300px" }}
                  src={listing.photos[1]}
                  alt='placeholder'
                  className='img-fluid rounded img-shadow'
                />
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-8 col-md-8 col-sm-7'>
                <h1 style={{ color: "black" }}>About this Property</h1>
                <h3
                  className='listingSpecs'
                  style={{ display: "inline-block", color: "black" }}
                >
                  {listing.property.bedrooms} <i className='fas fa-bed'></i>
                </h3>

                <h3
                  className='listingSpecs'
                  style={{ display: "inline-block", color: "black" }}
                >
                  {listing.property.bathsFull} <i className='fas fa-bath'></i>
                </h3>

                <h3 style={{ color: "black" }}>
                  {formatter.format(listing.listPrice)}
                </h3>

                <p className='mb-2'>
                  {" "}
                  {listing.address.full}, {listing.address.city},{" "}
                  {listing.address.state}
                </p>
                <p style={{ marginTop: "30px", lineHeight: "35px" }}>
                  {listing.privateRemarks}
                </p>
                <p>
                  <button
                    type='button'
                    onClick={() => checkAuth()}
                    className='btn btn-primary'
                  >
                    Save to favorites{" "}
                    <span>
                      <i className='far fa-heart'></i>
                    </span>
                  </button>
                </p>
                <Alert />
              </div>

              <div className='col-lg-3 offset-lg-1 col-md-4 col-sm-5'>
                <div className='card'>
                  <img
                    className='card-img-top'
                    src={logo}
                    alt='placeholder'
                    style={{ width: "100%" }}
                  />
                  <div className='card-body'>
                    <p style={{ color: "black" }} className='card-title'>
                      City Group
                    </p>
                    <p>Remax Realtors</p>
                    <form onSubmit={e => onSubmit(e)}>
                      <div className='form-group'>
                        <textarea
                          className='form-control input-sm'
                          name='formData'
                          value={formData}
                          rows='2'
                          id='comment'
                          placeholder='Message me about this listing'
                          onChange={e => onChange(e)}
                          required
                        ></textarea>
                      </div>
                      <button type='submit' className='btn btn-primary'>
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Listing.propTypes = {
  setAlert: PropTypes.func.isRequired,
  listingMsg: PropTypes.func.isRequired,
  getListingById: PropTypes.func.isRequired,
  saveListing: PropTypes.func.isRequired,
  listing: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // listing: state.simplyRets.listing,
  listing: state.simplyRets,
  // loading: state.simplyRets,
  auth: state.auth
});

export default connect(mapStateToProps, {
  setAlert,
  getListingById,
  saveListing,
  listingMsg
})(Listing);
