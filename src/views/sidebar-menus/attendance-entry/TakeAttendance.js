import * as React from 'react';
import { Popover, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import ConfirmationDialog from './ConfirmationAlert';

export default function BasicPopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = React.useState(false);

    const handleClickOpen = () => {
        setConfirmationDialogOpen(true);
    };


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleComposeClose = () => {
        setConfirmationDialogOpen(false);
        setAnchorEl(null); // Close the Popover along with the ConfirmationDialog
    };


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={id} variant="outlined" size="small" onClick={handleClick} sx={{ padding: '10px', margin: '0 0 6px 8px', width: '200px' }}>
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
                            <ListItemText primary="Mark all present" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>

                            <ListItemText primary="Mark all absent" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Mark all holiday" onClick={handleClickOpen} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <ConfirmationDialog open={isConfirmationDialogOpen} onClose={handleComposeClose} />
            </Popover>
        </div>
    );
}