import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="gray.900" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex align="center">
            <Heading as="h1" size="lg">Financial Times</Heading>
            <Spacer />
            <HStack spacing={8}>
              <Link href="#" color="white">Home</Link>
              <Link href="#" color="white">World</Link>
              <Link href="#" color="white">Business</Link>
              <Link href="#" color="white">Tech</Link>
              <Link href="#" color="white">Markets</Link>
              <Link href="#" color="white">Opinion</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Articles Section */}
        <Box flex="3" mr={{ md: 4 }}>
          <VStack spacing={8} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h2" size="md">Sample Article 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h2" size="md">Sample Article 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h2" size="md">Sample Article 3</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="sm">Advertisement</Heading>
              <Text mt={2}>Place your ad here.</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="sm">Additional Links</Heading>
              <VStack align="start" mt={2}>
                <Link href="#">Link 1</Link>
                <Link href="#">Link 2</Link>
                <Link href="#">Link 3</Link>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
            <Spacer />
            <HStack spacing={4} mt={{ base: 4, md: 0 }}>
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaLinkedin /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;