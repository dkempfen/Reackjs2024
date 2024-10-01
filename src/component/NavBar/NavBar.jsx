import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
  } from "@chakra-ui/react";
  import { MoonIcon, SunIcon } from "@chakra-ui/icons";
  import { CartWidget } from "../CartWidget";
  import { useCategory } from "../../hooks";
  import { Link } from "react-router-dom";
  import { FaMoon, FaSun, FaCode, FaShoppingCart  } from "react-icons/fa";

  
  export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const { categories } = useCategory();
  
    return (
      <>
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box display="flex" alignItems="center">
            <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                <FaShoppingCart style={{ height: "40px", width: "40px", color: "#2c7a7b", marginRight: "10px" }} />
                <Box fontSize="2xl" fontWeight="bold" color={useColorModeValue("teal.500", "teal.200")}>
                Shop
                </Box>
            </Link>
            </Box>
            <Menu>
            <MenuButton 
                as={Button} 
                cursor="pointer" 
                style={{ marginLeft: 30 }} 
                bg={useColorModeValue("teal.400", "teal.600")} 
                color="white"
                _hover={{ bg: useColorModeValue("teal.500", "teal.700") }} 
                borderRadius="md" 
                boxShadow="md"
                p={4}
            >
                Categorías
            </MenuButton>
            <MenuList height={"300px"} overflowY={"scroll"} boxShadow="lg" borderRadius="lg">
                {categories.map((category) => (
                <MenuItem 
                    key={category.slug} 
                    _hover={{ bg: useColorModeValue("gray.200", "gray.700"), transition: "0.3s ease" }} 
                    p={4}
                >
                    <Link to={`/category/${category.slug}`} style={{ display: "flex", alignItems: "center" }}>
                    {/* Icono o imagen al lado del texto de la categoría */}
                    <Avatar 
                        size="xs" 
                        name={category.name} 
                        src={`https://example.com/path-to-category-icon/${category.slug}.png`} 
                        mr={2}
                    />
                    {category.name}
                    </Link>
                </MenuItem>
                ))}
            </MenuList>
            </Menu>

            <Flex alignItems={"center"}>
              <CartWidget />
              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <FaMoon /> : <FaSun />}
                </Button>
                
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&facialHairType=BeardLight&clotheType=BlazerShirt"}
                      />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={"https://ui-avatars.com/api/?name=John+Doe"}
                        />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  };