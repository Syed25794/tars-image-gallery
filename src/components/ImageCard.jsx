import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BiLike } from 'react-icons/bi';

const ImageCard = ({user,urls,description }) => {
  return (
    <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" transition="transform 0.5s" borderRadius="1rem 1rem 0rem 0rem" _hover={{cursor:"pointer",transform:"scale(1.05)",position:"relative","z-index":"3"}}>
        <Box>
            <Image borderRadius="1rem 1rem 0rem 0rem"  src={urls.regular} alt={description} />
        </Box>
        <Box h={["4rem","5rem","6rem"]} display="flex" justifyContent="space-between">
            <Box margin="0rem 0.5rem 0rem 0.5rem" display="flex">
                <Image m="15px 0px 0px 10px" w={["40px","50px","70px"]} h={["40px","50px","70px"]} borderRadius="50%" src={user.profile_image.medium} alt="Mountain" />
                <Box marginTop="0.5rem">
                  <Text m={["10px 0px 0px 5px","15px 0px 0px 10px"]} fontSize={["0.8rem","0.9rem","1rem"]} fontWeight="700" fontFamily="Montserrat">{user.first_name}</Text>
                  <Text m="0px 0px 0px 10px" fontSize={["0.7rem","0.8rem","0.9rem"]} fontStyle="italic" fontFamily="Poppins">{user.username}</Text>
                </Box>
            </Box>
            <Box display="flex" marginRight="1rem" marginTop={["1.4rem","1.5rem","2rem"]}>
              <Box w={["1.3rem","1.5rem","2rem"]} fontSize={["xl","2xl","3xl"]}><BiLike /></Box>
              <Text fontWeight="bold" marginTop={["0","0","0.2rem"]} fontSize={["md","md","lg"]}>{user.total_likes}</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default ImageCard