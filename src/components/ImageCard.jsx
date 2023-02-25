import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BiLike } from 'react-icons/bi';

const ImageCard = ({user,urls,description }) => {
  return (
    <Box border="1px solid red"  w="25rem" m="auto" marginBottom="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" borderRadius="1rem 1rem 0rem 0rem">
        <Box>
            <Image borderRadius="1rem 1rem 0rem 0rem"  src={urls.regular} alt={description} />
        </Box>
        <Box h="6rem" display="flex" justifyContent="space-between">
            <Box margin="0rem 0.5rem 0rem 0.5rem" display="flex">
                <Image m="15px 0px 0px 10px" w="70px" h="70px" borderRadius="50%" src={user.profile_image.medium} alt="Mountain" />
                <Box marginTop="0.5rem">
                  <Text m="15px 0px 0px 10px" fontSize="1rem" fontWeight="700" fontFamily="Montserrat">{user.first_name}</Text>
                  <Text m="0px 0px 0px 10px" fontSize="0.9rem" fontStyle="italic" fontFamily="Poppins">{user.username}</Text>
                </Box>
            </Box>
            <Box display="flex" marginRight="1rem" marginTop="2rem">
              <Box w="2rem" fontSize="3xl"><BiLike /></Box>
              <Text fontWeight="bold" marginTop="0.2rem" fontSize="lg">{user.total_likes}</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default ImageCard