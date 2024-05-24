import React , {useState} from 'react';
import { Grid , TextField , Button} from '@mui/material';
import ParamDateComponent from 'components/ParamDateComponent';
import ParamMultipleSelect from 'components/ParamMultipleSelect';
import { useDispatch , useSelector} from 'react-redux';
import { setFeeHeads , setStudentWiseClass } from 'store/student-info-and-fee/settings/fee-structure/fee-structure-slice';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { VisuallyHiddenInput } from '../configure-globally/ConfigureGloballyPreview';
import ConfigureStudentWisePreview from './ConfigureStudentWisePreview';

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

export default ConfigStudentWiseForm
