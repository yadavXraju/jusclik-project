// @Page Onwer-Tarun Kumar Pandey
import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ParamSearchBar from 'components/SearchBar';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";


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
    const [hoveredItemId, setHoveredItemId] = useState(-1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterItem, setFilterItem] = useState(selectedFields);

    const handleSelectField = (id) => {
        const updatedFields = selectedFields.map(field =>
            field.id === id ? { ...field, selected: true } : field
        );
        setSelectedFields(updatedFields);
        filterAvailableFields();
    };

    const handleUnselectField = (id) => {
        const updatedFields = selectedFields.map(field =>
            field.id === id ? { ...field, selected: false } : field
        );
        setSelectedFields(updatedFields);
    };

    const handleMouseEnter = (id) => {
        setHoveredItemId(id);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(-1);
    };

    const style = {
        showHideContainer: {
            height:'480px',
            display: "flex",
            flexWrap: "wrap",
            gap: "100px",
            width:"100%",
            alignItems: "center",
        },
        availableColumnsContainer: {
            height:'480px',
        },
        availableFieldsContainer: {
            marginTop: "20px",
            border: '1px solid #dadada',
            width: "300px",
            borderRadius: "10px",
            height:'480px',
            overflowY: 'auto',
        },
        selectedField: {
            marginLeft: "5%",
            height: "30px",
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: 'pointer'
        },
        arrowIcon: {
            fontSize: "40px",
            strokeWidth: 200
        },
        searchBar: {
            paperStyle: {
                height: "40px",
                marginBottom: "5px",
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
    };

    const handleDragAndDrop = (results) => {
        const { type, destination, source } = results;
        console.log(results);
        // console.log(type, destination, source)
        // when destination is not specified
        if (!destination)
            return;
        // for the case when element is dragged inside own box and same place
        if (source.droppableId == destination.droppableId && source.index == destination.index)
            return;
        //reordered the list
        if (type == "group1") {
            const reorderedStores = [...filterItem];
            const storeSourceIndex = source.index;
            const storeDestinatonIndex = destination.index;
            const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
            reorderedStores.splice(storeDestinatonIndex, 0, removedStore);
            setFilterItem(reorderedStores);
            return;
        }
    }

    const filterAvailableFields = (filterData) => {
        filterData = filterData ? filterData : '';
        setSearchTerm(filterData)
        setFilterItem(selectedFields.filter((column) =>
            column.headerName.toLowerCase().includes(searchTerm.toLowerCase()) && !column.selected
        ))
    };

    return (
        <DragDropContext onDragEnd={handleDragAndDrop} >
            <Box sx={style.showHideContainer}>
                {/* Available Fields */}
                <Box sx={style.availableColumnsContainer}>
                    <Typography variant="h5"> AVAILABLE COLUMNS</Typography>
                    <Box className="scrollbar" sx={style.availableFieldsContainer}>
                        <ParamSearchBar
                            paperStyle={style.searchBar.paperStyle}
                            iconButtonStyle={style.searchBar.iconButtonStyle}
                            searchIconStyle={style.searchBar.searchIconStyle}
                            onChange={(e) => filterAvailableFields(e.target.value)}
                        />
                        <Droppable droppableId='available' type='group1'>
                            {(provided) => (
                                <Box  {...provided.droppableProps} ref={provided.innerRef}>
                                    {
                                        filterItem.map((item, index) => (
                                            !item.selected && (
                                                <Draggable draggableId={item.id} index={index} key={item.id} >
                                                    {(provided) => (
                                                        <Box
                                                            key={item.id}
                                                            onMouseEnter={() => handleMouseEnter(item?.id)}
                                                            onMouseLeave={() => handleMouseLeave()}
                                                            sx={style?.selectedField}
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}                                                           
                                                        >
                                                            <Typography variant="h5">{item.id}: {item.headerName}</Typography>
                                                            <IconButton
                                                                onClick={() => handleSelectField(item.id)}
                                                                sx={{
                                                                    color: "#bdbdbd",
                                                                }}
                                                            >
                                                                <AddIcon sx={{ visibility: hoveredItemId === item?.id ? 'visible' : 'hidden' }} />
                                                            </IconButton>
                                                        </Box>
                                                    )}
                                                </Draggable>
                                            )
                                        ))
                                    }
                                    {provided.placeholder}
                                </Box>
                            )}
                        </Droppable>
                    </Box>
                </Box>
                {/* Right Arrow Icons */}
                <Box>
                    <ArrowCircleRightOutlinedIcon sx={style.arrowIcon} />
                </Box>
                {/* Selected Fields */}
                <Box sx={style.availableColumnsContainer} >
                    <Typography variant="h5">SELECTED COLUMNS</Typography>
                    <Droppable droppableId="selected" type="group1">
                        {(provided) => (
                            <Box className="scrollbar" sx={style.availableFieldsContainer} {...provided.droppableProps} ref={provided.innerRef}>
                                {selectedFields.map((item, index) => (
                                    item.selected && (
                                        <Draggable draggableId={item.id} index={index} key={item?.id} type="group2">
                                            {(provided) => (
                                                <Box
                                                    key={item.id}
                                                    onMouseEnter={() => handleMouseEnter(item?.id)}
                                                    onMouseLeave={() => handleMouseLeave()}
                                                    sx={style?.selectedField}
                                                    {...provided.dragHandleProps}
                                                    {...provided.draggableProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <Typography variant="h5">{item.id}: {item.headerName}</Typography>
                                                    <IconButton
                                                        onClick={() => handleUnselectField(item.id)}
                                                        sx={{
                                                            color: "#bdbdbd",
                                                        }}
                                                    >
                                                        <RemoveIcon sx={{ visibility: hoveredItemId === item?.id ? 'visible' : 'hidden' }} />
                                                    </IconButton>
                                                </Box>
                                            )}
                                        </Draggable>
                                    )
                                ))}
                                {provided.placeholder}
                            </Box>
                        )}
                    </Droppable>
                </Box>
            </Box >
        </DragDropContext>
    );
};

export default ShowHide;
