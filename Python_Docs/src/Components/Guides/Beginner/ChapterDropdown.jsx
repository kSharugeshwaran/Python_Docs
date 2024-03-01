
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Heading, Link as Ln, border, chakra, useColorModeValue } from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import React, { useState } from 'react'



const LineWithDot = () => {
    return (
        <Flex pos="relative" alignItems="center" mr="40px">
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                top="0px"
            ></chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    width="100%"
                    height="100%"
                    bottom="0"
                    right="0"
                    top="0"
                    left="0"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    backgroundColor="rgb(255, 255, 255)"
                    borderRadius="100px"
                    border="3px solid rgb(4, 180, 180)"
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};


const ChapterDropdown = ({ Chapter, topicList }) => {
    const [topics, setTopics] = useState(0)
    return (
        <div>
            <Flex>
                <LineWithDot />
                <AccordionItem w={1000} p={{ base: 3, sm: 2 }} color={"white"}
                    mb={4}
                    bg={"#1E2D3D"}
                    spacing={5}
                    rounded="lg"
                    alignItems="center"
                    pos="relative"
                    border="none"
                >
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton _hover={{ borderColor: "#FFCB1E" }} _focus={{ outline: "#FFCB1E" }}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Heading className='dropdowns' fontSize={"2xl"}>{Chapter}</Heading>
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {
                                    topicList.map((topic, id) => {
                                        if (Chapter == "Introduction") {
                                            // #283c52
                                            return (
                                                <Box p={3} fontSize={18} ml={8} >
                                                    <Link key={id} to={`Introduction/${id + 1}`} _hover={{ color: "#283c52" }} >{topic}</Link>
                                                </Box>
                                            )
                                        } else {
                                            return (
                                                <Link key={id} to={`02/${id + 1}`} >
                                                    <Box p={3} fontSize={18} ml={8} className='links' borderRadius={"md"}>
                                                        {topic}
                                                    </Box>
                                                </Link>
                                            )
                                        }


                                    })
                                }

                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Flex>
        </div>
    )
}

export default ChapterDropdown
