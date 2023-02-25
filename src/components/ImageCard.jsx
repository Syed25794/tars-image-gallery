import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BiLike } from 'react-icons/bi';

const ImageCard = () => {
  return (
    <Box   w="25rem" m="auto" marginBottom="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
        <Box marginTop="10px" >
            <Image  borderRadius="1rem 1rem 0rem 0rem" src="./Mountain.png" alt="uSER" />
        </Box>
        <Box  w="full" h="5rem" display="flex">
            <Image m="15px 0px 0px 10px" w="50px" h="50px" borderRadius="50%" src="./Mountain.png" alt="Mountain" />
            <Box>
                <Text m="15px 0px 0px 20px" fontSize="1rem" fontWeight="700" fontFamily="Montserrat">User name</Text>
                <Text m="0px 0px 0px 20px" fontSize="0.9rem" fontStyle="italic" fontFamily="Poppins">user gmail</Text>
            </Box>
            <Box display="flex" marginLeft="10rem" marginTop="25px">
              <Box w="2rem" fontSize="2xl"><BiLike /></Box>
              <Text fontWeight="bold">2.3k</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default ImageCard