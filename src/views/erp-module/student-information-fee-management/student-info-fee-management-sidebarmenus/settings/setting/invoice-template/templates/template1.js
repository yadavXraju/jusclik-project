import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import schoollogo from 'assets/images/24x24-inch-logo-1.png';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { commonTemplateContent } from '../common/common-states';
import { templateCompact } from '../common/common-states';
import { useSelector } from 'react-redux';


export const Template1 = () => {
  const generalSettings= useSelector(state=>state.invoiceTemplate.general)
  const headerFooterSettings=useSelector(state=>state.invoiceTemplate.headerFooter)
  const tableSettings=useSelector(state=>state.invoiceTemplate.table)
  const templateLabels=useSelector(state=>state.invoiceTemplate.labels)
  const termsAndConditions=useSelector(state=>state.invoiceTemplate.termsAndConditions)
  let column1=[],column2=[]
  for(let i=0;i<14;i++)
  {
    if(i<7)
    column1.push( <Box display={'flex'} sx={{display:!templateLabels[i].enable?'none':'flex'}}>
    <Typography p={1} variant='h5' sx={{ fontWeight: '400',  width:'110px', color:generalSettings.labelColor}}>{templateLabels[i].label}</Typography>
    <Typography p={1} variant='h5' sx={{ fontWeight: 'bold',color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}>{templateLabels[i].value}</Typography>
  </Box>)
else
column2.push( <Box display={'flex'} sx={{display:!templateLabels[i].enable?'none':'flex'}}>
<Typography p={1} variant='h5' sx={{ fontWeight: '400',  width:'110px', color:generalSettings.labelColor}}>{templateLabels[i].label}</Typography>
<Typography p={1} variant='h5' sx={{ fontWeight: 'bold',color:generalSettings.fontColor ,fontSize:`${generalSettings.fontSize}px`}}>{templateLabels[i].value}</Typography>
</Box>)
  }

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
            
            <Grid item   md={gridSize} sx={{bgcolor:'white',paddingBottom:'16px'}} >
             
              <Box borderRight={borderLength}  sx={{ paddingRight: "18px", }}>
                <Box
                  sx={{ border: '2px solid grey'}}>
                  <Box sx={{ borderBottom: '2px solid ', display: 'flex', textAlign: 'center' ,justifyContent: "space-evenly" , backgroundColor:headerFooterSettings.headerBackgroundColor}}>
                    <Box pt={2} sx={{ width: '100px' }}>
                      <img src={schoollogo} alt='schoollogo' width="80" height="80">

                      </img> 
                    </Box>
                    <Box p={1}  >
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
                          {/* <Box sx={{ display: "flex" }}>
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
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.labelColor}}>Father</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.fontColor,fontSize:`${generalSettings.fontSize}px`}}>{  commonTemplateContent.fatherName}</Typography>
                          </Box>
                       
                            <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.labelColor}}>Email</Typography>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.fontColor,fontSize:`${generalSettings.fontSize}px`}}>{  commonTemplateContent.email}</Typography>
                          </Box> */}
                          {column1}
                        </Box>
                        <Box>
                          {/* <Box sx={{ display: "flex" }}>
                            <Typography p={1} variant='h6' sx={{ fontWeight: '400' ,color:generalSettings.labelColor}}>Inv No.</Typography>
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
                    </Box> */}
                    {column2}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box p={2} sx={{ borderBottom: '2px solid gray' }}>
              <Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' ,bgcolor:tableSettings.headerBackgroundColor}}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' , color:tableSettings.headerFontColor, fontSize:`${tableSettings.headerFontSize}px`}}>Fees Heads</Typography>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' , color:tableSettings.headerFontColor, fontSize:`${tableSettings.headerFontSize}px`}}>Amount (<CurrencyRupeeOutlinedIcon sx={{ fontSize: `${tableSettings.headerFontSize}px` }} />)</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',bgcolor:tableSettings.itemRowBackgroundColor }}>
                    <Typography variant='h6' sx={{ fontWeight: '400', minWidth: '50%',color:tableSettings.itemRowFontColor, fontSize:`${tableSettings.itemRowFontSize}px`}}>Tuition Fee</Typography>
                    <Typography variant='h6' sx={{ fontWeight: '400',color:tableSettings.itemRowFontColor , fontSize:`${tableSettings.itemRowFontSize}px` }}>{commonTemplateContent.tutionFee}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'none', justifyContent: 'center' }}>
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
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' ,color:tableSettings.itemRowFontColor, fontSize:`${tableSettings.itemRowFontSize}px`}}>Invoice Total:</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold',color:tableSettings.itemRowFontColor , fontSize:`${tableSettings.itemRowFontSize}px`}}>{commonTemplateContent.invoiceTotal}</Typography>
                </Box>
                <Box sx={{ display: "flex" , justifyContent: "space-between",bgcolor:tableSettings.itemRowBackgroundColor}}>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' ,color:tableSettings.itemRowFontColor, fontSize:`${tableSettings.itemRowFontSize}px`}}>Previous Balance:</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' ,color:tableSettings.itemRowFontColor , fontSize:`${tableSettings.itemRowFontSize}px`}}>{commonTemplateContent.previousBalance}</Typography>
                </Box>
                <Box sx={{ display: "flex" , justifyContent: "space-between",bgcolor:tableSettings.itemRowBackgroundColor}}>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold',color:tableSettings.itemRowFontColor, fontSize:`${tableSettings.itemRowFontSize}px`}}>Net Amount Payable:</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' ,color:tableSettings.itemRowFontColor , fontSize:`${tableSettings.itemRowFontSize}px`}}><CurrencyRupeeOutlinedIcon sx={{ fontSize: `${tableSettings.itemRowFontSize}px`}}></CurrencyRupeeOutlinedIcon>{commonTemplateContent.netAmountPayable}</Typography>
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
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' , color:headerFooterSettings. footerFontColor, fontSize:`${headerFooterSettings.footerFontSize}px`}}><div dangerouslySetInnerHTML={{ __html: termsAndConditions }}/></Typography>
                </Grid>
                <Grid lg={6} item >
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' , color:headerFooterSettings. footerFontColor, fontSize:`${headerFooterSettings.footerFontSize}px`}}>*Fine (<CurrencyRupeeOutlinedIcon sx={{ fontSize: `${headerFooterSettings.footerFontSize}px` }}></CurrencyRupeeOutlinedIcon>):</Typography>
                  <Typography p={1} variant='h6' sx={{ fontWeight: 'bold' , color:headerFooterSettings. footerFontColor, fontSize:`${headerFooterSettings.footerFontSize}px`}}>Amount Paid (<CurrencyRupeeOutlinedIcon sx={{ fontSize: `${headerFooterSettings.footerFontSize}px` }}></CurrencyRupeeOutlinedIcon>):</Typography>
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
        margin: 'auto',
        width:'120%',
       maxWidth:'291mm'
      
      }}
     
    >
      {templateContent}
    </Grid>

   </Box>
    </Box >
    </>
  );
}


