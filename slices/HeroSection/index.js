import {
  Stack,
  Flex,
  VStack,
  useBreakpointValue,
  Box,
  Image,
  Link
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from '@prismicio/react'

const HeroSection = ({ slice }) => (
  <section>
    <Flex w="full">
      <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack
          maxW={{ base: "100%", md: "86%" }}
          align="center"
          spacing={6}
        >
          <Box
            pt={{ base: "12%", md: "9%" }}
            pb={{ base: "5%", md: "45px" }}
            w={{ base: "90%", md: "72%" }}
            color="#fff"
            fontSize={{ base: "9vw", md: "84px" }}
            fontWeight="700"
            lineHeight={1.2}
            textAlign="center"
          >
            <PrismicRichText field={slice.primary.heading} />
          </Box>

          <Stack
            direction={{ base: "column", md: "row" }}
            flexWrap="wrap"
            justifyContent={{ base: "center", md: "space-between" }}
            w={{ base: "67%", md: "full" }}
            pt="45px"
            pb={{ base: "5%", md: "262px" }}
            m="auto"
          >
            {
              slice?.items?.map((item, i) =>
                <Flex key={i}
                  align={{ base: "space-evenly", md: "center" }}
                  direction={{ base: "row", md: "column", xl: "row" }}
                  gap={{ base: "10px", sm: "20px" }}
                  pb={{ base: "30px", md: "50px" }}
                  w={{ base: "99%", md: "45%", lg: "24%" }}
                  className="grid-items-container"
                >
                  <Image
                    src={item.image.url}
                    alt={item.image.alt}
                    h={{ base: "12vw", md: "60px" }}
                  />
                  <Box
                    align="left"
                    color="#fff"
                    fontSize={{ base: "6vw", md: "30px" }}
                    fontWeight="500" textAlign={{ base: "left", md: "center", xl: "left" }}
                  >
                    <PrismicRichText field={item.image_title} />
                  </Box>
                </Flex>
              )
            }
          </Stack>
        </Stack>
      </VStack>
    </Flex>
    <style jsx>{`
        section{
          background-image: url("${slice.primary.banner.url}");
          background-size: cover;
          background-position: center;
        }
    `}</style>
  </section >
)
export default HeroSection
