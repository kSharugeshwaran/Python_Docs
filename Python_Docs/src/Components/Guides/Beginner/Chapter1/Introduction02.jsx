import {
    chakra,
    Container,
    Stack,
    Text,
    Box,
    Divider,
    Code,
} from '@chakra-ui/react';

const Introduction02 = () => {
    return (
        <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14} bg="#011627" color="white">
            <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
                <Stack direction="column" spacing={6} justifyContent="center">
                    <chakra.h1 fontSize="51" lineHeight={1} fontWeight="bold" textAlign="left">
                        Introduction to Programming
                    </chakra.h1>
                    <Divider />
                    <Box>
                        <Content fontSize="25px" color="white" mb="10">
                            Alright, let's talk about programming - it's like giving instructions to a computer, telling it how to solve a problem. Imagine it's a recipe for a robot chef!
                        </Content>

                        <chakra.h1 fontSize="32" lineHeight={1} fontWeight="bold" textAlign="left">
                            How Programming Works:
                        </chakra.h1>
                        <Content mt={4} fontSize="25px" color="white" mb="10">
                            When we say programming, we mean taking a step-by-step plan (called an algorithm) and turning it into a language that the computer understands. Think of it as translating your ideas into computer talk. And guess what? There are different languages for this job!
                        </Content>

                        <chakra.h1 fontSize="32" lineHeight={1} fontWeight="bold" textAlign="left">
                            Talking to Computers:
                        </chakra.h1>
                        <Content mt={4} fontSize="25px" color="white" mb="10">
                            These languages are like secret codes that computers can read. They help us tell the computer what to do – control things, solve problems, and even chat with us. The words and rules we use in these languages are like the ABCs of computer communication.
                        </Content>

                        <chakra.h1 fontSize="32" lineHeight={1} fontWeight="bold" textAlign="left">
                            Easy vs. Computer Talk:
                        </chakra.h1>
                        <Content mt={4} fontSize="25px" color="white" mb="10">
                            Now, here's the cool part. Humans like us find it easy to use languages like Python or C++ to talk to computers. But here's the catch – computers only understand their special language, like a secret code made of numbers 0s and 1s. Every computer type has its own secret code!
                        </Content>
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

export default Introduction02;