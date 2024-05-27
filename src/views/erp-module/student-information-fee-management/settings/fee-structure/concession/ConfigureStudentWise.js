// Page owner : Abhishek negi
// description : Concession Config Student wise

import React , {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ParamFeeStructureConfig from 'components/table-data-grid/FeeStructureConfig';
import { configStudentWise } from 'store/student-info-and-fee/settings/fee-structure/fee-structure-slice';
import { Grid , TextField , Button} from '@mui/material';
import ParamDateComponent from 'components/ui/custom-input/DateComponent';
import ParamMultipleSelect from 'components/ui/custom-input/MultipleSelect';
import { setFeeHeads , setStudentWiseClass } from 'store/student-info-and-fee/settings/fee-structure/fee-structure-slice';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ConfigureStudentWisePreview , { VisuallyHiddenInput } from 'views/erp-module/student-information-fee-management/settings/fee-structure/concession/ConfigureStudentWisePreview';

// ============ configure student wise form start

const ConfigStudentWiseForm = () => {
  const [applicableFromDate , setApplicableFromDate] = useState('');
  const [uptoDate , setUptoDate] = useState('');
  const [studentName , setStudentName] = useState('');
  const [admissionNo , setAdmissionNo] = useState('');
  const [classSection , setClassSection] = useState('');
  const [feeHead , setFeeHead] = useState([]);
  const [remark , setRemark] = useState('');
  const dispatch = useDispatch();
 const feeHeadOptions = useSelector((state) => state.configGloballyFormSlice.feeHeadOptions);
 
 
  const handleStudentName = (e) => {
     setStudentName(e.target.value)
  }
 
  const handleAdmissionNo = (e) => {
     setAdmissionNo(e.target.value)
  }
 
  const handleClassSection = (e) => {
     setClassSection(e.target.value)
  }
 
  const handleRemark = (e)=>{
     setRemark(e.target.value)
  }
 
 dispatch(setFeeHeads(feeHead))
 dispatch(setStudentWiseClass(classSection))
 
 const clearStates = () => {
     setUptoDate('');
     setApplicableFromDate('');
     setStudentName('');
     setAdmissionNo('');
     setClassSection('');
     setFeeHead([]);
     setRemark('');
   };
 
   return (
     <>
       <Grid item  xs={12} lg={4}>
             <Grid container spacing={2} sx={{ borderRadius:'12px' ,margin:'0' , width:'100%', border:'1px solid rgba(224, 224, 224, 1)', padding:'1rem 1rem 1rem 0px'}}>
             
                 {/* ===========================  applicable from date*/}
                 <Grid item xs={12} md={6} sx={{ marginBottom: '5px' }}>
                     <ParamDateComponent label="Applicable From Date" name="applicableFromDate" value={applicableFromDate} customStyle={{ width: '100%' }}
                     onChange={(date) => setApplicableFromDate(date.format('DD-MM-YYYY'))} 
                     />
                 </Grid>
 
                 {/* ===========================  up to date*/}
                 <Grid item xs={12} md={6} sx={{ marginBottom: '5px' }}>
                     <ParamDateComponent label="Upto Date" name="uptoDate" value={uptoDate} customStyle={{ width: '100%' }}  
                     onChange={(date) => setUptoDate(date.format('DD-MM-YYYY'))} 
                     />
                 </Grid>
 
         
                 {/* =========================== name*/}
                 <Grid item  xs={12} md={12} sx={{ marginBottom: '5px' }}>
                         <TextField
                         id="studentName"
                         name="studentName"
                         value={studentName}
                         label="Student Name"
                         variant="outlined"
                         onChange={handleStudentName}
                         fullWidth
                         inputProps={{ pattern: "[a-z]" }}
                         />
                 </Grid>
 
             {/* =========================== admission no*/}
                 <Grid item  xs={12} md={6} sx={{ marginBottom: '5px' }}>
                         <TextField
                         id="admissionNo"
                         name="admissionNo"
                         value={admissionNo}
                         label="Admission No"
                         variant="outlined"
                         onChange={handleAdmissionNo}
                         fullWidth
                         />
                 </Grid>
 
                 {/* ===========================  Class */}
                 <Grid item  xs={12} md={6} sx={{ marginBottom: '5px' }}>
                     <TextField
                             id="classSection"
                             name="classSection"
                             value={classSection}
                             label="Class"
                             variant="outlined"
                             onChange={handleClassSection}
                             fullWidth
                             />
                 </Grid>
 
                 {/* ===========================  fee head */}
                 <Grid item xs={12} md={12} sx={{ marginBottom: '5px', flexWrap: 'nowrap' }}>
                     <ParamMultipleSelect
                         options={feeHeadOptions}
                         label="Fee Head"
                         value={feeHead}
                         setValue={setFeeHead}
                     />
                 </Grid>
 
                 {/* ===========================  remarks*/}
                 <Grid item  xs={12} md={12} sx={{ marginBottom: '5px' }}>
                         <TextField
                         id="remarks"
                         name="remarks"
                         value={remark}
                         label="Remarks"
                         variant="outlined"
                         onChange={handleRemark}
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
 
       <ConfigureStudentWisePreview clearStates={clearStates}/>
     </>
   )
 }

 // ============ configure student wise form end

const ConfigureStudentWise = () => {
  const dispatch = useDispatch();
  const configStudentWiseData = useSelector((state) => state.configGloballyFormSlice.configStudentWise);


  const handleSaveRow = (updatedRow) => {
    const updatedData = configStudentWiseData.map((row) => (row.id === updatedRow.id ? updatedRow : row));
    dispatch(configStudentWise(updatedData));
  };

  // Handler function to delete a row
  const handleDeleteRow = (rowToDelete) => {
    const updatedData = configStudentWiseData.filter((row) => row.id !== rowToDelete.id);
    dispatch(configStudentWise(updatedData));
  };


  // Define table headings
  const TableHeadings = [
    {
      id: 'srNo',
      tabHeading: 'Sr No.',
    },
    {
      id: 'feeHead',
      tabHeading: 'Fee Head',
    },
    {
      id: 'classSection',
      tabHeading: 'Class',
    },
    {
      id: 'concessionType',
      tabHeading: 'Concession Type',
    },
    {
      id: 'amount',
      tabHeading: 'Amount',
    },
  ];

  // Map data to render table rows make sure table head id  and these key are same
  const data = configStudentWiseData.map((item, index) => ({
    id: item.id,
    srNo: index + 1,
    feeHead: item.feeHead,
    classSection: item.classSection,
    concessionType: item.concessionType,
    amount: item.amount,
  }));

  return (
    <>
        <ParamFeeStructureConfig
          data={data}
          tableHeadings={TableHeadings}
          onSaveRow={handleSaveRow}
          onDeleteRow={handleDeleteRow}
        >
          <ConfigStudentWiseForm /> 
        </ParamFeeStructureConfig>
    </>
  );
};

export default ConfigureStudentWise;
