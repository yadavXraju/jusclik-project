
export const randomReason = () => {
    return roles[Math.floor(Math.random() * 3)];
  };
  
  export const roles = ['Staff', 'Query', 'Parents Meeting'];
  export const initialRows = [
    {
      id: 1,  
      VisitorCategory: randomReason(),
      createdBy: 'Jane Smith',
      createdOn: '2024-03-06',
    
    },
    {
      id: 2,  
      VisitorCategory: randomReason(),
      createdBy: 'John Doe',
      createdOn: '2024-03-06',
    
    },
    {
      id: 3,  
      VisitorCategory: randomReason(),
      createdBy: 'Alice Johnson',
      createdOn: '2024-03-06',
    
    },
    {
      id: 4,  
      VisitorCategory: randomReason(),
      createdBy: 'Bob Brown',
      createdOn: '2024-03-06',
    
    },
   
  ];
  
  export const initialColumns = [
   
    {
      field: 'VisitorCategory',
      headerName: 'Visitor Category',
      type: 'singleSelect',
      editable: true,
      valueOptions: ['Staff', 'Query', 'Parents Meeting'],
      flex: 1,
      minWidth: 130
    },
    { field: 'createdBy', headerName: 'Created by',  editable: true,flex: 1, minWidth: 130 },
    { field: 'createdOn', headerName: 'Created On', editable: true, flex: 1, minWidth: 130 },
   
  ];
  