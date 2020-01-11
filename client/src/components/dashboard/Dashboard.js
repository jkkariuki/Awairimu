import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/spinner/spinner";

import { getCurrentUser } from "../../actions/profile";

const Dashboard = ({ getCurrentUser, profile: { user, loading } }) => {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });
  return (
    <Fragment>
      {user === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div class='container'>
            <h2 style={{ color: "black" }}> Hi {user.firstName} </h2>
            <h3 style={{ color: "black" }}> Your Saved Listings</h3>

            {user.favorites.map(favorite => (
              <div className='row'>
                <div
                  style={{ marginTop: "30px" }}
                  className='col-lg-10 offset-lg-1 col-sm-12'
                >
                  <div class='media'>
                    <div style={{ marginRight: "15px" }} class='media-body'>
                      <h3 style={{ color: "black" }} class='mt-0'>
                        {" "}
                        {favorite.address}
                      </h3>
                      <p>
                        {favorite.city},{favorite.state}{" "}
                        {formatter.format(favorite.listingPrice)}
                      </p>
                      <p class='mb-0'>
                        {favorite.bdrms} Bedroom, {favorite.baths} Bathroom,
                        {favorite.privateRemarks}
                      </p>
                    </div>
                    <img
                      class='align-self-center mr-3'
                      style={{ height: "150px", width: "200px" }}
                      src={favorite.img}
                      alt='Generic placeholder image'
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentUser })(Dashboard);
