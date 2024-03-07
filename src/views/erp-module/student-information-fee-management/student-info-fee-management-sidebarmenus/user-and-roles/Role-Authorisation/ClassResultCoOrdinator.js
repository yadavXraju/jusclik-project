import React from 'react';
import ParamChackboxSelectAll from './ParamChackboxSelectAll';


const AcademicSessionData = [
  { id: '1', details: { class: 'Kg' } },
  { id: '2', details: { class: 'Nursery' } },
  { id: '3', details: { class: 'I' } },
  { id: '4', details: { class: 'II' } },
  { id: '5', details: { class: 'III' } },
  { id: '6', details: { class: 'IV' } },
  { id: '7', details: { class: 'V' } },
  { id: '8', details: { class: 'VI' } },
  { id: '9', details: { class: 'VII' } },
  { id: '10', details: { class: 'VIII' } },
  { id: '11', details: { class: 'IX' } },
  { id: '12', details: { class: 'X' } },
  { id: '13', details: { class: 'XI-A' } },
  { id: '14', details: { class: 'XI-B' } },
  { id: '15', details: { class: 'XI-C' } },
  { id: '15', details: { class: 'XII-A' } },
  { id: '15', details: { class: 'XII-B' } },
  { id: '15', details: { class: 'XII-C' } },
];

function ClassResultCoOrdinator() {
  const handleSelect = (id) => {
    console.log(`Selected ID: ${id}`);
    // Handle selection logic here
  };

  return (
    <div>
      <ParamChackboxSelectAll data={AcademicSessionData} onSelect={handleSelect} heading='Classes' />
    </div>
  );
}

export default ClassResultCoOrdinator;
