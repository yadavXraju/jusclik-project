import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import schoollogo from 'assets/images/24x24-inch-logo-1.png';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
// import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import { commonTemplateContent } from '../common/common-states';
import { templateCompact } from '../common/common-states';

const CompactTemplate = ({states}) => {
  const [generalSettings, headerFooterSettings, tableSettings] = states;
  (generalSettings);
  (headerFooterSettings);
  (tableSettings);

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
             
              <Box borderRight={borderLength}  sx={{ paddingRight: "18px", }}>
                <Box
                  sx={{ border: '2px solid grey'}}>
                  <Box sx={{ borderBottom: '2px solid ', display: 'flex', textAlign: 'center' ,justifyContent: "space-evenly" , backgroundColor:headerFooterSettings.headerBackgroundColor}}>
                    <Box pt={2} sx={{ width: '100px' }}>
                      <img src={schoollogo} alt='schoollogo' width="80" height="80">

                      </img>
                    </Box>
                    <Box p={3}  >
                      <Typography  variant='h5' sx={{ fontWeight: 'bold' }}> {  commonTemplateContent.schoolName}</Typography>
                  
                      <Typography  variant='h6' sx={{ fontWeight: 'bold' }}>Sohna Dhani Road-12203</Typography>
                      <Typography  variant='h6' sx={{ fontWeight: '700' }}> {  commonTemplateContent.bankName} </Typography>
                      <Typography  variant='h6' sx={{ fontWeight: '400' }}> A/c-{  commonTemplateContent.bankAccNumber}</Typography>
                      <Typography  variant='h6' sx={{ fontWeight: '400' }}> IFSC-{ commonTemplateContent.bankIfscCode}</Typography>
                         {/* ADDITIONAL Telephone */}
                      <Typography pb={1} variant='h6' sx={{ fontWeight: '400' }}> Tel:262664,236586</Typography>
                      <Typography  sx={{ fontWeight: '800', fontSize: '13px' }}> Fee Slip ({  templateCompact[`copy${i+1}Name`]})  </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box p={1} pb={1} sx={{ borderBottom: '2px solid gray', backgroundColor:generalSettings.backgroundColor }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between"}} >
                        <Box >
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1}  sx={{ fontWeight: '400' ,color:generalSettings.labelColor }}>Adm No</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' ,color:generalSettings.fontColor,fontSize:`${generalSettings.fontSize}px`}}>{  commonTemplateContent.admissionNo}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.labelColor}}>Class</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: 'bold',color:generalSettings.fontColor,fontSize:`${generalSettings.fontSize}px`}}>{  commonTemplateContent.className}</Typography>
                          </Box>

                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.labelColor}}>Name</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.fontColor,fontSize:`${generalSettings.fontSize}px`}}>{  commonTemplateContent.name}</Typography>
                          </Box>

                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.labelColor}}>Mobile</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.fontColor,fontSize:`${generalSettings.fontSize}px`}}>{  commonTemplateContent.mobile}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.labelColor}}>Father&apos;s Name</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.fontColor,fontSize:`${generalSettings.fontSize}px`}}>{  commonTemplateContent.fatherName}</Typography>
                          </Box>
                            {/* email */}
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.labelColor}}>Email</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.fontColor,fontSize:`${generalSettings.fontSize}px`}}>{  commonTemplateContent.email}</Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.labelColor}}>Inv No.[SS*]</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: 'bold',color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}>{  commonTemplateContent.invoiceNo}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.labelColor}}>Invoice Date</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.fontColor,fontSize:`${generalSettings.fontSize}px`}}>{  commonTemplateContent.invoiceDate}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400',color:generalSettings.labelColor}}>Academic Year</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.fontColor,fontSize:`${generalSettings.fontSize}px`}}>{  commonTemplateContent.academicYear}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.labelColor}}>Fee Period</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' ,color:generalSettings.fontColor,fontSize:`${generalSettings.fontSize}px`}}>{  commonTemplateContent.feePeriod}</Typography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400', color:generalSettings.labelColor}}>Due Date</Typography>
                      <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.fontColor,fontSize:`${generalSettings.fontSize}px`}}>{commonTemplateContent.dueDate}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box p={2} sx={{ borderBottom: '2px solid gray' }}>
              <Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' ,bgcolor:tableSettings.headerBackgroundColor}}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' , color:tableSettings.headerFontColor}}>Fees Heads</Typography>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' , color:tableSettings.headerFontColor}}>Amount (<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }} />)</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',bgcolor:tableSettings.itemRowBackgroundColor }}>
                    <Typography variant='h6' sx={{ fontWeight: '400', minWidth: '50%',color:tableSettings.itemRowFontColor}}>Tuition Fee</Typography>
                    <Typography variant='h6' sx={{ fontWeight: '400',color:tableSettings.itemRowFontColor  }}>{commonTemplateContent.tutionFee}</Typography>
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
                <Box sx={{ display: "flex", justifyContent: "space-between",bgcolor:tableSettings.itemRowBackgroundColor}}>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' ,color:tableSettings.itemRowFontColor}}>Invoice Total:</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold',color:tableSettings.itemRowFontColor }}>{commonTemplateContent.invoiceTotal}</Typography>
                </Box>
                <Box sx={{ display: "flex" , justifyContent: "space-between",bgcolor:tableSettings.itemRowBackgroundColor}}>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' ,color:tableSettings.itemRowFontColor}}>Previous Balance:</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' ,color:tableSettings.itemRowFontColor }}>{commonTemplateContent.previousBalance}</Typography>
                </Box>
                <Box sx={{ display: "flex" , justifyContent: "space-between",bgcolor:tableSettings.itemRowBackgroundColor}}>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold',color:tableSettings.itemRowFontColor}}>Net Amount Payable:</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' ,color:tableSettings.itemRowFontColor }}><CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>{commonTemplateContent.netAmountPayable}</Typography>
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
              <Grid lg={12} container sx={{ display: "flex", justifyContent: "space-between", padding: "0px 0px 0 14px", backgroundColor:headerFooterSettings. footerBackgroundColor
             }}>
                <Grid lg={6} item >
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' , color:headerFooterSettings. footerFontColor , fontSize:`${headerFooterSettings.footerFontSize}px`}}>Cheque/Draft No.</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold', color:headerFooterSettings. footerFontColor , fontSize:`${headerFooterSettings.footerFontSize}px`}}>Cheque/Draft Date: </Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' , color:headerFooterSettings. footerFontColor, fontSize:`${headerFooterSettings.footerFontSize}px`}}>Bank and Branch Details:</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' , color:headerFooterSettings. footerFontColor, fontSize:`${headerFooterSettings.footerFontSize}px`}}>*Fine to be calculated appropriately after the last
                    payment date.</Typography>
                </Grid>
                <Grid lg={6} item >
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' , color:headerFooterSettings. footerFontColor, fontSize:`${headerFooterSettings.footerFontSize}px`}}>*Fine (<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>):</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' , color:headerFooterSettings. footerFontColor, fontSize:`${headerFooterSettings.footerFontSize}px`}}>Amount Paid (<CurrencyRupeeOutlinedIcon sx={{ fontSize: 'small' }}></CurrencyRupeeOutlinedIcon>):</Typography>
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
   <Grid
      container
      spacing={2}
      sx={{
        height: '100%',
        width:'110%',
        margin: 'auto',
        '@media print and (min-width: 297mm) and (min-height: 210mm)': {
          // A4 landscape dimensions
          height: '210mm',
          width: '297mm',
        },
      }}
    >
      {templateContent}
    </Grid>

   </Box>
    </Box >
    </>
  );
}

export default CompactTemplate;

