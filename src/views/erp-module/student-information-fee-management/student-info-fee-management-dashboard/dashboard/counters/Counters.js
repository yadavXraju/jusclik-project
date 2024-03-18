import React from 'react';
import MainCounters from 'views/common-section/stufee-counter/stufee-counters/Counters';

const Counters = () => {
  const countersData = [
    { value: 99, label: 'Live Students', color: '#22b378' },
    { value: 83, label: 'Boys', color: 'rgb(94, 53, 177)' },
    { value: 16, label: 'Girls', color: 'rgb(30, 136, 229)' },
  ];

  const secondaryCountersData = [
    { value: 25, label: 'Enquiries', color: 'rgb(94, 53, 177)' },
    { value: 76, label: 'Registration', color: '#ddb630' },
    { value: 281, label: 'Admission', color: '#22b378' },
    { value: 27, label: 'Withdrawals', color: 'rgb(30, 136, 229)' },
  ];

  const gridStyles = {
    display: 'flex',
  };

  return <MainCounters counters={countersData} secondaryCounters={secondaryCountersData} gridStyles={gridStyles} />;
};

export default Counters;
