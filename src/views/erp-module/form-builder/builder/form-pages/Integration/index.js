import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import ParamTabs from 'views/common-section/ParamSearchTabs';
import useDrawer from 'hooks/useDrawer';
import Fee from 'assets/images/erp-module-icon/fee.svg';
import FormBuilder from 'assets/images/erp-module-icon/form-builder.svg';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import ParamSelectList from 'views/common-section/ParamSelectList';

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
                                gap: "40px", marginLeft: "100px", marginTop: "50px",
                                alignItems: "center"
                            }}>
                                <Box sx={{
                                    height: "150px", width: "150px", backgroundColor: "#fbfbfb",
                                    border: "1px solid #EAEAEA", borderRadius: "50%", position: "relative"
                                }}>
                                    <Box sx={{ position: "absolute", top: "30%", left: "38%" }}>
                                        <Typography>Form Entries</Typography>
                                        <img src={FormBuilder} alt="stufee icon" style={{ height: "50px", width: "50px" }} />
                                    </Box>
                                </Box>
                                <ArrowRightAltOutlinedIcon />
                                <Box sx={{
                                    height: "150px", width: "150px", backgroundColor: "#fbfbfb",
                                    border: "1px solid #EAEAEA", borderRadius: "50%", position: "relative",
                                    left: "300px"
                                }}>
                                    <Box sx={{ position: "absolute", top: "30%", left: "38%" }}>
                                        <Typography>Stufee</Typography>
                                        <img src={Fee} alt="stufee icon" style={{ height: "50px", width: "50px" }} />
                                    </Box>
                                </Box>
                            </Box>
                            <Typography sx={{ marginTop: "40px" }}>Integrate your form with Zoho CRM modules like Leads, Accounts,<br /> Contacts and more</Typography>
                            <Button varaint="contained" sx={{ background: "#0c192b" }} onClick={() => setIsIntegrateClicked(true)}>Integrate</Button>
                        </>
                    ) :
                    (
                        <>
                            <Box>
                                <Box sx={{
                                    '&:before': {
                                        position: 'absolute',
                                        content: '" "',
                                        width: '2px',
                                        height: 'calc(100% - 82px)',
                                        left: '3.7%',
                                        top: '47px',
                                        background: '#ccc',
                                    }
                                   }}>
                                    <Box>
                                        <Typography>Organization</Typography>
                                        <BusinessOutlinedIcon />
                                        <Typography>indiviudal</Typography>
                                    </Box>
                                    <Box>
                                        <Typography>Module</Typography>
                                        <ParamSelectList />
                                    </Box>
                                </Box>
                                <Box>
                                   
                                </Box>
                            </Box>
                            <Typography>ttt</Typography>
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
        </Box>
    )
}


export default Rule;