import {
  Stack,
  Flex,
  Grid,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { PrismicRichText } from "@prismicio/react";
import React from 'react'

const ProductDetail = ({ slice }) => (
  <>
    <Grid
      row={{ base: "1", md: "2" }}
      gridTemplateRows={{ base: "225px 480px", sm: "225px 360px", md: "360px 1fr", xl: '270px 1fr' }}
      gridTemplateColumns={{ base: "100%", md: '255px 1fr' }}
    >
      <Flex
        justifyContent={"center"}
        bg={"radial-gradient(#d8d6d6, #54575a)"}
        p="10px"
        borderRight={{ base: "none", md: "solid 4px #ef483e" }}
      >
        <img src={slice.primary.product_image.url} alt={slice.primary.product_image.alt} />
      </Flex>
      <section>
        <Stack
          w={{ base: "85%", md: "64%" }}
          spacing={6}
          textColor="#fff;"
        >
          <Box
            color="#fff"
            fontSize={{ base: "3xl", lg: "40px" }}
            lineHeight={1.2}
          >
            <PrismicRichText field={slice.primary.title} />
          </Box>
          <Box fontSize="16px">
            <PrismicRichText field={slice.primary.description} />
          </Box>
        </Stack>
        <style jsx>{`
        section{
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url("${slice.primary.background_image.url}");
          background-size: cover;
          background-position: center;
        }
    `}</style>
      </section>
    </Grid>

    <Flex
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
      m={{ base: "30px auto", md: "55px auto" }}
      w={{ base: "85%", xl: "60%" }}
      color="#53575a"
      fontSize={{ base: "18px", md: "24px" }}
      rowGap={"20px"}
    >
      <PrismicRichText field={slice.primary.product_name} />

      <PrismicRichText field={slice.primary.product_type} />
    </Flex>

    <Flex
      flexDirection="column"
      m="auto"
      w={{ base: "85%", xl: "60%" }}
      fontSize={{ base: "14px", md: "16px" }}
      color="#53575a"
    >
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr
              p="16px"
              bg="#0070c0">
              {slice?.items?.map((item, i) =>
                <>
                  {item.add_table_category ?
                    <Th
                      key={i}
                      color="#fff"
                      fontWight="300"
                    >
                      <PrismicRichText field={item.table_category} />
                    </Th>
                    : ''}
                </>
              )}
            </Tr>
          </Thead>
          <Tbody>
            <Tr fontSize="16px">
              {slice?.items?.map((item, i) =>
                <>
                  {item.add_table_category ? '' :
                    <Td
                      key={i}
                      p="0"
                      className="child">
                      <PrismicRichText field={item.table_class} />
                    </Td>
                  }
                </>
              )}
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>

    <Flex
      flexDirection={{ base: "column", xl: "row" }}
      w={{ base: "85%", xl: "60%" }}
      m={{ base: "30px auto", md: "20px auto" }}
      columnGap="20px"
      rowGap={{ base: "30px", md: "0" }}
    >
      <Box
        w={{ base: "95%", xl: "62%" }}
        margin="auto"
        mt="0"
        color="#53575a"
      >
        <PrismicRichText field={slice.primary.product_details_right} />
      </Box>
      <Box
        w={{ base: "100%", xl: "38%" }}
        p="42px 2%"
        mt={{ base: "30px", xl: "0" }}
        color="#fff"
        bg={"#00629b"}
        borderLeft={{ base: "none", md: "solid 4px #ef483e" }}
      >
        <Box w="85%" m="auto">
          <PrismicRichText field={slice.primary.product_resources_left} />
        </Box>

        <form className='forms' name="contact" method="POST" data-netlify="true">
          <Flex
            pt={{ base: "10px", sm: "5px" }}
            flexDirection="column"
            w={{ base: "100%", md: "500px", xl: "auto" }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <Flex direction={{ base: "column", sm: "row" }} justify="space-between" w="100%" pl="10px" pr="10px" m="auto">
              <Box w={{ base: "100%", sm: "48%" }} pt={{ base: "10px", sm: "8px" }}>
                <input type="text" name="first-name" placeholder="FIRST NAME" />
              </Box>
              <Box w={{ base: "100%", sm: "48%" }} pt={{ base: "10px", sm: "8px" }}>
                <input type="text" name="last-name" placeholder="LAST NAME" />
              </Box>
            </Flex>

            <Box w="100%" pl="10px" pr="10px" pt={{ base: "10px", sm: "8px" }} m="auto">
              <input type="tel" name="phone" placeholder="PHONE" />
            </Box>
            <Box w="100%" pl="10px" pr="10px" pt={{ base: "10px", sm: "8px" }} m="auto">
              <input type="email" name="email" placeholder="EMAIL" />
            </Box>
          </Flex>

          <Box
            p="8px 10px 0"
            m={{ base: "0", xl: "auto" }}
            w={{ base: "100%", md: "500px", xl: "auto" }}
          >
            <textarea rows="4" name=" message" placeholder="MESSAGE"></textarea>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            w={{ base: "100%", md: "500px", xl: "auto" }}
          >
            <button className='btn' type="submit">Submit</button>
          </Box>
        </form>

      </Box>
    </Flex >
  </>
)

export default ProductDetail