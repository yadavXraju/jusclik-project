import React from 'react';
import ParamChackboxSelectAll from './ParamChackboxSelectAll';


const SetupData = [
  { id: '1', details: { class: 'Delete Documents', checked: false } },
  { id: '2', details: { class: 'Manage Folder', checked: true } },
  { id: '3', details: { class: 'View Documents', checked: true } },
  { id: '4', details: { class: 'Upload Documents', checked: false } },
];

function SetupSection() {
  const handleSelect = (id) => {
    console.log(`Selected ID: ${id}`);
    // Handle selection logic here
  };

  return (
    <div>
      <ParamChackboxSelectAll data={SetupData} onSelect={handleSelect} heading='Settings' />
    </div>
  );
}

export default SetupSection;
