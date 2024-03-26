import React, { useState } from 'react'
import { Box, Grid, Button } from '@mui/material';
import { TextField, InputAdornment, IconButton, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useOutsideClick from 'hooks/useClickOutside';

const availableColumns = [
    {
        id: '001',
        field: 'enqNo',
        headerName: 'Enq No',
        order: 'Ascending'
    },
    {
        id: '002',
        field: 'enqDate',
        headerName: 'Enq Date',
        order: 'Ascending'
    },
    {
        id: '003',
        field: 'studentName',
        headerName: 'Student Name',
        order: 'Ascending'
    },
    {
        id: '004',
        field: 'class',
        headerName: 'Class',
        order: 'Ascending'
    },
    {
        id: '005',
        field: 'section',
        headerName: 'Section',
        order: 'Asceding'
    },
    {
        id: '006',
        field: 'classSection',
        headerName: 'Class Section',
        order: 'Ascending'
    },
    {
        id: '007',
        field: 'gender',
        headerName: 'Gender',
        order: 'Ascending'
    },
    {
        id: '008',
        field: 'birthDate',
        headerName: 'Birth Date',
        order: 'Ascending'
    },
    {
        id: '009',
        field: 'age',
        headerName: 'Age (Today)',
        order: 'Ascending'
    },
    {
        id: '010',
        field: 'address',
        headerName: 'Address (Complete)',
        order: 'Ascending'
    },
    {
        id: '011',
        field: 'commPhone',
        headerName: 'Comm Phone (M)',
        order: 'Ascending'
    },
    {
        id: '012',
        field: 'commEmail',
        headerName: 'Comm Email',
        order: 'Ascending'
    },
    {
        id: '013',
        field: 'joinClass',
        headerName: 'Join Class',
        order: 'Ascending'
    },
    {
        id: '014',
        field: 'concessionCategory',
        headerName: 'Concession Category',
        order: 'Ascending'
    },
    {
        id: '015',
        field: 'fatherName',
        headerName: 'Father Name',
        order: 'Ascending'
    },
    {
        id: '016',
        field: 'motherName',
        headerName: 'Mother Name',
        order: 'Ascending'
    },
    {
        id: '017',
        field: 'nationality',
        headerName: 'Nationality',
        order: 'Ascending'
    },
    {
        id: '018',
        field: 'religion',
        headerName: 'Religion',
        order: 'Ascending'
    },
    {
        id: '019',
        field: 'previousSchool',
        headerName: 'Previous School',
        order: 'Ascending'
    },
    {
        id: '020',
        field: 'lastGradeCompleted',
        headerName: 'Last Grade Completed',
        order: 'Ascending'
    },
    {
        id: '021',
        field: 'guardianName',
        headerName: 'Guardian Name',
        order: 'Ascending'
    },
    {
        id: '022',
        field: 'guardianRelationship',
        headerName: 'Guardian Relationship',
        order: 'Ascending'
    },
    {
        id: '023',
        field: 'guardianPhone',
        headerName: 'Guardian Phone',
        order: 'Ascending'
    },
    {
        id: '024',
        field: 'guardianEmail',
        headerName: 'Guardian Email',
        order: 'Ascending'
    },
];

const sortingOrderOption = [
    {
        id: 1,
        headerName: "Ascending",
    },
    {
        id: 2,
        headerName: "Descending",
    }
]

const Sort = () => {
    const [selectedSortProperty, setSelectSortProperty] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    // To close a component on clciking outside
    const { ref, isOpen, setIsOpen } = useOutsideClick(false);
    const outsideClick = useOutsideClick(false);

    const handleSortProperty = (item) => {
        setSelectSortProperty([...selectedSortProperty, item]);
        setIsOpen(false);
        console.log(selectedSortProperty)
    }


    const filterAvailableFields = () => {
        return isOpen ? availableColumns.filter((column) =>
            column.headerName.toLowerCase().includes(searchTerm.toLowerCase())
        ) : [];
    };


    return (
        <Grid container spacing={0} sx={{ position: "relative", border: "1px solid #f0f5f8", zIndex: "1", width: "100%", height: '480px' }}>
            <Grid item xs={12} sm={12} md={12} ref={ref}>
                <TextField
                    variant="outlined"
                    placeholder="Choose a Property...."
                    sx={{ width: "100%", padding: "20px 20px 20px 20px" }}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <ArrowDropDownIcon onClick={() => setIsOpen(true)} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    onClick={() => setIsOpen(true)}
                />
                {
                    isOpen && <Box sx={{ position: "absolute",top:"72px",width: "calc(100% - 20px)", height: "340px", overflowY: 'auto', backgroundColor: "white", paddingLeft: "20px", zIndex: "5" }} className="scrollbar">
                        {filterAvailableFields().map((item) => (
                            <Box key={item.id}>
                                <Typography variant="h5" sx={{ border: "1px solid #f5f8fa", height: "30px", cursor: "pointer" }} onClick={() => handleSortProperty(item)}>{item.headerName}</Typography>
                            </Box>
                        )
                        )}
                    </Box>
                }
            </Grid>
            {/* Filter Based On Property */}
            <Grid item xs={12} sm={12} md={12} sx={{ position: "absolute", top: "80px", zIndex: "2" }}>
                <Grid container spacing={1}>
                    {
                        selectedSortProperty && selectedSortProperty.map((item) =>
                            <>
                                <Grid item xs={12} sm={12} md={6} >
                                    <TextField
                                        variant="outlined"
                                        placeholder={item?.headerName}
                                        sx={{ width: "100%", padding: "0px 20px" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} sx={{ position: "relative" }}>
                                    <TextField
                                        variant="outlined"
                                        placeholder={item?.order}
                                        sx={{ width: "100%", padding: "0px 20px" }}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton>
                                                        <ArrowDropDownIcon onClick={() => outsideClick.setIsOpen1(true)} />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        onClick={() => outsideClick.setIsOpen(true)}
                                    />
                                    {
                                        outsideClick.isOpen &&
                                        <Box sx={{ position: "absolute", top: "60px", width: "calc(100% - 20px)", height: "150px", paddingLeft: "20px", paddingRight: "10px", overflowY: 'auto', backgroundColor: "white", zIndex: "3"}} className="scrollbar" ref={outsideClick.ref}>
                                            {
                                                sortingOrderOption.map((sortItem) => (
                                                    <Box key={sortItem.id}>
                                                        <Typography variant="h5" sx={{ border: "1px solid #f5f8fa", height: "30px", cursor: "pointer" }} onClick={() => handleSortOrder(sortItem)}>{item.headerName}</Typography>
                                                    </Box>
                                                )
                                                )
                                            }
                                        </Box>
                                    }
                                </Grid >
                            </>
                        )}
                </Grid>
            </Grid>
            {/* Clear Filter Button */}
            <Grid item xs={12} sm={12} md={12} sx={{ position: "absolute", width: "100%", top: "420px", display: "flex", justifyContent: "flex-end", paddingRight: "20px", height: "60px", borderTop: "1px solid #f0f5f8", alignItems: "center" }}>
                <Button sx={{ height: "40px" }} onClick={() => setSelectSortProperty([])} variant="outlined">Clear Sorting </Button>
            </Grid>
        </Grid >
    )
}

export default Sort;

