import { PropsWithChildren } from 'react';
import {
    Box,
    Container, Heading,

} from '@chakra-ui/react';

const CommingSoon = () => {
    return (
        <Box w="100vw" h="100vh" bg="#011627" color="white" alignItems={"center"} justifyContent="center" display="flex">
            <Box>
                <Heading>Coming Soon</Heading>
            </Box>
        </Box>
    );
};


export default CommingSoon;