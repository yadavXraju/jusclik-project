import { Paper, TableBody, TableCell, TableContainer, TableRow, Typography, Table } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {css} from './report-layout-css'
import { reportPreviewDummyData } from './report-layout-dummy-data'
const ReportPreview = (props) => {

       const rows = 10; // Number of rows
    const columns = 4 // Number of columns

    // Function to generate an empty row with cells
    const generateEmptyRow = (cols, rows) => {
        const cells = [];
        switch (props.formState.tableDesign) {
            case 'default': {
                if (rows === 0)
                    for (let j = 0; j < cols; j++)
                        cells.push(<TableCell key={j} sx={{ maxWidth: '10px', ...css.tableDensity[props.formState.tableDensity], ...css.tableDesign.default }} ></TableCell>);
                else
                    for (let j = 0; j < cols; j++)
                        cells.push(<TableCell key={j} sx={{ maxWidth: '10px', ...css.tableDensity[props.formState.tableDensity] }} ></TableCell>);
            }
                break;
            case 'bordered':
                for (let j = 0; j < cols; j++)
                    cells.push(<TableCell key={j} sx={{ maxWidth: '10px', ...css.tableDensity[props.formState.tableDensity], ...css.tableDesign.bordered }} ></TableCell>);
                break;
            case 'alternativeRows':
                for (let j = 0; j < cols; j++)
                    if (rows % 2)
                        cells.push(<TableCell key={j} sx={{ maxWidth: '10px', ...css.tableDensity[props.formState.tableDensity] }} ></TableCell>);
                    else
                        cells.push(<TableCell key={j} sx={{ maxWidth: '10px', ...css.tableDensity[props.formState.tableDensity], ...css.tableDesign.default }} ></TableCell>);

                break;
            case 'alternativeColumns':
                for (let j = 0; j < cols; j++)
                    if (j % 2)
                        cells.push(<TableCell key={j} sx={{ maxWidth: '10px', ...css.tableDensity[props.formState.tableDensity] }} ></TableCell>);
                    else
                        cells.push(<TableCell key={j} sx={{ maxWidth: '10px', ...css.tableDensity[props.formState.tableDensity], ...css.tableDesign.default }} ></TableCell>);
                break;

        }

        return cells;
    };
    return (<>
        {/* box */}
        <Box sx={css.box}>
            <Typography sx={{ ...css.previewText, ...css.horizontalCenter, }}>PREVIEW</Typography>
            <Paper sx={{ ...css.paper }} elevation={3}>
                <Typography sx={{ ...css.horizontalCenter, ...css.previewFont.organizationName }}>{props.formState.organizationName ? reportPreviewDummyData.organizationName : ""}</Typography>
                <Typography sx={{ ...css.horizontalCenter, ...css.previewFont.reportBasis }}>{props.formState.reportBasis ? "Basis: " + reportPreviewDummyData.reportBasis : ""}</Typography>
                <TableContainer component={Paper} sx={{borderRadius:'0px'}}>
                    <Table sx={{ ...css.tableDensity[props.formState.tableDensity], ...css.table }}>
                        <TableBody>
                            {/* Generate rows using array mapping */}
                            {Array.from({ length: rows }).map((_, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {/* Generate cells using the generateEmptyRow function */}
                                    {generateEmptyRow(columns, rowIndex)}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box sx={{ ...css.container, }}>
                    <Typography sx={{ ...css.left, ...css.previewFont.base }}>{props.formState.generatedBy ? reportPreviewDummyData.generatedBy : ""}</Typography>
                    <Typography sx={{ ...css.center, ...css.previewFont.base }}>{props.formState.pageNumber ? reportPreviewDummyData.pageNumber : ""}</Typography>
                    <Typography sx={{ ...css.right, ...css.previewFont.base }}>{props.formState.generatedDate ? reportPreviewDummyData.generatedDate : ""}</Typography>
                </Box>
                <Box sx={{ ...css.container, justifyContent: 'end' }}>
                    <Typography sx={{ ...css.right, ...css.previewFont.time }}>
                        {props.formState.generatedTime ? " " + reportPreviewDummyData.generatedTime : ""}
                    </Typography>
                </Box>
            </Paper>
        </Box>
        {/* structure: */}
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