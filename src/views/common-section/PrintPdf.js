import React from 'react';
import { Box,Button } from '@mui/material';
import ReactToPrint from "react-to-print";
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';


const PrintPdf = React.forwardRef((props,ref) => {
    return (
        <Box className="print-icons" sx={{ dispaly: "flex !important " }}>
            <ReactToPrint variant="outlined" trigger={() => <Button><LocalPrintshopOutlinedIcon /></Button>}
                content={() => ref.current} />
        </Box>
    )
})

export default PrintPdf;



