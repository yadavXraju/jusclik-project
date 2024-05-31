// sangeeta

import { Grid,  Paper, Button } from '@mui/material';
import { Box  } from '@mui/system';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import DateComponent from 'components/ui/custom-input/DateComponent';
import AutoComplete from 'components/ui/custom-input/AutoComplete';
import CustomTextField from 'components/ui/custom-input/TextField';

const Leave = () => {
 const res2560 = useMediaQuery('(min-width:2000px)')
 const res800 = useMediaQuery('(max-width:800px)')
 const rem=res2560?'12rem':null;
 const toppadding = res800?'10px':null;
 const toppadding2 = res800?'5px':null;
 
const[leaveInfo,setLeaveInfo]=React.useState({

  remarks:"",
  leaveType:"",
  leaveFrom:"",
  leaveTo:"",
  leaveReason:"",
  totalLeave:"",
  status:""
});

const handleChange=(e)=>{
const{name,value}=e.target;
setLeaveInfo({...leaveInfo,[name]:value})
}

   const  leaveOptions=[{
    label:"Medical Emergency",value:"Medical Emergency"
   },
  {label:"Family Emergency",value:"Family Emergency"},
  {label:"Casual Leave",value:"Casual Leave"}]

  return (
    <Box mt={4} mx={2}>
      <Paper style={{ padding: '20px', borderRadius: '12px' }}>
        <Box sx={{paddingLeft:rem , paddingRight:rem}}>
        <Grid container >
          <Grid item xs={12} container flexDirection="row" alignItems="center">
            <Grid item xs={12} md={6} style={{ padding: '5px 10px' }}>
              <CustomTextField  
              multiline={true}
              label="Remarks"
              name='remarks'
              customStyle={{width:"100%"}}
              onChange={handleChange} 
              />
            </Grid>

            <Grid container flexDirection="row" item xs={12} md={6} >
              <Grid item md={6} xs={12}  style={{ paddingLeft:'10px' ,paddingTop:toppadding2 ,paddingRight:'10px' }}>
             
                <DateComponent 
                label={"Leave From "}
                customStyle={{width:"100%"}}
                name='leaveFrom'
                onChange={handleChange} 
                />

              </Grid>

              <Grid item md={6} xs={12} style={{ paddingRight:'10px' , paddingLeft:'10px' , paddingTop:toppadding }}>

                <DateComponent label={"Leave To"} customStyle={{width:"100%"}} name='leaveTo'  onChange={handleChange}  />
              </Grid>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={6} style={{ padding: '5px 10px' }}>
              {/* <TextField fullWidth variant="outlined" label="Total Leaves:" /> */}
              <CustomTextField  name='totalLeave' label="Total Leaves:" customStyle={{width:"100%"}}   onChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6} style={{ padding: '5px 10px' }}>
              {/* <TextField fullWidth variant="outlined" label=' Reason:' /> */}
              <CustomTextField  name='reason' label="Reason:" customStyle={{width:"100%"}}  onChange={handleChange}  />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={6} style={{ marginBottom: '20px', padding: '5px 10px' }}>
            
              <AutoComplete option={leaveOptions} customStyle={{width:"100%"}} name="status" label={"Status:"}  onChange={handleChange} />
            </Grid>

         
          </Grid>

        </Grid>
        <Grid textAlign="end">  
            <Button variant="contained">Submit Request</Button>
            </Grid>
            </Box>
      </Paper>
    </Box>
  );
};

export default Leave;
