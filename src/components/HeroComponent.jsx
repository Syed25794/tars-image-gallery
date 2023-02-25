import { Box, Heading, Input, InputGroup, InputLeftElement, Text} from '@chakra-ui/react'
import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const HeroComponent = () => {
  return (
    <Box bgImage="url('./HeroSectionImage3.jpg')"  bgSize="cover" bgPosition="center" height={["25rem","30rem","40rem"]}  display="flex" flexDir="column" justifyContent="center" alignItems="center" gap={["0.5rem","0.8rem","1rem"]}>
      <Heading color="white" fontSize={["2xl","3xl","4xl"]} fontFamily="Montserrat">Download High Quality Images by creators</Heading>
      <Text fontSize="1rem" color="white" >Over 2.4 million+ stock Images by our talented community</Text>
      <InputGroup fontFamily="Monstserrat" w="75%"  h="3rem">
          <InputLeftElement  h="full" pointerEvents="none" children={<IoSearchOutline  color="gray.300" />}/>
          <Input h="full" bgColor="white" type="tel" fontSize="lg" placeholder="Search high resolution Images, categories, wallpapers" />
        </InputGroup>
    </Box>
  )
}

export default HeroComponent