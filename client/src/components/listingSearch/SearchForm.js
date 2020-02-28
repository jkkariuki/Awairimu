import React, { useState } from "react";
import PropTypes from "prop-types";
import { simplyRetsSearch } from "../../actions/simplyRets";
import { connect } from "react-redux";
import "./style.css";

const SearchForm = ({ simplyRetsSearch, loading }) => {
  const [framework, setFramework] = useState({
    city: "",
    propertyType: "",
    offerType: ""
  });
  const { city, propertyType, offerType } = framework;

  const onChange = e =>
    setFramework({ ...framework, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    window.location.replace("#next-section");
    simplyRetsSearch({ city, propertyType, offerType });
  };
  return (
    <div className='container'>
      <form onSubmit={onSubmit} className='form-search'>
        <h3>Find Your Next Home</h3>
        <div
          className='row  align-items-end'
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div className='col-md-5'>
            <label>Offer Type</label>
            <div className='select-wrap'>
              <span className='icon icon-arrow_drop_down'></span>
              <select
                name='offerType'
                onChange={e => onChange(e)}
                id='offer-types'
                className='form-control d-block rounded-0'
                value={offerType}
                required
              >
                <option value=''>Choose here</option>
                <option value='residential'>For Sale</option>
                <option value='rental'>For Rent</option>
              </select>
            </div>
          </div>
          <div className='col-md-5'>
            <label>Select City</label>
            <div className='select-wrap'>
              <span className='icon icon-arrow_drop_down'></span>
              <select
                name='city'
                onChange={e => onChange(e)}
                id='select-city'
                className='form-control d-block rounded-0'
                value={city}
                required
              >
                <option value=''>Choose here</option>
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
              className='btn btn-success text-white btn-block rounded-0'
            >
              {" "}
              <i className='fas fa-search'></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  simplyRetsSearch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: state.simplyRets.loading
});

export default connect(mapStateToProps, { simplyRetsSearch })(SearchForm);
