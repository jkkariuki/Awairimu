import React, { useState } from "react";
import PropTypes from "prop-types";
import { search } from "../../actions/simplyRets";
import { simplyRetsSearch } from "../../actions/simplyRets";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import "./style.css";

const SearchForm = ({ search, simplyRetsSearch, loading }) => {
  const [framework, setFramework] = useState({
    city: "",
    propertyType: "",
    offerType: ""
  });
  const { city, propertyType, offerType } = framework;

  const onChange = e =>
    setFramework({ ...framework, [e.target.name]: e.target.value });
  console.log(framework);

  const onSubmit = async e => {
    e.preventDefault();
    window.location.replace("#next-section");
    let loading = false;
    console.log({ city, propertyType, offerType });
    search({ city, propertyType, offerType });
    simplyRetsSearch({ city, propertyType, offerType });
  };
  return (
    <form onSubmit={onSubmit} class='form-search'>
      <h3>Find Your Next Home</h3>
      <div
        class='row  align-items-end'
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div class='col-md-5'>
          <label for='offer-types'>Offer Type</label>
          <div class='select-wrap'>
            <span class='icon icon-arrow_drop_down'></span>
            <select
              name='offerType'
              onChange={e => onChange(e)}
              id='offer-types'
              class='form-control d-block rounded-0'
              value={offerType}
            >
              <option value='' selected disabled hidden>
                Choose here
              </option>
              <option value='residential'>For Sale</option>
              <option value='rental'>For Rent</option>
            </select>
          </div>
        </div>
        <div class='col-md-5'>
          <label for='select-city'>Select City</label>
          <div class='select-wrap'>
            <span class='icon icon-arrow_drop_down'></span>
            <select
              name='city'
              onChange={e => onChange(e)}
              id='select-city'
              class='form-control d-block rounded-0'
              value={city}
            >
              <option value='' selected disabled hidden>
                Choose here
              </option>
              <option value='Oak Ridge'>Oak Ridge</option>
              <option value='Katy'>Katy</option>
              <option value='Cypress'>Cypress</option>
              Cypress, Katy, Oak Ridge,
              <option value='Houston'>Houston</option>
            </select>
          </div>
        </div>
        <div>
          <button
            type='submit'
            class='btn btn-success text-white btn-block rounded-0'
          >
            {" "}
            <i class='fas fa-search'></i>
          </button>
        </div>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  searchListings: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  simplyRetsSearch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: state.simplyRets.loading
});

export default connect(mapStateToProps, { search, simplyRetsSearch })(
  SearchForm
);
