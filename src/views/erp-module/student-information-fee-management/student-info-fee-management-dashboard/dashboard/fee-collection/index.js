import React from 'react';
import ParentLoginStatusTemplate from '../parent-login-status/parentLoginStatusTemplate';

const FeeCollection = () => {
    // Dummy data
    const loginData = {
      series: [5000, 4000],
      labels: ['Cash', 'Demand Draft'],
      colors: ['rgb(94, 53, 177)', 'rgb(30, 136, 229)'],
  };


    const heading = "Fee Collection";

    return (
        <ParentLoginStatusTemplate loginData={loginData} heading={heading} />
    );
}

export default FeeCollection;