
export const randomReason = () => {
  return roles[Math.floor(Math.random() * 3)];
};

export const roles = ['Fight', 'Abusive', 'Wrestle'];
export const initialRows = [
  {
    id: 1,
    reason: randomReason(),
    createdBy: 'John Doe',
    createdOn: '2024-03-05',
    phoneNumber: '9874523614'
  },
  {
    id: 2,
    reason: randomReason(),
    createdBy: 'Jane Smith',
    createdOn: '2024-03-06',
    phoneNumber: '9874523614'
  },
  {
    id: 3,
    reason: randomReason(),
    createdBy: 'Alice Johnson',
    createdOn: '2024-03-07',
    phoneNumber: '9874523614'
  },
  {
    id: 4,
    reason: randomReason(),
    createdBy: 'Bob Brown',
    createdOn: '2024-03-08',
    phoneNumber: '9874523614'
  }
];

export const initialColumns = [
  { field: 'phoneNumber', headerName: 'Phone Number', editable: true, flex: 1, minWidth: 130 },
  {
    field: 'reason',
    headerName: 'Reason',
    type: 'singleSelect',
    editable: true,
    valueOptions: ['Fight', 'Abusive', 'Wrestle'],
    flex: 1,
    minWidth: 130
  },
  { field: 'createdBy', headerName: 'Created by',editable: true, flex: 1, minWidth: 130 },
  { field: 'createdOn', headerName: 'Created On',editable: true, flex: 1, minWidth: 130 },
 
];
