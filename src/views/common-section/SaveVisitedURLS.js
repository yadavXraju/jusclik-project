import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const SaveVisitedURLs = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Get the current URL
    const currentURL = location.pathname;

    // Retrieve the object of visited URLs with visit counts from local storage
    let visitedURLsWithCounts = JSON.parse(localStorage.getItem('FavPages_VisitedURLs')) || {};

    // Increment the visit count for the current URL
    visitedURLsWithCounts[currentURL] = (visitedURLsWithCounts[currentURL] || 0) + 1;

    // Save the updated object to local storage
    localStorage.setItem('FavPages_VisitedURLs', JSON.stringify(visitedURLsWithCounts));
  }, [location.pathname]);

  return <>{children}</>;
};

SaveVisitedURLs.propTypes = {
  children: PropTypes.node
};

export default SaveVisitedURLs;
