import React, { useState, useRef } from 'react'
import { Box, Paper, Button} from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WithPrintPdf from 'views/common-section/withPrintPdf';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
// import useDrawer from 'hooks/useDrawer';
import EnquiryDrawer from './EnquiryDrawer';
import ReportTable from '../report-table';
import '../drawer-set.css';

const studentData = [
    {
        id: 1,
        enqNo: '001',
        enqDate: '2024-03-11',
        studentName: 'John Doe',
        class: '10',
        section: 'A',
        classSection: '10A',
        gender: 'Male',
        birthDate: '2006-05-20',
        age: 17,
        address: '123 Main St, City, Country',
        commPhone: '123-456-7890',
        commEmail: 'john@example.com',
        joinClass: '2024-03-15',
        concessionCategory: 'Category A',
        fatherName: 'Michael Doe',
        motherName: 'Emily Doe',
        nationality: 'American',
        religion: 'Christian',
        previousSchool: 'ABC School',
        lastGradeCompleted: '9',
        guardianName: 'Alice Doe',
        guardianRelationship: 'Mother',
        guardianPhone: '987-654-3210',
        guardianEmail: 'alice@example.com',
    },
    {
        id: 2,
        enqNo: '002',
        enqDate: '2024-03-12',
        studentName: 'Jane Smith',
        class: '11',
        section: 'B',
        classSection: '11B',
        gender: 'Female',
        birthDate: '2005-08-15',
        age: 18,
        address: '456 Oak St, Town, Country',
        commPhone: '987-654-3210',
        commEmail: 'jane@example.com',
        joinClass: '2024-03-16',
        concessionCategory: 'Category B',
        fatherName: 'John Smith',
        motherName: 'Mary Smith',
        nationality: 'British',
        religion: 'Catholic',
        previousSchool: 'XYZ School',
        lastGradeCompleted: '10',
        guardianName: 'John Smith',
        guardianRelationship: 'Father',
        guardianPhone: '123-456-7890',
        guardianEmail: 'john@example.com',
    },
    {
        id: 3,
        enqNo: '002',
        enqDate: '2024-03-12',
        studentName: 'Jane Smith',
        class: '11',
        section: 'B',
        classSection: '11B',
        gender: 'Female',
        birthDate: '2005-08-15',
        age: 18,
        address: '456 Oak St, Town, Country',
        commPhone: '987-654-3210',
        commEmail: 'jane@example.com',
        joinClass: '2024-03-16',
        concessionCategory: 'Category B',
        fatherName: 'John Smith',
        motherName: 'Mary Smith',
        nationality: 'British',
        religion: 'Catholic',
        previousSchool: 'XYZ School',
        lastGradeCompleted: '10',
        guardianName: 'John Smith',
        guardianRelationship: 'Father',
        guardianPhone: '123-456-7890',
        guardianEmail: 'john@example.com',
    },
    {
        id: 4,
        enqNo: '002',
        enqDate: '2024-03-12',
        studentName: 'Jane Smith',
        class: '11',
        section: 'B',
        classSection: '11B',
        gender: 'Female',
        birthDate: '2005-08-15',
        age: 18,
        address: '456 Oak St, Town, Country',
        commPhone: '987-654-3210',
        commEmail: 'jane@example.com',
        joinClass: '2024-03-16',
        concessionCategory: 'Category B',
        fatherName: 'John Smith',
        motherName: 'Mary Smith',
        nationality: 'British',
        religion: 'Catholic',
        previousSchool: 'XYZ School',
        lastGradeCompleted: '10',
        guardianName: 'John Smith',
        guardianRelationship: 'Father',
        guardianPhone: '123-456-7890',
        guardianEmail: 'john@example.com',
    },
    {
        id: 5,
        enqNo: '002',
        enqDate: '2024-03-12',
        studentName: 'Jane Smith',
        class: '11',
        section: 'B',
        classSection: '11B',
        gender: 'Female',
        birthDate: '2005-08-15',
        age: 18,
        address: '456 Oak St, Town, Country',
        commPhone: '987-654-3210',
        commEmail: 'jane@example.com',
        joinClass: '2024-03-16',
        concessionCategory: 'Category B',
        fatherName: 'John Smith',
        motherName: 'Mary Smith',
        nationality: 'British',
        religion: 'Catholic',
        previousSchool: 'XYZ School',
        lastGradeCompleted: '10',
        guardianName: 'John Smith',
        guardianRelationship: 'Father',
        guardianPhone: '123-456-7890',
        guardianEmail: 'john@example.com',
    },
];

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
    return (
        <>
            <Paper sx={{ height: "50px", position: "relative" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box>
                        <Button endIcon={<SettingsOutlinedIcon sx={{ width: "15px", height: "15px" }} onClick={() => setClickedCustomize(true)} />}>Customize Report</Button>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <WithPrintPdf Children={<LocalPrintshopOutlinedIcon />} ref={printRef} />
                        <Button endIcon={<ArrowDropDownOutlinedIcon />} >Export As</Button>
                    </Box>
                </Box>
                <Box className={clickedCustomize ? "afterClick" : "beforeClick"}>
                    <EnquiryDrawer name="Customize Report" setClickedCustomize={setClickedCustomize} />
                </Box>
            </Paper>
            <ReportTable rows={studentData} columns={columns} ref={printRef} />
        </>
    )
}


export default Enquiry;