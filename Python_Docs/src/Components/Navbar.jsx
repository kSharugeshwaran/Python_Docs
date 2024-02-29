import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  Image,
  Button,
  Heading,
  Drawer,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaBell } from "react-icons/fa";
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";
import { BsFolder2, BsCalendarCheck } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { RiFlashlightFill } from "react-icons/ri";
import { FiBookOpen } from "react-icons/fi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export default function Index() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box className="box">
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justifyContent={{ base: "space-between", md: "flex-end" }}
          w="full"
          px="4"
          borderColor={useColorModeValue("inherit", "gray.700")}
          bg={useColorModeValue("#011627", "gray.800")}
          boxShadow="sm"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="md"
          />

          <Flex align="center">
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="Ahmad"
              src="https://avatars2.githubusercontent.com/u/37842853?v=4"
              cursor="pointer"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ ...props }) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue("#1E2D3D", "gray.800")}
    w="60"
    overflow={"hidden"}
    {...props}
  >
    <Flex px="10" py="35" align="center">
      <Image src="https://i.imgur.com/7X8eD5l.png"></Image>
    </Flex>
    <Flex
      direction="column"
      as="nav"
      fontSize="20"
      color="gray.600"
      className="SideBarClass"
      aria-label="Main Navigation"
      px="5"
      py="55"
      gap={5}
    >
      <NavItem icon={AiOutlineHome}>HOME</NavItem>
      <NavItem icon={AiOutlineTeam}>COMMUNITY</NavItem>
      <NavItem icon={BsCalendarCheck}>IDE</NavItem>
      <NavItem icon={IoChatbubbleEllipsesOutline}>FAQ</NavItem>
      <NavItem icon={BsFolder2}>ABOUT</NavItem>
    </Flex>
    <Flex
      direction="column"
      as="nav"
      color="gray.600"
      aria-label="Main Navigation"
      px="5"
      py="55"
      gap={5}
    >
      <Button
        bg={useColorModeValue("#011627")}
        color={useColorModeValue("white", "gray.900")}
        _hover={{
          bg: useColorModeValue("#FFCB1E", "gray.900"),
          color: useColorModeValue("#011627", "gray.900"),
        }}
      >
        {" "}
        LOG OUT
      </Button>
    </Flex>
  </Box>
);

const NavItem = (props) => {
  const color = useColorModeValue("gray.600", "gray.300");

  const { icon, children } = props;
  return (
    <Flex
      align="center"
      px="4"
      py="3"
      cursor="pointer"
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      color={useColorModeValue("white")}
      _hover={{
        bg: useColorModeValue("#FFCB1E", "gray.900"),
        borderRadius: "9px",
        color: useColorModeValue("gray.900", "gray.200"),
      }}
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="4"
          _groupHover={{
            color: color,
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};
