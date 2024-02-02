import React, { useEffect, useState } from 'react';
import timeTableData1 from './timetable/TimeTableData';

const ApiTest = () => {
  const [timeTableData, setTimeTableData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await timeTableData1;
      setTimeTableData(data);
    };

    fetchData();
  }, []);

  // Check if data has been fetched
  if (!timeTableData) {
    return <p>Loading...</p>;
  }

  // Get the current day
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  // Access the array for the current day
  const currentDayData = timeTableData[currentDay];

  // Check if data is available for the current day
  if (!currentDayData || currentDayData.length === 0) {
    return <p>No schedule available for {currentDay}</p>;
  }

  // Map over the array and display details
  return (
    <>
      {currentDayData.map((item, index) => (
        <div key={index}>
          <p>Period: {item.period}</p>
          {item.details.length > 0 ? (
            <div>
              <p>Details:</p>
              <ul>
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>
                    Subject: {detail.subject}, Teacher: {detail.teacher}, Class: {detail.class}, Section: {detail.section} Time : {detail.time}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No details available for this period</p>
          )}
        </div>
      ))}
    </>
  );
};

export default ApiTest;
