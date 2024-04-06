import React from 'react';
import ReusableTable from 'views/erp-module/erp-common-item/setup/system-data/ParamTable';

const tableHeadings = [
    {
      id: 1,
      tabHeading: "Concession category"
    },

    {
      id:2,
      tabHeading: 'Approval based'
    },
    {
        id: 3,
        tabHeading: "Applicable from"
      },

    {
      id: 4,
      tabHeading: "Valid up to"
    },




  ]
  
  const data = [
    {
      "concessionCategory": "Vaccination Discount",
      "approvalBased":"Yes",
      "applicableFrom" : "2025-2026",
      "ValidUpTo" : '2026-2027',
    },

    {
        "concessionCategory": "Scholarship",
        "approvalBased":"Yes",
        "applicableFrom" : "2025",
        "ValidUpTo" : '2026-2027',
      },

      {
        "concessionCategory": "Free Transport",
        "approvalBased":"No",
        "applicableFrom" : "2025",
        "ValidUpTo" : '2026-2027',
      },


      {
        "concessionCategory": "Management",
        "approvalBased":"No",
        "applicableFrom" : "2025",
        "ValidUpTo" : '2026-2027',
      },


  ];

const Concession = () => {
  return (
    <>
      <ReusableTable 
      columns={tableHeadings}
      data={data}
      action={false} />
    </>
  )
}

export default Concession