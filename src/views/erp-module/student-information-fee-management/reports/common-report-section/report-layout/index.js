import React from 'react'
import {
    Radio,
    RadioGroup,
    TextField,
    Typography,
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
import ReportPreview from './reportPreview';
import {css} from './report-layout-css'
import { pageFontFamilyObj } from './report-layout-dummy-data';

const ReportLayout = () => {

    // form state===========================================================
    const [formState, setFormState] = useState({
        tableDensity: 'classic',
        tableDesign: 'default',
        resizeTable: false,
        organizationName: false,
        reportBasis: false,
        pageNumber: false,
        generatedBy: false,
        generatedDate: false,
        generatedTime: false,
        pageSize: 'a4',
        pageOrientation: 'portrait',
        pageFontFamily: 'ubuntu',
        pageMarginTop: '0.7',
        pageMarginBottom: '0.7',
        pageMarginLeft: '0.5',
        pageMarginRight: '0.2',
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
    return (<>
    <Grid container>
        <Grid item md={5}>
            {/* for left side component */}
            <Box>
            {/* left side component =======================================================*/}
            {/* form -------------------------------------------------------------------------------*/}
            <FormControl>
                <Grid container spacing={6}>
                    {/* 2 dropdowns -------------------------------------------------------------------*/}
                    <Grid item md={4}>
                        <FormControl fullWidth>
                            <InputLabel>Table Density</InputLabel>
                            <Select
                                label='Table Density'
                                onChange={(e) => handleState('tableDensity', e.target.value)}
                                defaultValue={'classic'}>
                                <MenuItem value={'classic'}>Classic</MenuItem>
                                <MenuItem value={'compact'}>Compact</MenuItem>
                                <MenuItem value={'superCompact'}>SuperCompact</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={4}>
                        <FormControl fullWidth>
                            <InputLabel>Table Design</InputLabel>
                            <Select
                                label='Table Design'
                                onChange={(e) => handleState('tableDesign', e.target.value)}
                                defaultValue={'default'}
                            >
                                <MenuItem value={'default'}>Default</MenuItem>
                                <MenuItem value={'bordered'}>Bordered</MenuItem>
                                <MenuItem value={'alternativeRows'}>Alternative Rows</MenuItem>
                                <MenuItem value={'alternativeColumns'}>Alternative Columns</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <FormControlLabel control={<Checkbox checked={formState.resizeTable} onChange={(e) => (handleState('resizeTable', e.target.checked))} />} label={'Re-size the table and its font automatically to fit the content within the table.'} />
                {/* seperator ----------------------------------------------------------------*/}
                <Box sx={css.seperator}></Box>
                {/* typography -----------------------------------------------------------*/}
                <Typography sx={css.heading.fontsize}>Choose Details to Display</Typography>
                {/* 3 checkboxes in  2 rows  ------------------------------------------*/}
                {/*ROW 1 ------------------------------------------------------------  */}
                <Grid container >
                    <Grid item md={6}>
                        <Grid item>
                            <FormControlLabel control={<Checkbox checked={formState.organizationName} onChange={(e) => (handleState('organizationName', e.target.checked))} />} label={'Organization Name'} />
                        </Grid>
                        <Grid item>
                            <FormControlLabel control={<Checkbox checked={formState.reportBasis} onChange={(e) => (handleState('reportBasis', e.target.checked))} />} label={'Report Basis'} />
                        </Grid>
                        <Grid item>
                            <FormControlLabel control={<Checkbox checked={formState.pageNumber} onChange={(e) => (handleState('pageNumber', e.target.checked))} />} label={'Page Number'} />
                        </Grid>
                    </Grid>
                    {/* </Grid> */}
                    {/* ROW2 */}
                    {/* <Grid container spacing={4}> */}
                    <Grid item>

                        <Grid item>
                            <FormControlLabel control={<Checkbox checked={formState.generatedBy} onChange={(e) => (handleState('generatedBy', e.target.checked))} />} label={'Generated By'} />
                        </Grid>
                        <Grid item>
                            <FormControlLabel control={<Checkbox checked={formState.generatedDate} onChange={(e) => {
                            formState.generatedDate?
                            handleState('generatedDate', e.target.checked)
                            :
                            handleState('generatedDate', e.target.checked)
                            handleState('generatedTime',false)}
                            } />} label={'Generated Date'} />
                        </Grid>
                        <Grid item>
                            {formState.generatedDate
                            ?<FormControlLabel control={<Checkbox checked={formState.generatedTime} onChange={(e) => (handleState('generatedTime', e.target.checked))} />} label={'Generated Time'} />
                            :<FormControlLabel disabled control={<Checkbox checked={false} onChange={(e) => (handleState('generatedTime', e.target.checked))} />} label={'Generated Time'} />
                            }
                        </Grid>
                    </Grid>
                </Grid>
                {/* seperator ----------------------------------------------------------------*/}
                <Box sx={css.seperator}></Box>
                {/* {/* 2 coloumn 2 row  */}
                <Grid container>
                    {/* column1========================================================================= */}
                    <Grid item md={6}>
                        {/* coloumn 1 row1: 2*radio button */}
                        {/* <Typography sx={css.heading} >Paper Size</Typography> */}
                        <Grid item>
                            <FormControl>
                                <Typography sx={css.heading.fontsize}>Paper Size</Typography>
                                <RadioGroup
                                    aria-labelledby=""
                                    defaultValue="a4"
                                    name=""
                                    onChange={(e) => (handleState('pageSize', e.target.value))}
                                >
                                    <Grid container>
                                        <FormControlLabel value="a4" control={<Radio />} label="A4" />
                                        <FormControlLabel value="letter" control={<Radio />} label="Letter" />
                                    </Grid>
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* column1 row2 : dropdown */}
                        <Grid item md={6}>
                            <Box sx={css.fontFamilyBox}></Box>
                            <FormControl fullWidth>
                                <InputLabel>Font Family</InputLabel>
                                <Select
                                    label='Font Family'
                                    onChange={(e) => (handleState('pageFontFamily', e.target.value))}
                                    defaultValue={'ubuntu'}
                                >
                                    <MenuItem value={'ubuntu'}>Ubuntu</MenuItem>
                                    <MenuItem value={'openSans'}>Open Sans</MenuItem>
                                    <MenuItem value={'dejaVuSans'}>DejaVu Sans</MenuItem>
                                    <MenuItem value={'hind'}>Hind</MenuItem>
                                    <MenuItem value={'hindMadurai'}>Hind Madurai</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={8}>                            
                            <Typography sx={css.fontFamilyText}>{pageFontFamilyObj[formState.pageFontFamily].fontDescription}</Typography>
                        </Grid>
                    </Grid>
                    {/* COLUMN 2======================================================================================== */}
                    <Grid item md={6}>

                    
                    <Grid item>
                        {/*  column 2 row1 :2*radio button */}
                        <FormControl>
                            <Typography sx={css.heading.fontsize}>Orientation</Typography>
                            <RadioGroup
                                aria-labelledby=""
                                defaultValue="portrait"
                                name=""
                                onChange={(e) => (handleState('pageOrientation', e.target.value))}
                            >
                                <Grid container>
                                    <FormControlLabel value="portrait" control={<Radio />} label="Portrait" />
                                    <FormControlLabel value="pandscape" control={<Radio />} label="Landscape" />
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                        </Grid>
                        {/*  column2 row2: 4*input feild---------------------------------*/}
                        <Grid item>
                        <FormControl>
                        <Typography sx={css.heading.fontsize}>Margins</Typography>
                        <Grid container >
                            <Grid item md={6}>
                                <TextField id="" label="Top" sx={css.inputBox} onChange={(e)=>(handleState('pageMarginTop',e.target.value))} />
                            </Grid>
                            <Grid item md={6}>
                                <TextField id="" label="Bottom" sx={css.inputBox} onChange={(e)=>(handleState('pageMarginBottom',e.target.value))} />
                            </Grid>
                            <Grid item md={6}>
                                <TextField id="" label="Left" sx={css.inputBox} onChange={(e)=>(handleState('pageMarginLeft',e.target.value))} />
                            </Grid>
                            <Grid item md={6}>
                                <TextField id="" label="Right" sx={css.inputBox} onChange={(e)=>(handleState('pageMarginRight',e.target.value))} />
                            </Grid>                                
                        </Grid>
                        </FormControl>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </FormControl>
            </Box>
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item md={3}> 
        {/* for right side preview component */}
        <ReportPreview formState={formState} />
        </Grid>
    </Grid>      
            {/* right side component ----------------------------------------------------------------------*/}            
            <Box>               
        </Box>
    </>
    );
}

export default ReportLayout;