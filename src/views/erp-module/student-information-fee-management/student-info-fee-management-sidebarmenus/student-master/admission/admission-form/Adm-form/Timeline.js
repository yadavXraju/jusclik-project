import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Data = [
  {
    time: '03:30 PM',
    date: 'Today',
    detail: {
      action: 'Mobile updated by',
      user: 'sangeeta',
      change: "'1234567800' to '1234567834'"
    }
  },
  {
    time: '04:20 PM',
    date: 'Mar 19, 2024',
    detail: {
      action: 'Mobile updated by',
      user: 'sangeeta',
      change: "'1234567892' to '1234567800'"
    }
  },
  {
    time: '02:18 PM',
    date: '',
    detail: {
      action: 'Contact added by',
      user: 'sangeeta',
      change: 'vikash poonia'
    }
  }
];

function Timeline() {
  return (
    <>
      <Box
        p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative', // Added position relative for pseudo-element positioning
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 30,
            left: '124px',
            width: '2px',
            height: '100%',
            marginLeft: '-2px',
            backgroundColor: '#eff2f5'
          }
        }}
      >
        {Data.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '16px'
            }}
          >
            <Box sx={{ flex: 1, paddingLeft: '10px' }}>
              {item.date && (
                <Box
                  sx={{
                    position: 'relative', // Added position relative for pseudo-element positioning
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      background: '#00c2ff',
                      top: '3px',
                      left: '91px',
                      height: '12px',
                      width: '12px',
                      borderRadius: '50%',
                      zIndex: '999'
                    }
                  }}
                >
                  <Typography variant="body2" style={{ fontWeight: 'bold', margin: '10px 0px 30px 113px' }}>
                    {item.date}
                  </Typography>
                </Box>
              )}
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Box sx={{ minWidth: '80px', textAlign: 'right', marginRight: '34px', marginTop: '10px',
                         position:'relative',
                         '&:after':{
                          content: index === Data.length - 1 ? '""' : 'none',
                          width:'2px',
                          color:'red',
                          height:'200px',
                         }
                     }}>
                  <Typography color={'#8b8989'} variant="body1">{item.time}</Typography>
                </Box>
                <Box
                  sx={{
                    position: 'relative', // Added position relative for pseudo-element positioning
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      background:'white',
                      top: '14px',
                      left: '-23px',
                      height: '12px',
                      width: '12px',
                      borderRadius: '50%',
                      border:'1px solid #ccc',
                      zIndex: '999',
                    }
                  }}
                >
                  <Typography variant="body2">
                  {item.detail.action }&nbsp;
                    <strong>
                       {item.detail.user}
                    </strong>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: '4px' }}>
                    {item.detail.change}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Timeline;













// import React from 'react';
// import { Typography } from '@mui/material';
// import { Box } from '@mui/system';

// const Data = [
//   {
//     time: '03:30 PM',
//     date: 'Today',
//     detail: {
//       action: 'Mobile updated by',
//       user: 'sangeeta',
//       change: "'1234567800' to '1234567834'",
//     },
//   },
//   {
//     time: '04:20 PM',
//     date: 'Mar 19, 2024',
//     detail: {
//       action: 'Mobile updated by',
//       user: 'sangeeta',
//       change: "'1234567892' to '1234567800'",
//     },
//   },
//   {
//     time: '02:18 PM',
//     date: '',
//     detail: {
//       action: 'Contact added by',
//       user: 'sangeeta',
//       change: 'vikash poonia',
//     },
//   },
// ];

// function Timeline() {
//   return (
//     <>
//       <Box p={2} sx={{ display: 'flex', flexDirection: 'column',
//       position: 'relative', // Added position relative for pseudo-element positioning
//        '&:after': {
//         content: '""',
//         position: 'absolute',
//         top: 0,
//         left: '110px',
//         width: '2px',
//         height: '100%',
//         marginLeft: '-2px',
//         backgroundColor: '#eff2f5',
//       },
//      }}>
//         {Data.map((item, index) => (
//           <Box
//             key={index}
//             sx={{
//               display: 'flex',
//               alignItems: 'flex-start',
//               marginBottom: '16px',
//             }}
//           >
//             <Box sx={{ minWidth: '80px', textAlign: 'right', marginRight: '16px', marginTop:'50px' }}>
//               <Typography variant="body1">{item.time}</Typography>
//             </Box>
//             <Box sx={{ flex: 1, paddingLeft: '10px' }}>
//               {item.date && <Typography variant="body2" style={{ fontWeight: 'bold', marginBottom:'20px' }}>{item.date}</Typography>}
//               <Typography variant="body2">
//                 <strong>{item.detail.action} {item.detail.user}</strong>
//               </Typography>
//               <Typography variant="body2" color="textSecondary" sx={{ marginTop: '4px' }}>
//                 {item.detail.change}
//               </Typography>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </>
//   );
// }

// export default Timeline;

// import React from 'react'
// import { Typography } from '@mui/material';
// import { Box } from '@mui/system';

// const Data = [
//     {
//       time: '03:30 PM',
//       date: 'Today',
//       detail: {
//         action: 'Mobile updated by',
//         user: 'sangeeta',
//         change: "'1234567800' to '1234567834'",
//       },
//     },
//     {
//       time: '04:20 PM',
//       date: 'Mar 19, 2024',
//       detail: {
//         action: 'Mobile updated by',
//         user: 'sangeeta',
//         change: "'1234567892' to '1234567800'",
//       },
//     },
//     {
//       time: '02:18 PM',
//       date: '',
//       detail: {
//         action: 'Contact added by',
//         user: 'sangeeta',
//         change: 'vikash poonia',
//       },
//     },
//   ];

//   const timelineStyles = `
//   .timeline:after {
//     position: absolute;
//     top: 0;
//     content: '';
//     display: block;
//     width: 2px;
//     height: 100%;
//     margin-left: -2px;
//     background: #eff2f5;
//     left: 81px;
//   }
// `;

// function Timeline() {
//   return (
//     <>
//       <Box className={timelineStyles} p={2} sx={{ display: 'flex', flexDirection: 'column' }}>
//       {Data.map((item, index) => (
//         <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
//           <Box sx={{ minWidth: '80px', textAlign: 'right',  marginRight: '16px' }}>
//             <Typography variant="body1">{item.time}</Typography>
//           </Box>
//           <Box sx={{ flex: 1, paddingLeft: '10px' }}>
//             {item.date && <Typography variant="body2" style={{ fontWeight: 'bold' }}>{item.date}</Typography>}
//             <Typography variant="body2">
//               <strong>{item.detail.action} {item.detail.user}</strong>
//             </Typography>
//             <Typography variant="body2" color="textSecondary" sx={{ marginTop: '4px' }}>
//               {item.detail.change}
//             </Typography>
//           </Box>
//         </Box>
//       ))}
//     </Box>
//     </>
//   )
// }

// export default Timeline
