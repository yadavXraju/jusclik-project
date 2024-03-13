import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import ParamSearchBar from 'views/common-section/ParamSearchBar';

const availableColumns = [
    { id: '001', field: 'enqNo', headerName: 'Enq No', selected: false },
    { id: '002', field: 'enqDate', headerName: 'Enq Date', selected: true },
    { id: '003', field: 'studentName', headerName: 'Student Name', selected: true },
    { id: '004', field: 'class', headerName: 'Class', selected: true },
    { id: '005', field: 'section', headerName: 'Section', selected: true },
    { id: '006', field: 'classSection', headerName: 'Class Section', selected: true },
    { id: '007', field: 'gender', headerName: 'Gender', selected: true },
    { id: '008', field: 'birthDate', headerName: 'Birth Date', selected: true },
    { id: '009', field: 'age', headerName: 'Age (Today)', selected: true },
    { id: '010', field: 'address', headerName: 'Address (Complete)', selected: true },
    { id: '011', field: 'commPhone', headerName: 'Comm Phone (M)', selected: true },
    { id: '012', field: 'commEmail', headerName: 'Comm Email', selected: true },
    { id: '013', field: 'joinClass', headerName: 'Join Class', selected: true },
    { id: '014', field: 'concessionCategory', headerName: 'Concession Category', selected: true },
    { id: '015', field: 'fatherName', headerName: 'Father Name', selected: true },
    { id: '015', field: 'motherName', headerName: 'Mother Name', selected: true },
    { id: '017', field: 'nationality', headerName: 'Nationality', selected: true },
    { id: '018', field: 'religion', headerName: 'Religion', selected: true },
    { id: '019', field: 'previousSchool', headerName: 'Previous School', selected: true },
    { id: '020', field: 'lastGradeCompleted', headerName: 'Last Grade Completed', selected: true },
    { id: '021', field: 'guardianName', headerName: 'Guardian Name', selected: true },
    { id: '022', field: 'guardianRelationship', headerName: 'Guardian Relationship', selected: true },
    { id: '023', field: 'guardianPhone', headerName: 'Guardian Phone', selected: true },
    { id: '024', field: 'guardianEmail', headerName: 'Guardian Email', selected: true },
];

const ShowHide = () => {
    const [selectedFields, setSelectedFields] = useState(availableColumns);
    const [isHovered, setIsHovered] = useState(false);
    const handleSelect = (id) => {
        const updatedFields = selectedFields.map(field =>
            field.id === id ? { ...field, selected: true } : field
        );
        setSelectedFields(updatedFields);
    };

    const handleUnselect = (id) => {
        const updatedFields = selectedFields.map(field =>
            field.id === id ? { ...field, selected: false } : field
        );
        setSelectedFields(updatedFields);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const style = {
        searchBarStyle: {
            paperStyle: {
                height: "40px"
            },
            inputStyle: {

            },
            iconButtonStyle: {
                width: "40px",
                backgroundColor: "#bdbdbd63 !important",
                padding: "0px",
                borderRadius: "0px",
                height: "40px"
            },
            searchIconStyle: {
                width: "20px",
                height: "20px"
            }
        }
    }

    return (
        <Box sx={{ display: "flex", gap: "100px" }}>
            <Box>
                <Typography variant="h5"> AVAILABLE Fields</Typography>
                <Box sx={{ marginTop: "20px", overflowY: 'auto', border: '1px solid #dadada', width: "300px", borderRadius: "10px", height: "600px", overflowX: "auto" }}>
                    <ParamSearchBar paperStyle={style?.searchBarStyle?.paperStyle} iconButtonStyle={style?.searchBarStyle?.iconButtonStyle} searchIconStyle={style?.searchBarStyle?.searchIconStyle} />
                    {selectedFields.map((item) => (
                        !item.selected && (
                            <Box onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave} sx={{ marginLeft: "5%", width: "90%", display: "flex", alignItems: "center", justifyContent: "space-between",cursor: 'pointer' }} key={item.id}>
                                <Typography variant="h5">{item.id}: {item.headerName}</Typography>
                                <IconButton
                                    onClick={() => handleSelect(item.id)}
                                    sx={{
                                        color: "#bdbdbd",
                                        padding: '10px',
                                        visibility: isHovered ? 'visible' : 'hidden',
                                    }}
                                >
                                    <AddOutlinedIcon />
                                </IconButton>
                            </Box>
                        )
                    ))}
                </Box>
            </Box>
            <Box>
                <Typography variant="h5"> Selected Fields</Typography>
                <Box sx={{ marginTop: "20px", overflowY: 'auto', border: '1px solid #dadada', width: "300px", borderRadius: "10px", height: "600px", overflowX: "auto" }}>
                    {selectedFields.map((item) => (
                        item.selected && (
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} key={item.id}>
                                <Typography>{item.id}: {item.headerName}</Typography>
                                <IconButton onClick={() => handleUnselect(item.id)} sx={{ color: "#bdbdbd" }}>
                                    <RemoveOutlinedIcon />
                                </IconButton>
                            </Box>
                        )
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ShowHide;
