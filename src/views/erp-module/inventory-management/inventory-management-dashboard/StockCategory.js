import React from 'react';
import StockCategoryStatus from './StockCategoryStatus';
const StockCategory = () => {
    const StockData = {
        series: [65, 114, 39],
        labels: ['Material Requested', 'Order Generated', 'Material Received'],
        colors: ['rgba(60, 159, 60, 0.71)', 'rgb(94, 53, 177)', 'rgb(30, 136, 229)'],
    };

    return (
        <StockCategoryStatus StockData={StockData} />
    );
}

export default StockCategory;
