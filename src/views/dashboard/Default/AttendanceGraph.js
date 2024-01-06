import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Paper, Typography } from '@mui/material';

const AttendanceGraph = ({ data }) => {
  return (
    <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
      <Typography variant="h6" gutterBottom>
        Attendance Graph
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="present" fill="#82ca9d" name="Present" />
          <Bar dataKey="absent" fill="#8884d8" name="Absent" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default AttendanceGraph;
