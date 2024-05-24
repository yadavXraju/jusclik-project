import { Box, IconButton, Paper, Tab, Tabs, Typography } from '@mui/material';
import TabsName from 'components/ParamTabStep';
import WarningDialog from 'components/WarningDialog';
import CommonDataGrid from 'components/commonDataGrid';
import React from 'react';
import { AddTaskListDrawer } from './drawers/add-task-list';
import { EditTaskListDrawer } from './drawers/edit-task-list';
import { AddTaskDrawer } from './drawers/add-task';
import { EditTaskDrawer } from './drawers/edit-task';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <Box role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};
const CustomTabs = (props) => {
  const {
    tabsData,
    selectedTab,
    setSelectedTab,
    rows,
    columns,
    modalOpen,
    handleConfirmDelete,
    handleModalClose,
    taskGroups,
    setTaskGroups,
    state,
    toggleDrawer
  } = props;
  const lastIndex = tabsData.length - 1;

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const DeleteTaskListButton = ({ onClick }) => (
    <IconButton onClick={onClick} sx={{ marginRight: '8px' }}>
      <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
    </IconButton>
  );

  return (
    <>
      <Box
        sx={{
          flexDirection: 'row',
          gap: 4,
          padding: '0rem',
          width: '100%',
          display: 'flex',
          marginTop: '25px'
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="Tabs"
          variant="scrollable"
          scrollButtons="auto"
          orientation="vertical"
          sx={{
            '& .Mui-selected .number-bg': {
              background: '#2196f3',
              color: '#fff'
            },
            paddingLeft: '1rem'
          }}
        >
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              label={<TabsName name={tab.name} number={index} numberShow={true} iconShow={true} lastIndex={lastIndex} />}
              id={`tab-${index}`}
              sx={{
                textAlign: 'left',
                width: 'fit-content',
                borderBottom: '1px solid #eef2f6',
                alignItems: 'baseline',
                paddingLeft: '0px',
                marginRight: '40px',
                '& .MuiTypography-body1': {
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'rgb(18, 25, 38)'
                },
                '& .MuiSvgIcon-root': {
                  marginBottom: '0'
                }
              }}
            />
          ))}
        </Tabs>

        {/*----------------------------------- TAB PANEL --------------------------------- */}

        {tabsData.map((tab, index) => (
          <TabPanel
            key={index}
            value={selectedTab}
            index={index}
            className="Scrollbar"
            sx={{
              width: '100%',
              padding: '24px',
              bgcolor: 'background.paper',
              borderRadius: '10px',
              overflowY: 'auto',
              height: 'calc(100vh - 250px)',
              '& > .MuiBox-root': {
                padding: '0'
              }
            }}
          >
            <Paper sx={{ marginBottom: '1rem', padding: '1rem', display: 'flex' }}>
              <Box sx={{ flex: '6' }}>
                <Typography variant="h2" mb={1}>
                  {tabsData[selectedTab].name}
                </Typography>
                <Typography variant="h4">{tabsData[selectedTab].description}</Typography>
              </Box>
              <Box sx={{ flex: '1', alignItems: 'center', display: 'flex ', justifyContent: 'end' }}>
                {/*  POPUP ---- DRAWERS FOR TASK-LISTS: ADD, EDIT, DELETE */}
                {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* -----------------------------------popup drawers   ------------------------------------------------------- */}
                <AddTaskListDrawer
                  toggleDrawer={toggleDrawer}
                  value={selectedTab}
                  taskGroups={taskGroups}
                  setTaskGroups={setTaskGroups}
                  state={state}
                />
                <EditTaskListDrawer
                  toggleDrawer={toggleDrawer}
                  value={selectedTab}
                  taskGroups={taskGroups}
                  setTaskGroups={setTaskGroups}
                  state={state}
                />
                <DeleteTaskListButton buttonLabel="Delete Task List" drawerTitle="Delete Task List" />
              </Box>
            </Paper>

            <Paper sx={{ padding: '1rem' }}>
              {/* -----------DRAWER----ADD NEW TASK-------- */}
              <Box sx={{ display: 'flex', justifyContent: 'end', marginBottom: '1rem' }}>
                <AddTaskDrawer
                  toggleDrawer={toggleDrawer}
                  value={selectedTab}
                  taskGroups={taskGroups}
                  setTaskGroups={setTaskGroups}
                  state={state}
                />
                <EditTaskDrawer toggleDrawer={toggleDrawer} state={state} />
              </Box>
              <CommonDataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                pageSizeOptions={[5, 10, 20]}
                checkboxSelection={true}
                sx={{ backgroundColor: 'background.paper', height: 'calc(100vh - 480px)' }}
              />
            </Paper>
          </TabPanel>
        ))}

        {/* ========= import warning dialog ========== */}
        <WarningDialog
          open={modalOpen}
          onClose={handleModalClose}
          contentText="Are you sure you want to delete?"
          onConfirm={handleConfirmDelete}
        />
      </Box>
    </>
  );
};

export default CustomTabs;
