import {
    chakra,
    Container,
    Stack,
    Text,
    Box,
    Divider,
    Code,
} from '@chakra-ui/react';

const Introduction04 = () => {
    return (
        <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14} bg="#011627" color="white">
            <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
                <Stack direction="column" spacing={6} justifyContent="center">
                    <chakra.h1 fontSize="51" lineHeight={1} fontWeight="bold" textAlign="left">
                        Why Start with Python?
                    </chakra.h1>
                    <Divider />
                    <Box>
                        <Content fontSize="25px" color="white" mb="10">
                            Let's talk about why Python is like the superhero sidekick you want when you're just starting your coding journey.
                        </Content>

                        <chakra.h1 fontSize="32" lineHeight={1} fontWeight="bold" textAlign="left">
                            Python, the Friendly Language:
                        </chakra.h1>
                        <Content mt={4} fontSize="25px" color="white" mb="10">
                            Imagine learning to ride a bike. You'd want a bike that's easy to handle, right? Well, Python is like that easy-to-ride bike for coding. It's known for being super friendly and simple, making it a fantastic starting point for anyone.
                        </Content>

                        <chakra.h1 fontSize="32" lineHeight={1} fontWeight="bold" textAlign="left">
                            Less Jargon, More Fun:
                        </chakra.h1>
                        <Content mt={4} fontSize="25px" color="white" mb="10">
                            Some coding languages throw around complicated words and rules, making it feel like solving a puzzle just to write a simple program. Not Python. It's like chatting with a friend – less techy jargon, more straightforward and fun conversations.
                        </Content>

                        <chakra.h1 fontSize="32" lineHeight={1} fontWeight="bold" textAlign="left">
                            The Huge Python Community:
                        </chakra.h1>
                        <Content mt={4} fontSize="25px" color="white" mb="10">
                            Imagine you're learning a new game, and there's a big group of friends who've been playing for ages. That's what Python offers – a massive community of developers who are friendly, helpful, and ready to guide you.
                        </Content>

                        <chakra.h1 fontSize="32" lineHeight={1} fontWeight="bold" textAlign="left">
                            Future-Ready Language:
                        </chakra.h1>
                        <Content mt={4} fontSize="25px" color="white" mb="10">
                            Coding is a bit like planting seeds. You want to choose a plant that'll grow into a mighty tree. Python is like that robust plant – it's used by big companies, startups, and even in cool fields like Artificial Intelligence. So, you're not just learning for today; you're gearing up for a future full of possibilities.
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

export default Introduction04;