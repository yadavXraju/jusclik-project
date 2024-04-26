// import { Box } from '@mui/system';
// import React from 'react';

// const ProgressSteps = () => {
//   const stepContents = [
//     {
//         name : 'Unverified',
//         value : null
//     },
//     {
//         name : 'Verified',
//         value : null
//     },
//     {
//         name : 'Application Started',
//         value : 1
//     },
//     {
//         name : 'Payment Approved',
//         value : 0
//     },
//     {
//         name : 'Application Submitted',
//         value : 0
//     },

// ]; // Content for each step

//   return (
//     <Box className='scrollbar' mb={2} mt={1} sx={{ display: 'flex' }}> {/* Flex container */}
//       {stepContents.map((content, index) => (
//         <Box key={index}> {/* Each box */}
//           <Box
//             sx={{
//               padding: '10px 20px 10px 20px',
//               margin: '0 3px',
//               height: '41px',
//               background: content.value === 1 ? '#2196f369' : 'rgb(227, 242, 253)',
//               position: 'relative',
//               textAlign:'center',
//               fontWeight: 700,
//             //   minWidth:'200px',
//               width:'250px',
//               '&:before': {
//                 content: '""',
//                 position: 'absolute',
//                 top: 0,
//                 right: 'auto',
//                 width: 0,
//                 height: 0,
//                 borderTop: '24px solid transparent',
//                 borderBottom: '17px solid transparent',
//                 borderLeft: '17px solid #fff',
//                 zIndex: 0,
//                 transition: 'border-color 0.2s ease',
//                 left: 0,
//               },
//               '&:after': {
//                 content: '""',
//                 position: 'absolute',
//                 top: 0,
//                 right: '-17px',
//                 width: 0,
//                 height: 0,
//                 boxSizing: 'inherit',
//                 borderTop: '24px solid transparent',
//                 borderBottom: '17px solid transparent',
//                 borderLeft: content.value === 1 ? '17px solid #2196f369' : '17px solid rgb(227, 242, 253)',
//                 zIndex: 2,
//                 transition: 'border-color 0.2s ease',
//               },
//             }}
//           >
//         {content.name}
//           </Box>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default ProgressSteps;









// import { Box } from '@mui/system';
// import React from 'react';
// import Badge from '@mui/material/Badge';
// import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

// const ProgressSteps = () => {
//   const stepContents = [
//     {
//       name: 'Unverified',
//       value: null
//     },
//     {
//       name: 'Verified',
//       value: null
//     },
//     {
//       name: 'Application Started',
//       value: 1
//     },
//     {
//       name: 'Payment Approved',
//       value: 0
//     },
//     {
//       name: 'Application Submitted',
//       value: 0
//     }
//   ]; // Content for each step

//   return (
//     <Box className="scrollbar" mb={2} mt={1} sx={{ display: 'flex' }}>
//       {' '}
//       {/* Flex container */}
//       {stepContents.map((content, index) => (
//         <Box sx={{ margin: '10px 38px 0 0' }} key={index}>
//           {' '}
//           {/* Each box */}
//           <Badge color="primary" badgeContent={<DoneOutlinedIcon sx={{ width: '12px' }} />}>
//             <Box
//               sx={{
//                 padding: '10px 20px',

//                 height: '41px',
//                 border: '1px solid',
//                 position: 'relative',
//                 textAlign: 'center',
//                 fontWeight: 700,
//                 borderColor: content.value === 1 ? '#2196f3' : '#ccc', // Conditional border color
//                 '&:before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: '50%',
//                   width: '20px',
//                   color: content.value === 1 ? '#2196f3' : '#ccc',
//                   background: content.value === 1 ? '#2196f3' : '#ccc',
//                   height: '2px',
//                   left: '-20px'
//                 },
//                 '&:after': {
//                   content: '""',
//                   position: 'absolute',
//                   top: '50%',
//                   width: '20px',
//                   color: content.value === 1 ? '#2196f3' : '#ccc',
//                   background: content.value === 1 ? '#2196f3' : '#ccc',
//                   height: '2px',
//                   right: '-20px'
//                 }
//               }}
//             >
//               <Box>{content.name}</Box>
//             </Box>
//           </Badge>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default ProgressSteps;






import { Box } from '@mui/system';
import React from 'react';
import Badge from '@mui/material/Badge';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

const ProgressSteps = () => {
  const stepContents = [
    {
      name: 'Unverified',
      value: 1
    },
    {
      name: 'Verified',
      value: 1
    },
    {
      name: 'Application Started',
      value: 1
    },
    {
      name: 'Payment Approved',
      value: 0
    },
    {
      name: 'Application Submitted',
      value: 0
    },
  ]; // Content for each step

  return (
    <Box className='scrollbar' mb={2} mt={1} sx={{ display: 'flex' }}> {/* Flex container */}
      {stepContents.map((content, index) => (
        <Box sx={{ margin: '12px 38px 0 0' }} key={index}> {/* Each box */}
          {content.value === 1 && ( // Render badge only if value is 1
            <Badge color="primary" sx={{ '& .MuiBadge-badge': { padding: '2px', border:'2px solid white' }}} badgeContent={<DoneOutlinedIcon sx={{ width: '12px' }} />}>
              <Box
                sx={{
                  padding: '10px 20px',
                  border: '1px solid',
                  width: 'max-content',
                  position: 'relative',
                  textAlign: 'center',
                  fontWeight: 700,
                  borderColor: '#2196f3', // Always blue border color
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    width: '20px',
                    color: '#2196f3',
                    background: '#2196f3',
                    height: '1px',
                    left: '-20px',
                  },
                  '&:after': {
                    content: '""',
                    position: index === stepContents.length - 1 ? 'static' : 'absolute',
                    top: '50%',
                    width: '20px',
                    color: '#2196f3',
                    background: '#2196f3',
                    height: '1px',
                    right: '-20px',
                  },
                }}
              >
                <Box color='#2196f3'>{content.name}</Box>
              </Box>
            </Badge>
          )}
          {content.value !== 1 && ( // Render without badge if value is not 1
            <Box
              sx={{
                padding: '10px 20px',
                width: 'max-content',
                border: '1px solid #ccc',
                position: 'relative',
                textAlign: 'center',
                fontWeight: 700,
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  width: '20px',
                  color: '#ccc',
                  background: '#ccc',
                  height: '1px',
                  left: '-20px',
                },
                '&:after': {
                  content: '""',
                  position: index === stepContents.length - 1 ? 'static' : 'absolute',
                  top: '50%',
                  width: '20px',
                  color: '#ccc',
                  background: '#ccc',
                  height: '1px',
                  right: '-20px',
                },
              }}
            >
              <Box>{content.name}</Box>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ProgressSteps;
