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

  const TableRowData = [
    {
      id: 1,
     
      taskno: 'Withdrawal Approval Principal',
      assignedto: 'Not Assigned',
      duedate: '08-03-2024',
      status: 'In Progress',
      
    },
    {
      id: 2,
      
      taskno: 'Withdrawal Approval Class Teacher',
      assignedto: 'Not Assigned',
      duedate: '08-03-2024',
      status: 'In Progress',
    },
    {
      id: 3,
     
      taskno: 'Withdrawal Approval Co-ordinator',
      assignedto: 'Not Assigned',
      duedate: '08-03-2024',
      status: 'Completed',
    },
    {
      id: 4,
     
      taskno: 'Library Due Clearance',
      assignedto: 'Not Assigned',
      duedate: '08-03-2024',
      status: 'In Progress',
    },
    {
      id: 5,
     
      taskno: 'Intimation Mail',
      assignedto: 'Not Assigned',
      duedate: '08-03-2024',
      status: 'In Progress'
  
    },
    {
        id: 6,
       
        taskno: 'Generation of SLC',
        assignedto: 'Not Assigned',
        duedate: '08-03-2024',
        status: 'Completed',
      },
      
  ];
  

  const columns = [
    { field: 'taskno', headerName: 'Task Name', flex: 1, minWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'assignedto', headerName: 'Assigned To', flex: 1, minWidth: 130 },
    { field: 'duedate', headerName: 'Due Date', flex: 1, minWidth: 130, },
  ]
  
    

const ConfigureStudentWise = () => {

    const [concessionData, setConcessionData] = useState({
        acadmicYear: '2024-25',
        name:'',
        admissionNo:'',
        concessionHead: '',
        applicableFromDate : '',
        uptoDate : '',
        remark:'',
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


//   ConcessionHead option

const ConcessionHeadOptions = [
    { value: 'Vaccination Discount', label: 'Vaccination Discount' },
    { value: 'Staff Child', label: 'Staff Child' },
    { value: 'Scholarship', label: 'Scholarship' },
    { value: '50% of Tuition Fee', label: '50% of Tuition Fee' },
    { value: '50% in Fee', label: '50% in Fee' },
    { value: 'Staff', label: 'Staff' },
    { value: '30% of Tuition Fee', label: '30% of Tuition Fee' },
    { value: '50% of Tuition Fee', label: '50% of Tuition Fee' },
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
                  id="name"
                  name="name"
                  value={concessionData.name}
                  label="Name"
                  variant="outlined"
                  onChange={handleChange}
                  fullWidth
                />
        </Grid>

       {/* =========================== admission no*/}
        <Grid item  xs={12} md={3} sx={{ marginBottom: '24px' }}>
                <TextField
                  id="admission-no"
                  name="admissionNo"
                  value={concessionData.admissionNo}
                  label="Admission No"
                  variant="outlined"
                  onChange={handleChange}
                  fullWidth
                />
        </Grid>


 
  
        {/* ===========================  concession head*/}
        <Grid item xs={12} md={3} sx={{ marginBottom: '24px' }}>
            <SelectList label="Concession Head" name="concessionHead" options={ConcessionHeadOptions} value={concessionData.concessionHead} onChange={handleChange}  />
        </Grid>

        {/* ===========================  applicable from date*/}
        <Grid item xs={12} md={3} sx={{ marginBottom: '24px'  }}>
            <ParamDateComponent label="Applicable From Date" name="applicableFromDate"  value={concessionData.applicableFromDate} customStyle={{ width: '100%' }} />
        </Grid>

        {/* ===========================  up to date*/}
        <Grid item xs={12} md={3} sx={{ marginBottom: '24px'  }}>
            <ParamDateComponent label="Upto Date" name="uptoDate"  value={concessionData.uptoDate} customStyle={{ width: '100%' }} />
        </Grid>

        {/* ===========================  remark*/}
        <Grid item  xs={12} md={3} sx={{ marginBottom: '24px' }}>
                <TextField
                  id="remark"
                  name="remark"
                  value={concessionData.remark}
                  label="Remark"
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
    <Grid sx={{marginTop:'3rem'}}>
        <CommonDataGrid
            rows={TableRowData} columns={columns}  width="100%"
            checkboxSelection={false}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 50 }
              },
            }}
              
            pageSizeOptions={[10, 25, 50, 100]}
        />
    </Grid>
    </>
  )
}

export default ConfigureStudentWise