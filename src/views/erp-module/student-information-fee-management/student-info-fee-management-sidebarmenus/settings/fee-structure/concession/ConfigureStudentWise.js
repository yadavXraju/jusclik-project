import React,{useState} from 'react';
import {Grid, TextField ,styled ,Button ,} from '@mui/material';
import SelectList from 'views/common-section/ParamSelectList';
import ParamDateComponent from 'views/common-section/ParamDateComponent';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CommonDataGrid from 'views/common-section/commonDataGrid';


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




const ConfigureStudentWise = () => {

    const [concessionData, setConcessionData] = useState([{
        id:'',
        studentName:'',
        admissionNo:'',
        classSection:'',
        applicableFromDate : '',
        uptoDate : '',
        remarks:'',
        concessionType:'',
        amount:'',
}]);

      // const handleChange = (e) => {
      //   const { name, value } = e.target;
      //     setConcessionData((prevData) => ({
      //       ...prevData,
      //       [name]: value,
      //     }));

      // };

      const handleChange = (e, id) => {
        const { name, value } = e.target;
        setConcessionData((prevData) =>
          prevData.map((row) =>
            row.id === id ? { ...row, [name]: value } : row
          )
        );
      };
      
    
      
 // concession type
  const ConcessionTypeOptions = [
    { value: 'Percentage wise concession', label: 'Percentage wise concession' },
    { value: 'Rate wise concession', label: 'Rate wise concession' },
    { value: 'Exception charges', label: 'Exception charges' },
    { value: 'Non chargeable fee', label: 'Non chargeable fee' }
  ];

  
  const TableRowData = [
    {
      id: 1,
      srNo: '1',
      concessionCategory: 'Vaccination Discount',
      concessionType: '',
      amount: '',
    },
    {
      id: 2,
      srNo: '2',
      concessionCategory: 'Staff Child',
      concessionType: '',
      amount: '',
    },
    {
      id: 3,
      srNo: '3',
      concessionCategory: 'Scholarship',
      concessionType: '',
      amount: '',
    },
    {
      id: 4, 
      srNo: '4',
      concessionCategory: '50% of Tuition Fee',
      concessionType: '',
      amount: '',
    },
    {
      id: 5,
      srNo: '5',
      concessionCategory: '50% in Fee',
      concessionType: '',
      amount: '',
    },
    {
        id: 6,
        srNo: '6',
        concessionCategory: 'Staff',
        concessionType: '',
        amount: '',
      },

      {
        id: 7,
        srNo: '7',
        concessionCategory: '50% of Tuition Fee',
        concessionType: '',
        amount: '', 
      },
      
  ];
  

  const columns = [
    { field: 'srNo', headerName: 'Sr No.', flex: 1,  maxWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'concessionCategory', headerName: 'Concession Category', flex: 1, minWidth: 130 },

    { field: 'concessionType',
      headerName: 'Concession Type',
      flex: 1,
      minWidth: 130,
      renderCell: (params) => (
        <SelectList
        hiddenLabel
        // label="Concession Type"
        name="concessionType"
        id={`concessionType-${params.id}`}
        options={ConcessionTypeOptions}
        value={concessionData.concessionType}
        onChange={handleChange}
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

      ),

      
    },
    { field: 'amount', headerName: 'Amount', flex: 1, minWidth: 130,
    renderCell: (params) => (
      <TextField
      hiddenLabel
      name="amount"
      id={`amount-${params.id}`}
      value={concessionData.amount}
      onChange={handleChange}
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
    ),
    },

  ]
  
  return (
    <>

      <Grid container spacing={4} sx={{marginTop:'1rem'}}>
          <Grid item lg={4}>
              <Grid container spacing={2} sx={{ borderRadius:'12px' ,margin:'0' , width:'100%', border:'1px solid rgba(224, 224, 224, 1)', padding:'1rem 1rem 1rem 0px'}}>
            
                  {/* =========================== name*/}
                  <Grid item  xs={12} md={12} sx={{ marginBottom: '24px' }}>
                          <TextField
                            id="studentName"
                            name="studentName"
                            value={concessionData.name}
                            label="Student Name"
                            variant="outlined"
                            onChange={handleChange}
                            fullWidth
                          />
                  </Grid>

                {/* =========================== admission no*/}
                  <Grid item  xs={12} md={12} sx={{ marginBottom: '24px' }}>
                          <TextField
                            id="admissionNo"
                            name="admissionNo"
                            value={concessionData.admissionNo}
                            label="Admission No"
                            variant="outlined"
                            onChange={handleChange}
                            fullWidth
                          />
                  </Grid>

                  
                {/* =========================== class section */}
                  <Grid item  xs={12} md={12} sx={{ marginBottom: '24px' }}>
                          <TextField
                            id="classSection"
                            name="classSection"
                            value={concessionData.classSection}
                            label="Class Section"
                            variant="outlined"
                            onChange={handleChange}
                            fullWidth
                          />
                  </Grid>

                  {/* ===========================  applicable from date*/}
                  <Grid item xs={12} md={6} sx={{ marginBottom: '24px'  }}>
                      <ParamDateComponent label="Applicable From Date" name="applicableFromDate"  value={concessionData.applicableFromDate} customStyle={{ width: '100%' }} />
                  </Grid>

                  {/* ===========================  up to date*/}
                  <Grid item xs={12} md={6} sx={{ marginBottom: '24px'  }}>
                      <ParamDateComponent label="Upto Date" name="uptoDate"  value={concessionData.uptoDate} customStyle={{ width: '100%' }} />
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

export default ConfigureStudentWise