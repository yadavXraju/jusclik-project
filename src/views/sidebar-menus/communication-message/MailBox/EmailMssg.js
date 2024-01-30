// Message.jsx
import React, { useState } from 'react';
import { Box, Typography, Avatar, Paper, IconButton, Button } from '@mui/material';

import MailCompose from './MailCompose';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import ReplyIcon from '@mui/icons-material/Reply';
import ForwardIcon from '@mui/icons-material/Forward';
import { useNavigate } from 'react-router';
import { initialData } from '.';
import AvtarImg from '../../../../assets/images/avatar.png'
import UrlPage from 'views/navigation-for-pages';



const Message = () => {
    const currentDate = new Date().toLocaleDateString();
    const [emailData, setEmailData] = useState(null);
    const [openComposeDialog, setOpenComposeDialog] = useState(false);

    // Function to handle the received data from MailCompose
    const handleEmailSend = (data) => {
        setEmailData(data);
        setOpenComposeDialog(false);
    };

    // Function to handle reply
    const handleReply = () => {
        if (emailData) {
            const replyContent = `Replying to: ${emailData?.from}\n\n${emailData?.message}`;
            const replyData = {
                to: emailData?.fromEmail,
                subject: `Re: ${emailData?.subject}`,
                message: replyContent,
            };
            setOpenComposeDialog(true);
            setEmailData(replyData);
        }
    };

    // Function to handle forward
    const handleForward = () => {
        if (emailData) {
            const forwardContent = `Forwarding: ${emailData?.from}\n\n${emailData?.message}`;
            const forwardData = {
                subject: `Fwd: ${emailData?.subject}`,
                message: forwardContent,
                to: '', // Provide a default value or leave it empty based on your requirements
            };
            setOpenComposeDialog(true);
            setEmailData(forwardData);
        }
    };

    const navigate = useNavigate()
    const NameToShow = 1

    return (
        <>
        <UrlPage/>
            <Paper>
                <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                    <Box display="flex" alignItems="center">
                        <IconButton onClick={() => navigate('/communication/inbox')} color="primary">
                            <ArrowBackIosNewOutlinedIcon />
                        </IconButton>
                        <Avatar src={AvtarImg} alt='' sx={{ width: 40, height: 40, marginRight: 2 }} />
                        {initialData.slice(0, NameToShow).map((item, index) => {
                            return (
                                <Box key={index}>
                                    <Typography variant="h4" fontWeight="bold">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        From: test@gmail.com
                                    </Typography>
                                </Box>
                            )

                        })}

                    </Box>
                    <Box>
                        
                        <Typography variant="subtitle2">{currentDate}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography variant="h3" fontWeight="bold" padding="30px">
                        {emailData?.subject}
                        Update the subject to display everyone in the homepage of school website.
                    </Typography>
                    <Typography padding="25px">
                        {emailData?.message}
                        Dear Lucas Farmer, <br /><br />
                        Emjivuw mi adamhoc zam asicu ela ugo femnevos acfo zen faziz gegija ah vuroj jej nik keru ukowebe. Fah leozaefu rabe zi gommal iholake tacesa burziped muavi lew coogpu gu touhe puh ve ahikaape lanjedwu pettes. Ubodaf padaw nod sikap vohmaznin vud evebikgep do simufe kaeh fib du zic toflira pauzmol. Secjeid ciluw wo og vuwegci bugcuced ka mu pozew mabiban muik ulugik ot kaszodek mertip. Cikeeh menza hov amikeb zuzwo sajwiv suwu huumo zapil rufal fevcek tak. Mowut duggub kozcifa tucucmu moat aw dovihnu wop redzof batazo rapa acevu cifigiaf nisi geruni mem loktu su. <br /><br /><br />

                        Regards,<br />
                        {initialData.slice(0, NameToShow).map((item, index) => {
                            return (
                                <Box key={index}>
                                    <Typography variant="body2" fontWeight="bold">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2">
                                        {item.role}
                                    </Typography>
                                </Box>
                            )
                        })}
                    </Typography>
                </Box>
                <Box sx={{display:'flex',paddingLeft:'25px' }}>
                    <AttachmentOutlinedIcon />
                    <Typography variant="h5" fontWeight="bold" paddingLeft="5px">0 Attachments</Typography>
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'flex-start', padding: '25px' }}>
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<ReplyIcon />}
                        onClick={handleReply}
                        sx={{ marginRight: '10px' }}
                    >
                        Reply
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<ForwardIcon />}
                        onClick={handleForward}
                    >
                        Forward
                    </Button>
                </Box>

            </Paper>
            {/* MailCompose Dialog */}
            <MailCompose
                open={openComposeDialog}
                onClose={() => setOpenComposeDialog(false)}
                onSend={handleEmailSend}
                emailData={emailData}
            />
        </>
    );
};

export default Message;
