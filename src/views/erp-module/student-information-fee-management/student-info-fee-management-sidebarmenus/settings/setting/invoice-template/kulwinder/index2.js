import React from 'react'
import Template3 from './template3'
import { Grid } from '@mui/material'
import CommonConfig from '../daman/common-config-component'
import { useState } from 'react'
import { Box } from '@mui/system'
const InvoiceTemplate3 = () => {
  const [state, setState] = useState({
    general: {
      templateName: '',
      paperSize: 'a5',
      orientation: 'portrait',
      marginTop: '0.7',
      marginBottom: '0.7',
      marginLeft: '0.55',
      marginRight: '0.4',
      pdfFont: 'ubuntu',
      labelColor: '#333333',
      fontColor: '#333333',
      fontSize: '9',
      backgroundImage: null,
      imagePosition: 'centerCenter',
      backgroundColorEnable: true,
      backgroundColor: '#ffffff'
    },
    headerFooter: {
      headerImage:null,
      headerImagePosition:'topLeft',
      headerBackgroundColor:'#ffffff',
      headerBackgroundColorEnable:true,
      headerApplyToFirestPageOnly:false,
      footerFontSize:'6',
      footerFontColor:'#ffffff',
      footerImage:null,
      footerImagePosition:'topLeft',
      footerBackgroundColor:'#ffffff',
      footerBackgroundColorEnable:true,
      showPageNumber:true
    },
    transactionDetails: {
      // showLogo:true,
      // logo:null,
      // showOrgName:true,
      // orgNameColor:'#000000',
      // orgFontSize:'10',
      // showOrgAddress:true,
      // custFontColor:'#000000',
      // custFontSize:'9',
      // billToEnable:true,
      // billTo:'Bill To',
      // shipToEnable:true,
      // shipTo:'Ship To',
      // showDocTittle:true,
      // docTittle:'Tax Invoice',
      // docFontSize:'25',
      // docFontColor:'#000000',
      // phone:'Phone',
      // numberFeildEnable:true,
      // numberFeild:'Invoice#',
      // dateFieldEnable: true,
      // dateField: 'Invoice Date',
      // termsEnable: true,
      // terms: 'Terms',
      // dueDateEnable: true,
      // dueDate: 'Due Date',
      // referenceFieldEnable: true,
      // referenceField: 'P.0 #',
    },
    tableLayout: {
      borderEnable:true,
      borderColor:'#000000',
      headerFontSize:'9',
      headerBackgroundColorEnable:true,
      headerBackgroundColor:'#000000',
      headerFontColor:'#ffffff',
      itemRowFontSize:'9',
      itemRowBackgroundColorEnable:true,
      itemRowBackgroundColor:'#ffffff',
      itemRowFontColor:'#000000',
      itemDescriptionFontSize:'8',
      itemDescriptionFontColor:'#333333'
    },
    total: {},
    otherDetails: {},
  });
  return (
    <Grid container>
    <Grid item md={3}>
    <CommonConfig state={state} setState={setState} />
    </Grid>
    <Grid item xs >
        <Box>
    <Template3/>
        </Box>
    </Grid>
</Grid>
  )
}

export default InvoiceTemplate3