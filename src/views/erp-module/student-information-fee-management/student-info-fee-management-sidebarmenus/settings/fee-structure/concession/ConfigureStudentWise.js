import React,{useState} from 'react';
import {Grid, TextField ,styled ,Button , Checkbox ,} from '@mui/material';
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

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  const TableRowData = [
    {
      id: 1,
      srNo: '1',
      concessionCategory: 'Vaccination Discount',
      amount: '25.00',
      concessionType: 'In Progress',
      
    },
    {
      id: 2,
      srNo: '2',
      concessionCategory: 'Staff Child',
      amount: '50.00',
      concessionType: '',
    },
    {
      id: 3,
      srNo: '3',
      concessionCategory: 'Scholarship',
      amount: '75.00',
      concessionType: '',
    },
    {
      id: 4, 
      srNo: '4',
      concessionCategory: '50% of Tuition Fee',
      amount: '60.00',
      concessionType: '',
    },
    {
      id: 5,
      srNo: '5',
      concessionCategory: '50% in Fee',
      amount: '55.00',
      concessionType: '',
  
    },
    {
        id: 6,
        srNo: '6',
        concessionCategory: 'Staff',
        amount: '90.00',
        concessionType: '',
      },

      {
        id: 7,
        srNo: '7',
        concessionCategory: '50% of Tuition Fee',
        amount: '80.00', 
        concessionType: '',
      },
      
  ];
  

  const columns = [
    { field: 'srNo', headerName: 'Sr No.', flex: 1,  minWidth: 130, align: 'left', headerAlign: 'left' },

    { field: 'concessionCategory', headerName: 'Concession Category', flex: 1, minWidth: 130 },
    
    { field: 'amount', headerName: 'Amount', flex: 1, minWidth: 130, },
    {
        field: 'concessionType',
        headerName: 'Concession Type',
        flex: 1,
        minWidth: 130,
        renderCell: () => (
            <Checkbox {...label} />
        )
      },

  ]
  
const ConfigureStudentWise = () => {

    const [concessionData, setConcessionData] = useState({
        acadmicYear: '2024-25',
        studentName:'',
        admissionNo:'',
        classSection:'',
        applicableFromDate : '',
        uptoDate : '',
        remarks:'',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
          setConcessionData((prevData) => ({
            ...prevData,
            [name]: value,
          }));

      };
      
  // Acadmic option
  const AcademicYearOptions = [
    { value: '2024-25', label: '2024-25' },
    { value: '2023-24', label: '2023-24' },
    { value: '2022-23', label: '2022-23' },
    { value: '2021-22', label: '2021-22' }
  ];


  return (
    <>
      
     <Grid container spacing={2} sx={{ borderRadius:'12px' ,margin:'0' , width:'100%', marginTop:'32px'  , border:'1px solid #ccc', padding:'2rem 2rem 2rem 16px'}}>

        {/* ===========================  academic year*/}
        <Grid item xs={12} md={3} sx={{ marginBottom: '24px'}}>
            <SelectList label="Academic Year" name="acadmicYear" id='acadmicYear' options={AcademicYearOptions} value={concessionData.acadmicYear} onChange={handleChange}  />
        </Grid>
   
        {/* =========================== name*/}
        <Grid item  xs={12} md={3} sx={{ marginBottom: '24px' }}>
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
        <Grid item  xs={12} md={3} sx={{ marginBottom: '24px' }}>
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
        <Grid item  xs={12} md={3} sx={{ marginBottom: '24px' }}>
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
        <Grid item xs={12} md={3} sx={{ marginBottom: '24px'  }}>
            <ParamDateComponent label="Applicable From Date" name="applicableFromDate"  value={concessionData.applicableFromDate} customStyle={{ width: '100%' }} />
        </Grid>

        {/* ===========================  up to date*/}
        <Grid item xs={12} md={3} sx={{ marginBottom: '24px'  }}>
            <ParamDateComponent label="Upto Date" name="uptoDate"  value={concessionData.uptoDate} customStyle={{ width: '100%' }} />
        </Grid>

        {/* ===========================  remarks*/}
        <Grid item  xs={12} md={3} sx={{ marginBottom: '24px' }}>
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
        <Grid item  xs={12} md={3} sx={{ marginBottom: '24px' }}>
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


      {/* table */}
    <Grid sx={{marginTop:'4rem', marginBottom:'40px'}}>
        <CommonDataGrid
            rows={TableRowData} columns={columns}  width="100%"
            checkboxSelection={false}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 50 }
              },
            }}
              
            pageSizeOptions={[10, 25, 50, 100]}
            sx={{borderRadius:'12px'}}
        />
    </Grid>
    </>
  )
}

export default ConfigureStudentWise