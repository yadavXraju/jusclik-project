import React from 'react'
import CommonDataGrid from 'views/erp-common-component/commonDataGrid'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import WarningDialog from 'views/common-section/WarningDialog';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { IconButton, Tooltip } from '@mui/material';
import { Box ,Grid, Card, Typography} from '@mui/material';
import RouteData from './VisitorData';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';




const columns = [
  { field: 'VisitorName', headerName: 'Visitor Name', flex: 1, minWidth: 130, align: 'left', headerAlign: 'left' },
  { field: 'EntryDate', headerName: 'Entry Date', flex: 1, minWidth: 130 },
  { 
      field: 'Phone', // Custom field name for combined pick start and end time
      headerName: 'Phone', // Custom header name
      flex: 1,
      minWidth: 130,
      
    },
    { 
      field: 'TimeIn', // Custom field name for combined pick start and end time
      headerName: 'Time In', // Custom header name
      flex: 1,
      minWidth: 130,
      // valueGetter: (params) => `${params.row.pickstarttime} - ${params.row.pickendtime}`
   
    },
  // { field: 'attachBus', headerName: 'Attach Bus', flex: 1, minWidth: 100 },
  { field: 'TimeOut',
   headerName: 'Time Out', flex: 1,
    minWidth: 100 ,
  //  valueGetter: (params) => `${params.row.dropstarttime} - ${params.row.dropendtime}`,
},
  { field: 'Address', headerName: 'Address', flex: 1, minWidth: 100 },
  { field: 'ToMeet', headerName: 'To Meet', flex: 1, minWidth: 100 },
  // { field: 'status', headerName: 'Status', flex: 1, minWidth: 100 },
 

  {
    field: 'Action',
    headerName: 'Action',
    flex: 1,
    minWidth: 130,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
      <Box onClick={(event) => event.stopPropagation()}>
        {/* <IconButton>
          <RoutesManageDrawer/>
        </IconButton> */}
        <Tooltip title="Edit">
        <IconButton>
            <RemoveRedEyeTwoToneIcon sx={{ color: 'rgb(124, 178, 221)' }} />
          </IconButton>
        <IconButton>
          <EditTwoToneIcon />
        </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
        <IconButton>
          <DeleteTwoToneIcon onClick={() => handleDeleteRow(params.row.id)} sx={{ color: '#f19e9e' }} />
        </IconButton>
        </Tooltip>
      </Box>
    )
  }
];

const VisitorEntry = () => {

  //const [tableRows, setTableRows] = useState(RouteData);
 


  return (
    <>
      <Card>
        <Box sx={{ borderBottom: '1px solid #ccc' }}>
          <Grid container spacing={2} p={2} sx={{ alignItems: 'end' }}>
            <Grid item xs={12} sm={8} lg={8}>
              <Box sx={{ paddingBottom: '0px' }}>
                <Typography variant="h4" sx={{ pb: '0px' }}>
                  Visitor List
                </Typography>
              </Box>
            </Grid>
          
          </Grid>
        </Box>
        <Box p={2}>
          <CommonDataGrid
            rows={RouteData}
            columns={columns} // Use state variable for columns
            onRowClick={(params) => Click(params.row)}
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
     
    </>
  )
}

export default VisitorEntry
