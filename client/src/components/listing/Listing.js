import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/spinner/spinner";
import { getListingById } from "../../actions/simplyRets";
import Footer from "../layout/footer/Footer";
import { saveListing } from "../../actions/profile";
import Alert from "../layout/Alert";
import "./Listing.css";
import Akariuki from "../../img/Akariuki.jpg";
import { setAlert } from "../../actions/alert";
import { listingMsg } from "../../actions/profile";

const Listing = ({
  getListingById,
  listingMsg,
  saveListing,
  setAlert,
  listing,
  match,
  loading,
  isAuthenticated
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    msg: ""
  });

  const { name, phone, msg } = formData;

  useEffect(() => {
    getListingById(match.params.id);
  }, [getListingById, match.params.id]);

  const checkAuth = () => {
    if (!isAuthenticated) {
      setAlert("Please Login/Register to save listings!", "danger");
    } else {
      saveListing(listing);
    }
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    listingMsg(listing, formData);
    setAlert("Success!", "success");
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });
  return (
    <Fragment>
      {listing === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <section
            class='site-hero overlay page-inside mb-4'
            style={{ backgroundImage: "url(" + listing.photos[0] + ")" }}
          >
            <div class='container'>
              <div class='row site-hero-inner align-items-center'>
                <div class='col-md-7 text-left mr-auto' data-aos='fade-up'>
                  <h1 class='heading'>
                    {" "}
                    {formatter.format(listing.listPrice)}
                  </h1>
                  <p class='sub-heading'>
                    {listing.address.full}, {listing.address.city},{" "}
                    {listing.address.state}
                  </p>
                </div>
              </div>
              <a href='#next-section' class='smoothscroll scroll-down'>
                Scroll Down
              </a>
            </div>
          </section>

          <div class='container'>
            <div class='row mb-4'>
              <div
                style={{ textAlign: "center", height: "300px" }}
                class='col-md-6 mb-4 mb-md-0'
              >
                <img
                  style={{ height: "250px", width: "300px" }}
                  src={listing.photos[0]}
                  alt='Image'
                  class='img-fluid rounded img-shadow'
                />
              </div>
              <div style={{ textAlign: "center" }} class='col-md-6'>
                <img
                  style={{ height: "250px", width: "300px" }}
                  src={listing.photos[1]}
                  alt='Image'
                  class='img-fluid rounded img-shadow'
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
                  {listing.property.bedrooms} <i class='fas fa-bed'></i>
                </h3>

                <h3
                  className='listingSpecs'
                  style={{ display: "inline-block", color: "black" }}
                >
                  {listing.property.bathsFull} <i class='fas fa-bath'></i>
                </h3>

                <h3 style={{ color: "black" }}>
                  {formatter.format(listing.listPrice)}
                </h3>

                <p class='mb-2'>
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
                    class='btn btn-primary'
                  >
                    Save to favorites{" "}
                    <span>
                      <i class='far fa-heart'></i>
                    </span>
                  </button>
                </p>
                <Alert />
              </div>

              <div className='col-lg-3 offset-lg-1 col-md-4 col-sm-5'>
                <div className='card'>
                  <img
                    class='card-img-top'
                    src={Akariuki}
                    alt='Card image'
                    style={{ width: "100%" }}
                  />
                  <div class='card-body'>
                    <p style={{ color: "black" }} class='card-title'>
                      Alice Kariuki
                    </p>
                    <p>Weichert Realtor</p>
                    <form onSubmit={e => onSubmit(e)}>
                      <div class='form-group'>
                        <input
                          type='text'
                          name='name'
                          value={name}
                          class='form-control input-sm'
                          id='inputName'
                          placeholder='Enter Name'
                          onChange={e => onChange(e)}
                        />
                      </div>
                      <div class='form-group'>
                        <input
                          type='text'
                          value={phone}
                          name='phone'
                          class='form-control input-sm'
                          id='inputNumber'
                          placeholder='Phone Number'
                          onChange={e => onChange(e)}
                        />
                      </div>
                      <div class='form-group'>
                        <textarea
                          class='form-control input-sm'
                          name='msg'
                          value={msg}
                          rows='2'
                          id='comment'
                          placeholder='Message me about this listing'
                          onChange={e => onChange(e)}
                        ></textarea>
                      </div>
                      <button type='submit' class='btn btn-primary'>
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
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
  loading: PropTypes.bool.isRequired
};

const maptStateToProps = state => ({
  listing: state.simplyRets.listing,
  loading: state.simplyRets.loading,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(maptStateToProps, {
  setAlert,
  getListingById,
  saveListing,
  listingMsg
})(Listing);
