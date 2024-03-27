import React, { useState } from 'react'
import { Box, Grid, Button } from '@mui/material';
import { TextField, InputAdornment, IconButton, Typography,useMediaQuery } from '@mui/material';
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
    const [selectSortProperty, setSelectSortProperty] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    //To track which  one sorting order to open
    const [sortPropertyOpen, setSortPropertyOpen] = useState(-1);
    // To close a component on clciking outside
    const { ref, isOpen, setIsOpen } = useOutsideClick(false);
    const outsideClick = useOutsideClick(false);

    const handleSortProperty = (item) => {
        setSelectSortProperty([...selectSortProperty, item]);
        setIsOpen(false);
    }

    const handleSortOrder = (id, sortOrder) => {
        const updatedArray = selectSortProperty.map((item) => {
            if (item?.id === id) {
                return { ...item, order: sortOrder };
            }
            return item;
        })
        setSelectSortProperty(updatedArray);
        outsideClick.setIsOpen(false);
    }

    const filterAvailableFields = () => {
        return isOpen ? availableColumns.filter((column) =>
            column.headerName.toLowerCase().includes(searchTerm.toLowerCase())
        ) : [];
    };

    const isSmallerThan1200px = useMediaQuery('(max-width: 1200px)');
    const inputpadding=isSmallerThan1200px<1200?"20px":"10px";
    return (
        <Grid container spacing={0} sx={{ position: "relative", border: "1px solid #f0f5f8", zIndex: "1", height: '480px' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} ref={ref}>
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
                    isOpen && <Box sx={{ position: "absolute", top: "72px", width: "calc(100% - 20px)", height: "340px", overflowY: 'auto', backgroundColor: "white", paddingLeft: "20px", zIndex: "5" }} className="scrollbar">
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
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ position: "absolute", top: "80px", zIndex: "2",width:"100%" }}>
                <Grid container spacing={1}>
                    {
                        selectSortProperty && selectSortProperty.map((item) =>
                            <>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <TextField
                                        variant="outlined"
                                        placeholder={item?.headerName}
                                        sx={{ width: "100%", padding: `0px ${inputpadding} 0px 20px`}}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} sx={{ position: "relative" }}>
                                    <TextField
                                        variant="outlined"
                                        placeholder={item?.order}
                                        sx={{ width: "100%", padding: `0px 20px 0px ${inputpadding}` }}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton>
                                                        <ArrowDropDownIcon onClick={() =>{outsideClick.setIsOpen(!isOpen),setSortPropertyOpen(item?.id)}} />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        onClick={() =>{outsideClick.setIsOpen(true),setSortPropertyOpen(item?.id)}}
                                    />
                                    {
                                        outsideClick.isOpen &&sortPropertyOpen==item?.id && 
                                        <Box sx={{ position: "absolute", top: "60px", width: "calc(100% - 20px)", height: "150px", paddingLeft: "20px", paddingRight: "10px", overflowY: 'auto', backgroundColor: "white", zIndex: "3" }} className="scrollbar" ref={outsideClick.ref}>
                                            {
                                                sortingOrderOption.map((sortItem) => (
                                                    <Box key={sortItem.id}>
                                                        <Typography variant="h5" sx={{ border: "1px solid #f5f8fa", height: "30px", cursor: "pointer" }} onClick={() => handleSortOrder(item?.id, sortItem.headerName)}>{sortItem.headerName}</Typography>
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

