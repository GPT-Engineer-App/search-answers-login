import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input, Text, VStack, Link, Select } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await fetch("https://backengine-e9sl.fly.dev/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password, role }),
      });

      if (response.ok) {
        window.location.href = "/";
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bg="gray.100">
      <Box p={8} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="white" width="400px">
        <VStack spacing={6} align="stretch">
          <Heading as="h1" size="xl" textAlign="center">
            Sign Up
          </Heading>
          <FormControl id="firstName">
            <FormLabel>First Name</FormLabel>
            <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </FormControl>
          <FormControl id="lastName">
            <FormLabel>Last Name</FormLabel>
            <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <FormControl id="role">
            <FormLabel>Role</FormLabel>
            <Select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select a role</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </Select>
          </FormControl>
          {error && (
            <Text color="red.500" textAlign="center">
              {error}
            </Text>
          )}
          <Button colorScheme="blue" onClick={handleSignUp}>
            Sign Up
          </Button>
        </VStack>
        <Text mt={4} textAlign="center">
          Already have an account?{" "}
          <Link as={RouterLink} to="/" color="blue.500">
            Login
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default SignUp;
