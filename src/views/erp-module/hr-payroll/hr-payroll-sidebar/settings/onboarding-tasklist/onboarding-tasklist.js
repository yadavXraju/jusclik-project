import { Paper, Typography } from '@mui/material'
import React from 'react'
import CommonDataGrid from 'views/common-section/commonDataGrid'
// import withParamDrawer from 'views/common-section/withParamDrawer'

const Onboarding = ({panelSubheading,panelHeading}) => {
    // const OnboardTaskList=withParamDrawer(<Paper>hello</Paper>)
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'age', headerName: 'Age', type: 'number', width: 90 }
      ];
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
      ];
  return (
    <>
    {/* <OnboardTaskList buttonLabel='Add New Task'  drawerTitle='Add New Task' /> */}
    {/* panel */}
    <Paper sx={{marginBottom:'1rem',padding:'1rem'}}>
        <Typography variant='h1'>{panelHeading}</Typography>
        <Typography variant='h4' className="testf">{panelSubheading}</Typography>
    </Paper>
    {/* datagrid */}
    <CommonDataGrid 
    rows= {rows}
    columns={columns}
    pageSize= {5}
    pageSizeOptions={[5, 10, 20]}
    checkboxSelection= {true}
    sx={{backgroundColor:'background.paper',height:'calc(100vh - 410px)'}}
    />
    </>
  )
}

export default Onboarding