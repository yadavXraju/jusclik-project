import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box } from '@mui/system';

const EventUpCalendar = () => {
  return (
    <Box className="scrollbar" sx={{ height:"648px", overflow: "auto" }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={{
          left: 'today ',
          center: 'prev  title next',
          right: ' dayGridMonth,timeGridWeek,timeGridDay'
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
    </Box>
  );
};

export default EventUpCalendar;
