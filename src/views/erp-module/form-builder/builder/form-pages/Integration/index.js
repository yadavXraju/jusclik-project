import React, { useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import ParamTabs from 'views/common-section/ParamSearchTabs';
import useDrawer from 'hooks/useDrawer';
import Fee from 'assets/images/erp-module-icon/fee.svg';
import FormBuilder from 'assets/images/erp-module-icon/form-builder.svg';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ParamSelectList from 'views/common-section/ParamSelectList';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';




const Component = () => {
    const [isIntegratClicked, setIsIntegrateClicked] = useState(false);
    return (
        <>
            <Box>
                <Box sx={{
                    display: "flex", flexDirection: "row",
                    justifyContent: "space-between", height: "80px",
                    alignItems: "center", backgroundColor: 'rgb(0 0 0 / 0%)',
                    padding: "0px 20px"
                }}>
                    <Box sx={{ marginTop: "5px" }}>
                        <Typography sx={{ marginLeft: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                            <Typography variant="h4">Integrate with Zoho CRM</Typography>
                        </Typography>
                        <Typography sx={{ fontSize: "smaller", marginLeft: "20px" }}>
                            Integrate Zoho Forms with Zoho CRM.
                        </Typography>
                    </Box>
                </Box>
                <Divider />
            </Box>
            {
                isIntegratClicked == false ?
                    (
                        <>
                            <Box sx={{
                                display: "flex", flexDirection: "row",
                                gap: "40px", marginTop: "50px",
                                alignItems: "center", justifyContent: "center"
                            }}>
                                {/* 1st circle(Module)*/}
                                <Box sx={{
                                    height: "150px", width: "150px", backgroundColor: "#fbfbfb",
                                    border: "1px solid #EAEAEA", borderRadius: "50%", position: "relative"
                                }}>
                                    <Box sx={{ position: "absolute", top: "30%", left: "38%" }}>
                                        <Typography sx={{ marginLeft: "-22px" }}>Form Entries</Typography>
                                        <img src={FormBuilder} alt="stufee icon" style={{ height: "50px", width: "50px" }} />
                                    </Box>
                                </Box>
                                <ArrowRightAltOutlinedIcon />
                                {/*2nd circle(Module)*/}
                                <Box sx={{
                                    height: "150px", width: "150px", backgroundColor: "#fbfbfb",
                                    border: "1px solid #EAEAEA", borderRadius: "50%", position: "relative",
                                }}>
                                    <Box sx={{ position: "absolute", top: "30%", left: "35%" }}>
                                        <Typography>Stufee</Typography>
                                        <img src={Fee} alt="stufee icon" style={{ height: "50px", width: "50px" }} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Typography sx={{ marginTop: "40px" }}>
                                    Integrate your form with Zoho CRM modules
                                    like Leads, Accounts,<br /> Contacts and more
                                </Typography>
                                <Button varaint="outlined" sx={{ marginTop: "20px" }}
                                    onClick={() => setIsIntegrateClicked(true)}>
                                    Integrate
                                </Button>
                            </Box>
                        </>
                    ) :
                    (
                        <>
                            <Grid container spacing={2} sx={{ padding: "40px" }}>
                                <Grid item xs={6} sm={4}>
                                    <Box sx={{ display: "flex",justifyContent:"space-between",flexDirection: "column", width: "100%" }}>
                                        <Box sx={{ display: "flex",justifyContent:"space-between",gap: "10px", width: "100%",alignItems:'center'}}>
                                            <Typography>Organization</Typography>
                                            <Box sx={{display:"flex",gap:"10px"}}>
                                                <BusinessOutlinedIcon />
                                                <Typography sx={{
                                                    position: "relative",
                                                    '&:after': {
                                                        position: 'absolute',
                                                        content: '" "',
                                                        width: '1px',
                                                        height: "50px",
                                                        background: "#697586",
                                                        left: "100px",
                                                        top: "5px"
                                                    }
                                                }}>Individual</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: "flex", flexDirection: "row", 
                                          justifyContent: "space-between", width: "100%",
                                          marginTop:"10px"
                                           }}>
                                            <Typography>Module</Typography>
                                            <ParamSelectList />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <Typography sx={{ color: "#e47d18" }}>
                                        Note:
                                    </Typography>
                                    <Typography sx={{ display: "flex", gap: "10px" }}>
                                        <ArrowRightAltIcon sx={{ color: "rgb(0 0 0 / 32%)" }} />
                                        You can add a new record from
                                        Zoho Forms to modules in your Bigin.
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={12} lg={12}
                                sx={{ marginTop: "20px", padding: "20px" }}
                            >
                                <Box sx={{
                                    backgroundColor: '#f6f6f6', display: 'flex',
                                    justifyContent: "space-between", padding: "10px",
                                    borderRadius: "5px", border: "1px solid #EBEBEB"
                                }}>
                                    <Typography>Zoho CRM</Typography>
                                    <Typography>Zoho Forms</Typography>
                                    <ReplayOutlinedIcon />
                                </Box>
                                <Box sx={{ marginTop: "20px", width: '50%' }}>
                                    <Typography>Field Mapping</Typography>
                                    <Box sx={{
                                        display: "flex", gap: "20px", padding: "20px",
                                        paddingLeft: "20px", alignItems: "center",
                                        marginTop: "20px"
                                    }}>
                                        <ParamSelectList />
                                        <SyncAltOutlinedIcon />
                                        <ParamSelectList />
                                    </Box>

                                </Box>
                            </Grid>

                        </>
                    )
            }
        </>
    )
}

const Rule = () => {
    const { anchor, toggleDrawer } = useDrawer();
    const tabPage = [
        {
            id: 1,
            name: "Student Info & Fee",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 2,
            name: "HR & Payroll",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        }, {
            id: 3,
            name: "Progress & Result",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 4,
            name: "Library",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 5,
            name: "Inventory",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 6,
            name: "Financial Accounting",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 7,
            name: "Website",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 8,
            name: "Visitor",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 9,
            name: "Medical Examination",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 10,
            name: "Admission",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 11,
            name: "Customer Relationship",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 12,
            name: "Parent",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 13,
            name: "Teacher",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
    ]

    return (
        <Box sx={{ marginTop: "20px" }}>
            <ParamTabs tabPage={tabPage} />
            <Box sx={{
                display: "flex", gap: "20px", width: "100%",
                height: "60px", backgroundColor: "#fafafa",
                position: "fixed", bottom: "0", padding: "10px"
            }}>
                <Button variant="contained" sx={{ height: "40px" }}>Integrate</Button>
                <Button variant="contained" sx={{ height: "40px" }}>Cancel</Button>
            </Box>
        </Box>
    )
}


export default Rule;