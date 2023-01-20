import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import {
  Box,
  Stack,
  Flex,
  VStack,
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';
/**
 * @typedef {import("@prismicio/client").Content.TeamProfileSlice} TeamProfileSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamProfileSlice>} TeamProfileProps
 * @param { TeamProfileProps }
 */
const TeamProfile = ({ slice }) => (
  <section>
    <Flex flexDirection="column">
      <Flex
        w='100%'
        h='400px'
        bg='blue'
        bgImage={`url(${slice.primary.background_image.url})`}
        bgSize='cover'
        bgAttachment='fixed'
        bgPos='50% 100%'
        pos='relative'
        bgRepeat='no-repeat' >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
          _before={{
            content: `""`,
            backgroundColor: '#ef483e',
            width: '84px',
            height: '2px',
            left: '0',
            right: '0',
          }}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Box
              pt="20px"
              pb="20px"
              color={'white'}
              lineHeight={1.2}
              textAlign={"center"}>
              <Box fontSize={{base:"20px", sm:"25px", md:"30px"}}>
                <PrismicRichText field={slice.primary.heading_1} />
              </Box>
              <Box fontSize={{base:"18px", sm:"24px", md:"28px"}} fontWeight={"400"}>
                <PrismicRichText field={slice.primary.heading_2} />
              </Box>
              <Box fontSize={{base:"20px", md:"24px"}} pt="2" fontWeight={"600"}>
                <PrismicRichText field={slice.primary.description} />
              </Box>
            </Box>
          </Stack>
        </VStack>
      </Flex>
      <Accordion allowToggle pos={"relative"}>
        <AccordionItem>
          <AccordionButton justifyContent={"center"} pos={"absolute"}
            zIndex={1}
            mt="-60px"
            fontSize="40px"
            color="#fff">
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Flex justifyContent={"center"}>
              <Flex justifyContent="center">
                <Grid templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)", "2xl":"repeat(3, 1fr)" }} justifyItems="center" py={6} margin="0">
                  {
                    slice.items.map((item, i) =>
                      <GridItem
                        key={i}
                        className='team-profile'
                        maxWidth={"800px"}
                        w={{ base: "300px", sm: "350px", md: "450px", xl: "450px", '2xl': "550px" }}
                        h="auto"
                        minH="100px"
                        rounded={'sm'}
                        pt={5} mt={5}
                        pb={5}
                        m={{base:"0", sm:"5"}} p={{base:"none", md:"5"}}
                        overflow={'hidden'}
                        bg="white"
                      >
                        <Box h={{base:'270px', sm:"300px"}}>
                          <Box className='image-profile'
                            borderRadius="50%"
                            alt={'Blog Image'}>
                            <Image src={item.profile_image.url} alt={item.profile_image.alt} key={i} w={{ base: "250px", md: "300px" }} h={{ base: "250px", md: "300px" }} />
                          </Box>
                        </Box>
                        <Box p={4}>
                          <Flex justifyContent="center" alignItems="center" flexDirection="column">
                            <Box color="#4d8b3f" fontWeight={600} fontSize={{ base: "18px", md: "22px" }}>
                              <PrismicRichText field={item.name} />
                            </Box>
                            <Box fontSize={{ base: "14px", md: "18px" }} fontWeight={600} color="#6b6e71">
                              {item.position}
                            </Box>
                          </Flex>
                          <Box fontSize={{ base: "16px", md: "18px", xl: "20px" }}>
                            <PrismicRichText field={item.description} />
                          </Box>
                        </Box>
                      </GridItem>
                    )
                  }
                </Grid>
              </Flex>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  </section >

)

export default TeamProfile