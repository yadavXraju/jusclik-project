import React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const tableHeadings = ["Sent By", "SMS Date To", " Mobile No.", "SMS Text", "Count", "Delivery Date", "Sent By", "Remarks", "Code", "Gateway"];

const leavedata = [
    { status: 'Delivered', smsDate: { date: '21.Feb.2024', time: '1:02PM' }, mobileNo: '918130806833', smsText: 'Dear User (Admission) Your login credentials have been changed successfully. Please intimate us immediately in case you have not made the change. (Powered by Cloud9 School ERP)', count: '2', deliveryDate: { date: '21.Feb.2024', time: '1:02PM' }, sentBy: 'PO', remarks: "", code: "SHSOFT", gateway: "DEALS" },
    { status: 'Delivered ', smsDate: { date: '20.Feb.2024', time: '2:02PM' }, mobileNo: '918130806833', smsText: 'Dear Staff Visit school website or Cloud9 School App to login to your dashboard. Your new Login ID is Admi5629 and Password is 3282e6fc', count: '4', deliveryDate: { date: '21.Feb.2024', time: '1:02PM' }, sentBy: 'Gaurika Bhatia', remarks: "", code: "SHSOFT", gateway: "GHUB" },
    { status: 'Delivered', smsDate: { date: '19.Feb.2024', time: '3:02PM' }, mobileNo: '919599918080', smsText: ' Dear Staff Visit school website or Cloud9 School App to login to your dashboard. Your new Login ID is Data0746 and Password is 4191bc84.', count: '4', deliveryDate: { date: '21.Feb.2024', time: '1:02PM' }, sentBy: 'Ashish Gupta', remarks: "", code: "SHSOFT", gateway: "SC" },
    { status: 'Delivered', smsDate: { date: '17.Feb.2024', time: '4:02PM' }, mobileNo: '919873414141 ', smsText: 'Dear User (Abhinav Sharma) Your login credentials have been changed successfully. Please intimate us immediately in case you have not made the change. (Powered by Cloud9 School ERP)', count: '2', deliveryDate: { date: '21.Feb.2024', time: '1:02PM' }, sentBy: 'Bharat Bhushan', remarks: "", code: "SHSOFT", gateway: "GHUB" },
    { status: 'Delivered', smsDate: { date: '21.Feb.2024', time: '1:02PM' }, mobileNo: '918130806833', smsText: 'Dear User (Admission) Your login credentials have been changed successfully. Please intimate us immediately in case you have not made the change. (Powered by Cloud9 School ERP)', count: '2', deliveryDate: { date: '21.Feb.2024', time: '1:02PM' }, sentBy: 'PO', remarks: "", code: "SHSOFT", gateway: "DEALS" },
    { status: 'Delivered ', smsDate: { date: '20.Feb.2024', time: '2:02PM' }, mobileNo: '918130806833', smsText: 'Dear Staff Visit school website or Cloud9 School App to login to your dashboard. Your new Login ID is Admi5629 and Password is 3282e6fc', count: '4', deliveryDate: { date: '21.Feb.2024', time: '1:02PM' }, sentBy: 'Gaurika Bhatia', remarks: "", code: "SHSOFT", gateway: "GHUB" },
    { status: 'Delivered', smsDate: { date: '19.Feb.2024', time: '3:02PM' }, mobileNo: '919599918080', smsText: ' Dear Staff Visit school website or Cloud9 School App to login to your dashboard. Your new Login ID is Data0746 and Password is 4191bc84.', count: '4', deliveryDate: { date: '21.Feb.2024', time: '1:02PM' }, sentBy: 'Ashish Gupta', remarks: "", code: "SHSOFT", gateway: "SC" },
    { status: 'Delivered', smsDate: { date: '17.Feb.2024', time: '4:02PM' }, mobileNo: '919873414141 ', smsText: 'Dear User (Abhinav Sharma) Your login credentials have been changed successfully. Please intimate us immediately in case you have not made the change. (Powered by Cloud9 School ERP)', count: '2', deliveryDate: { date: '21.Feb.2024', time: '1:02PM' }, sentBy: 'Bharat Bhushan', remarks: "", code: "SHSOFT", gateway: "GHUB" }
];

 const  LeaveTabs=React.forwardRef((props,ref)=>{
    return (
        <Box sx={{bgcolor: 'background.paper', mb: 2}} ref={ref}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {
                                tableHeadings.map((item, index) => {
                                    return <TableCell key={index}>
                                        <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }} key={index}>{item}</Typography>
                                    </TableCell>
                                }
                                )
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {leavedata
                            .map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Typography variant="h5">{item.status}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.smsDate?.date}   {item?.smsDate?.time}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.mobileNo}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5" sx={{ minWidth: '200px' }}>{item.smsText}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.count}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.deliveryDate?.date}  {item?.deliveryDate?.time}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.sentBy}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.remarks}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.code}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.gateway}</Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
})

export default LeaveTabs;

