// AssignmentsPanel.js
import React from 'react';
import { Container } from '@mui/material';
import AssignmentsList from './AssignmentsList';
import Heading from './Heading';

const AssignmentsPanel = ({ value, sortedAssignments, handleOpenDialog }) => (
  <div className="panel">
    <Container maxWidth="xl" style={{ marginTop: 20 }}>
      <Heading  value={value} />
      <AssignmentsList assignments={sortedAssignments} handleOpenDialog={handleOpenDialog} />
    </Container>
  </div>
);

export default AssignmentsPanel;
