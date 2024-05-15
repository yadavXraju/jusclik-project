import React,{useState} from 'react'
import CommonDataGrid from 'views/common-section/commonDataGrid'
import { Box,Tooltip,IconButton, Card,Typography,Grid } from '@mui/material'
import WarningDialog from 'views/common-section/WarningDialog';

// icon
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

// rowData

import { initialRows } from 'views/erp-module/hr-payroll/hr-payroll-sidebar/settings/employeeonBoard/component/employeData';
import OnBoardDrawer from './OnBoardDrawew';




const OnBoardEmpTable = () => {

  const [tableRows, setTableRows] = useState(initialRows);
const [modalOpen, setmodalOpen] = useState(false);
const [deleteId, setdeleteId] = React.useState(null);


// columns

const columns = [
    {
      field: 'emp',
      headerName: 'Employee',
      flex: 1,
      minWidth: 150,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: "D_O_J",
      headerName: "Date Of Joining",
      flex: 1,
      minWidth: 150,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: "Loc",
      headerName: "Location",
      flex: 1,
      minWidth: 150,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: "Dept",
      headerName: "Department",
      flex: 1,
      minWidth: 150,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: "post",
      headerName: "Position",
      flex: 1,
      minWidth: 150,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: "phn",
      headerName: "Phone No",
      flex: 1,
      minWidth: 150,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: "reporting-manager",
      headerName: "Reporting Manager",
      flex: 1,
      minWidth: 150,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: 'Action',
      headerName: 'Action',
      flex: 1,
      minWidth: 100,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box>
       
            <IconButton>
              <RemoveRedEyeTwoToneIcon sx={{ color: 'rgb(124, 178, 221)' }} />
            </IconButton>
        
          <Tooltip title="Edit">
          <IconButton onClick={(event) => event.stopPropagation()}>
            <EditTwoToneIcon />
          </IconButton>
          </Tooltip>
        
            <IconButton onClick={(event) => event.stopPropagation()}>
            <DeleteTwoToneIcon onClick={() => handleDeleteRow(params.row.id)} sx={{ color: '#f19e9e' }} />
            </IconButton>
        
        </Box>
      )
    }
  ];
  

// rows


// Functions
// const handleDeleteRow=(id)=>{
//   setmodalOpen(true);
//   setdeleteId(id)
// }

const confirmDelete=()=>{
  const updatedRows = tableRows.filter((row) => row.id !== deleteId);
  setTableRows(updatedRows);
  setmodalOpen(false);
  setdeleteId(null)

}

const handleModalClose=()=>{
  setmodalOpen(false);
}

  return (
    <>
    <Card>
    <Box sx={{ borderBottom: '1px solid #ccc' }}>
    <Grid container spacing={2} p={2} sx={{ alignItems: 'end' , paddingRight:'0px'}}>
      <Grid item xs={12} sm={6} lg={6} sx={{}}>
        <Box sx={{ paddingBottom: '0px' }}>
          <Typography variant="h4" sx={{ pb: '0px' }}>
           Employee List
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
              <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
               <OnBoardDrawer/>
                {/* <ExitEmployee DrawerBtn="true" /> */}
         
                {/* <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }} onClick={handleSearchClick}>
                  <SearchOutlinedIcon />
                </IconButton>
                {isSearchVisible && (
                  <TextField
                    sx={{
                      marginRight: '8px',
                      marginTop: '0px',
                      height: '30px', // Adjust the height according to your preference
                      '& input': {
                        paddingTop: '8px',
                        paddingBottom: '8px' // Adjust the top padding to center the text vertically
                      }
                    }}
                    autoFocus
                    variant="outlined"
                    margin="dense"
                    onBlur={handleCloseSearch}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        handleCloseSearch();
                      }
                    }}
                  />
                )} */}
                {/* <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }}>
                  <FilterListRoundedIcon onClick={toggleDrawer('right', true)} />
                  <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer('right', false)}>
                    <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                        <Typography variant="h4">Filter</Typography>
                        <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                          Close
                        </Button>
                      </Box>
                      <FilterStudents
                        customFilterContainerStyle={style?.customFilterContainerStyle}
                        customSelectedFilter={style?.customSelectedFilter}
                        customAvialbelFilter={style?.customAvialbelFilter}
                        customClearFilter={style?.customClearFilter}
                        applyFilter={1}
                      />
                    </Box>
                  </Drawer>
                </IconButton> */}
                    
        
              </div>
            </Grid>

    </Grid>
  </Box>
    <Box p={2} className={'scrollbar-2'}>
    <CommonDataGrid
    columns={columns}
    rows={ tableRows}
    initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 50 }
        }
      }}
      pageSizeOptions={[10, 25, 50, 100]}
      checkboxSelection
    />
    </Box>
    </Card>
    <WarningDialog open={modalOpen} onClose={handleModalClose} contentText="Are you sure you want to delete?" onConfirm={confirmDelete} />



    </>
  )
}

export default OnBoardEmpTable
