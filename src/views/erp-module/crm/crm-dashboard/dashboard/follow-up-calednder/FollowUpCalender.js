import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box } from '@mui/system';
import styled from '@emotion/styled'

export const StyleCalender = styled.div`

  thead {
    background:#F6F8F8;
}
thead td{
  
}
.fc-scrollgrid-sync-inner {
  color:#91A1A6;
}
`

const EventUpCalendar = () => {


  return (
    <Box className="scrollbar" sx={{overflow: "auto" }}>
      <StyleCalender>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={{
          left: 'title  ',
          center: '',
          right: ' prev  next'
        }}
        eventContent={(eventInfo) => (
          <div>{eventInfo.timeText}: {eventInfo.event.title}</div>
        )}
        events={[
          { title: 'Event 1', start: '2024-04-01' },
          { title: 'Event 2', start: '2024-04-05' }
        ]}
        dayMaxEvents={2} // Limit the number of events displayed per day
        eventTimeFormat={{ hour: 'numeric', minute: '2-digit', omitZeroMinute: false }} // Format the time of events
      />
      </StyleCalender>

    </Box>
  );
};

export default EventUpCalendar;
