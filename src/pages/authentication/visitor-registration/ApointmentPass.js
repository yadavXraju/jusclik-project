//Owner Name - Kulwinder Singh/
// Visitor Management Pass

import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import logo from 'assets/images/school-logos/ArwachinLogo.png';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Divider from '@mui/material/Divider';
import QRCODE from 'assets/images/QrCode.jpg';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import WithPrintPdf from 'components/print/withPrintPdf';
import { List, ListItemText } from '@mui/material';
import jsPDF from 'jspdf';
import { getCurrentDate } from 'utils/timeUtils';
import { getCurrentTime } from 'utils/timeUtils';
import DownloadPdfWithCanvas from 'components/print/DownloadPdfwithCanvas'; 

const PrintButton = () => {
  return (
    <Button variant="text" sx={{ color: 'red', textDecoration: 'underline', marginBottom: '-100px', marginLeft: '10px' }}>
      Print Pass
    </Button>
  );
};

const VisitorAppointmentPass = ({ handleDownload, capturedImage, personalDetails, mobileNumber }) => {
  const printRef = useRef();
  const downloadRef = useRef(); // Used Ref for Downlaod
  const pdf = new jsPDF(); // Creating PDF Document with jsPDF library , Its Mandatory to pass ImgWidth
  const imgWidth = pdf.internal.pageSize.getWidth() * 0.42; //Set Value in % for print , change .42 value as per requirement
  const currentDate = getCurrentDate();
  const currentTime = getCurrentTime();

  const passDetails = {
    visitorName: personalDetails.name,
    date: currentDate,
    time: currentTime,
    schoolName: 'Arwachin Public School , Ghaziabad',
    address: 'Abc Delhi',
    visitorcompany: 'Abc Tech',
    name: personalDetails.concernedPerson,
    number: mobileNumber
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '80px', marginBottom: '50px' }}>
      <Box sx={{ border: '1px solid lightgrey', marginTop: '-50px' }}>
        <WithPrintPdf Children={<PrintButton />} ref={printRef} />
        <Button
          variant="text"
          sx={{ color: 'red', textDecoration: 'underline', marginBottom: '-60px', marginLeft: '230px' }}
          onClick={() => handleDownload(downloadRef, imgWidth)} // Pass the ref to the handleDownload function and img Width to DownlaodPDFwith Canvas
        >
          <FileDownloadIcon /> Download Pass
        </Button>

        <Box width={390} my={2} display="flex" justifyContent="center" gap={2} p={2} sx={{ marginTop: '0px' }} ref={downloadRef}>
          <Box
            width={350}
            sx={{
              backgroundColor: '#00924a',
              justifyContent: 'center',
              marginTop: '30px',
              borderRadius: '10px',
              border: '2px solid grey',
              padding: '20px',
              textAlign: 'center',
              '@media print': {
                display: 'flex',
                flexDirection: 'column',
                transform: 'scale(0.99) !important',
                transformOrigin: 'top',
                pageBreakInside: 'avoid !important',
                alignItems: 'center !important',
                margin: '30px auto',
                width: '80%'
              }
            }}
            ref={printRef}
          >
            <img src={logo} alt="Logo" style={{ width: '90px', height: '90px', alignSelf: 'center!important', marginTop: '20px' }} />

            <Typography variant="h4" color="white">
              {personalDetails.purpose} Pass
            </Typography>

            <Avatar
              alt="DP"
              src={capturedImage}
              sx={{ width: 100, height: 100, marginTop: 2, marginBottom: 2, marginLeft: 'auto', marginRight: 'auto' }}
            />

            <Typography variant="h4" color="white">
              {passDetails.visitorName}
            </Typography>

            <Typography variant="h5" color="white" marginTop={3}>
              {passDetails.date} <FiberManualRecordIcon style={{ verticalAlign: 'middle', lineHeight: 0, fontSize: 'small' }} />{' '}
              {passDetails.time} <FiberManualRecordIcon style={{ verticalAlign: 'middle', lineHeight: 0, fontSize: 'small' }} /> ID: abcd123{' '}
            </Typography>

            <Divider style={{ backgroundColor: 'white', height: '2px' }} />

            <Typography variant="h4" color="white" marginTop={2}>
              {passDetails.schoolName}
            </Typography>

            <Typography variant="h5" color="white" marginTop={1}>
              <strong> Address:</strong> {passDetails.address}
            </Typography>
            <Typography variant="h5" color="white">
              <strong>Visitor&apos;s Company:</strong> {passDetails.visitorcompany}{' '}
            </Typography>
            <Typography variant="h5" color="white" marginTop={5}>
              <strong>POC Details</strong>
            </Typography>
            <Typography variant="h6" color="white">
              <strong>
                Name: {personalDetails.concernedPerson} , Number: {passDetails.number}
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
              <List sx={{ color: 'white !important' }}>
                <ListItemText
                  sx={{ '& .MuiTypography-root': { color: 'white' } }}
                  primary="1. Get vaccinated as soon as it’s your turn and follow local guidance on vaccination."
                />
                <ListItemText
                  sx={{ '& .MuiTypography-root': { color: 'white' } }}
                  primary="2. Keep physical distance of at least 1 metre from others, even if they don’t appear to be sick. Avoid crowds and close contact."
                />
                <ListItemText
                  sx={{ '& .MuiTypography-root': { color: 'white' } }}
                  primary="3. Wear a properly fitted mask when physical distancing is not possible and in poorly ventilated settings."
                />
                <ListItemText
                  sx={{ '& .MuiTypography-root': { color: 'white' } }}
                  primary="4. Clean your hands frequently with alcohol-based hand rub or soap and water."
                />
                <ListItemText
                  sx={{ '& .MuiTypography-root': { color: 'white' } }}
                  primary="5. Cover your mouth and nose with a bent elbow or tissue when you cough or sneeze. Dispose of used tissues immediately and clean hands regularly."
                />
                <ListItemText
                  sx={{ '& .MuiTypography-root': { color: 'white' } }}
                  primary="6. If you develop symptoms or test positive for COVID-19, self-isolate until you recover."
                />
              </List>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export const AppointmentPass=DownloadPdfWithCanvas(VisitorAppointmentPass); //Wrap the component for downloding
