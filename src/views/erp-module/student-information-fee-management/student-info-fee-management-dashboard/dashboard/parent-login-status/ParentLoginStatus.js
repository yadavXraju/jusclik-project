import React from 'react';
import ParentLoginStatusTemplate from './parentLoginStatusTemplate';

const ParentLoginStatus = () => {
    const loginData = {
        series: [100, 200, 50],
        labels: ['Desktop Logins', 'Mobile Logins', 'Never Logged In'],
        colors: ['rgba(60, 159, 60, 0.71)', 'rgb(94, 53, 177)', 'rgb(30, 136, 229)'],
    };

    const heading = "Payment Gateway Wise Collection";

    return (
        <ParentLoginStatusTemplate loginData={loginData} heading={heading} />
    );
}

export default ParentLoginStatus;