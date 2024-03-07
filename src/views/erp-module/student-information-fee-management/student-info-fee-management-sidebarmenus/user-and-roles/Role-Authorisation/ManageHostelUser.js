import React from 'react';
import ParamChackboxSelectAll from './ParamChackboxSelectAll';


const HostelUserData = [
  { id: '1', details: { hostelGroup: 'Hostel - 1' } },
  { id: '2', details: { hostelGroup: 'Hostel - 2' } },
  { id: '3', details: { hostelGroup: 'Hostel - 3' } },
  { id: '4', details: { hostelGroup: 'Hostel - 4' } },
];

function ManageHostelUser() {
  const handleSelect = (id) => {
    console.log(`Selected ID: ${id}`);
    // Handle selection logic here
  };

  return (
    <div>
      <ParamChackboxSelectAll data={HostelUserData} onSelect={handleSelect} heading='Hostal Groups' />
    </div>
  );
}

export default ManageHostelUser;
