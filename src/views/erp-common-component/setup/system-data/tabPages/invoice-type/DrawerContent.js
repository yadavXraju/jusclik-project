import React from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const data = [
    {
        id: 1,
        description: "Fee Period Required",
        isSelected: false
    },
    {
        id: 2,
        description: "UnSelect All Heads",
        isSelected: false
    },
    {
        id: 3,
        description: "Refund Voucher",
        isSelected: false
    },
    {
        id: 4,
        description: "Calculate Late Fine",
        isSelected: false
    },
    {
        id: 5,
        description: "Create Multiple Invoices in a day",
        isSelected: false
    },
    {
        id: 6,
        description: "Is Registration Invoice Type",
        isSelected: false
    },
    {
        id: 7,
        description: "Do Not Forward Balance",
        isSelected: false
    },
    {
        id: 8,
        description: "Do Not Forward Balance of Unpaid Bills Only",
        isSelected: false
    },
    {
        id: 9,
        description: "Will Hold Previous Balance",
        isSelected: false
    },
    {
        id: 10,
        description: "Create Zero Bills with Fee Period",
        isSelected: false
    },
    {
        id: 11,
        description: "Auto Adjust By Adj Entry",
        isSelected: false
    },
    {
        id: 12,
        description: "Show No of Days / Times Head Amount to be charged",
        isSelected: false
    },
    {
        id: 13,
        description: "Create Bill With Receipt (Activity Charges)",
        isSelected: false
    },
    {
        id: 14,
        description: "Applicable Pay Mode (Only For Periodic Bills)",
        isSelected: false
    },
    {
        id: 15,
        description: "Is Advance Payment (Next Session)",
        isSelected: false
    }
];



const DrawerContent = ({ toggleDrawer, handleChange }) => {
    return (
        <>
            <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                    <Typography variant="h4">Invoice Type Restricted</Typography>
                    <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                        Close
                    </Button>
                </Box>
                <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "-10px" }}>
                    <TextField id={name} label="Invoice Type {Restricted}" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
                    {
                        data.map((item) =>
                            <FormControlLabel
                              key={item?.id}  control={<Checkbox checked={data?.isSelected} onChange={handleChange} />}
                                label={item?.description}
                            />
                        )
                    }
                </Box>
            </Box>
        </>
    );
};
export default DrawerContent;