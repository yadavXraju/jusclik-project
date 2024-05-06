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
.fc-scroller.fc-scroller-liquid-absolute {
  overflow: hidden !important;
}
.fc-scroller {
  overflow: hidden !important;
}
.fc-header-toolbar.fc-toolbar.fc-toolbar-ltr .fc-toolbar-chunk:nth-child(3){
// background:#F6F8F8;
border-radius:5px;
}
fc-scroller-harness .fc-scroller:nth-child(1){
  border:1px solid #F6F8F8;
}
.fc-theme-standard td, .fc-theme-standard th {
border: none;
}
.fc-theme-standard .fc-scrollgrid {
  /* border: 1px solid var(--fc-border-color); */
  border: none;
}
 .fc th {
  padding: 4px;
border-radius:10px;
}
.fc-daygrid-day-frame.fc-scrollgrid-sync-inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fc .fc-daygrid-day-number {

  color: black;
  font-weight:500;
}
.fc .fc-daygrid-day.fc-day-today {
  border-radius: 11px;
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
