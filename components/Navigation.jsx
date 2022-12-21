import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
export function Navigation({ navigation, settings }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex
        pt={{ base: "unset", md: "10px" }}
        pb={{ base: "unset", md: "10px" }}
        bg={"#4c4f51"}
        alignItems={"center"}
        justifyContent={"end"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box display={{ base: "none", md: "unset" }}>
          {navigation?.data?.slices.map((slice) => {
            return (
              <Flex key={slice.id}>
                <Breadcrumb fontSize={"16px"} color={"#fff"} as={"nav"}>
                  {slice.items.length > 0 && (
                    <BreadcrumbItem
                      flexDirection={{ base: "column", sm: "row" }}
                      pb={{ base: "5px", sm: "unset" }}
                    >
                      {slice.items.map((item, i) => {
                        return (
                          <PrismicLink field={item.contactlink} key={i}>
                            <Box className="item">
                              {i != 0 && (
                                <Text
                                  as="span"
                                  color="#ef483e"
                                  px="2"
                                  display={{ base: "none", sm: "unset" }}
                                >
                                  /
                                </Text>
                              )}
                              <PrismicText field={item.contact_details} />
                            </Box>
                          </PrismicLink>
                        );
                      })}
                    </BreadcrumbItem>
                  )}
                </Breadcrumb>
              </Flex>
            );
          })}
        </Box>
        <Box>
          {navigation?.data?.slices.map((slice) => {
            return (
              <Flex key={slice.id} display={{ base: "none", md: "unset" }}>
                <Breadcrumb fontSize={"16px"} color={"#000"} as={"nav"}>
                  {slice.items.length == 3 && (
                    <BreadcrumbItem>
                      <Button
                        bg={"#ff4438"}
                        ml={"20px"}
                        mr={"20px"}
                        color={"#fff"}
                        borderRadius={"0"}
                        _hover={{}}
                      >
                        <PrismicLink document={slice.primary.button_link}>
                          <PrismicText field={slice.primary.button_text} />
                        </PrismicLink>
                      </Button>
                    </BreadcrumbItem>
                  )}
                </Breadcrumb>
              </Flex>
            );
          })}
        </Box>
      </Flex>
      <Box bg={{ base: "#000", md: "#2c2e35" }} px={6} pos="relative" >
        <Flex justifyContent="space-between" alignItems="center">
          <HStack spacing={8} alignItems={"center"}>
            <Flex
              justifyContent={{ base: "center", md: "flex-start", lg: "end" }}
            >
              <Box
                h={{ base: "80%", sm: "100%" }}
                w={{ base: "80%", sm: "100%" }}
              >
                <PrismicLink href="/">
                  {prismicH.isFilled.image(settings?.data?.logo) && (
                    <PrismicNextImage field={settings.data.logo} />
                  )}
                </PrismicLink>
              </Box>
            </Flex>
          </HStack>
          <IconButton
            bg={{ base: "#000", md: "#2c2e35" }}
            size={"md"}
            icon={isOpen ? <CloseIcon color="#ff3e34" fontSize="25px" /> : <HamburgerIcon color="#ff3e34" fontSize="50px" />}
            aria-label={"Open Menu"}
            onClick={isOpen ? onClose : onOpen}
            _hover={{
              background: "unset"
            }}
            _focus={{
              background: "unset"
            }}
          />
        </Flex>

        {isOpen ? (
          <Box
            bg={{ md: "#fff" }}
            h={{ md: "655px" }}
            w={{ md: "260px" }}
            color={{ base: "#6c6f70", md: "#000" }}
            mr={{ base: "-24px", md: "unset" }} ml={{ base: "-24px", md: "unset" }}
            right={{ md: "0" }}
            pos={{ md: "absolute" }}>
            <Stack as={"nav"} spacing={4} pb="25px" bg="#fff" pl={{ base: "0", md: "20px" }} textAlign={{base:"center", md:"left"}}>
              {navigation?.data.slices.map((slice, i) => {
                return (
                  <Menu key={slice.id}>
                    <PrismicLink field={slice.primary.link}>
                      <MenuButton>
                          <PrismicText field={slice.primary.name} />
                      </MenuButton>
                    </PrismicLink>
                    {slice.items.length > 0 && (
                      <MenuList color="#000">
                        {slice.items.map((item, i) => {
                          return (
                            <MenuItem key={i}>
                              <PrismicLink field={item.link}>
                                <PrismicText field={item.name} />
                              </PrismicLink>
                            </MenuItem>
                          );
                        })}
                      </MenuList>
                    )}

                  </Menu>
                );
              })}
            </Stack>
            <Box bg="#4c4f51"
              padding="10px"
              mb="-20px"
              display={{ md: "none" }}>
              <Box>
                {navigation?.data?.slices.map((slice, i) => {
                  return (
                    <Flex key={slice.id} justifyContent="center">
                      <Breadcrumb fontSize={"16px"} color={"#fff"} as={"nav"} >
                        {slice.items.length > 0 && (
                          <BreadcrumbItem
                            flexDirection="column"
                            pb={{ base: "5px", sm: "unset" }}
                          >
                            {slice.items.map((item, i) => {
                              return (
                                <PrismicLink field={item.contactlink} key={i}>
                                  <Box className="item">
                                    <PrismicText field={item.contact_details} />
                                  </Box>
                                </PrismicLink>
                              );
                            })}
                          </BreadcrumbItem>
                        )}
                      </Breadcrumb>
                    </Flex>
                  );
                })}
              </Box>
              <Flex justifyContent="center" padding="1.5">
                {navigation?.data?.slices.map((slice) => {
                  return (
                    <Flex key={slice.id}>
                      <Breadcrumb fontSize={"16px"} color={"#000"} as={"nav"}>
                        {slice.items.length == 3 && (
                          <BreadcrumbItem>
                            <Button
                              bg={"#ff4438"}
                              ml={"20px"}
                              mr={"20px"}
                              color={"#fff"}
                              borderRadius={"0"}
                              _hover={{}}
                            >
                              <PrismicLink document={slice.primary.button_link}>
                                <PrismicText field={slice.primary.button_text} />
                              </PrismicLink>
                            </Button>
                          </BreadcrumbItem>
                        )}
                      </Breadcrumb>
                    </Flex>
                  );
                })}
              </Flex>
            </Box>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
