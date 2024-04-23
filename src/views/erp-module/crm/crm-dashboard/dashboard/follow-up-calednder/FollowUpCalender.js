import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box } from '@mui/system';

const EventUpCalendar = () => {


  return (
    <Box className="scrollbar" sx={{ height: "400px", overflow: "auto" }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={'dayGridMonth'}

        // headerToolbar={{
        //   left: 'today ,prev ,next',
        //   center: ' title ',
        //   right: ' dayGridMonth,timeGridWeek,timeGridDay'
        // }}
       
       
        eventContent={(eventInfo) => (
          <div>{eventInfo.timeText}: {eventInfo.event.title}</div>
        )}
        //   Add event sources (optional)
        events={[
          { title: 'Event 1', start: '2024-04-01' },
          { title: 'Event 2', start: '2024-04-05' }
        ]}
      />
    </Box>
  );
};

export default EventUpCalendar;
