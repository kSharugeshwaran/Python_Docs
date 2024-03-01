import { PropsWithChildren } from 'react';
import {
  chakra,
  Container,
  Stack,
  Text,
  Box,
  Divider,
  Code,
} from '@chakra-ui/react';

const Introduction01 = () => {
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14} bg="#011627" color="white">
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center">
          <chakra.h1 fontSize="51" lineHeight={1} fontWeight="bold" textAlign="left">
            Welcome to the World of Computers
          </chakra.h1>
          <Divider />
          <Box>
            <Content fontSize="25px" color="white" mb="10">
              Welcome, Today, we're diving into the basics of computers. You know, those machines we see everywhere – at home, school, and pretty much all around us. Computers have become a part of our daily lives, making things easier in ways we can't imagine living without.
            </Content>
            <chakra.h1 fontSize="32" lineHeight={1} fontWeight="bold" textAlign="left">
              Understanding the Basics:
            </chakra.h1>
            <Content mt={4} fontSize="25px" color="white" mb="10">
              At its core, a computer is like a really smart assistant. It takes instructions and does things based on those instructions. Imagine you're the boss, and the computer is your trusty helper. You say what you need, and it gets to work, doing calculations and making your tasks a breeze.
            </Content>
            <chakra.h1 fontSize="32" lineHeight={1} fontWeight="bold" textAlign="left">
              Everyday Companions:
            </chakra.h1>
            <Content mt={4} fontSize="25px" color="white" mb="10">
              From schoolwork to games and chatting with friends, computers are like the all-in-one tool that makes life more fun and manageable. They're there to help, making sure you get things done efficiently.
            </Content>
            {/* <Code display="block" whiteSpace="pre" w="60%" mx="auto" p={4} borderRadius={5}
              children={
                `print("Hello World")
  print("Hello World")`
              }
            /> */}
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

const Content = ({ children, ...props }) => {
  return (
    <Text
      fontSize="md"
      textAlign="left"
      lineHeight="1.375"
      fontWeight="400"
      color="gray.500"
      {...props}
    >
      {children}
    </Text>
  );
};

export default Introduction01;