import React, { useState } from 'react';
import { Table , TableBody , TableCell , TableContainer , TableHead , TableRow , Paper , Typography , Box , IconButton , Drawer , Button , Tooltip} from '@mui/material';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import useDrawer from 'hooks/useDrawer';
import TopDrawer from 'views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/settings/fee-structure/regularFeeHead/TopDrawer';


const ParamTableDragDrop = ({ columns, initialData, tableStyle, dragIcon = false , }) => {
    const [data, setData] = useState(initialData);
    const {anchor , toggleDrawer } = useDrawer(); 

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(data);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setData(items); // Update the state with the reordered data
        // console.log(result);
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
                                                    {dragIcon && (
                                                        <TableCell sx={{ width: '0', padding: '0', textAlign: 'right' }}>
                                                            <Typography>
                                                                <DragIndicatorOutlinedIcon sx={{ color: '#b3b9c1' }} />
                                                            </Typography>
                                                        </TableCell>
                                                    )}
                                                    {Object.keys(row).map((key, index) => {
                                                        if (key === 'id') {
                                                            return null;
                                                        }
                                                        return (
                                                            <TableCell key={index}>
                                                                <Typography>{row[key]}</Typography>
                                                            </TableCell>
                                                        );
                                                    })}

                                                       <TableCell>
                                                            <Box>
                                                            <Tooltip title="Configure">
                                                                    <IconButton onClick={toggleDrawer('top', true)}>
                                                                        <SettingsTwoToneIcon sx={{ color: 'rgb(124, 178, 221)' }} />
                                                                    </IconButton>
                                                            </Tooltip>

                                                            <Tooltip title="Edit">
                                                                <IconButton>                                     
                                                                     <EditTwoToneIcon/>                              
                                                                </IconButton>
                                                            </Tooltip>

                                                            <Tooltip title="Delete">
                                                                <IconButton>
                                                                    <DeleteTwoToneIcon sx={{color:'rgb(241, 158, 158)'}}/>
                                                                </IconButton>
                                                            </Tooltip>
                                                            </Box>
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
