import * as React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper,TextField} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Datecomponent from 'views/common-section/ParamDateComponent';
import ParamTime from 'views/common-section/ParamTime';
import ParameterizedAutoComplete from 'views/common-section/ParamAutoComplete';
const subjects = ["Delivered", "notdelivered", "yetto delivered"];



const ChangingParam = ({type}) => {
    const customStyle={
         width:"130px"
    };
    return (
        <>
        {
          (type==2||type==4||type==6||type==8||type==9||type==10)&&(
            <>
            <Datecomponent />
            <ParamTime />
            </>
          )
        }
        {
             (type==3||type==5)&&(
                <>
                 <ParameterizedAutoComplete option={subjects} label="Fee Paid" onChange={(event, newData) => handleChange("field", newData)}  customStyle={customStyle}/>
                </>
              )
        }
        {
            (type==7)&&(
                <>
                 <ParameterizedAutoComplete option={subjects} label="Fee Paid" onChange={(event, newData) => handleChange("field", newData)} customStyle={customStyle} />
                 <TextField id="outlined-basic" label="1213" variant="outlined" inputProps={{ maxLength: 10 }}  onChange={(event) => handleChange("admissionNo", event.target.value)} sx={{width:"130px",marginTop:"5px"}}/>
                </>
            )
        }
        </>
    )
}



const StudentInfo = React.forwardRef((props, ref) => {
    const { tableHeadings, studentData,type} = props;
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper', mb: 2 }} >
            <TableContainer component={Paper}>
                <Table ref={ref}>
                    <TableHead>
                        <TableRow>
                            {
                                tableHeadings.map((item) => {
                                    return <TableCell key={item?.id}>
                                        <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }} key={item?.id}>{item?.heading}</Typography>
                                    </TableCell>
                                }
                                )
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentData
                            .map((item) => (
                                <TableRow key={item?.id}>
                                    <TableCell>
                                        <Typography variant="h5">{item.id}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.regNo}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.student}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.class}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.gender}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.mobile}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.email}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.activityLog}</Typography>
                                    </TableCell>
                                   {
                                   type!=1&&(<TableCell>
                                           <ChangingParam type={type} />
                                       </TableCell>)
                                   } 
                                    <TableCell>
                                        <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
})

export default StudentInfo