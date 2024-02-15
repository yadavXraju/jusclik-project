// FavPage.js

import CoScholaistic from "./co-scholastic";

// import React, { useState, useEffect } from 'react';

const FavPage = () => {
  // const [topPages, setTopPages] = useState([]);

  // useEffect(() => {
  //   // Function to fetch and set the top 5 pages
  //   const fetchTopPages = () => {
  //     // Implement logic to fetch the top 5 pages from your usage tracking mechanism
  //     // For example, you might fetch them from local storage
  //     const storedPages = JSON.parse(localStorage.getItem('topPages')) || [];
  //     setTopPages(storedPages.slice(0, 5)); // Display only the top 5 pages
  //   };

  //   fetchTopPages();
  // }, []);

  return (
    <div>
      {/* <h2>Top 5 Most Opened Pages</h2>
      <ul>
        {topPages.map((page, index) => (
          <li key={index}>{page}</li>
        ))}
      </ul> */
      <CoScholaistic/>
      }




    </div>
  );
};

export default FavPage;
