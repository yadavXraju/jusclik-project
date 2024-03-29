import React, { useState } from 'react';
import { Typography, Box, Button, Drawer } from '@mui/material';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import useDrawer from 'hooks/useDrawer';
import AddCustomField from './AddCustomField';
import studentDetailsData from '../../admission-form/Adm-form/studentDetailsData';


const CustomFields = ({ customFieldDrawer }) => {
  const [hoverUnusedField, setHoverUnusedField] = useState(false);
  const { anchor, toggleDrawer } = useDrawer();
  // const isMobile = useMediaQuery('(max-width: 767px)')
  return (
    <Box sx={{ width: "800px" }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', padding: "0px 20px 0px 20px" }}>
        <Typography variant="h4">Custom Field</Typography>
        <Button onClick={customFieldDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
          Close
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "space-between", width: "100%" }}>
        {/* Used Fields*/}
        <Box sx={{ display: 'flex', flexDirection: "column", gap: "20px", height: '100%', padding: "20px 20px 20px 20px", width: "50%" }}>
          <Typography>Used Fields</Typography>
          {
            studentDetailsData.map((field) => (
              <Box key={field.id}>
                <Typography>{field?.name}</Typography>
                {field.section.map((item) => (
                  <Box key={item.id}>
                    <Typography>{item?.name}</Typography>
                    {item?.subSection.map((finalField) =>
                      finalField.selected && (<Box
                        sx={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "5px"
                        }}
                        key={finalField?.id}
                        onMouseEnter={() => setHoverUnusedField(true)}
                        onMouseLeave={() => setHoverUnusedField(false)}
                      >
                        <DragIndicatorOutlinedIcon sx={{ visibility: hoverUnusedField ? 'visible' : "hidden" }} />
                        <Box sx={{ border: "1px solid #eee", height: "40px", borderRadius: "4px", display: "flex", alignItems: "center", width: "85%" }}>
                          <Typography>{finalField?.name}</Typography>
                        </Box>
                        <EditOutlinedIcon sx={{ visibility: hoverUnusedField ? 'visible' : "hidden" }} />
                        <DoDisturbOnOutlinedIcon sx={{ visibility: hoverUnusedField ? 'visible' : "hidden" }} />
                      </Box>
                      )
                    )}
                  </Box>
                ))}
              </Box>
            ))
          }
        </Box>
        {/*Unused Fields*/}
        <Box sx={{ display: 'flex', flexDirection: "column", gap: "20px", height: '100%', padding: "20px 20px 20px 20px", width: "50%" }}>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography>Unused Fields</Typography>
            <Typography variant="text" sx={{ color: "#2196f3", cursor: "pointer" }} onClick={toggleDrawer("right", true)}>Add Custom Field</Typography>
          </Box>
          {
            studentDetailsData.map((field) => (
              <Box key={field.id}>
                {field.section.map((item) => (
                  <Box key={item.id}>
                    {item?.subSection.map((finalField) =>
                      !finalField.selected &&
                      (<Box
                        sx={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "5px"
                        }}
                        key={finalField?.id}
                        onMouseEnter={() => setHoverUnusedField(true)}
                        onMouseLeave={() => setHoverUnusedField(false)}
                      >
                        <DragIndicatorOutlinedIcon sx={{ visibility: hoverUnusedField ? 'visible' : "hidden" }} />
                        <Box sx={{ border: "1px solid #eee", height: "40px", borderRadius: "4px", display: "flex", alignItems: "center", width: "85%" }}>
                          <Typography>{finalField?.name}</Typography>
                        </Box>
                        <EditOutlinedIcon sx={{ visibility: hoverUnusedField ? 'visible' : "hidden" }} />
                        <DoDisturbOnOutlinedIcon sx={{ visibility: hoverUnusedField ? 'visible' : "hidden" }} />
                      </Box>)
                    )}
                  </Box>
                ))}
              </Box>
            ))
          }
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", position: "fixed", bottom: "0px", borderTop: "1px solid #eee", borderBotttom: "1px solid #eee", width: "800px", padding: "0px 20px" }}>
        <Typography variant="text" sx={{ padding: "20px 20px 20px 20px" }}>
          Used Custom Fields:2/50
        </Typography>
        <Box sx={{ display: "flex", gap: "20px", alignItems: 'center' }}>
          <Button variant="contained" sx={{ height: "40px" }}>Save</Button>
          <Button variant="contained" sx={{ height: "40px" }} onClick={customFieldDrawer("right", false)}>Cancel</Button>
        </Box>
      </Box>
      <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer("right", true)}>
        <AddCustomField toggleDrawer={toggleDrawer} />
      </Drawer>
    </Box>
  );
}

export default CustomFields;