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
      status:'In Process',
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
        status:'In Process',
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
        status:'Cancelled',
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
        status:'In Process',
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
        status:'Pending',
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
        status:'Completed',
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
        status:'Pending',
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
        status:'HR Approved',
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
        status:'Cancelled',
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
        status:'In Process',
        emp: randomTraderName(),
        D_O_J:'21-05-2005',
        Loc: randomCity(),
        Dept:randomDesk(),
        post: randomJobTitle(),
        phn: randomPhoneNumber(),
        'reporting-manager':randomTraderName(),
      },
  ];
  