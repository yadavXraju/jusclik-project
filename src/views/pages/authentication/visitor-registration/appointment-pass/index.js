import React,{useRef} from 'react';
import Box from '@mui/material/Box';
import logo from 'assets/images/WhatsApp_Image_2020-03-21_at_8_04_53_PM__1-removebg-preview 1.png';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import DP from 'assets/images/pro-3.png';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Divider from '@mui/material/Divider';
import QRCODE from 'assets/images/Demo_QR.jpg';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import WithPrintPdf from 'views/common-section/withPrintPdf';

const PrintButton=()=>{
  return(
    <Button variant="text" sx={{ color: 'red', textDecoration: 'underline', marginBottom: '-100px', marginLeft: '10px' }}>
    Print Pass
  </Button>
  )
}

const VisitorAppointmentPass = () => {
  const printRef=useRef();
  const passDetails = {
    visitorName: 'Visitor Name',
    date: '12 mar,2024',
    time: '10:10am(IST)',
    schoolName: 'Arwachin Public School , Ghaziabad',
    address: 'Abc Delhi',
    visitorcompany: 'Abc Tech',
    name: 'Visior Name',
    number: 'Visitor Number'
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' , marginBottom:'50px' }} >
      <Box sx={{ border: '1px solid lightgrey', margintop:'-50px' }}>
         <WithPrintPdf Children={<PrintButton />} ref={printRef}/>
        <Button variant="text" sx={{ color: 'red', textDecoration: 'underline', marginBottom: '-60px', marginLeft: '230px' }}> <FileDownloadIcon /> Downlaod Pass </Button>

        <Box width={390} my={2} display="flex" justifyContent="center" gap={2} p={2} sx={{ marginTop: '0px' }}>
          <Box
            width={350}
            sx={{
              backgroundColor: '#00924a',
              justifyContent: 'center',
              marginTop: '30px',
              borderRadius: '10px',
              border: '2px solid grey',
              padding: '20px',
              textAlign: 'center', // Center content horizontally,
              '@media print': {
                display: 'flex', // Display as flex for scaling to work properly
                flexDirection: 'column', // Arrange children vertically
                transform: 'scale(0.99) !important', // Reduce size to 80% when printing
                transformOrigin: 'top', // Keep the origin at top
                pageBreakInside: 'avoid !important', // Avoid page breaks inside this box
                alignItems: 'center !important', // Center content vertically when printing
                margin: '30px auto', // Center horizontally and provide top margin
                width: '80%', // Set width to 80% of the page width when printing
              }, }}  ref={printRef}>

           
          
            <img src={logo} alt="Logo" style={{ width: '90px', height: '90px', alignSelf: 'center!important', marginTop: '20px' }} />

            <Typography variant="h4" color="white">
             
              Meeting Appointment Pass
            </Typography>

            <Avatar alt="DP" src={DP} sx={{ width: 100, height: 100, marginTop: 2, marginBottom: 2, marginLeft:'auto' , marginRight:'auto' }} />

            <Typography variant="h4" color="white">
             
              {passDetails.visitorName}
            </Typography>

            <Typography variant="h5" color="white" marginTop={3}>
             
              {passDetails.date} <FiberManualRecordIcon style={{ verticalAlign: 'middle', lineHeight: 0, fontSize: 'small' }} />{' '}
              {passDetails.time} <FiberManualRecordIcon style={{ verticalAlign: 'middle', lineHeight: 0, fontSize: 'small' }} /> ID:abcd123{' '}
            </Typography>

            <Divider style={{ backgroundColor: 'white', height: '2px' }} />

            <Typography variant="h4" color="white" marginTop={2}>
             
              {passDetails.schoolName}
            </Typography>

            <Typography variant="h5" color="white" marginTop={1}>
             
              <strong> Address:</strong>
              {passDetails.address}
            </Typography>
            <Typography variant="h5" color="white">
              <strong>Visitor&apos;s Company:</strong> {passDetails.visitorcompany}{' '}
            </Typography>
            <Typography variant="h5" color="white" marginTop={5}>
              <strong>POC Details</strong>
            </Typography>
            <Typography variant="h6" color="white">
              <strong>
                Name: {passDetails.visitorName} , Number: {passDetails.number}
              </strong>
            </Typography>
            <img src={QRCODE} alt="QRCODE" style={{ width: '150px', height: '140px', alignSelf: 'center!important', marginTop: '20px' }} />
            <Typography variant="h5" color="white" marginTop={2}>
              Scan QR CODE to verify E-pass
            </Typography>
            <Typography textAlign="left" marginTop={4} color="white">
              Visitor Policy
            </Typography>

            <Typography color="white" textAlign="left">
              <ol>
                <li>Get vaccinated as soon as it’s your turn and follow local guidance on vaccination.</li>
                <li>
                  Keep physical distance of at least 1 metre from others, even if they don’t appear to be sick. Avoid crowds and close
                  contact.
                </li>
                <li>Wear a properly fitted mask when physical distancing is not possible and in poorly ventilated settings.</li>
                <li>Clean your hands frequently with alcohol-based hand rub or soap and water.</li>
                <li>
                  Cover your mouth and nose with a bent elbow or tissue when you cough or sneeze. Dispose of used tissues immediately and
                  clean hands regularly.
                </li>
                <li>If you develop symptoms or test positive for COVID-19, self-isolate until you recover.</li>
              </ol>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VisitorAppointmentPass;
