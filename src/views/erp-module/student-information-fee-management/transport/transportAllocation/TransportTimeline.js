// ======= Page Owner Vikash =========
// ======= Return Transport Timeline =========
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box } from '@mui/system';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function TransportTimeline() {
  return (
    <>
    <Box sx={{border:'1px solid #ccc', borderRadius:'5px'}}>
    <Timeline position="alternate">
      <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Pick</TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Drop</TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
          12:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Pick</TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
          09:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>Drop</TimelineContent>
      </TimelineItem>
    </Timeline>
    </Box>
    </>
  );
}