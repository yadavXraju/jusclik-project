// AssignmentsList.js
import React from 'react';
import AssignmentItem from './AssignmentItem';

const AssignmentsList = ({ assignments, handleOpenDialog }) => (
  <>
    {assignments.map((item, index) => (
      <AssignmentItem key={item.id} item={item} index={index} handleOpenDialog={handleOpenDialog} />
    ))}
  </>
);

export default AssignmentsList;
