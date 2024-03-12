import React from 'react';
import ParamChackboxSelectAll from './ParamChackboxSelectAll';
import CustomizedTreeView from './ReportTreeView';

const AcademicSessionData = [
  { id: '1', details: { year: 'Loan Reports', checked: false } },
  { id: '2', details: { year: 'Activity Logs', checked: true  } },
  { id: '3', details: { year: 'Payroll Reports', checked: false } },
  { id: '4', details: { year: 'Declaration Reports', checked: true } },
  { id: '5', details: { year: 'Deduction Reports', checked: true } },
  { id: '6', details: { year: 'Statutory Reports', checked: true } },
  { id: '7', details: { year: 'Tax Reports', checked: false } },
];

const treeData = [
  {
    nodeId: '1',
    label: 'Reports',
    children: [
      { nodeId: '2', label: 'Loan Reports' },
      { 
        nodeId: '3', 
        label: 'Subtree Reports',
        children: [
          { nodeId: '6', label: 'Activity Logs' },
          { 
            nodeId: '7', 
            label: 'Statutory Reports',
            children: [
              { nodeId: '9', label: 'Tax Reports' },
              { nodeId: '10', label: 'Statutory Reports' },
              { nodeId: '11', label: 'Child 3' }
            ]
          },
          { nodeId: '8', label: 'Payroll Reports' }
        ]
      },
      { nodeId: '4', label: 'Declaration Reports' },
      { nodeId: '5', label: 'Deduction Reports' }
    ]
  },
  {nodeId: '12', label: 'Tax Reports',
  children: [
    { nodeId: '14', label: 'Loan Reports' },
    { 
      nodeId: '15', 
      label: 'Subtree Reports',
    },
    { nodeId: '16', label: 'Declaration Reports' },
    { nodeId: '17', label: 'Deduction Reports' }
  ]
},
  {nodeId: '13', label: 'Statutory Reports',}
];

function ReportSection() {
  const handleSelect = (id) => {
    console.log(`Selected ID: ${id}`);
    // Handle selection logic here
  };

  return (
    <div>
      <ParamChackboxSelectAll data={AcademicSessionData} onSelect={handleSelect} heading='Reports' />
      <CustomizedTreeView data={treeData} onSelect={handleSelect} />
    </div>


  );
}

export default ReportSection;







// import React, { useState } from 'react';
// import CustomizedTreeView from './ReportTreeView'; // Import the CustomizedTreeView component

// function MyComponent() {
//   // Sample data for the tree view
//   const treeData = [
//     {
//       nodeId: '1',
//       label: 'Parent 1',
//       children: [
//         { nodeId: '2', label: 'Child 1' },
//         { nodeId: '3', label: 'Child 2' }
//       ]
//     },
//     {
//       nodeId: '4',
//       label: 'Parent 2',
//       children: [
//         { nodeId: '5', label: 'Child 3' },
//         { nodeId: '6', label: 'Child 4' }
//       ]
//     }
//   ];

//   // State and function to handle checkbox selection
//   const [selectedItems, setSelectedItems] = useState([]);

//   const handleSelect = (id) => {
//     setSelectedItems((prevSelected) => {
//       if (prevSelected.includes(id)) {
//         return prevSelected.filter((item) => item !== id);
//       } else {
//         return [...prevSelected, id];
//       }
//     });
//   };

//   return (
//     <div>
//       <h1>Customized Tree View</h1>
//       <CustomizedTreeView
//         data={treeData}
//         onSelect={handleSelect}
//         heading="Tree View Heading"
//       />
//       <h2>Selected Items</h2>
//       <ul>
//         {selectedItems.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MyComponent;
