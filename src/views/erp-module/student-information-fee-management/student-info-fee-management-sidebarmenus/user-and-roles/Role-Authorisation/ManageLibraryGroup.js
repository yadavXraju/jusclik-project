import React from 'react';
import ParamChackboxSelectAll from './ParamChackboxSelectAll';


const LibraryGroupData = [
  { id: '1', details: { libraryGroup: 'tertiary' } },
  { id: '2', details: { libraryGroup: 'Secondary' } },
  { id: '3', details: { libraryGroup: 'Other' } },
  { id: '4', details: { libraryGroup: 'New Arrival' } },
  { id: '5', details: { libraryGroup: 'Primary' } },
  { id: '6', details: { libraryGroup: 'Main Book' } },
  { id: '7', details: { libraryGroup: 'Specimen' } },
  { id: '8', details: { libraryGroup: 'iunior' } },
  { id: '9', details: { libraryGroup: 'senior' } },
  { id: '10', details: { libraryGroup: 'Most Seniors' } },
  { id: '11', details: { libraryGroup: 'test' } },
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
