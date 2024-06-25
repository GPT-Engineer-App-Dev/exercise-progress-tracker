import React from 'react';
import { Box, VStack, Text, Heading } from '@chakra-ui/react';

const WorkoutList = ({ workouts }) => {
  return (
    <Box width="100%">
      <Heading as="h2" size="lg" mb={4}>Logged Workouts</Heading>
      <VStack spacing={4} align="stretch">
        {workouts.map((workout, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md">
            <Text><strong>Exercise Type:</strong> {workout.exerciseType}</Text>
            <Text><strong>Duration:</strong> {workout.duration} minutes</Text>
            <Text><strong>Intensity:</strong> {workout.intensity}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default WorkoutList;