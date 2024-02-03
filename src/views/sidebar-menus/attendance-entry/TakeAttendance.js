import * as React from 'react';
import { Popover, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import ConfirmationDialog from './ConfirmationAlert';

export default function ActionsPopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = React.useState(false);
    const [selectedAction, setSelectedAction] = React.useState('');

    const handleClickOpen = (action) => {
        setSelectedAction(action);
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
            <Button aria-describedby={id} variant="outlined" size="small" onClick={handleClick} sx={{ padding: '10px', margin: '0 0 6px 8px', width: '100px' }}>
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
                            <ListItemText id='1' primary="Mark all holiday" onClick={() => handleClickOpen("Mark all holiday")} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton >
                            <ListItemText id='2' primary="Mark all present" onClick={() => handleClickOpen("Mark all present")} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText id='3' primary="Mark all absent" onClick={() => handleClickOpen("Mark all absent")} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <ConfirmationDialog open={isConfirmationDialogOpen} onClose={handleComposeClose} action={selectedAction} />
            </Popover>
        </div>
    );
}
