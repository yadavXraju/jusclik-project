import React from 'react';
import ParamChackboxSelectAll from './ParamChackboxSelectAll';

const AcademicSessionData = [
  { id: '1', details: { year: '2009-2010', checked: false } },
  { id: '2', details: { year: '2010-2011', checked: true  } },
  { id: '3', details: { year: '2011-2012', checked: false } },
  { id: '4', details: { year: '2012-2013', checked: true } },
  { id: '5', details: { year: '2013-2014', checked: true } },
  { id: '6', details: { year: '2014-2015', checked: true } },
  { id: '7', details: { year: '2015-2016', checked: false } },
  { id: '8', details: { year: '2016-2017', checked: false } },
  { id: '9', details: { year: '2017-2018', checked: true } },
  { id: '10', details: { year: '2018-2019', checked: false } },
  { id: '11', details: { year: '2019-2020', checked: true } },
  { id: '12', details: { year: '2020-2021', checked: true } },
  { id: '13', details: { year: '2021-2022', checked: false } },
  { id: '14', details: { year: '2022-2023', checked: true } },
  { id: '15', details: { year: '2023-2024', checked: false } },
  { id: '15', details: { year: '2024-2025', checked: true } },
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
