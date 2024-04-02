import React, { useState } from 'react';
import { Typography, Box, Button, Drawer } from '@mui/material';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import useDrawer from 'hooks/useDrawer';
import AddCustomField from './add-custom-field';
import studentDetailsData from '../../erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/admission/admission-form/Adm-form/studentDetailsData';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';

const CustomFields = ({ customFieldDrawer }) => {
  const [hoverUnusedField, setHoverUnusedField] = useState(-1);
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
        <Box sx={{ display: 'flex', flexDirection: "column", gap: "20px", padding: "20px 20px 20px 20px", width: "65%" }} >
            <Typography variant='h4'>Used Fields</Typography>
            <Box sx={{ height: "calc(100vh - 180px)" }} className="scrollbar">
              {
                studentDetailsData && studentDetailsData.map((field) => (
                  <Box key={field.id} className="scrollbar">
                    <Accordion defaultExpanded>
                    {/* Group Name */}
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography variant="h5" sx={{ padding: "10px 10px 10px 0px" }}>{field?.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {field.section.map((item) => (
                        <Box key={item.id}>
                          {/* Sub Group Name */}
                          <Typography variant="h6" sx={{ padding: "10px 0px" }}>{item?.name}</Typography>
                          {item?.subSection.map((finalField) =>
                            finalField.selected && (<Box
                              sx={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "5px",
                                padding: "5px 10px 5px 0px",
                                backgroundColor: hoverUnusedField == finalField?.id ? '#eef2f682' : "inherit"
                              }}
                              key={finalField?.id}
                              onMouseEnter={() => setHoverUnusedField(finalField?.id)}
                              onMouseLeave={() => setHoverUnusedField(-1)}
                            >
                              <DragIndicatorOutlinedIcon sx={{ color: "#b3b9c1" }} />
                              <Box sx={{ border: "1px solid #eee", height: "40px", borderRadius: "4px", display: "flex", alignItems: "center", width: "85%", paddingLeft: "10px" }}>
                                <Typography>{finalField?.name}</Typography>
                              </Box>
                              <EditOutlinedIcon sx={{ visibility: hoverUnusedField == finalField?.id ? 'visible' : "hidden", height: "20px", width: "20px", color: "#b3b9c1" }} />
                              <DoDisturbOnOutlinedIcon sx={{ visibility: hoverUnusedField == finalField?.id ? 'visible' : "hidden", height: "20px", width: "20px", color: "#b3b9c1" }} />
                            </Box>
                            )
                          )}
                        </Box>
                      ))}
                    </AccordionDetails>
                    </Accordion>
                  </Box>
                ))
              }
            </Box>
         
        </Box>
        {/*Unused Fields*/}
        <Box sx={{ display: 'flex', flexDirection: "column", gap: "20px", height: '100%', padding: "20px 20px 20px 20px", width: "35%" }}>
          <Button variant="outlined" sx={{ width: "150px" }} startIcon={<AddOutlinedIcon />} onClick={toggleDrawer("right", true)}>Custom Field</Button>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="h4">Unused Fields</Typography>
          </Box>
          {
            studentDetailsData && studentDetailsData.map((field) => (
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
                          gap: "5px",
                          padding: "5px 10px 5px 0px",
                          backgroundColor: hoverUnusedField == finalField?.id ? '#eef2f682' : "inherit"
                        }}
                        key={finalField?.id}
                        onMouseEnter={() => setHoverUnusedField(finalField?.id)}
                        onMouseLeave={() => setHoverUnusedField(-1)}
                      >
                        <DragIndicatorOutlinedIcon sx={{ color: "#b3b9c1" }} />
                        <Box sx={{ border: "1px solid #eee", height: "40px", borderRadius: "4px", display: "flex", alignItems: "center", width: "85%", paddingLeft: "10px" }}>
                          <Typography>{finalField?.name}</Typography>
                        </Box>
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