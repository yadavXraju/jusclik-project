import React from 'react';
import ParamChackboxSelectAll from './ParamChackboxSelectAll';


const InventoryGroupData = [
  { id: '1', details: { inventoryGroup: 'Primary ', checked: true } },
  { id: '2', details: { inventoryGroup: 'Secondary', checked: false } },
];

function ManageInventoryGroup() {
  const handleSelect = (id) => {
    console.log(`Selected ID: ${id}`);
    // Handle selection logic here
  };

  return (
    <div>
      <ParamChackboxSelectAll data={InventoryGroupData} onSelect={handleSelect} heading='Inventory Group' />
    </div>
  );
}

export default ManageInventoryGroup;
