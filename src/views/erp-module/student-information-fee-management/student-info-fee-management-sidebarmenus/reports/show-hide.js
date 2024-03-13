import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ParamSearchBar from 'views/common-section/ParamSearchBar';


const availableColumns = [
    { id: '001', field: 'enqNo', headerName: 'Enq No', selected: false },
    { id: '002', field: 'enqDate', headerName: 'Enq Date', selected: false },
    { id: '003', field: 'studentName', headerName: 'Student Name', selected: false },
    { id: '004', field: 'class', headerName: 'Class', selected: false },
    { id: '005', field: 'section', headerName: 'Section', selected: false },
    { id: '006', field: 'classSection', headerName: 'Class Section', selected: false },
    { id: '007', field: 'gender', headerName: 'Gender', selected: false },
    { id: '008', field: 'birthDate', headerName: 'Birth Date', selected: false },
    { id: '009', field: 'age', headerName: 'Age (Today)', selected: false },
    { id: '010', field: 'address', headerName: 'Address (Complete)', selected: false },
    { id: '011', field: 'commPhone', headerName: 'Comm Phone (M)', selected: false },
    { id: '012', field: 'commEmail', headerName: 'Comm Email', selected: false },
    { id: '013', field: 'joinClass', headerName: 'Join Class', selected: false },
    { id: '014', field: 'concessionCategory', headerName: 'Concession Category', selected: false },
    { id: '015', field: 'fatherName', headerName: 'Father Name', selected: false },
    { id: '016', field: 'motherName', headerName: 'Mother Name', selected: false },
    { id: '017', field: 'nationality', headerName: 'Nationality', selected: false },
    { id: '018', field: 'religion', headerName: 'Religion', selected: false },
    { id: '019', field: 'previousSchool', headerName: 'Previous School', selected: false },
    { id: '020', field: 'lastGradeCompleted', headerName: 'Last Grade Completed', selected: false },
    { id: '021', field: 'guardianName', headerName: 'Guardian Name', selected: false },
    { id: '022', field: 'guardianRelationship', headerName: 'Guardian Relationship', selected: false },
    { id: '023', field: 'guardianPhone', headerName: 'Guardian Phone', selected: false },
    { id: '024', field: 'guardianEmail', headerName: 'Guardian Email', selected: false },
];

const ShowHide = () => {
    const [selectedFields, setSelectedFields] = useState(availableColumns);
    const [isHovered, setIsHovered] = useState(-1);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSelect = (id) => {
        const updatedFields = selectedFields.map(field =>
            field.id === id ? { ...field, selected: true } : field
        );
        setSelectedFields(updatedFields);
        filterEnquiryData();
    };

    const handleUnselect = (id) => {
        const updatedFields = selectedFields.map(field =>
            field.id === id ? { ...field, selected: false } : field
        );
        setSelectedFields(updatedFields);
    };

    const handleMouseEnter = (id) => {
        setIsHovered(id);
    };

    const handleMouseLeave = () => {
        setIsHovered(-1);
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


    const filterEnquiryData = () => {
        return selectedFields.filter((column) =>
          column.headerName.toLowerCase().includes(searchTerm.toLowerCase()) && !column.selected
        );
      };

    return (
        <Box sx={{ display: "flex", gap: "100px" }}>
            <Box>
                <Typography variant="h5"> AVAILABLE Fields</Typography>
                <Box sx={{ marginTop: "20px", overflowY: 'auto', border: '1px solid #dadada', width: "300px", borderRadius: "10px", height: "600px", overflowX: "auto" }}>
                    <ParamSearchBar paperStyle={style?.searchBarStyle?.paperStyle} iconButtonStyle={style?.searchBarStyle?.iconButtonStyle} searchIconStyle={style?.searchBarStyle?.searchIconStyle} onChange={e => setSearchTerm(e.target.value)} />
                    {console.log(filterEnquiryData())}
                    {filterEnquiryData().map((item) => (
                        !item.selected && (
                            <Box key={item.id} onMouseEnter={() => handleMouseEnter(item?.id)}
                                onMouseLeave={() => handleMouseLeave()} sx={{ marginLeft: "5%", height: "30px", width: "90%", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: 'pointer' }}>
                                <Typography variant="h5">{item.id}: {item.headerName}</Typography>
                                <IconButton
                                    onClick={() => handleSelect(item.id)}
                                    sx={{
                                        color: "#bdbdbd",
                                        padding: '10px',
                                    }}
                                >
                                    <AddIcon sx={{ visibility: isHovered === item?.id ? 'visible' : 'hidden' }} />
                                </IconButton>
                            </Box>
                        )
                    ))}
                </Box>
            </Box>
            <Box>
                <Typography variant="h5"> Selected Fields</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", marginTop: "20px", overflowY: 'auto', border: '1px solid #dadada', width: "300px", borderRadius: "10px", height: "600px", overflowX: "auto" }}>
                    {selectedFields.map((item) => (
                        item.selected && (
                            <Box key={item.id} onMouseEnter={() => handleMouseEnter(item?.id)}
                                onMouseLeave={() => handleMouseLeave()} sx={{ marginLeft: "5%", height: "30px", width: "90%", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: 'pointer' }}>
                                <Typography variant="h5">{item.id}: {item.headerName}</Typography>
                                <IconButton onClick={() => handleUnselect(item.id)} sx={{
                                    color: "#bdbdbd",
                                    padding: '10px',
                                }}>
                                    <RemoveIcon sx={{ visibility: isHovered === item?.id ? 'visible' : 'hidden' }} />
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
