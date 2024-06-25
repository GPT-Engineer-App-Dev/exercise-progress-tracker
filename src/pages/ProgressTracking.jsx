import React, { useState, useEffect } from 'react';
import { Container, VStack, Heading, Text, Box } from '@chakra-ui/react';
import ProgressChart from '../components/ProgressChart';

const ProgressTracking = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch this data from an API or local storage
    const mockWorkouts = [
      { exerciseType: 'Running', duration: '30', intensity: 'Medium' },
      { exerciseType: 'Weightlifting', duration: '45', intensity: 'High' },
      { exerciseType: 'Yoga', duration: '60', intensity: 'Low' },
      { exerciseType: 'Cycling', duration: '40', intensity: 'Medium' },
      { exerciseType: 'Swimming', duration: '50', intensity: 'High' },
    ];
    setWorkouts(mockWorkouts);
  }, []);

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Progress Tracking</Heading>
        <Text fontSize="lg" textAlign="center">View your workout history and performance metrics</Text>
        <Box>
          <ProgressChart workouts={workouts} />
        </Box>
        <Box>
          <Heading as="h3" size="md" mb={4}>Recent Workouts</Heading>
          {workouts.map((workout, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="md" mb={2}>
              <Text><strong>Exercise Type:</strong> {workout.exerciseType}</Text>
              <Text><strong>Duration:</strong> {workout.duration} minutes</Text>
              <Text><strong>Intensity:</strong> {workout.intensity}</Text>
            </Box>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default ProgressTracking;