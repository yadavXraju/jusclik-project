// // AssignmentItem.js
// import React from 'react';
// import { Grid, Typography, Tooltip, IconButton } from '@mui/material';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import AttachmentIcon from '@mui/icons-material/Attachment';
// import DownloadIcon from '@mui/icons-material/Download';
// import CreateIcon from '@mui/icons-material/Create';

// const AssignmentItem = ({ item, index, handleOpenDialog }) => (

//   // const data = [
//   //   { id: 1, sub: 'E', name: 'ENGLISH', description: 'Description for Item 1', dueDate: '2023-01-12', date: '2023-01-10'  , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"},
//   //   { id: 2, sub: 'H', name: 'HINDI', description: 'Description for Item 2', dueDate: '2023-01-12', date: '2023-01-09'  , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"},
//   //   { id: 3, sub: 'M', name: 'MATH', description: 'Description for Item 3', dueDate: '2023-06-10', date: '2023-06-5'  , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"},
//   //   { id: 4, sub: 'M', name: 'MATH', description: 'Description for Item 3', dueDate: '2023-01-12', date: '2024-01-06' , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when" },
//   //   { id: 5, sub: 'M', name: 'English', description: 'Description for Item 3', dueDate: '2023-01-12', date: '2024-01-09'  , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"},
//   //   { id: 6, sub: 'M', name: 'MATH', description: 'Description for Item 3', dueDate: '2024-01-12', date: '2024-01-08'  , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"},
//   //   { id: 7, sub: 'E', name: 'ENGLISH', description: 'Description for Item 3', dueDate: '2024-01-12', date: '2024-01-08' , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when" },
//   //   { id: 8, sub: 'E', name: 'ENGLISH', description: 'Description for Item 3', dueDate: '2024-01-15', date: '2024-01-07'  , homework:"disinformation)disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1 presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"}
//   // ];


//   <Grid className='tab' container spacing={2} sx={{
//     borderLeft: `4px solid ${index % 2 === 0 ? 'rgb(237,231,246)' : 'rgb(144,202,249)'}`
//   }}>
//     <Grid item xs={4} md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
//       <Typography variant="h4">{item.name}</Typography>
//       <Typography variant="subtitle2" color="textSecondary">
//         <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', mt: '10px' }}>
//           <CalendarTodayIcon sx={{ width: "16px", height: "16px" }} />
//           {item.date && new Date(item.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
//         </Grid>
//       </Typography>
//       <Typography variant="subtitle2" color="textSecondary">Due Date: {item.dueDate && new Date(item.dueDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</Typography>
//     </Grid>
//     <Grid direction="row" alignItems="flex-start" justifyContent='flex-start' item xs={4} md={8}>
//       <Typography variant='h6'>{item.homework}</Typography>
//       <Grid item xs={4} md={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', mt: '10px' }}>
//         <Tooltip title="Attachment">
//           <IconButton onClick={handleOpenDialog}>
//             <AttachmentIcon />
//           </IconButton>
//         </Tooltip>
//         <Tooltip title="Download">
//           <IconButton>
//             <DownloadIcon />
//           </IconButton>
//         </Tooltip>
//       </Grid>
//     </Grid>
//     <Grid item xs={4} md={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', mt: '10px' }}>
//       <Tooltip title="Download">
//         <IconButton>
//           <CreateIcon />
//         </IconButton>
//       </Tooltip>
//     </Grid>
//   </Grid>
// );

// export default AssignmentItem;
