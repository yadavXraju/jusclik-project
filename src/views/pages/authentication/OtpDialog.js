import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function OtpDialog({ open, onClose }) {
    const [otp, setOtp] = useState('');

    const handleClose = () => {
        onClose();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate OTP
        if (/^[0-9]{6}$/.test(otp)) {
            console.log('Valid OTP:', otp);
            handleClose();
        } else {
            console.log('Invalid OTP');
            // Handle invalid OTP, e.g., show an error message
        }
    };

    const handleResendOtp = () => {
        // Logic for resending OTP
        console.log('Resend OTP');
    };

    const navigate = useNavigate();

    return (
        <Dialog open={open} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>Enter OTP</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To verify your identity, please enter the OTP sent to your registered Mobile Number/ email.
                        If you didn&lsquo;t receive OTP, you can click Resend OTP.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="otp"
                        name="otp"
                        type="tel"
                        fullWidth
                        variant="outlined"
                        style={{ borderRadius: '50px' }}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        error={!/^[0-9]{6}$/.test(otp) && otp.length > 0}
                        helperText={
                            !/^[0-9]{6}$/.test(otp) && otp.length > 0
                                ? 'Enter a valid 6-digit OTP'
                                : ''
                        }
                        label="Enter OTP"
                    />
                    <Button onClick={handleResendOtp} color="primary">
                        Resend OTP
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={() => navigate('/SetNewPassword')}>Submit</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
