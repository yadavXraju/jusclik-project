// ======= Page Owner Vikash =========
// ======= Fee Summary Page =========
import React, { useState } from 'react';
import { Box } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import rows from './Fee_tabledata';

export default function Summary() {
    const [displayItem, setDisplayItem] = useState('displayItem');
    const [rotateIcon, setRotateIcon] = useState([]);
    
    // ========== Handle Display the details and rotation of down icon ========
    const handleDisplay = (index) => {
        setDisplayItem(displayItem === `displayItem${index}` ? '' : `displayItem${index}`);
        const updatedrotateIcon = [...rotateIcon];
        updatedrotateIcon[index] = !updatedrotateIcon[index];
        setRotateIcon(updatedrotateIcon);
    };

    // ============== sorting the rows using last date ==========
     rows.sort((a, b) => new Date(a.ldate) - new Date(b.ldate));

    // ============= set status overdue if date is over =============
    rows.map(row => ({
        status: new Date(row.ldate) < new Date() ? row.status = 'Overdue' : row.status
    }));

    // ================= Filter Pending rows =================
    const pendingRows = rows.filter((row) => row.status === 'Pending');
    const pendingInvoicesCount = pendingRows.length;

    // ================= Filter Overdue rows =================
    const overdueRows = rows.filter((row) => row.status === 'Overdue');
    const overdueInvoicesCount = overdueRows.length;

    return (
        <>
            <h3>Pending Invoices({pendingInvoicesCount + overdueInvoicesCount})</h3>
            <Box component={Box}>
                {rows.map((row, index) => (
                    (row.status === 'Overdue' || row.status === 'Pending') && (
                        <React.Fragment key={index}>
                            <Box sx={{
                                boxShadow: 'rgba(0, 0, 0, 0.09) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0',
                                borderRadius: '14px', marginBottom: '10px'
                            }}>
                                <Box
                                    component="div"
                                    sx={{
                                        padding: '16px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <div>
                                        <span style={{ color: 'rgb(108, 115, 127)' }}>School Fee</span>
                                        <br />
                                        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}> <CurrencyRupeeIcon fontSize='1.3rem' /> {row.bal}</span>
                                        <Box
                                            sx={{
                                                display: 'inline-block',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    color: row.status === 'paid' ? 'rgb(0, 200, 83)' : (row.status === 'Overdue' ? '#433e1a' : 'rgb(216, 67, 21)'),
                                                    borderRadius: '16px',
                                                    background: row.status === 'paid' ? 'rgba(147, 213, 166, 0.38)' : (row.status === 'Overdue' ? '#ffff003b' : 'rgb(251, 233, 231)'),
                                                    padding: '2px',
                                                    paddingRight: '8px',
                                                    paddingLeft: '8px',
                                                    textAlign: 'center',
                                                    margin: '5px',
                                                }}
                                            >
                                                {row.status}
                                            </Box>
                                        </Box>
                                    </div>
                                    <Box>
                                        <div style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'end' }}>Inv.No: #{row.receiptno}</div>
                                        <div style={{ display: 'flex', justifyContent: 'end' }}>Date: {row.date}</div>
                                        <div style={{ display: 'flex', justifyContent: 'end' }}>Last Date: {row.ldate}</div>
                                        <Box
                                            component="div"
                                            sx={{
                                                color: '#ff000085',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                transform: rotateIcon[index] ? 'rotate(180deg)' : 'rotate(0deg)',
                                            }}
                                            onClick={() => handleDisplay(index)}
                                        >
                                            <KeyboardArrowDownIcon />
                                        </Box>
                                    </Box>
                                </Box>

                                {displayItem === `displayItem${index}` && (
                                    <Box p={1} sx={{ borderTop: '1px dotted #ccc' }}>
                                        <Box p={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>Total Fee</div>
                                            <div> <CurrencyRupeeIcon fontSize='1rem' /> {row.amtpay}</div>
                                        </Box>
                                        <Box p={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>Late Fine</div>
                                            <div> <CurrencyRupeeIcon fontSize='1rem' /> {row.netpay}</div>
                                        </Box>
                                        <Box p={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>Previous Bal.</div>
                                            <div> <CurrencyRupeeIcon fontSize='1rem' /> {row.netpay}</div>
                                        </Box>
                                        <Box p={1} sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                            <div>Total</div>
                                            <div> <CurrencyRupeeIcon fontSize='1rem' /> {row.bal}</div>
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        </React.Fragment>
                    )
                ))}
            </Box>
        </>
    );
}