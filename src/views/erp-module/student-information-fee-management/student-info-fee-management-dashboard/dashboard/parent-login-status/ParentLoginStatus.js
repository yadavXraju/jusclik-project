import React from 'react';
import ParentLoginStatusTemplate from './parentLoginStatusTemplate';
const ParentLoginStatus = () => {
    // Dummy data
    const loginData = {
        series: [100, 200, 50],
        labels: ['Desktop Logins', 'Mobile Logins', 'Never Logged In'],
        colors: ['rgba(60, 159, 60, 0.71)', 'rgb(94, 53, 177)', 'rgb(30, 136, 229)'],
    };

    return (
        <ParentLoginStatusTemplate loginData={loginData} />
    );
}

export default ParentLoginStatus;