import { Flex, Spacer, Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={6} bg="gray.800" color="white">
      <Box>
        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="lg">
          My App
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Link as={RouterLink} to="/signup" mr={4}>
          Sign Up
        </Link>
        <Link as={RouterLink} to="/">
          Login
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
