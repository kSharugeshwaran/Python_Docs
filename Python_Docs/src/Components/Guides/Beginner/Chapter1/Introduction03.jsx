import {
    chakra,
    Container,
    Stack,
    Text,
    Box,
    Divider,
    Code,
} from '@chakra-ui/react';

const Introduction03 = () => {
    return (
        <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14} bg="#011627" color="white">
            <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
                <Stack direction="column" spacing={6} justifyContent="center">
                    <chakra.h1 fontSize="51" lineHeight={1} fontWeight="bold" textAlign="left">
                        Compilers: Making Computer Talk Simple
                    </chakra.h1>
                    <Divider />
                    <Box>
                        <Content fontSize="25px" color="white" mb="10">
                            Let's dive into the world of compilers – the superheroes of making computer talk easy for us!
                        </Content>

                        <chakra.h1 fontSize="32" lineHeight={1} fontWeight="bold" textAlign="left">
                            What's a Compiler?
                        </chakra.h1>
                        <Content mt={4} fontSize="25px" color="white" mb="10">
                            Think of a compiler as a super-smart translator for computers. Its job is to take the instructions we write in a programming language (like Python or C++) and turn them into the special language computers understand. It's like having a language expert that speaks both human and computer!
                        </Content>

                        <chakra.h1 fontSize="32" lineHeight={1} fontWeight="bold" textAlign="left">
                            How Compilers Help:
                        </chakra.h1>
                        <Content mt={4} fontSize="25px" color="white" mb="10">
                            When we write code, we use words and sentences in a language we understand. But guess what? Computers don't get our language; they only understand their secret code. Here's where the compiler steps in. It takes our human-friendly code and transforms it into the computer's language, so the computer can follow our instructions.
                        </Content>

                        <chakra.h1 fontSize="32" lineHeight={1} fontWeight="bold" textAlign="left">
                            Why We Need Compilers:
                        </chakra.h1>
                        <Content mt={4} fontSize="25px" color="white" mb="10">
                            Imagine you're planning a surprise for a friend who speaks a different language. You need a translator to make sure your message gets across, right? Compilers do the same thing – they help us communicate with computers by translating our ideas into a language they can grasp.
                        </Content>

                        <chakra.h1 fontSize="32" lineHeight={1} fontWeight="bold" textAlign="left">
                            Making Sense of It:
                        </chakra.h1>
                        <Content mt={4} fontSize="25px" color="white" mb="10">
                            Remember, it's like having a buddy who can speak both our language and the computer's language. Compilers make our code understandable for the computer, ensuring our programs run smoothly.
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

export default Introduction03;