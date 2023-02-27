import { Box, Image, Text } from '@chakra-ui/react'

const LoadingImageComponent = () => {
  return (
    <Box m="auto" marginTop={["100px","120px","120px"]} display="flex" flexDirection="column" gap="2rem" w="25%">
        <Image src="./LoadingImage.gif" alt="Loading Image" />
        <Text>Loading some awesome Images...</Text>
    </Box>
  )
}

export default LoadingImageComponent