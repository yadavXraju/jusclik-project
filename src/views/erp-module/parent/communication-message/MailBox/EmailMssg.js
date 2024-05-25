// Page Owner: Suraj
// Description: Email Message

import React, { useState } from 'react';
import { Box, Typography, Avatar, Paper, IconButton, Button } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import ReplyIcon from '@mui/icons-material/Reply';
import ForwardIcon from '@mui/icons-material/Forward';
import { useNavigate } from 'react-router';
import initialData from './InboxNameList';
// import AvtarImg from '../../../../assets/images/avatar.png';
import ReplyForwardBox from './ReplyForwardBox';
import Image1 from 'assets/images/Avatar-images/IMG_01.png';
import useMediaQuery from '@mui/material/useMediaQuery';

const Message = () => {
    const currentDate = new Date().toLocaleDateString();
    const [emailData, setEmailData] = useState(null);
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const isSmScreen = useMediaQuery('(max-width: 400px)');
    const small360 = isSmScreen ? 'ruby-text' : 'flex';
    const res2560 = useMediaQuery('(min-width:2000px)')
    const rem=res2560?'17rem':null;

    // Function to handle the received data from MailCompose
    const handleEmailSend = (data) => {
        setEmailData(data);
        setIsBoxVisible(false);
    };

    const handleReply = () => {
        // if (emailData) {
        //     const replyContent = `Replying to: ${emailData?.from}\n\n${emailData?.message}`;
        //     const replyData = {
        //         to: emailData?.fromEmail,
        //         subject: `Re: ${emailData?.subject}`,
        //         message: replyContent,
        //     };
        //     setEmailData(replyData);
        // }
        setIsBoxVisible(true);
    };

    const handleForward = () => {
        // if (emailData) {
        //     const forwardContent = `Forwarding: ${emailData?.from}\n\n${emailData?.message}`;
        //     const forwardData = {
        //         subject: `Fwd: ${emailData?.subject}`,
        //         message: forwardContent,
        //         to: '', // Provide a default value or leave it empty based on your requirements
        //     };
        //     setEmailData(forwardData);
        // }
        setIsBoxVisible(true);
    };


    const navigate = useNavigate();
    const NameToShow = 1;

    return (
        <>
            <Paper>
                <Box sx={{paddingLeft:rem , paddingRight:rem}}>
                <Box style={{ display: small360, justifyContent: 'space-between', alignItems: 'center', padding: '60px' , paddingLeft:'0px' }}>
                    <Box display="flex" alignItems="center">
                        <IconButton onClick={() => navigate('/parent/communication/inbox')} color="primary">
                            <ArrowBackIosNewOutlinedIcon />
                        </IconButton>
                        <Avatar src={Image1} alt='' sx={{ width: 40, height: 40, marginRight: 2 }} />
                        {initialData.slice(0, NameToShow).map((item, index) => {
                            return (
                                <Box key={index}>
                                    <Typography variant="h4" fontWeight="bold">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        From: anuragsingh01@gmail.com
                                    </Typography>
                                </Box>
                            )

                        })}

                    </Box>
                    <Box>

                        <Typography  variant="subtitle2">{currentDate}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography variant="h3" fontWeight="bold" paddingLeft="30px" paddingRight="30px" paddingBottom="30px">
                        {emailData?.subject}
                        Extension for the fee payment
                    </Typography>
                    <Typography padding="25px" lineHeight="25px">
                        {emailData?.message}
                        Dear Suraj Mishra, <br /><br />
                        I appreciate you letting me know. Here&apos;s what I can do. I can grant you a two-week extension for the fee. In the meantime, if you can provide any documentation of your situation, it could help with securing additional financial assistance from the school. <br /><br />
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
                <Box sx={{ display: 'flex', paddingLeft: '25px' }}>
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

                {isBoxVisible && (
                    <ReplyForwardBox
                        isBoxVisible={isBoxVisible}
                        onClose={() => setIsBoxVisible(false)}
                        onSend={handleEmailSend}
                        emailData={emailData}
                    />
                )}
                </Box>
            </Paper>
        </>
    );
};

export default Message;
