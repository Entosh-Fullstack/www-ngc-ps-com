import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PrismicRichText } from "@prismicio/react";

const BannerSectionWithMiddleContent = ({ slice }) => (
  <>
    {slice.primary.smaller_height ?
      <section>
        <Flex w="full" className="SmallerHeight">
          <VStack
            w="full"
            justify="center"
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          >
            <Stack
              maxW={{ base: "95%", md: "75%" }}
              align="center"
              spacing={6}
            >
              <Text
                // py="35%"
                color="#fff"
                fontSize={{ base: "3xl", lg: "4xl" }}
                lineHeight={1.2}
                textAlign="center"
                _before={{
                  content: `""`,
                  position: "absolute",
                  m: "auto",
                  right: "0",
                  left: "0",
                  mt: "-40px",
                  w: "84px",
                  borderTop: "2px solid #ef483e",
                }}
              >
                <PrismicRichText field={slice.primary.title} />
              </Text>
            </Stack>
          </VStack>
        </Flex>
        <style jsx>{`
          section{
            background-image: url("${slice.primary.background_image.url}");
            background-size: cover;
            background-position: center;
          }
      `}</style>
      </section>
      :
      <section>
        <Flex w="full">
          <VStack
            w="full"
            justify="center"
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          >
            <Stack
              maxW={{ base: "95%", md: "75%" }}
              align="center"
              spacing={6}
            >
              <Text
                // py="35%"
                color="#fff"
                fontSize={{ base: "3xl", lg: "4xl" }}
                lineHeight={1.2}
                textAlign="center"
                _before={{
                  content: `""`,
                  position: "absolute",
                  m: "auto",
                  right: "0",
                  left: "0",
                  mt: "-40px",
                  w: "84px",
                  borderTop: "2px solid #ef483e",
                }}
              >
                <PrismicRichText field={slice.primary.title} />
              </Text>
            </Stack>
          </VStack>
        </Flex>
        <style jsx>{`
        section{
          background-image: url("${slice.primary.background_image.url}");
          background-size: cover;
          background-position: center;
        }
    `}</style>
      </section>
    }

  </>
)

export default BannerSectionWithMiddleContent