import {
    chakra,
    Container,
    Stack,
    Text,
    Box,
    Divider,
    Code,
} from '@chakra-ui/react';

const Introduction09 = () => {
    return (
        <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14} bg="#011627" color="white">
            <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
                <Stack direction="column" spacing={6} justifyContent="center">
                    <chakra.h1 fontSize="51" lineHeight={1} fontWeight="bold" textAlign="left">
                        Introduction to Coding with Visual Studio Code
                    </chakra.h1>
                    <Divider />
                    <Box>
                        <Content fontSize="25px" color="white" mb="10">
                            Imagine Visual Studio Code (VSCode) as a super cool tool that helps you write and create computer programs. It's like a special notebook where you can write instructions, and the computer will follow them to do awesome things.
                        </Content>

                        <chakra.h1 fontSize="32" lineHeight={1} fontWeight="bold" textAlign="left">
                            Step 1: Get VSCode
                        </chakra.h1>
                        <Content mt={4} fontSize="25px" color="white" mb="10">
                            First, we need to get this magical tool:
                        </Content>

                        <Content mt={4} fontSize="25px" color="white" mb="10">
                            Go to the VSCode website.
                        </Content>

                        <Content mt={4} fontSize="25px" color="white" mb="10">
                            Click on the big button that says "Download for Free."
                        </Content>

                        <Content mt={4} fontSize="25px" color="white" mb="10">
                            Now, follow the instructions to install it on your computer. It's like getting a new game or app.
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

export default Introduction09;