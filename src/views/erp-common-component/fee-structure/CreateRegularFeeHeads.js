import React from 'react';
import ReusableTable from 'views/erp-module/erp-common-item/setup/system-data/ParamTable';


const CreateRegularFeeHeads = () => {

    const tableHeadings = [
        {
          id: 2,
          tabHeading: "Fee Head"
        },

        {
          id:3,
          tabHeading: 'Prioridicity'
        },

        {
          id: 4,
          tabHeading: "Fee Type"
        },

        {
          id: 5,
          tabHeading: "To be charged from"
        },

        {
          id: 6,
          tabHeading: "Monthly Amount"
        },
        {
         id: 7,
         tabHeading: "Total Amount"
        },
  
    
      ]
      
      const data = [
        {
          "feeHead": "Registration Fee",
          "prioridicity":"Annual",
          "feeType": "Supplementary",
          "chargeFrom" : 'New students ',
          "monthlyAmount" : "4000",
          "totalAmount": "8000",
        },
        {
          "feeHead": "Late Fee",
          "prioridicity":"Annual",
          "feeType": "Supplementary",
          "chargeFrom" : 'Both old and new students',
          "monthlyAmount" : "4000",
          "totalAmount": "9000",
        },
        {
          "feeHead": "Tuition Fee",
          "prioridicity":"Annual",
          "feeType": "one time ",
          "chargeFrom" : 'Old students ',
          "monthlyAmount" : "4000",
          "totalAmount": "5000",
        },
        {
          "feeHead": "Admission Fee",
          "prioridicity":"Annual",
          "feeType": "one time ",
          "chargeFrom" : 'New students ',
          "monthlyAmount" : "4000",
          "totalAmount": "6000",
        },
        {
          "feeHead": "Caution Money",
          "prioridicity":"Annual",
          "feeType": "one time ",
          "chargeFrom" : 'Both old and new students',
          "monthlyAmount" : "4000",
          "totalAmount": "8000",
          },
          {
            "feeHead": "Registration Fee",
            "prioridicity":"Annual",
            "feeType": "Supplementary",
            "chargeFrom" : 'New students ',
            "monthlyAmount" : "4000",
            "totalAmount": "7000",
          },
          {
            "feeHead": "Late Fee",
            "prioridicity":"Annual",
            "feeType": "Supplementary",
            "chargeFrom" : 'Both old and new students',
            "monthlyAmount" : "4000",
            "totalAmount": "8000",
          },
          {
            "feeHead": "Tuition Fee",
            "prioridicity":"Annual",
            "feeType": "one time ",
            "chargeFrom" : 'Old students ',
            "monthlyAmount" : "4000",
            "totalAmount": "6000",
          },
          {
            "feeHead": "Admission Fee",
            "prioridicity":"Annual",
            "feeType": "one time ",
            "chargeFrom" : 'New students ',
            "monthlyAmount" : "4000",
            "totalAmount": "7000",
            
          },
          {
            "feeHead": "Caution Money",
            "prioridicity":"Annual",
            "feeType": "one time ",
            "chargeFrom" : 'Both old and new students',
            "monthlyAmount" : "4000",
            "totalAmount": "6000",
            },
    
      ];


  return (
    <>
         <ReusableTable  columns={tableHeadings} data={data} action={false} />
    </>
  )
}

export default CreateRegularFeeHeads



// import React from 'react';
// // import ReusableTable from 'views/erp-module/erp-common-item/setup/system-data/ParamTable';
// import CommonDataGrid from 'views/common-section/commonDataGrid';

// const CreateRegularFeeHeads = () => {

//     const tableHeadings = [
//         {
//           id: 2,
//           tabHeading: "Fee Head"
//         },

//         {
//           id:3,
//           tabHeading: 'Prioridicity'
//         },

//         {
//           id: 4,
//           tabHeading: "Fee Type"
//         },
//         {
//           id: 5,
//           tabHeading: "Amount"
//         },
//         {
//           id: 6,
//           tabHeading: "To be charge from"
//         },
  
    
//       ]
      
//       const data = [
//         {
//           "feeHead": "Registration Fee",
//           "prioridicity":"Annual",
//           "feeType": "Supplementary",
// 
//           "chargeFrom" : 'New students '
//         },
//         {
//           "feeHead": "Late Fee",
//           "prioridicity":"Annual",
//           "feeType": "Supplementary",
// 
//           "chargeFrom" : 'Both old and new students'
//         },
//         {
//           "feeHead": "Tuition Fee",
//           "prioridicity":"Annual",
//           "feeType": "one time ",
// 
//           "chargeFrom" : 'Old students '
//         },
//         {
//           "feeHead": "Admission Fee",
//           "prioridicity":"Annual",
//           "feeType": "one time ",
// 
//           "chargeFrom" : 'New students '
//         },
//         {
//           "feeHead": "Caution Money",
//           "prioridicity":"Annual",
//           "feeType": "one time ",
// 
//           "chargeFrom" : 'Both old and new students'
//           },
//           {
//             "feeHead": "Registration Fee",
//             "prioridicity":"Annual",
//             "feeType": "Supplementary",
//   
//             "chargeFrom" : 'New students '
//           },
//           {
//             "feeHead": "Late Fee",
//             "prioridicity":"Annual",
//             "feeType": "Supplementary",
//   
//             "chargeFrom" : 'Both old and new students'
//           },
//           {
//             "feeHead": "Tuition Fee",
//             "prioridicity":"Annual",
//             "feeType": "one time ",
//   
//             "chargeFrom" : 'Old students '
//           },
//           {
//             "feeHead": "Admission Fee",
//             "prioridicity":"Annual",
//             "feeType": "one time ",
//   
//             "chargeFrom" : 'New students '
//           },
//           {
//             "feeHead": "Caution Money",
//             "prioridicity":"Annual",
//             "feeType": "one time ",
//   
//             "chargeFrom" : 'Both old and new students'
//             },
    
//       ];


//   return (
//     <>
//          {/* <ReusableTable  columns={tableHeadings} data={data} action={false} /> */}
//          <CommonDataGrid rows={tableHeadings} columns={data}/>
//     </>
//   )
// }

// export default CreateRegularFeeHeads

