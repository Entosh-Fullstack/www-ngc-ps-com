import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Flex, VStack, Box, useBreakpointValue } from "@chakra-ui/react";


const CardsSection = ({ slice }) => (
  <Flex w="full">
    <VStack
      direction="row"
      justify="center"
      w={{ md: "90%", xl: "85%" }}
      p="0 40px"
      margin={"auto"}
      px={useBreakpointValue({ base: 4, md: 8 })}
    >
      <Box
        p={{ base: "15vw 0 4vw", lg: "72px 0 0" }}
        _before={{
          content: `""`,
          position: "absolute",
          m: "auto",
          right: "0",
          left: "0",
          mt: "-8px",
          w: "95px",
          borderTop: "8px solid #4d8b3f",
        }}
      >
        <Box
          pt="8px"
          pb="14px"
          margin="auto"
          w={{ base: "64%", lg: "full" }}
          color="#53575a"
          fontSize={{ base: "5vw", lg: "44px" }}
          lineHeight={1.2}
          textAlign="center"
        >
          <PrismicRichText field={slice.primary.title} />
        </Box>
      </Box>

      {slice.primary.card_count ?
        <Flex
          flexWrap={{ base: "wrap", xl: "nowrap" }}
          justifyContent={"space-between"}
          p="30px 0 10%"
          w={{ base: "86%", lg: "93%" }}
        >
          {
            slice?.items?.map((item, i) =>
              <>
                <Flex
                  key={i}
                  h={{ base: "38vw", md: "320px" }}
                  w={{ base: "47%", lg: "30%", xl: "22%" }}
                  mb="40px"
                >
                  <section>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mx="auto"
                      h="100%"
                      color="#fff"
                      fontSize={{ base: "5vw", lg: "44px" }}
                      fontWeight="bold"
                      textAlign="center"
                    >
                      <Box
                        m={{ base: "0 20px", sm: "0 33px" }}
                        borderBottom={"4px solid transparent"}
                        _hover={{
                          borderBottom: "4px solid #ef483e",
                        }}>
                        <PrismicRichText field={item.text_content} />
                      </Box>
                    </Box>
                  </section>
                </Flex>
                <style jsx>{`
                section{
                  background-image: url("${item.background_image.url}");
                  background-size: cover;
                  background-position: center;
                  height: inherit;
                  width: 100%;
                }
              `}</style>
              </>
            )
          }
        </Flex>
        :
        <Flex
          flexWrap={{ base: "wrap" }}
          justifyContent={{ base: "space-evenly", sm: "space-between" }}
          p="30px 0 10%"
          w={{ base: "full", sm: "86%", lg: "full" }}
        >
          {
            slice?.items?.map((item, i) =>
              <>
                <Flex
                  key={slice.id}
                  h={{ base: "30vw", sm: "26vw", md: "240px" }}
                  w={{ base: "45%", sm: "30%", xl: "230px" }}
                  mb={{ base: "15px", lg: "1%" }}
                >
                  <section>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-evenly"
                      mx="auto"
                      h="100%"
                      color="#fff"
                      fontSize={{ base: "4.5vw", sm: "2.5vw", lg: "30px" }}
                      fontWeight="bold"
                      textAlign="center"
                    >
                      <Box
                        m={{ base: "0 20px", sm: "0 33px" }}
                        borderBottom={"4px solid transparent"}
                        _hover={{
                          borderBottom: "4px solid #ef483e",
                        }}>
                        <PrismicRichText field={item.text_content} />
                      </Box>
                    </Box>
                  </section>
                </Flex>
                <style jsx>{`
                section{
                  background-image: url("${item.background_image.url}");
                  background-size: cover;
                  background-position: center;
                  height: inherit;
                  width: 100%;
                }
              `}</style>
              </>
            )
          }
        </Flex>
      }
    </VStack>
  </Flex >
)
export default CardsSection