import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ParamTableDragDrop = ({ columns, initialData, tableStyle, dragIcon = false }) => {
    const [data, setData] = useState(initialData);

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(data);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setData(items); // Update the state with the reordered data
        console.log(result);
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
        </>
    );
};

export default ParamTableDragDrop;
