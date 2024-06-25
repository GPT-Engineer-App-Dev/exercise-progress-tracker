import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react';

const WorkoutForm = ({ onSubmit }) => {
  const [workout, setWorkout] = useState({
    exerciseType: '',
    duration: '',
    intensity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout(prevWorkout => ({
      ...prevWorkout,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(workout);
    setWorkout({ exerciseType: '', duration: '', intensity: '' });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="100%">
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Exercise Type</FormLabel>
          <Input
            name="exerciseType"
            value={workout.exerciseType}
            onChange={handleChange}
            placeholder="e.g. Running, Weightlifting"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Duration (minutes)</FormLabel>
          <Input
            name="duration"
            type="number"
            value={workout.duration}
            onChange={handleChange}
            placeholder="Enter duration in minutes"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Intensity</FormLabel>
          <Select
            name="intensity"
            value={workout.intensity}
            onChange={handleChange}
            placeholder="Select intensity"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="teal">Log Workout</Button>
      </VStack>
    </Box>
  );
};

export default WorkoutForm;