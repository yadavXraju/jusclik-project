//@Page Onwer-Tarun Pandey
import React, { useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import ParamTabs from 'component/ParamSearchTabs';
import useDrawer from 'hooks/useDrawer';
import Fee from 'assets/images/erp-module-icon/fee.svg';
import Customer from 'assets/images/erp-module-icon/customer.svg';
import FormBuilder from 'assets/images/erp-module-icon/form-builder.svg';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import ParamSelectList from 'component/ParamSelectList';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import ParamSelectPlaceholder from 'component/ParamSelectPlaceholder';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const moduleName = [
    {
        id: 1,
        label: "Dwarka",
        value: "Stufee",
        // icon:<Fee />
    },
    {
        id: 2,
        label: "Gurgoan",
        // icon:<HR />,
        value: "HR & Payroll"
    },
    {
        id: 3,
        label: "New Delhi",
        // icon:<Progress />,
        value: "Progress & Result"
    }
]

const layoutOption = [
    {
        id: 1,
        label: "Admission",
        value: "Stufee",
        // icon:<Fee />
    },
    {
        id: 2,
        label: "Enquiry",
        // icon:<HR />,
        value: "HR & Payroll"
    },
    {
        id: 3,
        label: "Registration",
        // icon:<Progress />,
        value: "Progress & Result"
    }
]

const fieldName = [
    {
        id: 1,
        label: 'First Name',
        value: 'firstname'
    },
    {
        id: 2,
        label: 'Last Name',
        value: 'lastname'
    },
    {
        id: 3,
        label: 'Email',
        value: 'email'
    }
]

const FieldMapping = ({ isIntegratClicked, setIsIntegrateClicked, name }) => {
    const [thenCount, setThenCount] = useState(2);
    const [integrate, SetIntegrate] = useState({
        module: "",
        layout: ""
    });

    const [filedMapping, setFieldMapping] = useState({
        mapfrom: "",
        mapTo: ""
    });

    const handleIntegrate = (e) => {
        const { name, value } = e.target;
        SetIntegrate({ ...integrate, [name]: value });
    }

    const handleSelect = (e) => {
        const { name, value } = e.target;
        setFieldMapping({ ...integrate, [name]: value });
    }

    return (
        <>
            <Box sx={{
                minheight: "500px",
                height: "calc(100vh - 440px)", overflowY: 'auto'
            }} className="scrollbar">
                <Grid container spacing={2} sx={{
                    padding: "40px",
                }} className="scrollbar">
                    <Grid item xs={6} sm={4}>
                        <Box sx={{
                            display: "flex", justifyContent: "space-between",
                            flexDirection: "column", width: "100%"
                        }}>
                            {/* <Box sx={{
                            display: "flex", justifyContent: "space-between",
                            gap: "10px", width: "calc(100% - 103px)", alignItems: 'center'
                        }}>
                            <Typography sx={{ color: "#e47d18" }}>Organization</Typography>
                            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <BusinessOutlinedIcon />
                                <Typography>Individual</Typography>
                            </Box>
                        </Box> */}
                            {/* Select Module */}
                            <Box sx={{
                                display: "flex", flexDirection: "row",
                                justifyContent: "space-between", width: "100%",
                                alignItems: "center"
                            }}>
                                <Typography sx={{ color: "#e47d18" }}>Branch</Typography>
                                <ParamSelectPlaceholder placeholder="Select" options={moduleName}
                                    value={integrate.module} rootStyle={{ width: "200px" }}
                                    onChange={handleIntegrate} name="module"
                                />
                            </Box>
                            {/* Select Layout */}
                            <Box sx={{
                                display: "flex", flexDirection: "row",
                                justifyContent: "space-between", width: "100%",
                                marginTop: "10px", alignItems: "center"
                            }}>
                                <Typography sx={{ color: "#e47d18" }}>Forms</Typography>
                                <ParamSelectPlaceholder placeholder="Select" options={layoutOption}
                                    value={integrate.layout} rootStyle={{ width: "200px" }}
                                    onChange={handleIntegrate} name="layout" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                        <Box
                            sx={{
                                position: "relative", '&:after': {
                                    position: 'absolute',
                                    content: '" "',
                                    width: '1px',
                                    height: "100px",
                                    background: "#697586",
                                    left: "100px",
                                    top: "5px"
                                }
                            }}></Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography sx={{
                            color: "#e47d18"
                        }}>
                            Note:
                        </Typography>
                        <Typography sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                            <TrendingFlatOutlinedIcon  sx={{ color: "rgb(0 0 0 / 32%)" }} />
                            You can add a new record from
                            Jusklik Forms to modules in your {name}.
                        </Typography>
                    </Grid>
                </Grid>

                <Box sx={{ padding: "20px" }}>
                    {/*Strip*/}
                    <Box sx={{
                        backgroundColor: '#f6f6f6', display: 'flex',
                        justifyContent: "space-between", padding: "10px",
                        paddingLeft: "20px", width: "80%",
                        borderRadius: "5px", border: "1px solid #EBEBEB"
                    }}>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                            <img src={Customer} width="20px" height="20px" alt="jusklik crm" />
                            <Typography>{name}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: "10px"}}>
                            <img src={FormBuilder} style={{marginLeft:"-20px"}} width="20px" height="20px" alt="form builder" />
                            <Typography>Jusklik Forms</Typography>
                        </Box>
                        <ReplayOutlinedIcon />
                    </Box>
                    {/*Field Mapping */}
                    <Box sx={{ marginTop: "20px", width: '80%' }}>
                        <Typography variant="h5">Field Mapping</Typography>
                        {
                            <Box sx={{
                                display: "flex", flexDirection: "column",
                                gap: "40px", border: '1px solid #EBEBEB', padding: "40px",
                                paddingLeft: "20px", marginTop: "20px", width: "100%",
                            }}>
                                {Array.from({ length: thenCount }, (_, index) =>
                                    <Box sx={{ display: "flex", gap: "20px", alignItems: 'center', height: "20px" }}
                                        key={index}
                                    >
                                        <ParamSelectList label="Select" value={filedMapping?.mapFrom}
                                            onChange={handleSelect} options={fieldName}
                                            name="mapFrom"
                                        />
                                        <EastOutlinedIcon />
                                        <ParamSelectList label="Select" value={filedMapping?.mapTo}
                                            onChange={handleSelect} options={fieldName}
                                            name="mapTo" />
                                        <Box sx={{ visibility: thenCount > 1 ? "show" : "hidden", display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }} >
                                            <AddCircleOutlinedIcon sx={{ color: "#24A68A" }} onClick={() => setThenCount(thenCount + 1)} />
                                            <RemoveCircleOutlinedIcon sx={{ visibility: thenCount > 1 ? "show" : "hide", color: "#e83232" }}
                                                onClick={() => {
                                                    if (thenCount > 1)
                                                        setThenCount(thenCount - 1)
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                )}
                                {thenCount == 1 && <Button variant="contained"
                                    startIcon={<AddOutlinedIcon />} onClick={() =>
                                        setThenCount(thenCount + 1)
                                    }
                                    sx={{ width: "120px", alignItems: "center", marginLeft: "40%" }}>Add Field</Button>}
                            </Box>
                        }
                    </Box>
                </Box >
            </Box>
            {/*Bottom Navbar*/}
            {
                isIntegratClicked && <Box sx={{
                    display: "flex", gap: "20px", width: "100%",
                    height: "60px", backgroundColor: "#fafafa",
                    bottom: "0px", padding: "10px", marginTop: "25px",
                    paddingLeft: '20px'
                }}>
                    <Button variant="contained" sx={{ height: "40px" }}>Integrate</Button>
                    <Button variant="contained" sx={{ height: "40px" }}
                        onClick={() => setIsIntegrateClicked(false)}>
                        Cancel
                    </Button>
                </Box>
            }
        </>
    )
}


const ConfigureIntgration = ({ setIsIntegrateClicked, name }) => {
    return (
        <>
            <Box sx={{
                display: "flex", flexDirection: "row",
                gap: "40px", marginTop: "50px",
                alignItems: "center", justifyContent: "center"
            }}>
                {/* 1st circle(Module)*/}
                <Box sx={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    backgroundColor: '#fbfbfb',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '18px',
                    border: "1px solid #EAEAEA"
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh'
                    }}>
                        <Typography>Form Entries</Typography>
                        <img src={FormBuilder} alt="stufee icon"
                            style={{ height: "50px", width: "50px", marginLeft: '2px', marginTop: "2px" }}
                        />
                    </Box>
                </Box>
                <ArrowRightAltOutlinedIcon />
                {/*2nd circle(Module)*/}
                <Box sx={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    backgroundColor: '#fbfbfb',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '18px',
                    border: "1px solid #EAEAEA"
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh'
                    }}>
                        <Typography>{name}</Typography>
                        <img src={Fee} alt="stufee icon"
                            style={{ height: "50px", width: "50px", marginLeft: '2px', marginTop: "2px" }}
                        />
                    </Box>
                </Box>
            </Box >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography sx={{ marginTop: "40px" }}>
                    Integrate your form with Jusklik CRM modules
                    like stufee, HR&Payroll,<br /> Progress & Result and more
                </Typography>
                <Button variant="contained" sx={{ marginTop: "20px" }}
                    onClick={() => setIsIntegrateClicked(true)}>
                    Integrate
                </Button>
            </Box>
        </>
    )
}

const Component = ({ isIntegratClicked, setIsIntegrateClicked, name }) => {
    { console.log(name, setIsIntegrateClicked) }
    return (
        <Box>
            <Box>
                <Box sx={{
                    display: "flex", flexDirection: "row",
                    justifyContent: "space-between", height: "80px",
                    alignItems: "center", backgroundColor: 'rgb(0 0 0 / 0%)',
                    padding: "0px 20px"
                }}>
                    <Box sx={{ marginTop: "5px" }}>
                        <Typography sx={{ marginLeft: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                            <Typography variant="h4">Integrate with {name}</Typography>
                        </Typography>
                        <Typography sx={{ fontSize: "smaller", marginLeft: "20px" }}>
                            Integrate Jusklik Forms with {name}.
                        </Typography>
                    </Box>
                </Box>
                <Divider />
            </Box>
            {isIntegratClicked == false && <ConfigureIntgration setIsIntegrateClicked={setIsIntegrateClicked} name={name} />}
            {isIntegratClicked == true && <FieldMapping isIntegratClicked={isIntegratClicked} setIsIntegrateClicked={setIsIntegrateClicked} name={name} />}
        </Box>
    )
}

const Rule = () => {
    const { anchor, toggleDrawer } = useDrawer();
    const [isIntegratClicked, setIsIntegrateClicked] = useState(false);

    const tabPage = [
        {
            id: 1,
            name: "Student Info & Fee",
            component: Component,
            props: {
                name: "Student Info & Fee",
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor,
                isIntegratClicked: isIntegratClicked,
                setIsIntegrateClicked: setIsIntegrateClicked
            }
        },
        {
            id: 2,
            name: "HR & Payroll",
            component: Component,
            props: {
                name: "HR & Payroll",
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor,
                isIntegratClicked: isIntegratClicked,
                setIsIntegrateClicked: setIsIntegrateClicked
            }
        }, {
            id: 3,
            name: "Progress & Result",
            component: Component,
            props: {
                name: "Progress & Result",
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor,
                isIntegratClicked: isIntegratClicked,
                setIsIntegrateClicked: setIsIntegrateClicked
            }
        },
        {
            id: 4,
            name: "Library",
            component: Component,
            props: {
                name: "Library",
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor,
                isIntegratClicked: isIntegratClicked,
                setIsIntegrateClicked: setIsIntegrateClicked
            }
        },
        {
            id: 5,
            name: "Inventory",
            component: Component,
            props: {
                name: "Inventory",
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor,
                isIntegratClicked: isIntegratClicked,
                setIsIntegrateClicked: setIsIntegrateClicked
            }
        },
        {
            id: 6,
            name: "Financial Accounting",
            component: Component,
            props: {
                name: "Financial Accounting",
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor,
                isIntegratClicked: isIntegratClicked,
                setIsIntegrateClicked: setIsIntegrateClicked
            }
        },
        {
            id: 7,
            name: "Website",
            component: Component,
            props: {
                name: "Website",
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor,
                isIntegratClicked: isIntegratClicked,
                setIsIntegrateClicked: setIsIntegrateClicked
            }
        },
        {
            id: 8,
            name: "Visitor",
            component: Component,
            props: {
                name: "Visitor",
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor,
                isIntegratClicked: isIntegratClicked,
                setIsIntegrateClicked: setIsIntegrateClicked
            }
        },
        {
            id: 9,
            name: "Medical Examination",
            component: Component,
            props: {
                name: "Medical Examination",
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor,
                isIntegratClicked: isIntegratClicked,
                setIsIntegrateClicked: setIsIntegrateClicked
            }
        },
        {
            id: 10,
            name: "Admission",
            component: Component,
            props: {
                name: "Admission",
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor,
                isIntegratClicked: isIntegratClicked,
                setIsIntegrateClicked: setIsIntegrateClicked
            }
        },
        {
            id: 11,
            name: "Customer Relationship",
            component: Component,
            props: {
                name: "Customer Relationship",
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor,
                isIntegratClicked: isIntegratClicked,
                setIsIntegrateClicked: setIsIntegrateClicked
            }
        },
        {
            id: 12,
            name: "Parent",
            component: Component,
            props: {
                name: "Parent",
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor,
                isIntegratClicked: isIntegratClicked,
                setIsIntegrateClicked: setIsIntegrateClicked
            }
        },
        {
            id: 13,
            name: "Teacher",
            component: Component,
            props: {
                name: "Teacher",
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor,
                isIntegratClicked: isIntegratClicked,
                setIsIntegrateClicked: setIsIntegrateClicked
            }
        },
    ]

    return (
        <Box sx={{ marginTop: "20px" }}>
            <ParamTabs tabPage={tabPage} />
        </Box >
    )
}


export default Rule;