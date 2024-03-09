import React from 'react'
import { Box, Paper, Button, Drawer } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WithPrintPdf from 'views/common-section/withPrintPdf';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import useDrawer from 'hooks/useDrawer';
import DrawerContent from './EnquiryDrawer';

const Enquiry = () => {
    const { anchor, toggleDrawer } = useDrawer();
    return (
        <Paper sx={{ height: "50px", padding: "10px 20px 10px 20px",position:"relative"}}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <Button endIcon={<SettingsOutlinedIcon sx={{ width: "15px", height: "15px" }} onClick={toggleDrawer('top',true)}/>}>Customize Report</Button>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <WithPrintPdf Children={<LocalPrintshopOutlinedIcon />} />
                    <Button endIcon={<ArrowDropDownOutlinedIcon />}>Export As</Button>
                </Box>
            </Box>
            <Drawer anchor={'top'} open={anchor.top} onClose={toggleDrawer('top', false)} sx={{width:"80%",marginLeft:"auto",postion:"absolute",top:"0px"}} className="breakpoint1">
                <DrawerContent toggleDrawer={toggleDrawer}/>
            </Drawer>
        </Paper>
    )
}

export default Enquiry;