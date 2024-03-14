import { Paper, TableBody, TableCell, TableContainer, TableRow, Typography, Table } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { getCurrentDate, getCurrentTime } from 'utils/timeUtils'
const ReportPreview = (props) => {

    const css = {
        box: {
            backgroundColor: '#eef2f6'
            , padding: "34px 24px 24px 24px",
            borderRadius: '12px'
        },
        previewText: {
            padding: "0px 0px 24px 0px",
        },

        paper: {
            borderRadius: '0px',
            padding: '20px'
        },
        container: {
            display: 'flex',
            justifyContent: ' space-between', /* Aligns items at start, middle, and end */
            alignItems: 'center', /* Centers items vertically */

        },
        center: {
            alignSelf: 'center'
        },
        left: { alignSelf: 'flex-start' },
        right: { alignSelf: 'flex-end' },
        horizontalCenter: {
            display: 'flex',
            justifyContent: 'center'
        },
        previewFont: {
            base: {
                fontSize: '10px',
                paddingTop: '10px'
            },
            organizationName: {
                fontSize: '12px'
            },
            reportBasis: {
                fontSize: '18px'
            }
        },
        table: {
            borderRadius:'0px'
        },
        tableDensity: {
            classic: {
                padding: '16px'
            },
            compact: {
                padding: '14px',
            },
            superCompact: {
                padding: '12px'
            }
        },
        tableDesign: {
            default:{
                backgroundColor:'#ececec',
            },
            bordered: {border:'1px solid #ebeaf2'},
            alternativeRowns: {},
            alternativeColumns: {}
        }

    }
    const date = getCurrentDate()
    const time = getCurrentTime()
    const dummyData = {
        organizationName: 'Shaurya Soft',
        reportBasis: 'Accural',
        generatedBy: 'Daman',
        pageNumber: 'Page 1 of 1',
        generatedDate: date,
        generatedTime: time
    }

    const rows = 10; // Number of rows
    const columns = 4 // Number of columns

    // Function to generate an empty row with cells
    const generateEmptyRow = (cols,rows) => {
        const cells = [];
        // for (let j = 0; j < cols; j++) {
        //     cells.push(<TableCell key={j} sx={{ maxWidth: '10px', ...css.tableDensity[props.formState.tableDensity] }} ></TableCell>);
        // }
        switch (props.formState.tableDesign) {
            case 'default':{
                if(rows===0)
                for (let j = 0; j < cols; j++) 
                cells.push(<TableCell key={j} sx={{ maxWidth: '10px', ...css.tableDensity[props.formState.tableDensity],...css.tableDesign.default }} ></TableCell>);
                else
                for (let j = 0; j < cols; j++) 
                cells.push(<TableCell key={j} sx={{ maxWidth: '10px', ...css.tableDensity[props.formState.tableDensity] }} ></TableCell>);
            }                
                break;
                case 'bordered':
                    for (let j = 0; j < cols; j++) 
                    cells.push(<TableCell key={j} sx={{ maxWidth: '10px', ...css.tableDensity[props.formState.tableDensity],...css.tableDesign.bordered }} ></TableCell>);
                break;
                case 'alternativeRows':
                
                break;
                case 'alternativeColumns':
                
                break;
            
        }

        return cells;
    };

    



    return (<>
        {/* box */}
        <Box sx={css.box}>
            <Typography sx={{ ...css.previewText, ...css.horizontalCenter, }}>PREVIEW</Typography>
            <Paper sx={{ ...css.paper }} elevation={3}>
                <Typography sx={{ ...css.horizontalCenter, ...css.previewFont.organizationName }}>{props.formState.organizationName ? dummyData.organizationName : ""}</Typography>
                <Typography sx={{ ...css.horizontalCenter, ...css.previewFont.reportBasis }}>{props.formState.reportBasis ? "Basis: " + dummyData.reportBasis : ""}</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{...css.tableDensity[props.formState.tableDensity],...css.table}}>

                        <TableBody>
                            {/* Generate rows using array mapping */}
                            {Array.from({ length: rows }).map((_, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {/* Generate cells using the generateEmptyRow function */}
                                    {generateEmptyRow(columns,rowIndex)}
                                </TableRow>
                            ))}
{/* switch case
case:default:
                      if(row)          
*/}

                        </TableBody>
                    </Table>
                </TableContainer>


                <Box sx={{ ...css.container, }}>
                    <Typography sx={{ ...css.left, ...css.previewFont.base }}>{props.formState.generatedBy ? dummyData.generatedBy : ""}</Typography>
                    <Typography sx={{ ...css.center, ...css.previewFont.base }}>{props.formState.pageNumber ? dummyData.pageNumber : ""}</Typography>
                    <Typography sx={{ ...css.right, ...css.previewFont.base }}>{props.formState.generatedDate ? dummyData.generatedDate : ""}</Typography>
                </Box>
                <Box sx={{ ...css.container, justifyContent: 'end' }}>
                    <Typography sx={{ ...css.right, ...css.previewFont.base }}>
                        {props.formState.generatedTime ? " " + dummyData.generatedTime : ""}
                    </Typography>
                </Box>
            </Paper>
        </Box>
        {/* PREVIEW */}
        {/* paper */}
        {/* org name */}
        {/* reportbasis */}
        {/* table */}
        {/* generated by            pagenumber              generate date */}

    </>
    )
}
export default ReportPreview