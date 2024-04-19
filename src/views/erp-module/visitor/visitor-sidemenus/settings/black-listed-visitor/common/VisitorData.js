
export const randomReason = () => {
    return roles[Math.floor(Math.random() * 3)];
  };
  
    export const roles = ['Meeting', 'Submission', 'Parent Discussion'];
  export const initialRows = [
    {
      id: 1,  
      VisitorPurpose: randomReason(),
      AverageMeetingTime: '1:30',
      createdBy: 'John Doe',
      createdOn: '2024-03-05'
    
    },
    {
      id: 2,
      VisitorPurpose: randomReason(),
      AverageMeetingTime: '1:30',
      createdBy: 'Jane Smith',
      createdOn: '2024-03-06'
     
    },
    {
      id: 3,
      VisitorPurpose: randomReason(),
      AverageMeetingTime: '1:30',
      createdBy: 'Alice Johnson',
      createdOn: '2024-03-07',
    },
    {
      id: 4,
      VisitorPurpose: randomReason(),
      AverageMeetingTime: '1:30',
      createdBy: 'Bob Brown',
      createdOn: '2024-03-08',
     
    }
  ];
  
  export const initialColumns = [
   
    {
      field: 'VisitorPurpose',
      headerName: 'Visitor Purpose',
      type: 'singleSelect',
      editable: true,
      valueOptions: ['Meeting', 'Submission', 'Parent Discussion'],
      flex: 1,
      minWidth: 130,
      
    },
    { field: 'AverageMeetingTime', headerName: 'Average Meeting Time', editable: true, flex: 1, minWidth: 130 },
    { field: 'createdBy', headerName: 'Created by',  editable: true,flex: 1, minWidth: 130 },
    { field: 'createdOn', headerName: 'Created On', editable: true, flex: 1, minWidth: 130 },
   
  ];
  