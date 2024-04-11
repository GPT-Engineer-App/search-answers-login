import { Box, Heading, Text } from "@chakra-ui/react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        Welcome, {user.firstName}!
      </Heading>
      <Text>Email: {user.email}</Text>
      <Text>Role: {user.role}</Text>
    </Box>
  );
};

export default Dashboard;
