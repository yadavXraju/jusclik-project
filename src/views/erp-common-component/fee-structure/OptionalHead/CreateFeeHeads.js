import React from 'react';
import ReusableTable from 'views/erp-module/erp-common-item/setup/system-data/ParamTable';

const CreateFeeHead = () => {

    const tableHeadings = [
        {
          id: 2,
          tabHeading: "Fee Head"
        },
        {
          id: 3,
          tabHeading: "Fee Type"
        },
        {
          id: 4,
          tabHeading: "Amount"
        },
        {
          id: 5,
          tabHeading: "To Be Charge From"
        },
    
      ]
      
      const data = [
        {
          "feeHead": "Registration Fee",
          "feeType": "Supplementary Invoice Only",
          "Amount": "4000",
          "Date" : '01-May-2024'
        },
        {
          "feeHead": "Late Fee",
          "feeType": "Supplementary Invoice Only",
          "Amount": "4000",
          "Date" : '01-May-2024'
        },
        {
          "feeHead": "Tuition Fee",
          "feeType": "Fee charged one time only",
          "Amount": "4000",
          "Date" : '01-May-2024'
        },
        {
          "feeHead": "Admission Fee",
          "feeType": "Fee charged one time only",
          "Amount": "4000",
          "Date" : '01-May-2024'
        },
        {
          "feeHead": "Caution Money",
          "feeType": "Fee charged one time only",
          "Amount": "4000",
          "Date" : '01-May-2024'
          },
    
      ];


  return (
    <>
         <ReusableTable  columns={tableHeadings} data={data} action={false}/>
    </>
  )
}

export default CreateFeeHead

