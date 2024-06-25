import React, { useState } from 'react';
import { Container, VStack, Heading } from '@chakra-ui/react';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList';
import ProgressChart from '../components/ProgressChart';

const WorkoutLogging = () => {
  const [workouts, setWorkouts] = useState([]);

  const handleSubmit = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Workout Logging</Heading>
        <WorkoutForm onSubmit={handleSubmit} />
        <ProgressChart workouts={workouts} />
        <WorkoutList workouts={workouts} />
      </VStack>
    </Container>
  );
};

export default WorkoutLogging;