import React from 'react';
import ParamChackboxSelectAll from './ParamChackboxSelectAll';


const DocumentsData = [
  { id: '1', details: { class: 'Delete Documents', checked: false } },
  { id: '2', details: { class: 'Manage Folder', checked: true } },
  { id: '3', details: { class: 'View Documents', checked: true } },
  { id: '4', details: { class: 'Upload Documents', checked: false } },
  // { id: '5', details: { class: 'III', checked: true } },
  // { id: '6', details: { class: 'IV', checked: false } },
  // { id: '7', details: { class: 'V', checked: true } },
  // { id: '8', details: { class: 'VI', checked: false } },
  // { id: '9', details: { class: 'VII', checked: true } },
  // { id: '10', details: { class: 'VIII', checked: false } },
  // { id: '11', details: { class: 'IX', checked: true } },
  // { id: '12', details: { class: 'X', checked: false } },
  // { id: '13', details: { class: 'XI-A', checked: false } },
  // { id: '14', details: { class: 'XI-B', checked: true } },
  // { id: '15', details: { class: 'XI-C', checked: true } },
  // { id: '15', details: { class: 'XII-A', checked: false } },
  // { id: '15', details: { class: 'XII-B', checked: true } },
  // { id: '15', details: { class: 'XII-C', checked: false } },
];

function DocumentSection() {
  const handleSelect = (id) => {
    console.log(`Selected ID: ${id}`);
    // Handle selection logic here
  };

  return (
    <div>
      <ParamChackboxSelectAll data={DocumentsData} onSelect={handleSelect} heading='Documents' />
    </div>
  );
}

export default DocumentSection;
