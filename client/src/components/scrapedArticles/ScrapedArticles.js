import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { scrapeArticles } from "../../actions/articleScraper";
import Spinner from "../layout/spinner/spinner";
import "./ScrapedArticles.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const ScrapedArticles = ({ scrapeArticles, scrapedArticles, loading }) => {
  useEffect(() => {
    scrapeArticles();
  }, [scrapeArticles]);

  // console.log(links);
  // console.log(imageLinks);
  // console.log(titles);

  return (
    <div className='container'>
      <h3 id='scrapedHeading'>NJ Living</h3>

      <div className='row articlesRow'>
        {loading || scrapedArticles === null ? (
          <Spinner />
        ) : (
          scrapedArticles.map((scrapedArticle, i) => (
            <div
              key={i}
              style={scrapedArticle.imgs}
              className='card col-lg-4 col-md-4 col-sm-12 jerseyDigs'
              // style={{ width: "18rem;" }}
            >
              <div className='card-body'>
                <h5 style={{ zIndex: "1" }} className='card-title'>
                  {scrapedArticle.title}
                </h5>
              </div>
              <Link to={scrapedArticle.links} className='btn'>
                Continue Reading @ JerseyDigs.com{" "}
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

ScrapedArticles.propTypes = {
  scrapeArticles: PropTypes.func.isRequired,
  scrapedArticles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  scrapedArticles: state.articleScraper.scrapedArticles,
  loading: state.articleScraper.loading
});

export default connect(mapStateToProps, { scrapeArticles })(ScrapedArticles);
