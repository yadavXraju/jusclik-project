import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const ParramPopover = ({selectDropDown,setSelectDropDown}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Button aria-describedby={id} endIcon={<ArrowDropDownOutlinedIcon sx={{ alignItems: "center" }} />} onClick={handleClick}>
                {selectDropDown}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{p: 1,cursor: "pointer",'&:hover':{backgroundColor: '#408dfb',color:"white" }}} onClick={() => setSelectDropDown("Only Me")}>Only Me</Typography>
                <Typography sx={{ p: 1, cursor: "pointer",'&:hover':{backgroundColor: '#408dfb',color:"white" } }} onClick={() => setSelectDropDown("Only Selected Users & Roles")}>Only Selected Users & Roles</Typography>
                <Typography sx={{ p: 1, cursor: "pointer",'&:hover':{backgroundColor: '#408dfb',color:"white" }}} onClick={() => setSelectDropDown("Everyone")}>Everyone</Typography>
            </Popover>
        </>
    );
}

export default ParramPopover;