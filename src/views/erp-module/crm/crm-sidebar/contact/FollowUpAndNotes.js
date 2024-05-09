import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
// import { Button } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';
import AddNoteDrawer from './AddNoteDrawer';
import AddFollowUpDrawer from './AddFollowUpDrawer';

// Sample timeline data
const timelineData = [
  {
    oppositeContent: "Muskaan Sharma ",
    dotIcon: <ThumbUpOffAltOutlinedIcon />,
    date: "19 Mar 2024",
    time: "10:06 AM"
  },
  {
    oppositeContent: "Muskaan Sharma [Counsellor] ",
    dotIcon: <ThumbUpOffAltOutlinedIcon />,
    date: "28 Mar 2024",
    time: "02:33 PM"
  },
  {
    oppositeContent: "Sharanya Pant opened ",
    dotIcon: <MailOutlinedIcon />,
    date: "18 Mar 2024",
    time: "11:10 PM"
  },
  {
    oppositeContent: "Sharanya Pant attempt ",
    dotIcon: <CreditCardOutlinedIcon />,
    date: "18 Mar 2024",
    time: "10:00 AM"
  },
  {
    oppositeContent: "Sharanya Pant has ",
    dotIcon: <DescriptionOutlinedIcon />,
    date: "18 Mar 2024",
    time: "10:00 AM"
  }
];

export default function FollowUpAndNotes() {
  return (
    <>
     <Box p={1} mb={2} sx={{ borderBottom: '1px solid #ccc', display:'flex', justifyContent:'space-between' }}>
          <Box sx={{display:'flex', alignItems:'end'}}>
            <Typography variant="h4" sx={{ pb: '0px' }}>
            Follow Up & Notes
            </Typography>
          </Box>
          <Box>
            {/* <Button variant='outlined' sx={{marginRight:'8px'}} startIcon={<AddIcon/>} >Add Note</Button> */}
            <AddNoteDrawer/>
            {/* <Button variant='outlined' startIcon={<AccessAlarmsOutlinedIcon/>} >Add Follow Up</Button> */}
            <AddFollowUpDrawer/>
          </Box>
        </Box>
    <Box>
      <Timeline position="left" className='scrollbar'>
        {timelineData.map((item, index) => (
          <TimelineItem key={index} sx={{minWidth:'470px'}}>
            <TimelineOppositeContent sx={{ m: '10px 0 10px 20px', border:'1px dashed rgb(30, 136, 229)', padding:'20px', borderRadius:'8px', background:'rgb(227, 242, 253)' }} variant="body2" color="text.secondary">
              <Box >{item.oppositeContent}</Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='primary'>{item.dotIcon}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <Box sx={{ width:'130px' }}>
              <TimelineContent sx={{ pt: '23px', px: 2 , pb:'16px'}}>
                <Typography component="span">{item.date}</Typography>
                <Typography  variant="h6">{item.time}</Typography>
              </TimelineContent>
            </Box>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
    </>
  );
}
