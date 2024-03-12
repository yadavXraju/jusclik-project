import React from 'react';
// import ParamChackboxSelectAll from './ParamChackboxSelectAll';
import CustomizedTreeView from './ParamReportTreeView';

// const AcademicSessionData = [
//   { id: '1', details: { year: 'Loan Reports', checked: false } },
//   { id: '2', details: { year: 'Activity Logs', checked: true  } },
//   { id: '3', details: { year: 'Payroll Reports', checked: false } },
//   { id: '4', details: { year: 'Declaration Reports', checked: true } },
//   { id: '5', details: { year: 'Deduction Reports', checked: true } },
//   { id: '6', details: { year: 'Statutory Reports', checked: true } },
//   { id: '7', details: { year: 'Tax Reports', checked: false } },
// ];

const treeData = [
  {
    nodeId: '1',
    label: 'Reports',
    children: [
      { nodeId: '2', label: 'Loan Reports' },
      {
        nodeId: '3',
        label: 'Subtree Reports'
      },
      { nodeId: '4', label: 'Declaration Reports' },
      { nodeId: '5', label: 'Deduction Reports' }
    ]
  },
  {
    nodeId: '12',
    label: 'Tax Reports',
    children: [
      { nodeId: '14', label: 'Loan Reports' },
      {
        nodeId: '15',
        label: 'Subtree Reports'
      },
      { nodeId: '16', label: 'Declaration Reports' },
      { nodeId: '17', label: 'Deduction Reports' }
    ]
  },
  { nodeId: '13', label: 'Statutory Reports' }
];

function ReportSection() {
  const handleSelect = (id) => {
    console.log(`Selected ID: ${id}`);
    // Handle selection logic here
  };

  return (
    <div>
      {/* <ParamChackboxSelectAll data={AcademicSessionData} onSelect={handleSelect} heading='Reports' /> */}
      <CustomizedTreeView data={treeData} onSelect={handleSelect} heading='Reports'/>
    </div>
  );
}

export default ReportSection;
