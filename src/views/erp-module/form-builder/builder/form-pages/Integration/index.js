import React, { useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import ParamTabs from 'views/common-section/ParamSearchTabs';
import useDrawer from 'hooks/useDrawer';
import Fee from 'assets/images/erp-module-icon/fee.svg';
import Customer from 'assets/images/erp-module-icon/customer.svg';
import FormBuilder from 'assets/images/erp-module-icon/form-builder.svg';
// import HR from 'assets/images/erp-module-icon/hr.svg';
// import Progress from 'assets/images/erp-module-icon/progress.svg';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ParamSelectList from 'views/common-section/ParamSelectList';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import ParamSelectPlaceholder from 'views/common-section/ParamSelectPlaceholder';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';


const moduleName = [
    {
        id: 1,
        label: "Student Info & Fee",
        value: "Stufee",
        // icon:<Fee />
    },
    {
        id: 2,
        label: "HR & Payroll",
        // icon:<HR />,
        value: "HR & Payroll"
    },
    {
        id: 3,
        label: "Progress & Result",
        // icon:<Progress />,
        value: "Progress & Result"
    }
]

const fieldName=[
    {
        id:1,
        label:'First Name',
        value:'firstname'
    },
    {
        id:2,
        label:'Last Name',
        value:'lastname'
    },
    {
        id:3,
        label:'Email',
        value:'email'
    }
]

const FieldMapping = () => {
    const [isHoverThen, setIsHoverThen] = useState(-1);
    const [thenCount, setThenCount] = useState(1);
    const [integrate, SetIntegrate] = useState({
        module: "",
        layout: ""
    });
    
    const [filedMapping,setFieldMapping]=useState({
        mapfrom:"",
        mapTo:""
    });

    const handleIntegrate = (e) => {
        const { name, value } = e.target;
        SetIntegrate({ ...integrate, [name]: value });
    }
    
    const handleSelect=(e)=>{
        const {name,value} = e.target;
        setFieldMapping({ ...integrate, [name]: value });
    }

    return (
        <>
            <Grid container spacing={2} sx={{ padding: "40px" }}>
                <Grid item xs={6} sm={4}>
                    <Box sx={{
                        display: "flex", justifyContent: "space-between",
                        flexDirection: "column", width: "100%"
                    }}>
                        <Box sx={{
                            display: "flex", justifyContent: "space-between",
                            gap: "10px", width: "calc(100% - 103px)", alignItems: 'center'
                        }}>
                            <Typography sx={{ color: "#e47d18" }}>Organization</Typography>
                            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <BusinessOutlinedIcon />
                                <Typography>Individual</Typography>
                            </Box>
                        </Box>
                        {/* Select Module */}
                        <Box sx={{
                            display: "flex", flexDirection: "row",
                            justifyContent: "space-between", width: "100%",
                            marginTop: "10px",alignItems:"center"
                        }}>
                            <Typography sx={{ color: "#e47d18" }}>Module</Typography>
                            <ParamSelectPlaceholder placeholder="select" options={moduleName}
                                value={integrate.module} rootStyle={{ width: "200px"}}
                                onChange={handleIntegrate} name="module"
                            />
                        </Box>
                        {/* Select Layout */}
                        <Box sx={{
                            display: "flex", flexDirection: "row",
                            justifyContent: "space-between", width: "100%",
                            marginTop: "10px",alignItems:"center"
                        }}>
                            <Typography sx={{ color: "#e47d18" }}>Layout</Typography>
                            <ParamSelectPlaceholder placeholder="select" options={moduleName}
                                value={integrate.layout} rootStyle={{ width: "200px"}}
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
                    <Typography sx={{ display: "flex", gap: "10px",marginTop:"10px" }}>
                        <ArrowRightAltIcon sx={{ color: "rgb(0 0 0 / 32%)" }} />
                        You can add a new record from
                        Jusklik Forms to modules in your Bigin.
                    </Typography>
                </Grid>
            </Grid>
            
            <Box sx={{padding: "20px" }}>
                {/*Strip*/}
                <Box sx={{
                    backgroundColor: '#f6f6f6', display: 'flex',
                    justifyContent: "space-between", padding: "10px",
                    borderRadius: "5px", border: "1px solid #EBEBEB"
                }}>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                        <img src={Customer} width="20px" height="20px" alt="jusklik crm" />
                        <Typography>Jusklik CRM</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                        <img src={FormBuilder} width="20px" height="20px" alt="form builder" />
                        <Typography>Jusklik Forms</Typography>
                    </Box>
                    <ReplayOutlinedIcon />
                </Box>
                {/*Field Mapping */}
                <Box sx={{ marginTop: "20px", width: '70%' }}>
                    <Typography variant="h5">Field Mapping</Typography>
                    {
                        <Box sx={{
                            display: "flex", flexDirection: "column",
                            gap: "40px", border: '1px solid #EBEBEB', padding: "40px",
                            marginTop: "20px"
                        }}>
                            {Array.from({ length: thenCount }, (_, index) =>
                                <Box sx={{ display: "flex", gap: "20px", alignItems: 'center', height: "20px" }}
                                    onMouseEnter={() => setIsHoverThen(index)}
                                    onMouseLeave={() => setIsHoverThen(-1)}
                                    key={index}
                                >
                                    <ParamSelectList label="Select" value={filedMapping?.mapFrom} 
                                    onChange={handleSelect} options={fieldName}
                                    name="mapFrom"
                                    />
                                    <SyncAltOutlinedIcon   />
                                    <ParamSelectList  label="Select" value={filedMapping?.mapTo} 
                                    onChange={handleSelect} options={fieldName} 
                                    name="mapTo" />
                                    <Box sx={{ visibility: isHoverThen === index ? "show" : "hidden", display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }} >
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
                        </Box>
                    }
                </Box>
            </Box >
        </>
    )
}


const ConfigureIntgration = ({ setIsIntegrateClicked }) => {
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
                        <Typography>Stufee</Typography>
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

const Component = ({ isIntegratClicked, setIsIntegrateClicked }) => {
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
                            <Typography variant="h4">Integrate with Jusklik CRM</Typography>
                        </Typography>
                        <Typography sx={{ fontSize: "smaller", marginLeft: "20px" }}>
                            Integrate Jusklik Forms with Jusklik CRM.
                        </Typography>
                    </Box>
                </Box>
                <Divider />
            </Box>
            {isIntegratClicked == false && <ConfigureIntgration setIsIntegrateClicked={setIsIntegrateClicked} />}
            {isIntegratClicked == true && <FieldMapping />}
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
            <ParamTabs tabPage={tabPage} tabsStyles={{ height: "560px !important", overflowY: "auto" }}
                tabPanelStyles={{ height: "600px !important", overflowY: "auto" }}
            />
            {
                isIntegratClicked && <Box sx={{
                    display: "flex", gap: "20px", width: "81.5%",
                    height: "60px", backgroundColor: "#fafafa",
                    position: "fixed", bottom: "0", padding: "10px",
                    marginRight: "20px", marginTop: "auto", marginBottom: 'auto'
                }}>
                    <Button variant="contained" sx={{ height: "40px" }}>Integrate</Button>
                    <Button variant="contained" sx={{ height: "40px" }}
                        onClick={() => setIsIntegrateClicked(false)}>
                        Cancel
                    </Button>
                </Box>
            }
        </Box >
    )
}


export default Rule;