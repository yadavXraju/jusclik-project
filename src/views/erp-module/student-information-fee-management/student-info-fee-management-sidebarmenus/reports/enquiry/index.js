import React, { useState, useRef } from 'react'
import { Box, Paper, Button, Typography } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WithPrintPdf from 'component/withPrintPdf';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
// import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
// import AdmissionDrawer from './AdmissionDrawer';
// import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
// import useDrawer from 'hooks/useDrawer';
import EnquiryDrawer from './EnquiryDrawer';
import ReportTable from './report-table';
import {useSelector} from 'react-redux';


const studentData = [];

// Sample data for different fields
const names = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Brown', 'David Lee', 'Sarah Wilson'];
const classes = ['10', '11', '12'];
const sections = ['A', 'B', 'C'];
const genders = ['Male', 'Female'];
const addresses = ['123 Main St', '456 Elm St', '789 Oak St'];
const emails = ['john@example.com', 'jane@example.com', 'michael@example.com'];
const guardianRelationships = ['Father', 'Mother', 'Guardian'];
const concessionCategories = ['Category A', 'Category B', 'Category C'];

// Generate 50 student records
for (let i = 1; i <= 50; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    const randomSection = sections[Math.floor(Math.random() * sections.length)];
    const randomGender = genders[Math.floor(Math.random() * genders.length)];
    const randomAddress = addresses[Math.floor(Math.random() * addresses.length)];
    const randomEmail = emails[Math.floor(Math.random() * emails.length)];
    const randomGuardianRelationship = guardianRelationships[Math.floor(Math.random() * guardianRelationships.length)];
    const randomConcessionCategory = concessionCategories[Math.floor(Math.random() * concessionCategories.length)];

    const student = {
        id: i,
        enqNo: `${i.toString().padStart(3, '0')}`,
        enqDate: `2024-03-${Math.floor(Math.random() * 30) + 1}`,
        studentName: randomName,
        class: randomClass,
        section: randomSection,
        classSection: `${randomClass}${randomSection}`,
        gender: randomGender,
        birthDate: `200${Math.floor(Math.random() * 2) + 1}-0${Math.floor(Math.random() * 9) + 1}-${Math.floor(Math.random() * 28) + 1}`,
        age: Math.floor(Math.random() * 8) + 15, // Random age between 15 and 22
        address: `${randomAddress}, City, Country`,
        commPhone: `${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
        commEmail: randomEmail,
        joinClass: `2024-03-${Math.floor(Math.random() * 15) + 15}`, // Random joining class date in March 2024
        concessionCategory: randomConcessionCategory,
        fatherName: `Father of ${randomName}`,
        motherName: `Mother of ${randomName}`,
        nationality: 'American',
        religion: 'Christian',
        previousSchool: 'ABC School',
        lastGradeCompleted: Math.floor(Math.random() * 12) + 1, // Random last grade completed between 1 and 12
        guardianName: `${randomGuardianRelationship} of ${randomName}`,
        guardianRelationship: randomGuardianRelationship,
        guardianPhone: `${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
        guardianEmail: `${randomGuardianRelationship.toLowerCase().replace(' ', '')}@example.com`,
    };

    studentData.push(student);
}


const columns = [
    { id: 'enqNo', field: 'enqNo', headerName: 'Enq No', editable: true },
    { id: 'enqDate', field: 'enqDate', headerName: 'Enq Date', editable: true },
    { id: 'studentName', field: 'studentName', headerName: 'Student Name', editable: true },
    { id: 'class', field: 'class', headerName: 'Class', editable: true },
    { id: 'section', field: 'section', headerName: 'Section', editable: true },
    { id: 'classSection', field: 'classSection', headerName: 'Class Section', editable: true },
    { id: 'gender', field: 'gender', headerName: 'Gender', editable: true },
    { id: 'birthDate', field: 'birthDate', headerName: 'Birth Date', editable: true },
    { id: 'age', field: 'age', headerName: 'Age (Today)', editable: true },
    { id: 'address', field: 'address', headerName: 'Address (Complete)', editable: true },
    { id: 'commPhone', field: 'commPhone', headerName: 'Comm Phone (M)', editable: true },
    { id: 'commEmail', field: 'commEmail', headerName: 'Comm Email', editable: true },
    { id: 'joinClass', field: 'joinClass', headerName: 'Join Class', editable: true },
    { id: 'concessionCategory', field: 'concessionCategory', headerName: 'Concession Category', editable: true },
    { id: 'fatherName', field: 'fatherName', headerName: 'Father Name', editable: true },
    { id: 'motherName', field: 'motherName', headerName: 'Mother Name', editable: true },
    { id: 'nationality', field: 'nationality', headerName: 'Nationality', editable: true },
    { id: 'religion', field: 'religion', headerName: 'Religion', editable: true },
    { id: 'previousSchool', field: 'previousSchool', headerName: 'Previous School', editable: true },
    { id: 'lastGradeCompleted', field: 'lastGradeCompleted', headerName: 'Last Grade Completed', editable: true },
    { id: 'guardianName', field: 'guardianName', headerName: 'Guardian Name', editable: true },
    { id: 'guardianRelationship', field: 'guardianRelationship', headerName: 'Guardian Relationship', editable: true },
    { id: 'guardianPhone', field: 'guardianPhone', headerName: 'Guardian Phone', editable: true },
    { id: 'guardianEmail', field: 'guardianEmail', headerName: 'Guardian Email', editable: true },
];

const Enquiry = () => {
    const printRef = useRef();
    const [clickedCustomize, setClickedCustomize] = useState(false);
    const {opened}=useSelector((state)=>state.customization);

    const windowWidth=window.innerWidth;
    const largeWidth=windowWidth>=900;

    const style={
        beforeClickStyle:{
            position:'absolute',
            transform:'translateY(-1000vh)',
            top:'-1000vh',
            overflowX:'hidden',
            left:largeWidth?opened?'120px':'260px':'0px',
        },
        afterClickStyle:{
            position:'absolute',
            width:largeWidth?`calc(100vw - ${opened ? '261px' : '125px'})`:'100vw',            
            height:largeWidth?'calc(100vh - 110px)':'calc(100vh - 162px)',
            left:largeWidth?opened?'260px':'120px':'0px',
            top:largeWidth?'110px':'162px',
            borderRadius:'10px',
            transform:'translateY(0vh)',
            backgroundColor:'#fff',
            zIndex:'99',
            transition:'0.3s all ease-in-out',
            overflowX: 'hidden'
        }
    }

    return (
        <>
            <Box>
                {
                    !clickedCustomize &&
                    <Paper sx={{ overflowX: "hidden" }}>
                        <Box sx={{ width: "100%", borderBottom: '1px solid #ccc', display: "flex", justifyContent: "space-between", alignItems: "center" }} p={2}>
                            <Typography variant="h4" sx={{ pb: '0px' }}>Enquiry Report</Typography>
                            <Box sx={{ display: "flex",gap:"20px" }}>
                                <Button startIcon={<SettingsOutlinedIcon sx={{ marginTop: "2px", width: "15px" }} />} onClick={() => setClickedCustomize(true)} variant="outlined">Customize Report</Button>
                                <PopupState variant="popover" popupId="demo-popup-popover">
                                    {(popupState) => (
                                        <div>
                                            <IconButton sx={{ background: '#cccccc54' }} {...bindTrigger(popupState)}>
                                                <MoreVertTwoToneIcon />
                                            </IconButton>
                                            <Popover
                                                {...bindPopover(popupState)}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'center'
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'center'
                                                }}
                                            >
                                                <Typography sx={{ p: 1, display: 'Grid'}}>
                                                    <WithPrintPdf Children={<>Export as Pdf </>} ref={printRef} />
                                                    <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Download Contact</Button>
                                                </Typography>
                                            </Popover>
                                        </div>
                                    )}
                                </PopupState>
                            </Box>
                        </Box>
                        <ReportTable rows={studentData} columns={columns} ref={printRef} />
                    </Paper>
                }
            </Box>
            {<Box sx={clickedCustomize?style?.afterClickStyle:style?.beforeClickStyle}>
                <EnquiryDrawer name="Customize Report" setClickedCustomize={setClickedCustomize} />
            </Box>}
        </>
    )
}


export default Enquiry;