import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import schoollogo from 'assets/images/24x24-inch-logo-1.png';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
// import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import { commonTemplateContent } from '../common/common-states';
import { templateCompact } from '../common/common-states';

const CompactTemplate = () => {

  

  let gridSize;

  if (templateCompact.numberOfCopies === 1) {
    gridSize = "12"

  } else if (templateCompact.numberOfCopies === 2) {
    gridSize = "6"

  } else {
    gridSize = "4"
  }
  const templateContent=[]

for(let i=0;i<templateCompact.numberOfCopies;i++){
  const borderLength=(i==templateCompact.numberOfCopies-1||templateCompact.numberOfCopies==1)?"none":"2px dotted"
    templateContent.push(
            
            <Grid item  md={gridSize} sx={{bgcolor:'white'}} >
              <Box borderRight={borderLength}  sx={{ paddingRight: "18px" }}>
                <Box
                  sx={{ border: '2px solid grey'}}>
                  <Box sx={{ borderBottom: '2px solid ', display: 'flex', textAlign: 'center' ,justifyContent: "space-evenly"}}>
                    <Box pt={3} sx={{ width: '100px' }}>
                      <img src={schoollogo} alt='schoollogo' width="100" height="100">

                      </img>
                    </Box>
                    <Box p={3} >
                      <Typography  variant='h4' sx={{ fontWeight: 'bold' }}> {  commonTemplateContent.schoolName}</Typography>
                  
                      <Typography  variant='h5' sx={{ fontWeight: 'bold' }}>Sohna Dhani Road-12203</Typography>
                      <Typography  variant='h6' sx={{ fontWeight: '700' }}> {  commonTemplateContent.bankName} </Typography>
                      <Typography  variant='h6' sx={{ fontWeight: '400' }}> A/c-{  commonTemplateContent.bankAccNumber}</Typography>
                      <Typography  variant='h6' sx={{ fontWeight: '400' }}> IFSC-{ commonTemplateContent.bankIfscCode}</Typography>
                         {/* ADDITIONAL Telephone */}
                      <Typography pb={1} variant='h6' sx={{ fontWeight: '400' }}> Tel:262664,236586</Typography>
                      <Typography  sx={{ fontWeight: '800', fontSize: '14px' }}> Fee Slip ({  templateCompact[`copy${i+1}Name`]})  </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box p={1} pb={1} sx={{ borderBottom: '2px solid gray' }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between"}} >
                        <Box >
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>Adm No</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' }}>{  commonTemplateContent.admission_no}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>Class</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' }}>{  commonTemplateContent.className}</Typography>
                          </Box>

                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>Name</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>{  commonTemplateContent.name}</Typography>
                          </Box>

                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>Mobile</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>{  commonTemplateContent.mobile}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>Father&apos;s Name</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>{  commonTemplateContent.fatherName}</Typography>
                          </Box>
                            {/* email */}
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>Email</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>{  commonTemplateContent.email}</Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>Inv No.[SS*]</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' }}>{  commonTemplateContent.invoiceNo}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>Invoice Date</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>{  commonTemplateContent.invoiceDate}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>Academic Year</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>{  commonTemplateContent.academicYear}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>Fee Period</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' }}>{  commonTemplateContent.feePeriod}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400', }}>Due Date</Typography>
                      <Typography p={1} variant='h6' sx={{ fontWeight: '400' }}>{commonTemplateContent.dueDate}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box p={2} sx={{ borderBottom: '2px solid gray' }}>
              <Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Fees Heads</Typography>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Amount (<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }} />)</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <Typography variant='h6' sx={{ fontWeight: '400', minWidth: '50%'}}>Tuition Fee</Typography>
                    <Typography variant='h6' sx={{ fontWeight: '400' }}>{commonTemplateContent.tutionFee}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={schoollogo}
                    alt='schoollogo'
                    style={{
                      maxWidth: '40%',
                      height: 'auto',
                      opacity: '0.3',
                    }}
                  />
                </Box>
                <Box >
                <Box sx={{ display: "flex", justifyContent: "space-between"}}>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' }}>Invoice Total:</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' }}>{commonTemplateContent.invoiceTotal}</Typography>
                </Box>
                <Box sx={{ display: "flex" , justifyContent: "space-between"}}>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' }}>Previous Balance:</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' }}>{commonTemplateContent.previousBalance}</Typography>
                </Box>
                <Box sx={{ display: "flex" , justifyContent: "space-between"}}>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold'}}>Net Amount Payable:</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' }}><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>{commonTemplateContent.netAmountPayable}</Typography>
                </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ borderBottom: '2px solid ' }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px 5px 10px 14px" }}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Amount To Be Deposited:</Typography>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Four Thousand Nine Hundred <br /> Only
                </Typography>

              </Box>
            </Box>
            <Box >
              <Grid lg={12} container sx={{ display: "flex", justifyContent: "space-between", padding: "0px 0px 0 14px" }}>
                <Grid lg={6} item>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' }}>Cheque/Draft No.</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' }}>Cheque/Draft Date: </Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' }}>Bank and Branch Details :</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' }}>*Fine to be calculated appropriately after the last
                    payment date.</Typography>
                </Grid>
                <Grid lg={6} item >
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' }}>*Fine (<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>):</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' }}>Amount Paid (<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>):</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        {/* {i !== 2 && (
          <Box  sx={{ position: "relative", top: "-420px", left: "-96px" }}>
            <ContentCutOutlinedIcon sx={{ transform: "rotate(270deg)" , width:'790px'}} />
          </Box>)
        } */}

      </Grid>
    )
  }
  return (
   <>
   <Box  >
   <Box >
      <Grid container spacing={2} sx={{height:'1350',width:'1157',margin:'auto'}}>

   {templateContent}
   </Grid >

   </Box>
    </Box >
    </>
  );
}

export default CompactTemplate;

