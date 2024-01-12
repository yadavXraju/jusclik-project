import React, { useState } from 'react';
import { Box, Typography, Avatar, Paper, IconButton } from '@mui/material';
import MailCompose from './MailCompose';
import ReplyIcon from '@mui/icons-material/Reply';
import ForwardIcon from '@mui/icons-material/Forward';

const Message = ({ userAvatar, userName }) => {
    const currentDate = new Date().toLocaleDateString();
    const [emailData, setEmailData] = useState(null);

    // Function to handle the received data from MailCompose
    const handleEmailSend = (data) => {
        setEmailData(data);
    };

    // Function to handle reply
    const handleReply = () => {
        if (emailData) {
            const replyContent = `Replying to: ${emailData?.userName}\n\n${emailData?.message}`;
            const replyData = {
                to: emailData?.userName,
                subject: `Re: ${emailData?.subject}`,
                message: replyContent,
            };
            openMailCompose(replyData);
        }
    };

    // Function to handle forward
    const handleForward = () => {
        if (emailData) {
            const forwardContent = `Forwarding: ${emailData?.userName}\n\n${emailData?.message}`;
            const forwardData = {
                subject: `Fwd: ${emailData?.subject}`,
                message: forwardContent,
            };
            openMailCompose(forwardData);
        }
    };

    // Function to open the MailCompose dialog
    //   const openMailCompose = (initialData) => {
    //     // Implement the logic to open the MailCompose dialog with initialData
    //     setEmailData(null); // Clear emailData to avoid conflicts with reply/forward content
    //   };

    return (
        <>
            <Paper>
                <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                    <Box display="flex" alignItems="center">
                        <Avatar src={userAvatar} alt={userName} sx={{ width: 40, height: 40, marginRight: 2 }} />
                        <Box>
                            <Typography variant="h4" fontWeight="bold">
                                Vikarh Kumar Poonia
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                From: test@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2">{currentDate}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography variant="h3" fontWeight="bold" padding="30px">
                        {emailData?.subject}
                        Cih dahe eltihmi va zioner vi taw umgo ag torar.
                    </Typography>
                    <Typography padding="25px">
                        {emailData?.message}
                        Dear Lucas Farmer, <br /><br />
                        Emjivuw mi adamhoc zam asicu ela ugo femnevos acfo zen faziz gegija ah vuroj jej nik keru ukowebe. Fah leozaefu rabe zi gommal iholake tacesa burziped muavi lew coogpu gu touhe puh ve ahikaape lanjedwu pettes. Ubodaf padaw nod sikap vohmaznin vud evebikgep do simufe kaeh fib du zic toflira pauzmol. Secjeid ciluw wo og vuwegci bugcuced ka mu pozew mabiban muik ulugik ot kaszodek mertip. Cikeeh menza hov amikeb zuzwo sajwiv suwu huumo zapil rufal fevcek tak. Mowut duggub kozcifa tucucmu moat aw dovihnu wop redzof batazo rapa acevu cifigiaf nisi geruni mem loktu su. <br /><br /><br />

                        Kind Regards,<br />
                        Website Developer
                    </Typography>
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'flex-start', padding: '10px' }}>
                    {/* Reply Button */}
                    <IconButton onClick={handleReply} color="primary">
                        <ReplyIcon />
                    </IconButton>
                    {/* Forward Button */}
                    <IconButton onClick={handleForward} color="primary">
                        <ForwardIcon />
                    </IconButton>
                </Box>
            </Paper>
            {/* Pass handleEmailSend function to MailCompose */}
            <MailCompose open={false} onClose={() => { }} onSend={handleEmailSend} />
        </>
    );
};

export default Message;
