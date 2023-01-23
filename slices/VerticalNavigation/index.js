import React, { useEffect, useState } from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Image, Box, Flex, Button, Text } from '@chakra-ui/react';
/**
 * @typedef {import("@prismicio/client").Content.VerticalNavigationSlice} VerticalNavigationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VerticalNavigationSlice>} VerticalNavigationProps
 * @param { VerticalNavigationProps }
 */

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const VerticalNavigation = ({ slice }) => {

  const [items, setItems] = useState([])
  const [product, setProduct] = useState({})

  useEffect(() => {
    setProduct(slice.items[0])
    setItems(slice.items)
  }, [])

  const handleContact = (item) => {
    setProduct(item)
  }

  return (
    <section>
      {/* Desktop */}
      <Flex display={{ base: "none", sm: "none", md: "flex", xl: "flex" }} justifyContent={"center"} bg={"#e5e1dd"}>
        <Tabs defaultIndex={0}  >
          <Flex justifyContent={"space-between"} display={{ base: "block", sm: "block", md: "flex", xl: "flex" }}>
            <Box width={{ base: "100%", md: "200px" }} bg="#e5e1dd">
              <Flex justifyContent={"center"}>
                <TabList display={"block"} className="tablist">
                  {slice.items.map((item, i) =>
                    <Tab
                      key={i}
                      maxW="100%" w={{ base: "250px", sm: "100%" }}
                      bg={"#ef483e"}
                      color={"#fff"}
                      fontSize="14px"
                      fontWeight={"400"}
                      _selected={{
                        bg: '#fff',
                        borderColor: '#4D8B3F',
                        borderLeft: '3px solid',
                        color: '#4D8B3F'
                      }}>
                      <Box>
                        {item.navlist}
                      </Box>
                    </Tab>
                  )}
                </TabList>
              </Flex>
            </Box>
            <Box
              width={{
                base: "100%",
                sm: "500px"
              }}
              bg="#fff"
              pt="10px"
              lineHeight="2"
            >
              <Box color="#4d8b3f" fontWeight={600} ml="40px" mt="20px" fontSize={18}>
                <PrismicRichText field={slice.primary.titlerightcontent} />
              </Box>
              <TabPanels>
                <TabPanels>
                  {
                    slice?.items?.map((item, i) =>
                      <TabPanel key={i}
                        ml="25px"
                        color="#585c5e"
                        fontSize={20}
                        fontWeight={400} className="resource-link">
                        <PrismicRichText field={item.navcontent} />
                      </TabPanel>
                    )
                  }
                </TabPanels>
              </TabPanels>
            </Box>
          </Flex>
        </Tabs>
      </Flex>
      {/* Mobile */}
      <Box display={{ base: "block", sm: "block", md: "none", xl: "none" }}>
        <Swiper slidesPerView={3}>
          {items.map((item, i) =>
            <SwiperSlide key={i} onClick={() => handleContact(item)}
              style={{ display: 'flex', backgroundColor: product.navlist === item.navlist ? '#fff' : '#ef483e', color: product.navlist === item.navlist ? '#4D8B3F' : '#fff', height: '48px', paddingX: '10px', paddingLeft: '10px', borderColor: product.navlist === item.navlist ? '#4D8B3F' : '#fff', borderLeft: product.navlist === item.navlist ? '3px solid' : '', justifyContent: 'center', alignItems: 'center' }}>
              <Box>
                {item.navlist}
              </Box>
            </SwiperSlide>
          )}
        </Swiper>
        <Flex justifyContent={"center"} bg={"#e5e1dd"}>
          <Box width='100%' bg="#fff" pt="10px" lineHeight="2">
            <Box color="#4d8b3f" fontWeight={600} ml="40px" mt="20px" fontSize={18}>
              <PrismicRichText field={slice.primary.titlerightcontent} />
            </Box>
            <Box ml="25px" color="#585c5e" fontSize={20} fontWeight={400} className="resource-link">
              <PrismicRichText field={product.navcontent} />
            </Box>
          </Box>
        </Flex>
      </Box>
    </section>
  )
}

export default VerticalNavigation