import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './PageNation.scss';

const PageNation = ({ items, trimNumber, onChagePage }) => {

  const pageNum = Math.ceil(items.length / trimNumber);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    onChagePage(items.slice(0, trimNumber))
  }, []);

  const setScrollTop = () => {
    const { documentElement, body } = document;
    if (documentElement) documentElement.scrollTop = 0;
    // Safari
    body.scrollTop = 0;
  }

  return (
    <ul className="PageNation">
      {items.length !== 0 ?
      new Array(pageNum)
        .fill(null)
        .map((_, i) => {
          const page = i + 1;
          return (
            <li
              className={currentPage === page ? 'active' : 'disabled'}
              onClick={() => {
                onChagePage(items.slice(trimNumber * i, trimNumber * i + 5))
                setCurrentPage(page)
                setScrollTop()
              }}
              key={i}>
              {page}
            </li>)
        }) : null}
    </ul>
  )
}

PageNation.defaultProps = {
  items: [],
  trimNumber: 5
}

PageNation.propTypes = {
  items: PropTypes.array,
  trimNumber: PropTypes.number,
  onChagePage: PropTypes.func.isRequired
}

export default PageNation;