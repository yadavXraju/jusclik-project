import React from 'react';
import ParamChackboxSelectAll from './ParamChackboxSelectAll';


const LibraryGroupData = [
  { id: '1', details: { libraryGroup: 'tertiary', checked: true } },
  { id: '2', details: { libraryGroup: 'Secondary', checked: false } },
  { id: '3', details: { libraryGroup: 'Other', checked: true } },
  { id: '4', details: { libraryGroup: 'New Arrival', checked: true } },
  { id: '5', details: { libraryGroup: 'Primary', checked: false } },
  { id: '6', details: { libraryGroup: 'Main Book', checked: true } },
  { id: '7', details: { libraryGroup: 'Specimen', checked: false }},
  { id: '8', details: { libraryGroup: 'iunior', checked: true } },
  { id: '9', details: { libraryGroup: 'senior', checked: false } },
  { id: '10', details: { libraryGroup: 'Most Seniors', checked: true } },
  { id: '11', details: { libraryGroup: 'test', checked: false } },
];

function ManageLibraryGroup() {
  const handleSelect = (id) => {
    console.log(`Selected ID: ${id}`);
    // Handle selection logic here
  };

  return (
    <div>
      <ParamChackboxSelectAll data={LibraryGroupData} onSelect={handleSelect} heading='Library Groups' />
    </div>
  );
}

export default ManageLibraryGroup;
