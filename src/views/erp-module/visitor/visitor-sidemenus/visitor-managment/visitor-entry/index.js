import React from 'react'
import CommonDataGrid from 'views/common-section/commonDataGrid'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import WarningDialog from 'views/common-section/WarningDialog';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { IconButton, Tooltip } from '@mui/material';
import { Box ,Grid, Card, Typography } from '@mui/material';
import RouteData from './VisitorData';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import DoDisturbAltOutlinedIcon from '@mui/icons-material/DoDisturbAltOutlined';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router';



const renderChipCell = (params) => {
  const { status } = params.row;
  let iconComponent;
  let chipStyle = { color: '#364152',width:'140px',display: 'flex', alignItems: 'center' ,justifyContent:'flex-start'};
  switch (status) {
    case 'Expected':
      iconComponent = <AccessTimeOutlinedIcon color='rgb(16, 185, 129)'/>;

      chipStyle = { ...chipStyle,color:'rgb(16, 185, 129)' ,background:'rgb(240, 253, 249)' };
      break;
    case 'Checked In':
      iconComponent = <LoginOutlinedIcon color='#1e88e5'/>;
      chipStyle = { ...chipStyle, color:'#1e88e5', background:'rgb(242,252,255)' };
      break;
    case 'Checked Out':
      iconComponent = <LogoutOutlinedIcon  />;
      chipStyle = { ...chipStyle, background:'rgb(247, 249, 251)' };
      break;
      case 'Do Not Admit':
      iconComponent = <DoDisturbAltOutlinedIcon color='rgb(216, 67, 21)'/>;
      chipStyle = { ...chipStyle, color:'rgb(216, 67, 21)', background:'rgb(251, 233, 231)' };
      break;
      case 'Pending':
      iconComponent = <PauseCircleOutlineIcon color='rgb(247, 144, 9)' />;
      chipStyle = { ...chipStyle, color:'rgb(247, 144, 9)' ,background:'rgb(255, 250, 235)'}
      break;
    default:
      iconComponent = null; // You can set a default icon or handle other cases as needed
      break;
  }



  return (
    <Chip
      icon={iconComponent}
      label= {status}
      style={{ ...chipStyle,}}
      color="default"
      variant="outlined"
      width="200"
      
    /> 
    
 
  );
};


const columns = [
  { field: 'status', headerName: 'Status', flex: 1, minWidth: 180, align: 'left', headerAlign: 'left' ,renderCell: renderChipCell, },
  { field: 'VisitorName', headerName: 'Visitor Name', flex: 1, minWidth: 160, align: 'left', headerAlign: 'left' , renderCell: (params) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={params.row.avatarUrl} alt={params.row.altName} />
      <span style={{ marginLeft: 8 }}>{params.value}</span>
    </div>)
     },
  { field: 'Address', headerName: 'Address', flex: 1, minWidth: 100 },
  { field: 'Purpose', headerName: 'Purpose', flex: 1, minWidth: 130 },
  { field: 'ToMeet', headerName: 'To Meet', flex: 1, minWidth: 130 },
  { field: 'EntryDate', headerName: 'Entry Date', flex: 1, minWidth: 130 },
  { field: 'GatePass', headerName: 'Gate Pass', flex: 1, minWidth: 130 },
  { 
      field: 'Phone', // Custom field name for combined pick start and end time
      headerName: 'Phone', // Custom header name
      flex: 1,
      minWidth: 100
      
    },
    { 
      field: 'TimeIn', // Custom field name for combined pick start and end time
      headerName: 'Time In', // Custom header name
      // flex: 1,
      minWidth: 100,
      // valueGetter: (params) => `${params.row.pickstarttime} - ${params.row.pickendtime}`
   
    },
  // { field: 'attachBus', headerName: 'Attach Bus', flex: 1, minWidth: 100 },
  { field: 'TimeOut',
   headerName: 'Time Out', flex: 0,
    minWidth: 100 ,
  //  valueGetter: (params) => `${params.row.dropstarttime} - ${params.row.dropendtime}`,
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
 
const navigate=useNavigate();

  const Click = (rowData) => {
    navigate('../visitor-detail', { state: { rowData } });
    console.log(rowData);
  };

  return (
    <>
      <Card>
        <Box sx={{ borderBottom: '1px solid #ccc' }}>
          <Grid container spacing={2} p={2} sx={{ alignItems: 'end' ,paddingBottom:'0px' , paddingRight:'0px'}}>
            <Grid item xs={12} sm={12} lg={12} sx={{}}>
              <Box sx={{ paddingBottom: '32px' }}>
                <Typography variant="h4" sx={{ pb: '0px' }}>
                  Visitor List
                </Typography>
              </Box>
            </Grid>
       

          </Grid>
        </Box>
        <Box p={2} className={'scrollbar-2'}>
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
