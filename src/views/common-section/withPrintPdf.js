import React from 'react';
import { Box,Button } from '@mui/material';
import ReactToPrint from "react-to-print";



const withPrintPdf = React.forwardRef((props,ref) => {
    // console.log(props)
    const {Children}=props;
    
    return (
        <Box className="print-icons" sx={{ display: "flex !important" }}>
            <ReactToPrint variant="outlined" trigger={() => <Button sx={{color:"black"}} variant="text">{Children}</Button>}
                content={() => ref.current} />
        </Box>
    )
})

export default withPrintPdf;