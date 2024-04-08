
import React, { useState } from 'react';
import { TableCell, TableBody, Table, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';

const tableHeadings = [

    {
        id: 1,
        tabHeading: ''
      },

    {
        id: 2,
        tabHeading: "Concession category"
    },
    {
        id: 3,
        tabHeading: 'Approval based'
    },
    {
        id: 4,
        tabHeading: 'Approval Id'
    },
    {
        id: 5,
        tabHeading: "Applicable from"
    },
    {
        id: 6,
        tabHeading: "Valid up to"
    },
];

const initialData = [
    {
        "id": "1",
        "concessionCategory": "Vaccination Discount",
        "approvalBased": "Yes",
        "approvalId": 'umangkumar853@gmail',
        "applicableFrom": "2025-2026",
        "ValidUpTo": '2026-2027',
    },
    {
        "id": "2",
        "concessionCategory": "Scholarship",
        "approvalBased": "Yes",
        "approvalId": 'umangkumar853@gmail',
        "applicableFrom": "2025",
        "ValidUpTo": '2026-2027',
    },
    {
        "id": "3",
        "concessionCategory": "Free Transport",
        "approvalBased": "No",
        "approvalId": 'umangkumar853@gmail',
        "applicableFrom": "2025",
        "ValidUpTo": '2026-2027',
    },
    {
        "id": "4",
        "concessionCategory": "Management",
        "approvalBased": "No",
        "approvalId": 'umangkumar853@gmail',
        "applicableFrom": "2025",
        "ValidUpTo": '2026-2027',
    },
    {
        "id": "11",
        "concessionCategory": "Vaccination Discount",
        "approvalBased": "Yes",
        "approvalId": 'rahulkumar853@gmail',
        "applicableFrom": "2025-2026",
        "ValidUpTo": '2026-2027',
    },
    {
        "id": "12",
        "concessionCategory": "Scholarship",
        "approvalBased": "Yes",
        "approvalId": 'riteshkumar853@gmail',
        "applicableFrom": "2025",
        "ValidUpTo": '2026-2027',
    },
    {
        "id": "13",
        "concessionCategory": "Free Transport",
        "approvalBased": "No",
        "approvalId": 'rajkumar853@gmail',
        "applicableFrom": "2025",
        "ValidUpTo": '2026-2027',
    },
    {
        "id": "14",
        "concessionCategory": "Management",
        "approvalBased": "No",
        "approvalId": 'rohitkumar853@gmail',
        "applicableFrom": "2025",
        "ValidUpTo": '2026-2027',
    },

    {
        "id": "21",
        "concessionCategory": "Vaccination Discount",
        "approvalBased": "Yes",
        "approvalId": 'ronakumar853@gmail',
        "applicableFrom": "2025-2026",
        "ValidUpTo": '2026-2027',
    },
    {
        "id": "22",
        "concessionCategory": "Scholarship",
        "approvalBased": "Yes",
        "approvalId": 'harshit853@gmail',
        "applicableFrom": "2025",
        "ValidUpTo": '2026-2027',
    },
    {
        "id": "23",
        "concessionCategory": "Free Transport",
        "approvalBased": "No",
        "approvalId": 'umangkumar853@gmail',
        "applicableFrom": "2025",
        "ValidUpTo": '2026-2027',
    },
    {
        "id": "24",
        "concessionCategory": "Management",
        "approvalBased": "No",
        "approvalId": 'umangkumar853@gmail',
        "applicableFrom": "2025",
        "ValidUpTo": '2026-2027',
    },
];

const Concession = () => {
    const [data, setData] = useState(initialData);
    // const [editableApprovalIds, setEditableApprovalIds] = useState(initialData.map(() => ''));

    // const handleApprovalIdChange = (index, value) => {
    //     const updatedApprovalIds = [...editableApprovalIds];
    //     updatedApprovalIds[index] = value;
    //     setEditableApprovalIds(updatedApprovalIds);
    // };

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(data);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setData(items); // Update the state with the reordered data
        console.log(result)
    };

 
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto', Maxheight: '80vh', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Table stickyHeader>
                    <TableHead sx={{ width: '100%', backgroundColor: '#1219260f', background: 'none', fontWeight: '600' }}>
                        <TableRow>
                            {tableHeadings.map((column) => (
                                <TableCell key={column.id}>{column.tabHeading}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <Droppable droppableId="table">
                        {(provided) => (
                            <TableBody ref={provided.innerRef} {...provided.droppableProps}>
                                {data.map((row, index) => (
                                    <Draggable key={row.id} draggableId={row.id} index={index}>
                                        {(provided) => (


                                       <TableRow ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>



                                                <TableCell sx={{ width: '0', padding: '0', textAlign: 'right' }}>
                                                    <Typography>
                                                        <DragIndicatorOutlinedIcon sx={{ color: '#b3b9c1' }} />
                                                    </Typography>
                                                </TableCell>

                                      
                                                {Object.keys(row).map((key, cellIndex) => {
                                                    if (key === 'id') {
                                                        return null;
                                                    } 
                                                    // else if (key === 'approvalId') {
                                                    //     return (
                                                    //         <TableCell
                                                    //             key={cellIndex}
                                                    //             sx={{
                                                    //                 cursor: row.approvalBased === 'No' ? 'not-allowed' : '',
                                                    //                 '& fieldset': {
                                                    //                     borderRadius: '0',
                                                    //                     cursor: row.approvalBased === 'No' ? 'not-allowed' : ''
                                                    //                 },
                                                    //                 '& input': {
                                                    //                     padding: '5px',
                                                    //                     cursor: row.approvalBased === 'No' ? 'not-allowed' : ''
                                                    //                 },
                                                    //             }}
                                                    //         >
                                                    //             <TextField
                                                    //                 sx={{ borderRadius: 0 }}
                                                    //                 type="text"
                                                    //                 value={editableApprovalIds[index]}
                                                    //                 onChange={(e) => handleApprovalIdChange(index, e.target.value)}
                                                    //                 disabled={row.approvalBased === 'No'} // Disable input if approvalBased is 'No'
                                                    //             />
                                                    //         </TableCell>
                                                    //     );
                                                    // }
                                                    return (
                                                        <TableCell key={cellIndex}>
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
    );
};

export default Concession;
