import * as React from 'react';
import { Popover, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export default function BasicPopover() {
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
        <div>
            <Button aria-describedby={id} variant="contained" size="large" onClick={handleClick} sx={{padding:'10px', margin:'0 0 6px 8px'}}>
                Actions
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
                <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    aria-label="contacts"
                >
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <StarIcon />
                            </ListItemIcon>
                            <ListItemText primary="Mark All P" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <StarIcon />
                            </ListItemIcon>
                            <ListItemText primary="Mark All A" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <StarIcon />
                            </ListItemIcon>
                            <ListItemText primary="Clear Attendance" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Popover>
        </div>
    );
}