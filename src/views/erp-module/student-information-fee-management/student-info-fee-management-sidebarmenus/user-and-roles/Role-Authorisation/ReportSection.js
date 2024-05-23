// @Page Owner-Tarun Pandey
import React from 'react';
// import ParamChackboxSelectAll from './ParamChackboxSelectAll';
import CustomizedTreeView from '../../../../../../component/ParamReportTreeView';

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
    label: 'Overview',
    children: [
      { nodeId: '2', label: 'Enquiry' },
      {
        nodeId: '3',
        label: 'Register'
      },
      { nodeId: '4', label: 'Admission' },
      { nodeId: '5', label: 'Enrolment Review' },
      { nodeId: '6', label: 'Withdraw review' }
    ]
  },
  {
    nodeId: '12',
    label: 'Student',
    children: [
      { nodeId: '14', label: 'Student Age As On' },
      {
        nodeId: '15',
        label: 'Student Strength'
      },
    ]
  },
  {
    nodeId: '13',
    label: 'Transport',
    children: [
      { nodeId: '16', label: 'User List' },
      { nodeId: '17', label: 'Attendance' },
      { nodeId: '18', label: 'Transport user as on' },
      { nodeId: '19', label: 'Logs' },
      { nodeId: '20', label: 'Routes & Stops' },
    ]
  },
  {
    nodeId: '21',
    label: 'Invoices',
    children: [
      { nodeId: '22', label: 'Ledger' },
    ]
  },
  {
    nodeId: '23',
    label: 'Fee Management',
    children: [
      { nodeId: '24', label: 'Transaction' },
      { nodeId: '25', label: 'Concession' },
      { nodeId: '26', label: 'Adjustment' },
      { nodeId: '27', label: 'PG Settlement Report' },
      { nodeId: '28', label: 'Fee Structure' },
    ]
  },
  {
    nodeId: '29',
    label: 'Student Records',
    children: [
      { nodeId: '30', label: 'Tuition Fee Certificate' },
      { nodeId: '31', label: 'School Learning Certificate' },
      { nodeId: '32', label: 'Gate Pass' },
      { nodeId: '33', label: 'Identity Card' },
    ]
  },
  {
    nodeId: '34',
    label: 'Activity',
    children: [
      { nodeId: '35', label: 'Parent/Teacher Login List' },
      { nodeId: '36', label: 'User Logs' },
      { nodeId: '37', label: 'Deleted Fee Invoices' },
      { nodeId: '38', label: 'Deleted Fee Transactions' },
    ]
  },
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
