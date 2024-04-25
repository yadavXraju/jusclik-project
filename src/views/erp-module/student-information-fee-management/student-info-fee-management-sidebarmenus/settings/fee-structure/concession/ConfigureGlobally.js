import React,{useState , useEffect} from 'react';
import {Grid, TextField ,styled ,Button ,} from '@mui/material';
import SelectList from 'views/common-section/ParamSelectList';
import ParamDateComponent from 'views/common-section/ParamDateComponent';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CommonDataGrid from 'views/common-section/commonDataGrid';
import ParamMultipleSelect from 'views/common-section/ParamMultipleSelect';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });




const ConfigureGlobally = () => {

    const [concessionData, setConcessionData] = useState([{
        applicableFromDate : '',
        uptoDate : '',
        remarks:'',
        concessionType:'',
        amount:'',
        classes:'',
        id: 0, 
        srNo: '', 
        feeHead: '', 
}]);

// multiple select dropdown states
const [feeHead, setFeeHead] = useState([]);
const [classes , setClasses] = useState([]);


// const handleChange = (e, id) => {
//   const { name, value } = e.target;
//   setConcessionData((prevData) =>
//     prevData.map((row) =>
//       row.id === id ? { ...row, [name]: value } : row
//     )
//   );
// };

const handleChange = (e, id) => {
  const { name, value } = e.target;
  setConcessionData((prevData) =>
    prevData.map((row) => {
      if (row.id === id) {
        // console.log('Row values:', {
        //   id: row.id,
        //   srNo: row.srNo,
        //   feeHead: row.feeHead,
        //   amount: row.amount,
        //   [name]: value,
        // });
        return { ...row, [name]: value };
      } else {
        return row;
      }
    })
  );
};


 // Update feeHead state when a new value is selected
const handleFeeHeadChange = (selectedFeeHead) => {
  setFeeHead(selectedFeeHead);
};

 // Class
 const handleClassChange = (selectedClass) => {
  setClasses(selectedClass);
};


 // concession type
  const concessionTypeOptions = [
    { value: 'Percentage wise concession', label: 'Percentage wise concession' },
    { value: 'Rate wise concession', label: 'Rate wise concession' },
    { value: 'Exception charges', label: 'Exception charges' },
    { value: 'Non chargeable fee', label: 'Non chargeable fee' }
  ];

// fee  head options
  const feeHeadOptions = [
    { id: 1, name: 'Late Fee' },
    { id: 2, name: 'SRD Charges' },
    { id: 3, name: 'Admission Fee ' },
    { id: 4, name: 'Caution Money' },
    { id: 5, name: 'Security Charges' },
    { id: 6, name: 'Composite Fee' },
    { id: 7, name: 'Science Fee' },
    { id: 8, name: 'Chemistry Lab Charges' },
    { id: 9, name: 'Tuition Fee' }
  ];

  // class options
  const classesOptions = [
    { id: 1, name: 'kg' },
    { id: 2, name: 'Nursery' },
    { id: 3, name: 'I' },
    { id: 4, name: 'II' },
    { id: 5, name: 'III' },
    { id: 6, name: 'IV' },
    { id: 7, name: 'V' },
    { id: 8, name: 'VI' },
    { id: 9, name: 'VII' },
    { id: 10, name: 'VIII' },
    { id: 11, name: 'IX' },
    { id: 12, name: 'X' },
    { id: 13, name: 'XI' },
    { id: 14, name: 'XII' },
  ];

  useEffect(() => {
    // If no fee head is selected, create an empty row
    if (feeHead.length === 0) {
      setConcessionData([
        {
          id: 0,
          srNo: '',
          feeHead: '',
          concessionType: '',
          amount: '',
        },
      ]);
    } else {
      const newRows = feeHead.map((fh, index) => ({
        id: index + 1,
        srNo: `${index + 1}`, // Increment the Sr No. by 1 for each new row
        feeHead: fh.name,
        concessionType: '',
        amount: '',
      }));
      setConcessionData(newRows);
    }
  }, [feeHead]); // Only include feeHead in the dependencies
  
  

  const TableRowData = concessionData.map((row) => ({
    id: row.id,
    srNo: row.srNo,
    feeHead: row.feeHead,
    concessionType: row.concessionType,
    amount: row.amount,
  }));

  
  const columns = [
    { field: 'srNo', headerName: 'Sr No.', flex: 1, maxWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'feeHead', headerName: 'Fee Head', flex: 1, minWidth: 130 },
    { field: 'concessionType',
      headerName: 'Concession Type',
      flex: 1,
      minWidth: 130,
      renderCell: (params) => {
        const row = concessionData.find((row) => row.id === params.id);
        // Render SelectList only if feeHead is not empty for the current row
        if (row && row.feeHead !== '') {
          return (
            <SelectList
              hiddenLabel
              name="concessionType"
              id={`concessionType-${params.id}`}
              options={concessionTypeOptions}
              value={row.concessionType}
              onChange={(e) => handleChange(e, params.id)}
              className='findcomp'
              customStyle={{
                borderRadius:'0 !important',     
                '& fieldset' :{
                  borderRadius:'0 !important',
                  border:'none !important',
                },
                '& .MuiSelect-select' :{
                  background:'#fff',
                  border:'1px solid #ccc',
                  padding:'12px',
                  borderRadius:'0',
                }
              }}
            />
          );
        }
        return null; // Return null if feeHead is empty
      },
    },
    { field: 'amount', headerName: 'Amount', flex: 1, minWidth: 130,
      renderCell: (params) => {
        const row = concessionData.find((row) => row.id === params.id);
        // Render TextField only if feeHead is not empty for the current row
        if (row && row.feeHead !== '') {
          return (
            <TextField
              hiddenLabel
              name="amount"
              id={`amount-${params.id}`}
              value={row.amount}
              onChange={(e) => handleChange(e, params.id)}
              fullWidth
              type='number'
              sx={{ 
                borderRadius:'0 !important',
                '& input' :{
                  padding:'12px',
                  background:'#fff',
                },
                '& fieldset' :{
                  borderRadius:'0',
                  border:'1px solid #ccc',
                },
                "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
                  WebkitAppearance: "none",
                  margin: 0,
                },
                "input[type=number]": {
                  MozAppearance: "textfield",
                },
              }}
            />
          );
        }
        return null; // Return null if feeHead is empty
      },
    },
  ];
  
  
  return (
    <>

      <Grid container spacing={4} sx={{marginTop:'1rem'}}>
          <Grid item lg={4}>
              <Grid container spacing={2} sx={{ borderRadius:'12px' ,margin:'0' , width:'100%', border:'1px solid rgba(224, 224, 224, 1)', padding:'1rem 1rem 1rem 0px'}}>

                  {/* ===========================  applicable from date*/}
                  <Grid item xs={12} md={6} sx={{ marginBottom: '24px'  }}>
                      <ParamDateComponent label="Applicable From Date" name="applicableFromDate"  value={concessionData.applicableFromDate} customStyle={{ width: '100%' }} />
                  </Grid>

                  {/* ===========================  up to date*/}
                  <Grid item xs={12} md={6} sx={{ marginBottom: '24px'  }}>
                      <ParamDateComponent label="Upto Date" name="uptoDate"  value={concessionData.uptoDate} customStyle={{ width: '100%' }} />
                  </Grid>

                  {/* ===========================  fee head */}
                  <Grid item  xs={12} md={12} sx={{ marginBottom: '24px' }}>
                      <ParamMultipleSelect
                        options={feeHeadOptions}
                        label="Fee Head"
                        value={feeHead} 
                        setValue={handleFeeHeadChange} // Pass handleFeeHeadChange function
                      />
                  </Grid>

                  {/* ===========================  Class */}
                  <Grid item  xs={12} md={12} sx={{ marginBottom: '24px' }}>
                      <ParamMultipleSelect options={classesOptions} label="Class" value={classes}  setValue={handleClassChange} />
                  </Grid>

                  {/* ===========================  remarks*/}
                  <Grid item  xs={12} md={12} sx={{ marginBottom: '24px' }}>
                          <TextField
                            id="remarks"
                            name="remarks"
                            value={concessionData.remark}
                            label="Remarks"
                            variant="outlined"
                            onChange={handleChange}
                            fullWidth
                          />
                  </Grid>

                  {/* ===========================  upload file*/}
                  <Grid item  xs={12} md={12} sx={{ marginBottom: '24px' }}>
                      <Button
                          component="label"
                          role={undefined}
                          sx={{width:'100%' , padding:'12px' , borderRadius:'12px'}}
                          variant="contained"
                          tabIndex={-1}
                          startIcon={<CloudUploadIcon />}
                          >
                          Upload file
                          <VisuallyHiddenInput type="file" />
                      </Button>
                  </Grid>

              </Grid>
          </Grid>
          {/* table */}
        <Grid  item lg={8} sx={{}}>
            <CommonDataGrid
                rows={TableRowData} columns={columns}  width="100%"
                checkboxSelection={false}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 50 }
                  },
                }}
                  
                pageSizeOptions={[10, 25, 50, 100]}
                sx={{borderRadius:'12px', '& .MuiDataGrid-cell':{
                  outline:'none !important',
                },
              
                '& .MuiDataGrid-row:hover': {
                  backgroundColor: 'inherit', // or 'transparent'
                },

              }}
            />
        </Grid>
    </Grid> 
    </>
  )
}

export default ConfigureGlobally