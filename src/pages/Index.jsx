import { Container, VStack, Heading, Text, Button, Box, Flex, IconButton } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaAppleAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Fitness Tracker</Heading>
        <Text fontSize="lg" textAlign="center">Track your workouts, nutrition, and progress all in one place.</Text>
        <Flex width="100%" justifyContent="space-around">
          <Box textAlign="center">
            <IconButton aria-label="Workouts" icon={<FaRunning />} size="lg" isRound />
            <Text mt={2}>Workouts</Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Nutrition" icon={<FaAppleAlt />} size="lg" isRound />
            <Text mt={2}>Nutrition</Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Progress" icon={<FaDumbbell />} size="lg" isRound />
            <Text mt={2}>Progress</Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;