import React,{useState} from 'react'
import CommonDataGrid from 'components/table-data-grid/commonDataGrid'
import { Box,Tooltip,IconButton, Card,Typography,Grid,Chip } from '@mui/material'
import WarningDialog from 'components/WarningDialog';

// icon
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

// rowData
import { initialRows } from '../../employeeonBoard/component/employeData';

 const ExitEmpoyeeTable = () => {

    const [tableRows, setTableRows] = useState(initialRows);
    const [modalOpen, setmodalOpen] = useState(false);
    const [deleteId, setdeleteId] = React.useState(null);

    const renderChipCell = (params) => {
        const { status } = params.row;
      
        let chipStyle = { color: '#364152',width:'100px',display: 'flex', alignItems: 'center' ,justifyContent:'center',border:'none'};
        switch (status) {
          
          case 'Completed':
      
            chipStyle = { ...chipStyle,color:'rgb(16, 185, 129)' ,background:'rgb(240, 253, 249)' };
            break;
          case 'In Process':
      
            chipStyle = { ...chipStyle, color:'#1e88e5', background:'rgb(242,252,255)' };
            break;
          case 'HR Approved':
      
            chipStyle = { ...chipStyle, background:'rgb(247, 249, 251)' };
            break;
            case 'Cancelled':
            chipStyle = { ...chipStyle, color:'rgb(216, 67, 21)', background:'rgb(251, 233, 231)' };
            break;
            case 'Pending':
           
            chipStyle = { ...chipStyle, color:'rgb(247, 144, 9)' ,background:'rgb(255, 250, 235)'}
            break;
          default:
           null;
            break;
        }
      
      
      
        return (
          
          <Chip
            label= {status}
            style={{ ...chipStyle,}}
            color="default"
            variant="outlined"
            width="200"
            
          /> 
          
       
        );
      };

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
      field: 'status',
      headerName: 'Status',
      flex: 1,
      minWidth: 150,
      align: 'left',
      headerAlign: 'left',
      renderCell:renderChipCell,
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
      minWidth: 130,
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
    // {
    //   field: " ",
    //   headerName: "",
    //   flex: 1,
    //   minWidth: 150,
    //   align: 'left',
    //   headerAlign: 'left'
    // },
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
      minWidth: 90,
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


  
// Functions
const handleDeleteRow=(id)=>{
    setmodalOpen(true);
    setdeleteId(id)
  }
  
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
           Exit Employee List
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
              <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
              
              
                    
        
              </div>
            </Grid>

    </Grid>
  </Box>
    <Box p={2} className={'scrollbar-2'}>
    <CommonDataGrid
    className={'scrollbar-2'}
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

export default ExitEmpoyeeTable
