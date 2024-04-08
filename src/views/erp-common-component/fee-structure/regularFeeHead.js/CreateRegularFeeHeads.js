import React from 'react';
import ParamTableDragDrop from '../../../common-section/ParamTableDragDrop';


const CreateRegularFeeHeads = () => {

  const tableHeadings = [
    {
      id: 1,
      tabHeading: ''
    },
    {
      id: 2,
      tabHeading: 'Fee Head'
    },

    {
      id: 3,
      tabHeading: 'Periodicities' //'Prioridicity'
    },

    {
      id: 4,
      tabHeading: 'Fee Type'
    },

    {
      id: 5,
      tabHeading: 'To be charged from'
    },
    {
      id: 6,
      tabHeading: 'Total Amount'
    },

    {
      id: 7,
      tabHeading: 'Monthly Amount'
    }
  ];

  const data = [
    { 
      id:"1",
      feeHead: 'Registration Fee',
      prioridicity: 'Annual',
      feeType: 'Supplementary',
      chargeFrom: 'New students ',
      totalAmount: '8000',
      monthlyAmount: '4000'
    },
    {
      id:"2",
      feeHead: 'Late Fee',
      prioridicity: 'Annual',
      feeType: 'Supplementary',
      chargeFrom: 'Old and new students',
      totalAmount: '9000',
      monthlyAmount: '4000'
    },
    {
      id:"3",
      feeHead: 'Tuition Fee',
      prioridicity: 'Annual',
      feeType: 'One time ',
      chargeFrom: 'Old students ',
      totalAmount: '5000',
      monthlyAmount: '4000'
    },
    {
      id:"4",
      feeHead: 'Admission Fee',
      prioridicity: 'Annual',
      feeType: 'One time ',
      chargeFrom: 'New students ',
      totalAmount: '6000',
      monthlyAmount: '4000'
    },
    {
      id:"5",
      feeHead: 'Caution Money',
      prioridicity: 'Annual',
      feeType: 'One time ',
      chargeFrom: 'Old and new students',
      totalAmount: '8000',
      monthlyAmount: '4000'
    },
    {
      id:"6",
      feeHead: 'Registration Fee',
      prioridicity: 'Annual',
      feeType: 'Supplementary',
      chargeFrom: 'New students ',
      totalAmount: '7000',
      monthlyAmount: '4000'
    },
    {
      id:"7",
      feeHead: 'Late Fee',
      prioridicity: 'Annual',
      feeType: 'Supplementary',
      chargeFrom: 'Old and new students',
      totalAmount: '8000',
      monthlyAmount: '4000'
    },

    {
      id:"8",
      feeHead: 'Registration Fee',
      prioridicity: 'Annual',
      feeType: 'Supplementary',
      chargeFrom: 'New students ',
      totalAmount: '8000',
      monthlyAmount: '4000'
    },
    {
      id:"9",
      feeHead: 'Late Fee',
      prioridicity: 'Annual',
      feeType: 'Supplementary',
      chargeFrom: 'Old and new students',
      totalAmount: '9000',
      monthlyAmount: '4000'
    },
    
    {
      id:"10",
      feeHead: 'Tuition Fee',
      prioridicity: 'Annual',
      feeType: 'One time ',
      chargeFrom: 'Old students ',
      totalAmount: '5000',
      monthlyAmount: '4000'
    },
    {
      id:"11",
      feeHead: 'Admission Fee',
      prioridicity: 'Annual',
      feeType: 'One time ',
      chargeFrom: 'New students ',
      totalAmount: '6000',
      monthlyAmount: '4000'
    },
    {
      id:"12",
      feeHead: 'Caution Money',
      prioridicity: 'Annual',
      feeType: 'One time ',
      chargeFrom: 'Old and new students',
      totalAmount: '8000',
      monthlyAmount: '4000'
    },
    {
      id:"13",
      feeHead: 'Registration Fee',
      prioridicity: 'Annual',
      feeType: 'Supplementary',
      chargeFrom: 'New students ',
      totalAmount: '7000',
      monthlyAmount: '4000'
    },
    {
      id:"14",
      feeHead: 'Late Fee',
      prioridicity: 'Annual',
      feeType: 'Supplementary',
      chargeFrom: 'Old and new students',
      totalAmount: '8000',
      monthlyAmount: '4000'
    },
    {
      id:"15",
      feeHead: 'Registration Fee',
      prioridicity: 'Annual',
      feeType: 'Supplementary',
      chargeFrom: 'New students ',
      totalAmount: '8000',
      monthlyAmount: '4000'
    },
    {
      id:"16",
      feeHead: 'Late Fee',
      prioridicity: 'Annual',
      feeType: 'Supplementary',
      chargeFrom: 'Old and new students',
      totalAmount: '9000',
      monthlyAmount: '4000'
    },
    {
      id:"17",
      feeHead: 'Tuition Fee',
      prioridicity: 'Annual',
      feeType: 'One time ',
      chargeFrom: 'Old students ',
      totalAmount: '5000',
      monthlyAmount: '4000'
    },
    {
      id:"18",
      feeHead: 'Admission Fee',
      prioridicity: 'Annual',
      feeType: 'One time ',
      chargeFrom: 'New students ',
      totalAmount: '6000',
      monthlyAmount: '4000'
    },
    {
      id:"19",
      feeHead: 'Caution Money',
      prioridicity: 'Annual',
      feeType: 'One time ',
      chargeFrom: 'Old and new students',
      totalAmount: '8000',
      monthlyAmount: '4000'
    },
    {
      id:"20",
      feeHead: 'Registration Fee',
      prioridicity: 'Annual',
      feeType: 'Supplementary',
      chargeFrom: 'New students ',
      totalAmount: '7000',
      monthlyAmount: '4000'
    },
    {
      id:"21",
      feeHead: 'Late Fee',
      prioridicity: 'Annual',
      feeType: 'Supplementary',
      chargeFrom: 'Old and new students',
      totalAmount: '8000',
      monthlyAmount: '4000'
    }
  ];

  return (
    <>

         <ParamTableDragDrop
                tableStyle={{ paddingBottom: '4rem' }}
                dragIcon={true}
                columns={tableHeadings}
                initialData={data}
            />

    </>
  );
};

export default CreateRegularFeeHeads;
