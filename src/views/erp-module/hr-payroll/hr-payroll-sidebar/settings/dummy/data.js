import {
    randomTraderName,
    randomCity,
    randomJobTitle,
    randomPhoneNumber,
    randomId,
    randomDesk
  } from '@mui/x-data-grid-generator';

export const initialRows = [
    {
      id:randomId(),
      emp: randomTraderName(),
      D_O_J:'21-05-2005',
      Loc: randomCity(),
      Dept:randomDesk(),
      post: randomJobTitle(),
      phn: randomPhoneNumber(),
      'reporting-manager':randomTraderName(),
    },
    {
        id:randomId(),
        emp: randomTraderName(),
        D_O_J:'21-05-2005',
        Loc: randomCity(),
        Dept:randomDesk(),
        post: randomJobTitle(),
        phn: randomPhoneNumber(),
        'reporting-manager':randomTraderName(),
      },
      { 
        id:randomId(),
        emp: randomTraderName(),
        D_O_J:'21-05-2005',
        Loc: randomCity(),
        Dept:randomDesk(),
        post: randomJobTitle(),
        phn: randomPhoneNumber(),
        'reporting-manager':randomTraderName(),
      },
      { 
        id:randomId(),
        emp: randomTraderName(),
        D_O_J:'21-05-2005',
        Loc: randomCity(),
        Dept:randomDesk(),
        post: randomJobTitle(),
        phn: randomPhoneNumber(),
        'reporting-manager':randomTraderName(),

      },
      {
        id:randomId(),
        emp: randomTraderName(),
        D_O_J:'21-05-2005',
        Loc: randomCity(),
        Dept:randomDesk(),
        post: randomJobTitle(),
        phn: randomPhoneNumber(),
        'reporting-manager':randomTraderName(),
      },
      {
        id:randomId(),
        emp: randomTraderName(),
        D_O_J:'21-05-2005',
        Loc: randomCity(),
        Dept:randomDesk(),
        post: randomJobTitle(),
        phn: randomPhoneNumber(),
        'reporting-manager':randomTraderName(),
      },
      {
        id:randomId(),
        emp: randomTraderName(),
        D_O_J:'21-05-2005',
        Loc: randomCity(),
        Dept:randomDesk(),
        post: randomJobTitle(),
        phn: randomPhoneNumber(),
        'reporting-manager':randomTraderName(),
      },
      {
        id:randomId(),
        emp: randomTraderName(),
        D_O_J:'21-05-2005',
        Loc: randomCity(),
        Dept:randomDesk(),
        post: randomJobTitle(),
        phn: randomPhoneNumber(),
        'reporting-manager':randomTraderName(),
      },
      {
        id:randomId(),
        emp: randomTraderName(),
        D_O_J:'21-05-2005',
        Loc: randomCity(),
        Dept:randomDesk(),
        post: randomJobTitle(),
        phn: randomPhoneNumber(),
        'reporting-manager':randomTraderName(),
      },
      {
        id:randomId(),
        emp: randomTraderName(),
        D_O_J:'21-05-2005',
        Loc: randomCity(),
        Dept:randomDesk(),
        post: randomJobTitle(),
        phn: randomPhoneNumber(),
        'reporting-manager':randomTraderName(),
      },
  ];
  


  export const columns = [
    {
      field: 'emp',
      headerName: 'Employee',
      flex: 1,
      minWidth: 150,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: "D_O_J",
      headerName: "Date Of Joining",
      flex: 1,
      minWidth: 150,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: "Loc",
      headerName: "Location",
      flex: 1,
      minWidth: 150,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: "Dept",
      headerName: "Department",
      flex: 1,
      minWidth: 150,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: "post",
      headerName: "Position",
      flex: 1,
      minWidth: 150,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: "phn",
      headerName: "Phone No",
      flex: 1,
      minWidth: 150,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: "reporting-manager",
      headerName: "Reporting Manager",
      flex: 1,
      minWidth: 150,
      align: 'left',
      headerAlign: 'left'
    },
   
  ];