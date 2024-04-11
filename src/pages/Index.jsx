import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://backengine-e9sl.fly.dev/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/dashboard";
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
            Login
          </Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          {error && (
            <Text color="red.500" textAlign="center">
              {error}
            </Text>
          )}
          <Button colorScheme="blue" onClick={handleLogin}>
            Login
          </Button>
        </VStack>
        <Text mt={4} textAlign="center">
          Don't have an account?{" "}
          <Link as={RouterLink} to="/signup" color="blue.500">
            Sign Up
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Index;
