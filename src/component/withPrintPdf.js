//@Page Owner-Tarun Pandey
import React from 'react';
import { Box } from '@mui/material';
import ReactToPrint from "react-to-print";


const withPrintPdf = React.forwardRef((props,ref) => {
    const {Children}=props;
    
    return (
        <Box className="print-icons" sx={{ display: "flex !important" }}>
            <ReactToPrint variant="outlined" trigger={() => <Box>{Children}</Box>}
                content={() => ref.current} />
        </Box>
    )
})

export default withPrintPdf;