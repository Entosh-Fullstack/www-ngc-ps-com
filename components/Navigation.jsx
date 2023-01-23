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
  useOutsideClick,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";

export function Navigation({ navigation, settings }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const ref = React.useRef();
  // useOutsideClick({
  //   ref: ref,
  //   handler: () => onClose(false),
  // });

  // Sidemenu scroll animation
  const [stickyClass, setStickyClass] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  // Sidemenu scroll animation

  return (
    <Box>
      <Flex
        pt={{ base: "unset", md: "10px" }}
        pb={{ base: "unset", md: "10px" }}
        bg={"#4c4f51"}
        alignItems={"center"}
        justifyContent={"end"}
        flexDirection={{ base: "column", xl: "row" }}
        className="nav-bar-container"
      >
        <Box display={{ base: "none", md: "unset" }}>
          {navigation?.data?.slices.map((slice) => {
            return (
              <Flex key={slice.id} flexDirection="column">
                <Breadcrumb fontSize={"26px"} color={"#fff"} as={"nav"}>
                  {slice.items.length > 0 && (
                    <BreadcrumbItem
                    display={{base:"block", sm:"flex"}}
                      flexDirection={{ base: "column", sm: "row" }}
                      pb={{ base: "5px", sm: "unset" }}
                      textAlign="center"
                    >
                      {slice.items.map((item, i) => {
                        return (
                          <PrismicLink field={item.contactlink} key={i}>
                            <Box className="item" >
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
      <Box bg={{ base: "#000", md: "#2c2e35" }} px={6} pos="relative">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          className="logo-burger-container"
        >
          <HStack spacing={8} alignItems={"center"}>
            <Flex
              justifyContent={{ base: "flex-start", lg: "end" }}
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
            icon={
              isOpen ? (
                <CloseIcon color="#ff3e34" fontSize="25px" />
              ) : (
                <HamburgerIcon color="#ff3e34" fontSize="50px" />
              )
            }
            aria-label={"Open Menu"}
            onClick={isOpen ? onClose : onOpen}
            _hover={{
              background: "unset",
            }}
            _focus={{
              background: "unset",
            }}
          />
        </Flex>

        {isOpen ? (
          <Box
            className={`navbar ${stickyClass}`}
            bg={{ md: "#fff" }}
            h={{ md: "100vh" }}
            w={{ md: "367px" }}
            color={{ base: "#6c6f70", md: "#000" }}
            mr={{ base: "-24px", md: "unset" }}
            ml={{ base: "-24px", md: "unset" }}
            right={{ md: "0" }}
            top={"84px"}
            pos={{ md: "fixed" }}
          >
            {/* Desktop */}
            <Stack
              as={"nav"}
              spacing={4}
              bg="#fff"
              pt={"19px"}
              pb="25px"
              pl={{ base: "0", md: "41px" }}
              textAlign={{ base: "center", md: "left" }}
              fontSize="26px"
              display={{base:"none", md:"flex"}}
            >
              {navigation?.data.slices.map((slice, i) => {
                return (
                  <Box key={slice.id} className="dropdown" >
                    <PrismicLink field={slice.primary.link}>
                      <Box className="dropbtn" >
                        <Flex alignItems="center">
                        <PrismicText field={slice.primary.name} />{slice.items.length > 0 && (<Box ><ChevronRightIcon color="#4c4f51" fontSize="36px" /></Box>)}
                        </Flex>
                      </Box>
                    </PrismicLink>

                    {slice.items.length > 0 && (
                      <Box
                        color="#000"
                        className="dropdown-content"
                        onClick={onClose}
                        
                      >
                        {slice.items.map((item, i) => {
                          return (
                            <Box key={i} >
                              <PrismicLink field={item.link}>
                                <PrismicText field={item.name} />
                              </PrismicLink>
                            </Box>
                          );
                        })}
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Stack>
            {/* Mobile */}
            <Stack
              display={{ base: "flex", md: "none" }}
              as={"nav"}
              spacing={4}
              pb="25px"
              bg="#fff"
              pl={{ base: "0", md: "20px" }}
              textAlign={{ base: "center", md: "left" }}
            >
              {navigation?.data.slices.map((slice, i) => {
                return (
                  <Menu key={slice.id}>
                    <PrismicLink field={slice.primary.link}>
                      <MenuButton>
                        <PrismicText field={slice.primary.name} />
                      </MenuButton>
                    </PrismicLink>
                    {slice.items.length > 0 && (
                      <Box width="100%">
                        <MenuList
                          color="#000"
                          onClick={onClose}
                          minWidth="100vw"
                        >
                          {slice.items.map((item, i) => {
                            return (
                              <MenuItem key={i} justifyContent="center">
                                <PrismicLink field={item.link}>
                                  <PrismicText field={item.name} />
                                </PrismicLink>
                              </MenuItem>
                            );
                          })}
                        </MenuList>
                      </Box>
                    )}
                  </Menu>
                );
              })}
            </Stack>
            <Box
              bg="#4c4f51"
              padding="10px"
              mb="-20px"
              display={{ md: "none" }}
            >
              <Box>
                {navigation?.data?.slices.map((slice, i) => {
                  return (
                    <Flex key={slice.id} justifyContent="center">
                      <Breadcrumb fontSize={"16px"} color={"#fff"} as={"nav"}>
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
                            >
                              <PrismicLink document={slice.primary.button_link}>
                                <PrismicText
                                  field={slice.primary.button_text}
                                />
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
