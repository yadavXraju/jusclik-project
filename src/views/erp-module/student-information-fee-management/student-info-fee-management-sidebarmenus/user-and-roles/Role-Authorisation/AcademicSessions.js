import React from 'react';
import ParamChackboxSelectAll from './ParamChackboxSelectAll';

const AcademicSessionData = [
  { id: '1', details: { year: '2009-2010' } },
  { id: '2', details: { year: '2010-2011' } },
  { id: '3', details: { year: '2011-2012' } },
  { id: '4', details: { year: '2012-2013' } },
  { id: '5', details: { year: '2013-2014' } },
  { id: '6', details: { year: '2014-2015' } },
  { id: '7', details: { year: '2015-2016' } },
  { id: '8', details: { year: '2016-2017' } },
  { id: '9', details: { year: '2017-2018' } },
  { id: '10', details: { year: '2018-2019' } },
  { id: '11', details: { year: '2019-2020' } },
  { id: '12', details: { year: '2020-2021' } },
  { id: '13', details: { year: '2021-2022' } },
  { id: '14', details: { year: '2022-2023' } },
  { id: '15', details: { year: '2023-2024' } },
  { id: '15', details: { year: '2024-2025' } },
];

function AcademicSection() {
  const handleSelect = (id) => {
    console.log(`Selected ID: ${id}`);
    // Handle selection logic here
  };

  return (
    <div>
      <ParamChackboxSelectAll data={AcademicSessionData} onSelect={handleSelect} heading='Academic Sessions' />
    </div>
  );
}

export default AcademicSection;
