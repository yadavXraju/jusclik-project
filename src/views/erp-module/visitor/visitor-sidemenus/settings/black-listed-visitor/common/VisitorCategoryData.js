
export const randomReason = () => {
    return roles[Math.floor(Math.random() * 3)];
  };
  
  export const roles = ['STAFF', 'Submission', 'Parent Discussion'];
  export const initialRows = [
    {
      id: 1,  
      VisitorCategory: randomReason(),
  
    
    },
   
  ];
  
  export const initialColumns = [
   
    {
      field: 'VisitorCategory',
      headerName: 'Visitor Category',
      type: 'singleSelect',
      editable: true,
    //   valueOptions: ['Meeting', 'Submission', 'Parent Discussion'],
      flex: 1,
      minWidth: 130
    },
    { field: 'createdBy', headerName: 'Created by',  editable: true,flex: 1, minWidth: 130 },
    { field: 'createdOn', headerName: 'Created On', editable: true, flex: 1, minWidth: 130 },
   
  ];
  