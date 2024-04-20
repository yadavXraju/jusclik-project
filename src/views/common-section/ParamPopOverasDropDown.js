import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const ParramPopover = ({selectDropDown,setSelectDropDown,dropDownOption,variant="text",buttonStyle={}}) => {
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
            <Button aria-describedby={id} endIcon={<ArrowDropDownOutlinedIcon sx={{ alignItems: "center"}} />} onClick={handleClick} variant={variant} sx={buttonStyle}>
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
                {
                    dropDownOption&&dropDownOption.map((item)=>
                        <Typography sx={{p: 1,cursor: "pointer",'&:hover':{backgroundColor: '#408dfb',color:"white" }}} onClick={() =>{setSelectDropDown(item),setAnchorEl(null)}} key={item}>{item}</Typography>
                    )
                }
            </Popover>
        </>
    );
}

export default ParramPopover;