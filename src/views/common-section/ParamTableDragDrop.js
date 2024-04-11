import React, { useState } from 'react';
import { Table , TableBody , TableCell , TableContainer , TableHead , TableRow , Paper , Typography , Box , IconButton , Drawer , Button , Tooltip , TextField} from '@mui/material';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import useDrawer from 'hooks/useDrawer';
import TopDrawer from 'views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/settings/fee-structure/regularFeeHead/TopDrawer';


const ParamTableDragDrop = ({ columns, initialData, tableStyle, dragIcon = false }) => {
    const [data, setData] = useState(initialData);
    const [editId, setEditId] = useState(null); // State to track the id of the row being edited
    const { anchor , toggleDrawer } = useDrawer(); 

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(data);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setData(items); // Update the state with the reordered data
    };

    const handleEditClick = (id) => {
        setEditId(id); // Set the id of the row to be edited
    };

    const handleSaveClick = () => {
        console.log(editId); // Log the id when Save button is clicked
    };

    return (
        <>
            <DragDropContext onDragEnd={handleDragEnd}>
                <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto', height: '80vh', '&::-webkit-scrollbar': { display: 'none' } }}>
                    <Table stickyHeader sx={{ ...tableStyle }}>
                        <TableHead sx={{ width: '100%', backgroundColor: '#1219260f', background: 'none', fontWeight: '600' }}>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column.id}>{column.tabHeading}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <Droppable droppableId='table'>
                            {(provided) => (
                                <TableBody ref={provided.innerRef} {...provided.droppableProps}>
                                    {data.map((row, index) => (
                                        <Draggable key={row.id} draggableId={row.id} index={index}>
                                            {(provided) => (
                                                <TableRow ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    {/* drag icon START */}
                                                    {dragIcon && (
                                                        <TableCell sx={{ width: '0', padding: '0', textAlign: 'right' }}>
                                                            <Typography>
                                                                <DragIndicatorOutlinedIcon sx={{ color: '#b3b9c1' }} />
                                                            </Typography>
                                                        </TableCell>
                                                    )}
                                                     {/* drag icon END */}
                                                    {Object.keys(row).map((key, colIndex) => {
                                                        if (key === 'id') {
                                                            return null;
                                                        }
                                                        // Render editable text field if the row is being edited
                                                        return (
                                                            <TableCell key={colIndex}>
                                                                        {/* Check if the current row is being edited */}
                                                                        {editId === row.id ? (
                                                                            // Render a TextField for editing when the row is being edited
                                                                            <TextField
                                                                                value={row[key]}
                                                                                // Handle changes to the text field value
                                                                                onChange={(e) => {
                                                                                    // Create a copy of the data array
                                                                                    const updatedData = [...data];
                                                                                    // Find the index of the row being edited
                                                                                    const rowIndex = updatedData.findIndex(item => item.id === row.id);
                                                                                    // Update the value of the edited field
                                                                                    updatedData[rowIndex][key] = e.target.value;
                                                                                    // Update the state with the modified data
                                                                                    setData(updatedData);
                                                                                }}
                                                                            />
                                                                        ) : (
                                                                            // Render the current value of the field when not in editing mode
                                                                            <Typography>{row[key]}</Typography>
                                                                        )}
                                                            </TableCell>

                                                        );
                                                    })}
                                                    <TableCell>
                                                        {editId === row.id ? ( // Render save button if row is being edited
                                                            <IconButton onClick={handleSaveClick}>
                                                                <Button>Save</Button>
                                                            </IconButton>
                                                        ) : (
                                                            <Box>
                                                                <Tooltip title="Configure">
                                                                    <IconButton onClick={toggleDrawer('top', true)}>
                                                                        <SettingsTwoToneIcon sx={{ color: 'rgb(124, 178, 221)' }} />
                                                                    </IconButton>
                                                                </Tooltip>
    
                                                                <Tooltip title="Edit">
                                                                    <IconButton onClick={() => handleEditClick(row.id)}>                                     
                                                                         <EditTwoToneIcon/>                              
                                                                    </IconButton>
                                                                </Tooltip>
    
                                                                <Tooltip title="Delete">
                                                                    <IconButton>
                                                                        <DeleteTwoToneIcon sx={{color:'rgb(241, 158, 158)'}}/>
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </Box>
                                                        )}
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </TableBody>
                            )}
                        </Droppable>
                    </Table>
                </TableContainer>
            </DragDropContext>

            <Drawer anchor="top" open={anchor.top} onClose={toggleDrawer('top', false)}>
                <Box  sx={{ width:'100VW' , padding: '1rem' , minHeight:'100vh'}} role='presentation'>
                <Box sx={{ display: "flex", justifyContent: "space-between", paddingBottom: '0rem', borderBottom: '1px solid #ccc'  }}>
                    <Typography variant='h4'> Fee Structure </Typography>
                    <Button sx={{marginTop:"-6px"}} onClick={toggleDrawer('top', false)}>Close</Button>
                </Box>
                  <TopDrawer />
                </Box>
          </Drawer>
        </>
    );
};

export default ParamTableDragDrop;
