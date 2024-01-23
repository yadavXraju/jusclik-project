import React, { useState } from 'react';
import { Box } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import rows from './Fee_tabledata';

export default function Summary() {
    const [displayItem, setDisplayItem] = useState('displayItem');
    const [rotateIcon, setRotateIcon] = useState(false);

    const handleDisplay = (index) => {
        setDisplayItem(displayItem === `displayItem${index}` ? '' : `displayItem${index}`);
        setRotateIcon(!rotateIcon); // Toggle rotation
    };

    return (
        <>
            <h3>Pending Invoices(2)</h3>
            <Box component={Box}>
                {rows.map((row, index) => (
                    row.status === 'Overdue' && (
                        <React.Fragment key={index}>
                            <Box sx={{ boxShadow: 'rgba(0, 0, 0, 0.09) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0',
                             background: 'rgba(213, 244, 254)', borderRadius: '14px', marginBottom: '10px' }}>
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
                                        <span style={{ fontWeight: 'bold', fontSize:'1rem' }}> <CurrencyRupeeIcon fontSize='1rem'/> {row.bal}</span>
                                        <Box
                                            sx={{
                                                display: 'inline-block',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    color: row.status === 'paid' ? 'rgb(0, 200, 83)' : 'rgb(216, 67, 21)',
                                                    borderRadius: '16px',
                                                    background: row.status === 'paid' ? 'rgba(147, 213, 166, 0.38)' : 'rgb(251, 233, 231)',
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
                                        <div style={{ display: 'flex', justifyContent: 'end' }}>Date: {row.date}</div>
                                        <div style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'end' }}>Inv.No: #{row.receiptno}</div>
                                        <div style={{ display: 'flex', justifyContent: 'end' }}>Last Date: {row.ldate}</div>
                                        <Box
                                            component="div"
                                            sx={{
                                                color: '#ff000085',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                transform: rotateIcon ? 'rotate(180deg)' : 'rotate(0deg)',
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
                                            <div>{row.amtpay}</div>
                                        </Box>
                                        <Box p={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>Late Fine</div>
                                            <div>{row.netpay}</div>
                                        </Box>
                                        <Box p={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>Previous Bal.</div>
                                            <div>{row.netpay}</div>
                                        </Box>
                                        <Box p={1} sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                            <div>Total</div>
                                            <div>{row.bal}</div>
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
