import React from "react";

const Pagination = ({ listingsPerPage, totalListings, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalListings / listingsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log("total listings:" + totalListings);
  return (
    <div>
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a
                href='#next-section'
                onClick={() => paginate(number)}
                className='page-link'
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
