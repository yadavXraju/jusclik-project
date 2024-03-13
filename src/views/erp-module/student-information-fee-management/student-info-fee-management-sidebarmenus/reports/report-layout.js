import React from 'react'
import {
    Radio,
    RadioGroup,
    TextField,
    Typography,
    Paper,
    FormControl,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
    Grid,
    InputLabel,
} from '@mui/material'
import { Box } from '@mui/system';
import { useState } from 'react';

const ReportLayout = () => {


    const css = {
        seperator: {
            borderBottom: '1px solid #ccc'
        },
        heading: {
            fontsize: {
                fontSize: '14px',
                fontWeight: '600',
                paddingBottom: '20px',
                paddingTop: '20px',
            }
        },
        selectBox: {

        },
        center: {
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
        }
    }

    // form state===========================================================
    const [formState, setFormState] = useState({
        tableDensity: '',
        tableDesign: '',
        resizeTable: false,
        organizationName: false,
        reportBasis: false,
        pageNumber: false,
        generatedBy: false,
        generatedDate: false,
        generatedTime: false,
        paperSizeA4: true,
        pageOrientationPortrait: true,
        pageFontfamily: '',
        pageMarginTop: '',
        pageMarginBottom: '',
        pageMarginLeft: '',
        pageMarginRight: '',
    })

    // handler function===========================================================================
    const handleState = (element, value) => {
        setFormState((formState) => (
            {
                ...formState,
                [element]: value
            }
        ))
    }


    console.log(formState);
    return (<>
        <Box>
{/* left side components =======================================================*/}
            {/* form -------------------------------------------------------------------------------*/}
            <FormControl>
                <Grid container spacing={6}>
                    {/* 2 dropdowns -------------------------------------------------------------------*/}
                    <Grid item md={3}>
                        <FormControl fullWidth>
                            <InputLabel>Table Density</InputLabel>
                            <Select
                                variant='outlined'
                                onChange={(e) => handleState('tableDensity', e.target.value)}>
                                <MenuItem value={'classic'}>Classic</MenuItem>
                                <MenuItem value={'compact'}>Compact</MenuItem>
                                <MenuItem value={'superCompact'}>SuperCompact</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={3}>
                        <FormControl fullWidth>
                            <InputLabel>Table Design</InputLabel>
                            <Select
                                variant='outlined'

                                onChange={(e) => handleState('tableDesign', e.target.value)}
                            >
                                <MenuItem value={'default'}>Default</MenuItem>
                                <MenuItem value={'bordered'}>Bordered</MenuItem>
                                <MenuItem value={'alternativeRows'}>Alternative Rows</MenuItem>
                                <MenuItem value={'alternativeColumns'}>Alternative Columns</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <FormControlLabel control={<Checkbox />} label={'Re-size the table and its font automatically to fit the content within the table.'} />
                {/* seperator ----------------------------------------------------------------*/}
                <Box sx={css.seperator}></Box>
                {/* typography -----------------------------------------------------------*/}
                <Typography sx={css.heading.fontsize}>Choose Details to Display</Typography>
                {/* 3 checkboxes in  2 rows  ------------------------------------------*/}
                {/*ROW 1 ------------------------------------------------------------  */}
                <Grid container spacing={4}>
                    <Grid item>
                        <Grid item>
                            <FormControlLabel control={<Checkbox />} label={'Organization Name'} />
                        </Grid>
                        <Grid item>
                            <FormControlLabel control={<Checkbox />} label={'Report Basis'} />
                        </Grid>
                        <Grid item>
                            <FormControlLabel control={<Checkbox />} label={'Page Number'} />
                        </Grid>
                    </Grid>
                    {/* </Grid> */}
                    {/* ROW2 */}
                    {/* <Grid container spacing={4}> */}
                    <Grid item>

                        <Grid item>
                            <FormControlLabel control={<Checkbox />} label={'Generated By'} />
                        </Grid>
                        <Grid item>
                            <FormControlLabel control={<Checkbox />} label={'Generated Date'} />
                        </Grid>
                        <Grid item>
                            <FormControlLabel control={<Checkbox />} label={'Generated Time'} />
                        </Grid>
                    </Grid>
                </Grid>
                {/* seperator ----------------------------------------------------------------*/}
                <Box sx={css.seperator}></Box>
                {/* {/* 2 coloumn 2 row  */}
                <Grid container>
                    {/* column1========================================================================= */}
                    <Grid item>
                        {/* coloumn 1 row1: 2*radio button */}
                        {/* <Typography sx={css.heading} >Paper Size</Typography> */}
                        <Grid item>
                            <FormControl>
                                <Typography sx={css.heading.fontsize}>Paper Size</Typography>
                                <RadioGroup
                                    aria-labelledby=""
                                    defaultValue="A4"
                                    name=""
                                >
                                    <Grid container>
                                        <FormControlLabel value="A4" control={<Radio />} label="A4" />
                                        <FormControlLabel value="Letter" control={<Radio />} label="Letter" />
                                    </Grid>
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* column1 row2 : dropdown */}
                        <Grid item md={3}>
                            <Box sx={css.heading.fontsize}></Box>
                            <FormControl fullWidth>
                                <InputLabel>Font Family</InputLabel>
                                <Select
                                    onChange={() => { }}
                                >
                                    <MenuItem value={10}>Roboto</MenuItem>
                                    <MenuItem value={20}>Poppins</MenuItem>
                                    <MenuItem value={30}>Jakarta</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={6}>

                            <Typography>Supports English and European languages. This font can also render Indian Rupees Symbol.</Typography>
                        </Grid>
                    </Grid>
                    {/* COLUMN 2======================================================================================== */}
                    <Grid item>
                        {/*  column 2 row1 :2*radio button */}
                        <FormControl>
                            <Typography sx={css.heading.fontsize}>Orientation</Typography>
                            <RadioGroup
                                aria-labelledby=""
                                defaultValue="Portrait"
                                name=""
                            >
                                <Grid container>
                                    <FormControlLabel value="Portrait" control={<Radio />} label="Portrait" />
                                    <FormControlLabel value="Landscape" control={<Radio />} label="Landscape" />
                                </Grid>
                            </RadioGroup>
                        </FormControl>

                        {/*  column2 row2: 4*input feild---------------------------------*/}
                        <Typography sx={css.heading.fontsize}>Margins</Typography>
                        <Grid container spacing={2}>
                            <Grid item md={12}>
                                <TextField id="" label="Top" variant="outlined" />
                                <TextField id="" label="Bottom" variant="outlined" />
                            </Grid>
                            <Grid item md={12}>
                                <TextField id="" label="Left" variant="outlined" />
                                <TextField id="" label="Right" variant="outlined" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </FormControl>
{/* right side components ----------------------------------------------------------------------*/}
            {/* box  ---------------------------------------------------------------------*/}
            <Box>
                {/* paper  ---------------------------------------------------------------------*/}
                <Paper></Paper>
                {/* typography  ---------------------------------------------------------------------*/}
                {/* table  ---------------------------------------------------------------------*/}
            </Box>
        </Box>
    </>
    );
}

export default ReportLayout;