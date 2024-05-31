// ======= Page Owner Vikash =========
// ======= Follow up and Notes Component =========
import React, { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Button, Typography, Box, Drawer } from '@mui/material';
import useDrawer from 'hooks/useDrawer';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SelectList from 'components/ui/custom-input/SelectList';
import ParameterizedDateComponent from 'components/ui/custom-input/DateComponent';
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';
import TextArea from 'antd/es/input/TextArea';
import AddNoteDrawer from './AddNoteDrawer';

// Sample timeline data
const timelineData = [
  {
    oppositeContent: 'Muskaan Sharma ',
    dotIcon: <ThumbUpOffAltOutlinedIcon />,
    date: '19 Mar 2024',
    time: '10:06 AM'
  },
  {
    oppositeContent: 'Muskaan Sharma [Counsellor] ',
    dotIcon: <ThumbUpOffAltOutlinedIcon />,
    date: '28 Mar 2024',
    time: '02:33 PM'
  },
  {
    oppositeContent: 'Sharanya Pant opened ',
    dotIcon: <MailOutlinedIcon />,
    date: '18 Mar 2024',
    time: '11:10 PM'
  },
  {
    oppositeContent: 'Sharanya Pant attempt ',
    dotIcon: <CreditCardOutlinedIcon />,
    date: '18 Mar 2024',
    time: '10:00 AM'
  },
  {
    oppositeContent: 'Sharanya Pant has ',
    dotIcon: <DescriptionOutlinedIcon />,
    date: '18 Mar 2024',
    time: '10:00 AM'
  }
];

export default function FollowUpAndNotes() {
  const { anchor, toggleDrawer } = useDrawer();

  const [name, setName] = useState('');
  const nameOptions = [{ value: 'Admin', label: 'Suraj' }];
  const nameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <Box p={1} mb={2} sx={{ borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'end' }}>
          <Typography variant="h4" sx={{ pb: '0px' }}>
            Follow Up & Notes
          </Typography>
        </Box>
        <Box sx={{display:'flex'}}>
          <AddNoteDrawer />

          {/* ============= Add Follow Up Drawer =========== */}
          <Box>
            <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AccessAlarmsOutlinedIcon />}>
              Add Follow Up
            </Button>
            <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
              <Box sx={{ width: { xs: '100vw', sm: 550 }, height: '100vh', padding: 2 }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                  <Typography variant="h4">Add Follow Up</Typography>
                  <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                    Close
                  </Button>
                </Box>
                <Box>
                  {/* Drawer content */}
                  <Box mt={2}>
                    <SelectList label="Role" options={nameOptions} value={name} onChange={nameChange} />
                  </Box>
                  <Box mt={2}>
                    <ParameterizedDateComponent label="Follow Up Date" customStyle={{ width: '100%' }} />
                  </Box>
                  <Box mt={1}>
                    <Box p={0.5}>Note</Box>
                    <TextArea rows={3} placeholder="Enter your text here..." fullWidth variant="outlined" />
                  </Box>
                  <Box py={2} sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button variant="contained">Save</Button>
                  </Box>
                </Box>
              </Box>
            </Drawer>
          </Box>
        </Box>
      </Box>
      <Box>
        <Timeline position="left" className="scrollbar">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} sx={{ minWidth: '470px' }}>
              <TimelineOppositeContent
                sx={{
                  m: '10px 0 10px 20px',
                  border: '1px dashed rgb(30, 136, 229)',
                  padding: '20px',
                  borderRadius: '8px',
                  background: 'rgb(227, 242, 253)'
                }}
                variant="body2"
                color="text.secondary"
              >
                <Box>{item.oppositeContent}</Box>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">{item.dotIcon}</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <Box sx={{ width: '130px' }}>
                <TimelineContent sx={{ pt: '23px', px: 2, pb: '16px' }}>
                  <Typography component="span">{item.date}</Typography>
                  <Typography variant="h6">{item.time}</Typography>
                </TimelineContent>
              </Box>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </>
  );
}
