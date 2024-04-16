
export const randomReason = () => {
    return roles[Math.floor(Math.random() * 3)];
  };
  
  export const roles = ['Head Master', 'Principal', 'Class Teacher'];
  export const initialRows = [
    {
      id: 1,  
      Name: 'Saurabh Sharma',
      ToMeet: randomReason(),
      PhoneNumber: '9568471235',
      createdOn: '2024-03-05'
    
    },
    {
      id: 2,
      Name: 'Jane Smith',
      ToMeet: randomReason(),
      PhoneNumber: '9568471235',
      createdOn: '2024-03-06'
     
    },
    {
      id: 3,
      Name: 'Alice Johnson',
      ToMeet: randomReason(),
      PhoneNumber: '9568471235',
      createdOn: '2024-03-07',
    },
    {
      id: 4,
      Name: 'Bob Brown',
      ToMeet: randomReason(),
      PhoneNumber: '9568471235',
      createdOn: '2024-03-08',
     
    }
  ];
  
  export const initialColumns = [
    { field: 'Name', headerName: 'Name', editable: true, flex: 1, minWidth: 130 },
    {
      field: 'ToMeet',
      headerName: 'ToMeet',
      type: 'singleSelect',
      editable: true,
      valueOptions: ['Head Master', 'Principal', 'Class Teacher'],
      flex: 1,
      minWidth: 130
    },
    { field: 'PhoneNumber', headerName: 'Phone Number', flex: 1, minWidth: 130 },
    { field: 'createdOn', headerName: 'Created On', flex: 1, minWidth: 130 },
   
  ];
  