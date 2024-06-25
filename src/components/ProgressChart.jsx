import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProgressChart = ({ workouts }) => {
  // Process workouts data for the chart
  const chartData = workouts.map((workout, index) => ({
    name: `Workout ${index + 1}`,
    duration: parseInt(workout.duration),
    intensity: workout.intensity === 'Low' ? 1 : workout.intensity === 'Medium' ? 2 : 3,
  }));

  return (
    <Box width="100%" height="400px">
      <Heading as="h3" size="md" mb={4}>Workout Progress</Heading>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="duration" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="intensity" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ProgressChart;