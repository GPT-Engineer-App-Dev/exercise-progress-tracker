import { Container, VStack, Heading, Text, Button, Box, Flex, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaRunning, FaDumbbell, FaAppleAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Fitness Tracker</Heading>
        <Text fontSize="lg" textAlign="center">Track your workouts, nutrition, and progress all in one place.</Text>
        <Flex width="100%" justifyContent="space-around">
          <Link to="/workout-logging">
            <Box textAlign="center">
              <IconButton as="span" aria-label="Workouts" icon={<FaRunning />} size="lg" isRound />
              <Text mt={2}>Workouts</Text>
            </Box>
          </Link>
          <Box textAlign="center">
            <IconButton aria-label="Nutrition" icon={<FaAppleAlt />} size="lg" isRound />
            <Text mt={2}>Nutrition</Text>
          </Box>
          <Link to="/progress-tracking">
            <Box textAlign="center">
              <IconButton as="span" aria-label="Progress" icon={<FaDumbbell />} size="lg" isRound />
              <Text mt={2}>Progress</Text>
            </Box>
          </Link>
        </Flex>
        <Button as={Link} to="/workout-logging" colorScheme="teal" size="lg">Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;