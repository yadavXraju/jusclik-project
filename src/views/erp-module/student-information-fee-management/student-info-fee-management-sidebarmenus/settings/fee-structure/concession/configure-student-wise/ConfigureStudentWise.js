import React from 'react';
// import ConfigStudentWiseForm from './ConfigStudentWiseForm';
import { Grid } from '@mui/material';
// import ConfigureStudentWisePreview from './ConfigureStudentWisePreview';
// import ParamTable from 'views/erp-common-component/ParamTable';
// import { useSelector } from 'react-redux';

const ConfigureStudentWise = () => {
  // const configGlobally = useSelector((state) => state.configGloballyFormSlice?.configGlobally);


  //   const TableHeading = [
  //     {
  //       id: 1,
  //       tabHeading: 'Sr No.',
  //     },
  
  //     {
  //       id: 2,
  //       tabHeading: 'Fee Head',
  //     },
  
  //     {
  //       id: 3,
  //       tabHeading: 'Class',
  //     },
  
  //     {
  //       id: 4,
  //       tabHeading: 'Concession Type',
  //     },
  
  //     {
  //       id: 5,
  //       tabHeading: 'Amount',
  //     },
  //   ];

  //   const TableData = configGlobally?.map((item) => ({
  //       id: item?.id ,
  //       srNO: item?.srNo,
  //       feeHead: item?.feeHead,
  //       class:  item.classes.join(' , '), 
  //       concessionType: item?.concessionType,
  //       amount: item?.amount,
  //     }));

  return (
    <>
       <Grid container spacing={4} sx={{ marginTop: '1rem' }}>
         {/* <ConfigStudentWiseForm />
         <ConfigureStudentWisePreview /> */}
      </Grid>

      {/* <Grid item xs={12} lg={12} sx={{marginTop:'3rem'}}>
          <ParamTable
            columns={TableHeading}
            data={TableData}
            action={false}
            tablePaper={{ border: '1px solid rgba(224, 224, 224, 1)' , maxHeight:'400px'}}
            tableStyle={{ paddingBottom: '5rem' }}
          />
        </Grid> */}
    </>
  )
}

export default ConfigureStudentWise
