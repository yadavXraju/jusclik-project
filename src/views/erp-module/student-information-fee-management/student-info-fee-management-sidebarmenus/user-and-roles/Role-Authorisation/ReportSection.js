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

// const treeData = [
//   {
//     nodeId: '1',
//     label: 'Main',
//     children: [
//       { nodeId: '2', label: 'Hello' },
//       { 
//         nodeId: '3', 
//         label: 'Subtree with children',
//         children: [
//           { nodeId: '6', label: 'Hello' },
//           { 
//             nodeId: '7', 
//             label: 'Sub-subtree with children',
//             children: [
//               { nodeId: '9', label: 'Child 1' },
//               { nodeId: '10', label: 'Child 2' },
//               { nodeId: '11', label: 'Child 3' }
//             ]
//           },
//           { nodeId: '8', label: 'Hello' }
//         ]
//       },
//       { nodeId: '4', label: 'World' },
//       { nodeId: '5', label: 'Something something' }
//     ]
//   }
// ];




function ReportSection() {
  const handleSelect = (id) => {
    console.log(`Selected ID: ${id}`);
    // Handle selection logic here
  };

  return (
    <div>
      <ParamChackboxSelectAll data={AcademicSessionData} onSelect={handleSelect} heading='Reports' />
      {/* <CustomizedTreeView data={treeData} /> */}
      <CustomizedTreeView />
    </div>


  );
}

export default ReportSection;
