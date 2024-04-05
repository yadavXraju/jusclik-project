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
          tabHeading: "Total Amount"
         },

        {
          id: 7,
          tabHeading: "Monthly Amount"
        },

  
    
      ]
      
      const data = [
        {
          "feeHead": "Registration Fee",
          "prioridicity":"Annual",
          "feeType": "Supplementary",
          "chargeFrom" : 'New students ',
          "totalAmount": "8000",
          "monthlyAmount" : "4000",
  
        },
        {
          "feeHead": "Late Fee",
          "prioridicity":"Annual",
          "feeType": "Supplementary",
          "chargeFrom" : 'Both old and new students',
          "totalAmount": "9000",
          "monthlyAmount" : "4000",
          
        },
        {
          "feeHead": "Tuition Fee",
          "prioridicity":"Annual",
          "feeType": "one time ",
          "chargeFrom" : 'Old students ',
          "totalAmount": "5000",
          "monthlyAmount" : "4000",

        },
        {
          "feeHead": "Admission Fee",
          "prioridicity":"Annual",
          "feeType": "one time ",
          "chargeFrom" : 'New students ',
          "totalAmount": "6000",
          "monthlyAmount" : "4000",

        },
        {
          "feeHead": "Caution Money",
          "prioridicity":"Annual",
          "feeType": "one time ",
          "chargeFrom" : 'Both old and new students',
          "totalAmount": "8000",
          "monthlyAmount" : "4000",

          },
          {
            "feeHead": "Registration Fee",
            "prioridicity":"Annual",
            "feeType": "Supplementary",
            "chargeFrom" : 'New students ',
            "totalAmount": "7000",
            "monthlyAmount" : "4000",
     
          },
          {
            "feeHead": "Late Fee",
            "prioridicity":"Annual",
            "feeType": "Supplementary",
            "chargeFrom" : 'Both old and new students',
            "totalAmount": "8000",
            "monthlyAmount" : "4000",

          },
         
          {
            "feeHead": "Registration Fee",
            "prioridicity":"Annual",
            "feeType": "Supplementary",
            "chargeFrom" : 'New students ',
            "totalAmount": "8000",
            "monthlyAmount" : "4000",
    
          },
          {
            "feeHead": "Late Fee",
            "prioridicity":"Annual",
            "feeType": "Supplementary",
            "chargeFrom" : 'Both old and new students',
            "totalAmount": "9000",
            "monthlyAmount" : "4000",
            
          },
          {
            "feeHead": "Tuition Fee",
            "prioridicity":"Annual",
            "feeType": "one time ",
            "chargeFrom" : 'Old students ',
            "totalAmount": "5000",
            "monthlyAmount" : "4000",
  
          },
          {
            "feeHead": "Admission Fee",
            "prioridicity":"Annual",
            "feeType": "one time ",
            "chargeFrom" : 'New students ',
            "totalAmount": "6000",
            "monthlyAmount" : "4000",
  
          },
          {
            "feeHead": "Caution Money",
            "prioridicity":"Annual",
            "feeType": "one time ",
            "chargeFrom" : 'Both old and new students',
            "totalAmount": "8000",
            "monthlyAmount" : "4000",
  
            },
            {
              "feeHead": "Registration Fee",
              "prioridicity":"Annual",
              "feeType": "Supplementary",
              "chargeFrom" : 'New students ',
              "totalAmount": "7000",
              "monthlyAmount" : "4000",
       
            },
            {
              "feeHead": "Late Fee",
              "prioridicity":"Annual",
              "feeType": "Supplementary",
              "chargeFrom" : 'Both old and new students',
              "totalAmount": "8000",
              "monthlyAmount" : "4000",
  
            },
            {
              "feeHead": "Registration Fee",
              "prioridicity":"Annual",
              "feeType": "Supplementary",
              "chargeFrom" : 'New students ',
              "totalAmount": "8000",
              "monthlyAmount" : "4000",
      
            },
            {
              "feeHead": "Late Fee",
              "prioridicity":"Annual",
              "feeType": "Supplementary",
              "chargeFrom" : 'Both old and new students',
              "totalAmount": "9000",
              "monthlyAmount" : "4000",
              
            },
            {
              "feeHead": "Tuition Fee",
              "prioridicity":"Annual",
              "feeType": "one time ",
              "chargeFrom" : 'Old students ',
              "totalAmount": "5000",
              "monthlyAmount" : "4000",
    
            },
            {
              "feeHead": "Admission Fee",
              "prioridicity":"Annual",
              "feeType": "one time ",
              "chargeFrom" : 'New students ',
              "totalAmount": "6000",
              "monthlyAmount" : "4000",
    
            },
            {
              "feeHead": "Caution Money",
              "prioridicity":"Annual",
              "feeType": "one time ",
              "chargeFrom" : 'Both old and new students',
              "totalAmount": "8000",
              "monthlyAmount" : "4000",
    
              },
              {
                "feeHead": "Registration Fee",
                "prioridicity":"Annual",
                "feeType": "Supplementary",
                "chargeFrom" : 'New students ',
                "totalAmount": "7000",
                "monthlyAmount" : "4000",
         
              },
              {
                "feeHead": "Late Fee",
                "prioridicity":"Annual",
                "feeType": "Supplementary",
                "chargeFrom" : 'Both old and new students',
                "totalAmount": "8000",
                "monthlyAmount" : "4000",
    
              },
    
      ];


  return (
    <>
         <ReusableTable  columns={tableHeadings} data={data} action={false} />
    </>
  )
}

export default CreateRegularFeeHeads





