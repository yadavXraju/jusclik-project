import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import schoollogo from 'assets/images/24x24-inch-logo-1.png';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import { commonTemplateContent } from '../common/common-states';
import { templateCompact } from '../common/common-states';

const CompactTemplate = () => {

  
  const templateContent=[]
  for(let i=0;i<3;i++)
  {
    
    templateContent.push( 

            <Grid item md='4' >
              <Box borderRight={  i !== 2 && '2px dotted'}  sx={{ paddingRight: "18px" }}>
                <Box
                  sx={{ border: '2px solid grey'}}>
                  <Box sx={{ borderBottom: '2px solid ', display: 'flex', textAlign: 'center' }}>
                    <Box pt={3} sx={{ width: '135px' }}>
                      <img src={schoollogo} alt='schoollogo' width="120" height="120">

                      </img>
                    </Box>
                    <Box p={2} pb={4}>
                      <Typography  variant='h3'> {  commonTemplateContent.schoolName}</Typography>
                      <Typography p={1} variant='h4'> {commonTemplateContent.address}</Typography>
                      <Typography  variant='h4' sx={{ fontWeight: '400' }}> {  commonTemplateContent.bankName} </Typography>
                      <Typography  variant='h4' sx={{ fontWeight: '400' }}> {  commonTemplateContent.bankIfscCode}</Typography>
                      <Typography p={1} variant='h4' sx={{ fontWeight: '800', fontSize: '16px' }}> Fee Slip ({  templateCompact[`copy${i+1}Name`]})  </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box p={1} pb={2} sx={{ borderBottom: '2px solid gray' }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between"}} >
                        <Box >
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>Adm No</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: 'bold' }}>{  commonTemplateContent.admission_no}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>Class</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: 'bold' }}>{  commonTemplateContent.className}</Typography>
                          </Box>

                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>Name</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>{  commonTemplateContent.name}</Typography>
                          </Box>

                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>Mobile</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>{  commonTemplateContent.mobile}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>Father&apos;s Name</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>{  commonTemplateContent.fatherName}</Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>Inv No.[SS*]</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: 'bold' }}>{  commonTemplateContent.invoiceNo}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>Invoice Date</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>{  commonTemplateContent.invoiceDate}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>Academic Year</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>{  commonTemplateContent.academicYear}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>Fee Period</Typography>
                            <Typography p={1} variant='h5' sx={{ fontWeight: 'bold' }}>{  commonTemplateContent.feePeriod}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h5' sx={{ fontWeight: '400', }}>Due Date</Typography>
                      <Typography p={1} variant='h5' sx={{ fontWeight: '400' }}>{commonTemplateContent.dueDate}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box p={2} sx={{ borderBottom: '2px solid gray' }}>
              <Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Fees Heads</Typography>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Amount (<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }} />)</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <Typography variant='h4' sx={{ fontWeight: '400', minWidth: '50%'}}>Tuition Fee</Typography>
                    <Typography variant='h4' sx={{ fontWeight: '400' }}>{commonTemplateContent.tutionFee}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={schoollogo}
                    alt='schoollogo'
                    style={{
                      maxWidth: '50%',
                      height: 'auto',
                      opacity: '0.3',
                    }}
                  />
                </Box>
                <Box >
                <Box sx={{ display: "flex", justifyContent: "space-between"}}>
                  <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Invoice Total:</Typography>
                  <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>{commonTemplateContent.invoiceTotal}</Typography>
                </Box>
                <Box sx={{ display: "flex" , justifyContent: "space-between"}}>
                  <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Previous Balance:</Typography>
                  <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>{commonTemplateContent.previousBalance}</Typography>
                </Box>
                <Box sx={{ display: "flex" , justifyContent: "space-between"}}>
                  <Typography p={1} variant='h4' sx={{ fontWeight: 'bold'}}>Net Amount Payable:</Typography>
                  <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>{commonTemplateContent.netAmountPayable}</Typography>
                </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ borderBottom: '2px solid ' }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px 5px 10px 14px" }}>
                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Amount To Be Deposited:</Typography>
                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Four Thousand Nine Hundred <br /> Only
                </Typography>

              </Box>
            </Box>
            <Box >
              <Grid lg={12} container sx={{ display: "flex", justifyContent: "space-between", padding: "0px 0px 0 14px" }}>
                <Grid lg={6} item>
                  <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Cheque/Draft No.</Typography>
                  <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Cheque/Draft Date: </Typography>
                  <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Bank and Branch Details :</Typography>
                  <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>*Fine to be calculated appropriately after the last
                    payment date.</Typography>
                </Grid>
                <Grid lg={6} item >
                  <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>*Fine (<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>):</Typography>
                  <Typography p={1} variant='h4' sx={{ fontWeight: 'bold' }}>Amount Paid (<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>):</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        {i !== 2 && (
          <Box sx={{ position: "relative", top: "400px", left: "-13px" }}>
            <ContentCutOutlinedIcon sx={{ transform: "rotate(270deg)" }} />
          </Box>)
        }

      </Grid>
    )
  }
  return (
   <>
   <Box >
      <Box sx={{ display: "flex", flexDirection: "row"}}>
      <Grid container spacing={2} >

   {templateContent}
   </Grid >

   </Box>
    </Box >
    </>
  );
}

export default CompactTemplate;

