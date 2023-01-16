import {
  Flex,
  VStack,
  Box,
  useBreakpointValue,
  Image
} from "@chakra-ui/react";
import { PrismicRichText } from '@prismicio/react'

const GridSection = ({ slice }) => (
  <Flex w="full">
    <VStack
      w="full"
      justify="center"
      px={useBreakpointValue({ base: 4, md: 8 })}
      direction="row"
      my="25px"
    >
      <Box
        pt="43px"
        _before={{
          content: `""`,
          position: "absolute",
          m: "auto",
          right: "0",
          left: "0",
          mt: "-8px",
          w: "90px",
          borderTop: "6px solid #ef483e",
        }}
      >
        <Box
          py="10px"
          color="#53575a"
          fontSize={{ base: "3xl", lg: "44px" }}
          lineHeight={1.2}
          textAlign="center"
        >
          <PrismicRichText field={slice.primary.title} />
        </Box>
      </Box>

      <Flex
        flexWrap="wrap"
        direction="row"
        justify="center"
        py="30px"
        // w={{ xl: "80em", base: "full" }}
        w={{ md: "90%", xl: "87%" }}
        id="grid-container"
      >
        {
          slice?.items?.map((item, i) =>
            <Box
              key={i}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              flexDirection={"column"}
              w={{ base: "49%", sm: "33%", xl: "20%" }}
              h={{ base: "auto", lg: "221px" }}
              p="0 15px"
              borderRight="solid 1px #2c2e35"
              borderLeft={{ base: "solid 1px #2c2e35", sm: "none" }}
              borderBottom="solid 1px #2c2e35"
              _hover={{
                textDecoration: "none",
              }}
              className="grid-item"
            >
              {item.image.url ?
                <Flex h="auto" w="90%" justify="center" alignItems="center">
                  <Image src={item.image.url} alt={item.image.alt} />
                </Flex>

                : ""
              }
              <Box
                my="10px"
                color="#626669"
                fontSize="18px"
                fontWeight="bold"
                textAlign="center"
                _hover={{
                  color: "#ef483e",
                }}
              >
                <Flex flexDirection="column">
                  <PrismicRichText field={item.text_content} />
                </Flex>
              </Box>
            </Box>
          )
        }
      </Flex>
    </VStack >
  </Flex >
)
export default GridSection