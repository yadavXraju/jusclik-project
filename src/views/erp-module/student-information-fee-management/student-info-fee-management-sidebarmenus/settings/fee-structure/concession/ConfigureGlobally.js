import React,{useState , useEffect} from 'react';
import {Grid, TextField ,styled ,Button , Paper , Box, Typography ,} from '@mui/material';
import SelectList from 'views/common-section/ParamSelectList';
import ParamDateComponent from 'views/common-section/ParamDateComponent';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CommonDataGrid from 'views/common-section/commonDataGrid';
import ParamMultipleSelect from 'views/common-section/ParamMultipleSelect';
import ParamTable from 'views/erp-common-component/ParamTable';

export const VisuallyHiddenInput = styled('input')({
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

export const style = {
  BottomNavbar: {
      width:'100%',
      display: 'flex',
      paddingRight: "40px",
      paddingLeft: "40px",
      alignItems: 'center',
      gap: "20px",
      position: "fixed",
      bottom: "0px",
      backgroundColor: "#fafafa",
      height: "60px",
      borderBottom: '1px solid #eee',
      borderTop: '1px solid #eee',
      zIndex:'999',
  }
};

const ConfigureGlobally = ({customStyle}) => {

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
const [TableData, setTableData] = useState([]);

const handleChange = (e, id) => {
  const { name, value } = e.target;
  setConcessionData((prevData) =>
    prevData.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    })
  );
};

 // Update feeHead state when a new value is selected
const handleFeeHeadChange = (selectedFeeHead) => {
  setFeeHead(selectedFeeHead);
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
    { id: 0, name: 'All' },
    { id: 1, name: 'kg' },
    { id: 2, name: 'Nursery' },
    { id: 3, name: 'I ' },
    // { id: 4, name: 'I B' },
    // { id: 5, name: 'I C' },
    { id: 6, name: 'II ' },
    // { id: 7, name: 'II B' },
    // { id: 8, name: 'II C' },
    { id: 9, name: 'III A' },
    { id: 10, name: 'III B' },
    // { id: 11, name: 'III C' },
    { id: 12, name: 'IV A' },
    { id: 13, name: 'IV B' },
    // { id: 14, name: 'IV C' },
    { id: 15, name: 'V A' },
    { id: 16, name: 'V B' },
    { id: 17, name: 'V C' },
    { id: 18, name: 'VI A' },
    { id: 19, name: 'VI B' },
    { id: 20, name: 'VI C' },
    { id: 21, name: 'VII A' },
    { id: 22, name: 'VII B' },
    { id: 23, name: 'VII C' },
    { id: 24, name: 'VIII A' },
    { id:25, name: 'VIII B' },
    { id: 26, name: 'VIII C' },
    { id: 27, name: 'IX A' },
    { id: 28, name: 'IX B' },
    { id: 29, name: 'IX C' },
    { id: 30, name: 'X' },
    { id: 31, name: 'X A' },
    { id: 32, name: 'X B' },
    { id: 33, name: 'X C' },
  ];

  const handleClassChange = (selectedClass) => {
    setClasses(selectedClass)
  }
  
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
      const newRows = feeHead.map((fh, index) => {
        const existingRow = concessionData.find((row) => row.feeHead === fh.name);
        if (existingRow) {
          return existingRow; // Preserve existing row if fee head already exists
        } else {
          return {
            id: index + 1,
            srNo: `${index + 1}`,
            feeHead: fh.name,
            concessionType: '',
            amount: '',
          };
        }
      });
      setConcessionData(newRows);
    }
  }, [feeHead, ]); // Include concessionData in the dependencies

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
  
  // table
  const TableHeading = [
    {
      id:1,
      tabHeading:'Sr No.',
    },

    {
      id:2,
      tabHeading:'Fee Head',
    },

    {
      id:3,
      tabHeading:'Class',
    },

    {
      id:4,
      tabHeading:'Concession Type',
    },

    {
      id:5,
      tabHeading:'Amount',
    },


  ]
  
  const updateTableData = () => {
    const newData = concessionData.map((row) => ({
      id: row.id,
      srNO: row.srNo,
      feeHead: row.feeHead,
      class:'test',
      concessionType: row.concessionType,
      amount: row.amount,
    }));
    setTableData(newData);
  };

  // print data onclick on submit
  const handleSubmit = () => {
    updateTableData();
  };
    
  return (
    <>

      <Grid container spacing={4} sx={{marginTop:'1rem'}}>
        <Grid item xs={12} lg={4}>
            <Grid container spacing={2} sx={{ borderRadius:'12px' ,margin:'0' , width:'100%', border:'1px solid rgba(224, 224, 224, 1)', padding:'1rem 1rem 1rem 0px'}}>

                {/* ===========================  applicable from date*/}
                <Grid item xs={12} md={6} sx={{ marginBottom: '5px'  }}>
                    <ParamDateComponent label="Applicable From Date" name="applicableFromDate"  value={concessionData.applicableFromDate} customStyle={{ width: '100%' }} />
                </Grid>

                {/* ===========================  up to date*/}
                <Grid item xs={12} md={6} sx={{ marginBottom: '5px'  }}>
                    <ParamDateComponent label="Upto Date" name="uptoDate"  value={concessionData.uptoDate} customStyle={{ width: '100%' }} />
                </Grid>

                {/* ===========================  fee head */}
                <Grid item  xs={12} md={12} sx={{ marginBottom: '5px' }}>
                    <ParamMultipleSelect
                      options={feeHeadOptions}
                      label="Fee Head"
                      value={feeHead} 
                      setValue={handleFeeHeadChange} // Pass handleFeeHeadChange function
                    />
                </Grid>

                {/* ===========================  Class */}
                <Grid item  xs={12} md={12} sx={{ marginBottom: '5px' }}>
                    <ParamMultipleSelect options={classesOptions} label="Class" value={classes}  setValue={handleClassChange} />
                </Grid>

                {/* ===========================  remarks*/}
                <Grid item  xs={12} md={12} sx={{ marginBottom: '5px' }}>
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
                <Grid item  xs={12} md={12} sx={{ marginBottom: '5px' }}>
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

        {/* data grid*/}
        <Grid  item xs={12} lg={8} sx={{position:'relative'}}>
            <CommonDataGrid
                rows={TableRowData}
                columns={columns}
                width="100%"
                checkboxSelection={false}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 50 }
                  },
                }}
                pageSizeOptions={[10, 25, 50, 100]}
                sx={{
                  borderRadius: '12px',
                  '& .MuiDataGrid-cell': {
                    outline: 'none !important',
                  },
                  '& .MuiDataGrid-row:hover': {
                    backgroundColor: 'inherit', // or 'transparent'
                  },
                  '& .MuiDataGrid-selectedRowCount' :{
                    visibility:'hidden',
                }
                }}
           />
 
          <Box sx={{ position: 'absolute', bottom: '0px', left: '60px' , width:'50%' , minHeight:'80px' , display:'flex' , alignItems:'center' }}>
              <Typography variant='h5' sx={{lineHeight:'34px'}}>
                {classes.length > 0 ? `Class: ${classes.map(cls => cls.name).join(', ')}` : null}
              </Typography>
           </Box>

           
        </Grid>

        <Grid item  xs={12} lg={12}>
           <ParamTable 
            columns={TableHeading}
            data={TableData}
            action={false}
            tablePaper={{border:'1px solid rgba(224, 224, 224, 1)'}}
            tableStyle={{paddingBottom:'5rem'}}
           />
        </Grid>

        {/* botttom nav  */}
        <Paper sx={{ ...style.BottomNavbar, ...customStyle }}>
            <Box sx={{ display: "flex", gap: "20px" }}>
                 <Button variant="contained" sx={{ height: "38px",marginTop: "auto",marginBottom:"auto", width: "144px" }} onClick={handleSubmit}>
                        Submit
                 </Button>
  
            </Box>
            <Button variant="outlined" sx={{ height: "38px",marginTop: "auto",marginBottom:"auto", width: "144px" }}>
                Cancel
            </Button>
        </Paper>

     </Grid> 
    </>
  )
}

export default ConfigureGlobally